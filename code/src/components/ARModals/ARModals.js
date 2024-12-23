import { Link } from 'react-router-dom';
import CombustionEngineImg from '../../assets/CombustionEngine.jpeg';
import F6BoxerImg from '../../assets/f6boxer.jpg';
import TurbofanImg from '../../assets/turbofan.jpeg';
import V8Img from '../../assets/v8.jpeg';

export default function ARModels() {
	return (
		<div className="font-popins" style={{ backgroundColor: '#1F1627' }} id="armodels">
			<div className="grid place-content-center text-center">
				<div className="text-white text-5xl font-extrabold">AR Models</div>
				<div>
					<Link to="/models3d" className=" text-blue-400 hover:text-blue-200 duration-200 ">
						View AR Models ➡
					</Link>
				</div>
			</div>

			<div className="flex flex-wrap flex-col-2 justify-around w-full px-16 py-8">
				<Link to="/combustion">
					<div className="m-8">
						<div className="w-64 h-64 cursor-pointer transition duration-500 transform hover:scale-105">
							<img className="pb-8 border-4 bg-white border-indigo-800 rounded-lg" alt="" src={CombustionEngineImg} />
							<div className="grid place-content-center mx-1 -mt-8 text-xl font-semibold text-gray-900 bg-homeImg font-sourceSerifPro">
								Combustion Engine
							</div>
						</div>
					</div>
				</Link>

				<Link to="/f6boxer">
					<div className="m-8">
						<div className="w-64 h-64 cursor-pointer transition duration-500 transform hover:scale-105">
							<img className="pb-8 border-4 bg-white border-indigo-800 rounded-lg" alt="" src={F6BoxerImg} />
							<div className="grid place-content-center mx-1 -mt-8 text-xl font-semibold text-gray-900 bg-homeImg font-sourceSerifPro">F6 Boxer</div>
						</div>
					</div>
				</Link>

				<Link to="/turbofan">
					<div className="m-8">
						<div className="w-64 h-64 cursor-pointer transition duration-500 transform hover:scale-105">
							<img className="pb-8 border-4 bg-white border-indigo-800 rounded-lg" alt="" src={TurbofanImg} />
							<div className="grid place-content-center mx-1 -mt-8 text-xl font-semibold text-gray-900 bg-homeImg font-sourceSerifPro">Turbofan</div>
						</div>
					</div>
				</Link>

				<Link to="/v8pontic">
					<div className="m-8">
						<div className="w-64 h-64 cursor-pointer transition duration-500 transform hover:scale-105">
							<img className="pb-8 border-4 bg-white border-indigo-800 rounded-lg" alt="" src={V8Img} />
							<div className="grid place-content-center mx-1 -mt-8 text-xl font-semibold text-gray-900 bg-homeImg font-sourceSerifPro">
								Pontiac V8 engine
							</div>
						</div>
					</div>
				</Link>
			</div>
		</div>
	);
}
