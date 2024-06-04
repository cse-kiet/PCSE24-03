import HeroImg from '../../assets/engine.png';
import { Link } from 'react-scroll';

export default function Hero() {
	return (
		<div
			className="font-popins flex flex-col justify-center items-center lg:grid md:grid-cols-2 md:pt-48 px-16 md:px-auto lg:px-56 pb-8 pt-10  "
			id="home"
			style={{ backgroundColor: '#1F1627' }}
		>
			<div className="">
				<div className="text-white text-5xl font-extrabold">
					Making Engineering,
					<br />a Reality for You
				</div>
				<div className="w-64 my-4">Lets help discover the dream of every engineering student</div>

				<Link to="armodels">
					<button className="p-4 my-4 text-base font-semibold tracking-wider text-white border rounded-2xl shadow-sm font- popins md:w-44 bg-purple-800 hover:shadow-lg ">
						Get Started
					</button>
				</Link>
			</div>
			<div className=" mt-10">
				<img src={HeroImg} alt="" className=" sm:w-[500px] sm:h-[300px]" />
			</div>
		</div>
	);
}
