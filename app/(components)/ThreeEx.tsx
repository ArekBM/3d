// components/ThreeScene.tsx
'use-client'
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreePage: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;

    if (!mount) return;

    // Set up scene
    const scene = new THREE.Scene();

    // Set up camera
    const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000);
    camera.position.z = 5;

    // Set up renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    // Add a cube
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0xFFC0CB });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // Clean up on unmount
    return () => {
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '100vh' }} />;
};

export default ThreePage;
