import { Link } from 'react-router-dom';
import CombustionEngine from '../CombustionEngine/CombustionEngine';
import F6Boxer from '../F6Boxer/F6Boxer';
import Turbofan from '../Turbofan/Turbofan';
import V8Pontic from '../V8Pontiac/V8Pontiac';

export default function Models3D() {
	return (
		<div style={{ backgroundColor: '#1F1627' }} className="pt-1">
			<Link
				to="/"
				className="h-12 w-max px-8 ml-12 text-base font-semibold tracking-wider text-white border rounded-full shadow-sm font- popins lg:mt-36 sm:mt-4 bg-red-50 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:shadow-lg flex items-center md:self-start"
			>
				Go back
			</Link>
			<CombustionEngine />
			<F6Boxer />
			<Turbofan />
			<V8Pontic />
		</div>
	);
}
