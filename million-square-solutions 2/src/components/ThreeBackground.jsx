import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const animationIdRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    sceneRef.current = scene;
    rendererRef.current = renderer;

    // Create floating geometric shapes
    const geometries = [
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.SphereGeometry(0.5, 32, 32),
      new THREE.ConeGeometry(0.5, 1, 8),
      new THREE.OctahedronGeometry(0.7),
    ];

    const materials = [
      new THREE.MeshBasicMaterial({ 
        color: 0x00D4FF, 
        wireframe: true,
        transparent: true,
        opacity: 0.6
      }),
      new THREE.MeshBasicMaterial({ 
        color: 0x6B46C1, 
        wireframe: true,
        transparent: true,
        opacity: 0.4
      }),
      new THREE.MeshBasicMaterial({ 
        color: 0x9333EA, 
        wireframe: true,
        transparent: true,
        opacity: 0.5
      }),
      new THREE.MeshBasicMaterial({ 
        color: 0x10B981, 
        wireframe: true,
        transparent: true,
        opacity: 0.3
      }),
    ];

    const meshes = [];
    
    // Create multiple floating objects
    for (let i = 0; i < 15; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const material = materials[Math.floor(Math.random() * materials.length)];
      const mesh = new THREE.Mesh(geometry, material);
      
      // Random positioning
      mesh.position.x = (Math.random() - 0.5) * 20;
      mesh.position.y = (Math.random() - 0.5) * 20;
      mesh.position.z = (Math.random() - 0.5) * 20;
      
      // Random rotation
      mesh.rotation.x = Math.random() * Math.PI;
      mesh.rotation.y = Math.random() * Math.PI;
      mesh.rotation.z = Math.random() * Math.PI;
      
      // Store initial position for floating animation
      mesh.userData = {
        initialY: mesh.position.y,
        floatSpeed: 0.01 + Math.random() * 0.02,
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.02,
          y: (Math.random() - 0.5) * 0.02,
          z: (Math.random() - 0.5) * 0.02,
        }
      };
      
      scene.add(mesh);
      meshes.push(mesh);
    }

    // Create particle system
    const particleCount = 100;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 50;
      particlePositions[i + 1] = (Math.random() - 0.5) * 50;
      particlePositions[i + 2] = (Math.random() - 0.5) * 50;
    }
    
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x00D4FF,
      size: 0.1,
      transparent: true,
      opacity: 0.6,
    });
    
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Camera position
    camera.position.z = 10;

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);
      
      // Animate meshes
      meshes.forEach((mesh, index) => {
        // Floating animation
        mesh.position.y = mesh.userData.initialY + Math.sin(Date.now() * mesh.userData.floatSpeed + index) * 2;
        
        // Rotation animation
        mesh.rotation.x += mesh.userData.rotationSpeed.x;
        mesh.rotation.y += mesh.userData.rotationSpeed.y;
        mesh.rotation.z += mesh.userData.rotationSpeed.z;
      });
      
      // Animate particles
      particles.rotation.y += 0.001;
      
      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      if (!camera || !renderer) return;
      
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose of Three.js objects
      geometries.forEach(geometry => geometry.dispose());
      materials.forEach(material => material.dispose());
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
      style={{ zIndex: -1 }}
    />
  );
};

export default ThreeBackground;

