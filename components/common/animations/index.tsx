import { ResizeObserver } from '@juggle/resize-observer';
import * as THREE from 'three';
import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

// components
import { Effects } from './Effect';

// NON-INTERACTIVE VERSION

// Equation from https://dsp.stackexchange.com/a/56529
// Visualized here https://www.desmos.com/calculator/uakymahh4u
const roundedSquareWave = (t, delta, a, f) => {
  return ((2 * a) / Math.PI) * Math.atan(Math.sin(2 * Math.PI * t * f) / delta);
};

function Dots() {
  const ref = useRef(null);

  const { vec, transform, positions, distances } = useMemo(() => {
    const vec = new THREE.Vector3();
    const transform = new THREE.Matrix4();

    const positions = [...Array(10000)].map((_, i) => {
      const position = new THREE.Vector3();
      position.x = (i % 100) - 50;
      position.y = Math.floor(i / 100) - 50;

      position.y += (i % 2) * 0.5;

      position.x += Math.random() * 0.3;
      position.y += Math.random() * 0.3;
      return position;
    });

    const right = new THREE.Vector3(1, 0, 0);
    const distances = positions.map((pos) => {
      return pos.length() + Math.cos(pos.angleTo(right) * 8) * 0.5;
    });
    return { vec, transform, positions, distances };
  }, []);

  useFrame(({ clock }) => {
    for (let i = 0; i < 10000; ++i) {
      const dist = distances[i];
      const t = clock.elapsedTime - dist / 25;

      const wave = roundedSquareWave(t, 0.15 + (0.2 * dist) / 72, 0.4, 1 / 3.8);

      vec.copy(positions[i]).multiplyScalar(wave + 1.3);

      transform.setPosition(vec);

      ref.current.setMatrixAt(i, transform);
    }
    ref.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={ref} args={[null, null, 10000]}>
      <circleBufferGeometry args={[0.15]} />
      <meshBasicMaterial />
    </instancedMesh>
  );
}

export default function App() {
  return (
    <Canvas
      orthographic
      camera={{ zoom: 20 }}
      // @ts-ignore
      colorManagement={false}
      resize={{ polyfill: ResizeObserver }}
    >
      <color attach="background" args={['black']} />
      <Effects />
      <Dots />
    </Canvas>
  );
}
