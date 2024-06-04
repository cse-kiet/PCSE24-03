import React from 'react';
import CombustionEngine from '../pages/CombustionEngine/CombustionEngine';
import { Link } from 'react-router-dom';
const Sample = () => {
	return (
		<div style={{ backgroundColor: '#1F1627' }} className=" h-[100vh] flex flex-col items-center justify-center gap-5">
			<Link
				to="/"
				className="h-12 px-8 ml-12 text-base font-semibold tracking-wider text-white border rounded-full shadow-sm font- popins lg:mt-36 sm:mt-4 bg-red-50 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:shadow-lg flex items-center md:self-start"
			>
				Go back
			</Link>
			<div className="flex items-center justify-center">
				<CombustionEngine />
			</div>
		</div>
	);
};

export default Sample;
