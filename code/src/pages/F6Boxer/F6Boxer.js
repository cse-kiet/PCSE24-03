import React from 'react';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import F6BoxerQr from '../../assets/F6BoxerQR.jpg';
const Model = () => {
	const gltf = useLoader(GLTFLoader, '/f6_boxer_engine/scene.gltf');
	return (
		<>
			<primitive object={gltf.scene} scale={0.1} />
		</>
	);
};

export default function F6Boxer() {
	return (
		<>
			<div className=" py-14">
				<div className="md:grid md:grid-cols-2 md:mr-15 mr-1 sm:mx-4">
					<div className="w-full h-full px-4 outline-none cursor-pointer md:col-span-1 lg:block">
						<Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
							<ambientLight intensity={3} />
							<spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
							<Suspense fallback={null}>
								<Model />
								<Environment preset="city" />
							</Suspense>
							<OrbitControls autoRotate />
						</Canvas>
					</div>
					<div className="mt-5 md:mt-0 md:col-span-1">
						<div className="md:flex md:flex-col md:justify-center ">
							<h2 className="self-center mx-8 mb-4 text-5xl font-medium tracking-wide text-white font- popins">F6 Boxer</h2>

							<p className="self-center mx-8 text-xl font-medium tracking-wide text-justify text-white font- popins">
								A flat-six engine, also known as a horizontally opposed-six, is a six-cylinder piston engine with three cylinders on each side of a
								central crankshaft. The most common type of flat-six engine is the boxer-six engine, where each pair of opposed cylinders moves
								inwards and outwards at the same time.
							</p>

							<p className="self-center mx-8 text-xl tracking-wide text-justify text-white font- popins">
								To view the 3D model in AR, scan the QR code or click on the button below.
							</p>

							<div className=" pb-8 mx-8 flex items-center justify-center">
								<img className="flex p-6 text-6xl rounded-xl h-64 w-64 " src={F6BoxerQr} alt="QR" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
