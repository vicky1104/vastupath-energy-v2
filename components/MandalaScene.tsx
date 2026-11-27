"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const GOLD = new THREE.Color("#e9d5a6");
const SAFFRON = new THREE.Color("#e2a47f");

/** 9x9 Vastu Purusha grid with a glowing Brahmasthan (centre). */
function PurushaGrid() {
  const geo = useMemo(() => {
    const pts: number[] = [];
    const s = 1.8, n = 9, step = (s * 2) / n;
    for (let i = 0; i <= n; i++) {
      const v = -s + i * step;
      pts.push(v, -s, 0, v, s, 0, -s, v, 0, s, v, 0);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.Float32BufferAttribute(pts, 3));
    return g;
  }, []);
  const glow = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (glow.current) (glow.current.material as THREE.MeshBasicMaterial).opacity = 0.2 + Math.sin(clock.elapsedTime * 1.2) * 0.08;
  });
  return (
    <group>
      <lineSegments geometry={geo}>
        <lineBasicMaterial color={GOLD} transparent opacity={0.45} />
      </lineSegments>
      {/* Brahmasthan: the centre 3x3 */}
      <mesh ref={glow}>
        <planeGeometry args={[1.2, 1.2]} />
        <meshBasicMaterial color={SAFFRON} transparent opacity={0.35} blending={THREE.AdditiveBlending} depthWrite={false} />
      </mesh>
      <mesh>
        <circleGeometry args={[0.22, 48]} />
        <meshBasicMaterial color={"#fbf3df"} />
      </mesh>
    </group>
  );
}

/** Eight lotus petals = eight directions. */
function Lotus() {
  const ref = useRef<THREE.Group>(null);
  const shape = useMemo(() => {
    const s = new THREE.Shape();
    s.moveTo(0, 0);
    s.bezierCurveTo(0.42, 0.5, 0.32, 1.25, 0, 1.55);
    s.bezierCurveTo(-0.32, 1.25, -0.42, 0.5, 0, 0);
    return s;
  }, []);
  const outline = useMemo(
    () => new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(shape.getPoints(24)), new THREE.LineBasicMaterial({ color: GOLD, transparent: true, opacity: 0.7 })),
    [shape]
  );
  useFrame((_, d) => { if (ref.current) ref.current.rotation.z -= d * 0.06; });
  return (
    <group ref={ref}>
      {Array.from({ length: 8 }, (_, i) => (
        <group key={i} rotation={[0, 0, (i * Math.PI) / 4]}>
          <mesh position={[0, 1.95, 0.02]}>
            <shapeGeometry args={[shape]} />
            <meshBasicMaterial color={SAFFRON} transparent opacity={0.08} side={THREE.DoubleSide} depthWrite={false} blending={THREE.AdditiveBlending} />
          </mesh>
          <primitive object={outline.clone()} position={[0, 1.95, 0.03]} />
        </group>
      ))}
    </group>
  );
}

/** Two overlapping squares form the eight-pointed star; rings + direction orbs around them. */
function Rings() {
  const a = useRef<THREE.Group>(null);
  const b = useRef<THREE.Group>(null);
  const orbs = useRef<THREE.Group>(null);
  useFrame(({ clock }, d) => {
    if (a.current) a.current.rotation.z += d * 0.08;
    if (b.current) b.current.rotation.z -= d * 0.05;
    if (orbs.current)
      orbs.current.children.forEach((o, i) => {
        o.position.z = Math.sin(clock.elapsedTime * 1.4 + i) * 0.12;
        const s = 1 + Math.sin(clock.elapsedTime * 2 + i * 0.8) * 0.18;
        o.scale.setScalar(s);
      });
  });
  const square = (r: number, rot: number) => {
    const pts = [0, 1, 2, 3, 4].map((i) => new THREE.Vector3(Math.cos(rot + (i * Math.PI) / 2) * r, Math.sin(rot + (i * Math.PI) / 2) * r, 0));
    return new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), new THREE.LineBasicMaterial({ color: GOLD, transparent: true, opacity: 0.55 }));
  };
  const sq1 = useMemo(() => square(2.55, Math.PI / 4), []);
  const sq2 = useMemo(() => square(2.55, 0), []);
  return (
    <>
      <group ref={a}>
        <primitive object={sq1} />
        <primitive object={sq2} />
      </group>
      <group ref={b}>
        {[3.05, 3.3].map((r, i) => (
          <mesh key={r}>
            <torusGeometry args={[r, i ? 0.006 : 0.014, 8, 160]} />
            <meshBasicMaterial color={GOLD} transparent opacity={i ? 0.4 : 0.8} />
          </mesh>
        ))}
        <group ref={orbs}>
          {Array.from({ length: 8 }, (_, i) => {
            const ang = (i * Math.PI) / 4;
            return (
              <mesh key={i} position={[Math.cos(ang) * 3.05, Math.sin(ang) * 3.05, 0]}>
                <sphereGeometry args={[i % 2 ? 0.06 : 0.1, 16, 16]} />
                <meshBasicMaterial color={i % 2 ? GOLD : SAFFRON} />
              </mesh>
            );
          })}
        </group>
      </group>
    </>
  );
}

/** Slowly drifting motes of light. */
function Dust({ count = 700 }) {
  const ref = useRef<THREE.Points>(null);
  const geo = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 1.5 + Math.random() * 3.5;
      const t = Math.random() * Math.PI * 2;
      p[i * 3] = Math.cos(t) * r;
      p[i * 3 + 1] = Math.sin(t) * r;
      p[i * 3 + 2] = (Math.random() - 0.5) * 3;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(p, 3));
    return g;
  }, [count]);
  useFrame((_, d) => { if (ref.current) ref.current.rotation.z += d * 0.025; });
  return (
    <points ref={ref} geometry={geo}>
      <pointsMaterial size={0.035} color={"#f0ddb0"} transparent opacity={0.55} depthWrite={false} blending={THREE.AdditiveBlending} sizeAttenuation />
    </points>
  );
}

function Rig({ children }: { children: React.ReactNode }) {
  const g = useRef<THREE.Group>(null);
  useFrame(({ pointer, clock }) => {
    if (!g.current) return;
    const tx = -0.42 + pointer.y * 0.18;
    const ty = pointer.x * 0.25 + Math.sin(clock.elapsedTime * 0.3) * 0.05;
    g.current.rotation.x += (tx - g.current.rotation.x) * 0.05;
    g.current.rotation.y += (ty - g.current.rotation.y) * 0.05;
  });
  return <group ref={g}>{children}</group>;
}

export default function MandalaScene() {
  return (
    <Canvas camera={{ position: [0, 0, 8.6], fov: 45 }} dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
      <Rig>
        <PurushaGrid />
        <Lotus />
        <Rings />
        <Dust />
      </Rig>
    </Canvas>
  );
}
