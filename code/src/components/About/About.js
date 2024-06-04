import AboutImg from '../../assets/about.png';

export default function About() {
	return (
		<div className="font-popins " style={{ backgroundColor: '#1F1627' }} id="about">
			<div className="grid place-content-center text-center ">
				<div className="text-white text-5xl font-extrabold">About</div>
				<div>Our Vision</div>
			</div>

			<div className="font-popins md:grid md:grid-cols-2 pt-8 px-10 xl:px-56 pb-8 flex justify-center flex-col items-center">
				<div className="  xl:flex xl:justify-center ">
					<img src={AboutImg} className="w-100 xl:w-96 rounded-md" alt="" />
				</div>
				<div className="md:ml-10 xl:ml-0">
					<div className="w-full  xl:pr-40 my-4">
						AutoSmart is an AR-based WebApp, that is completely designed for Engineering students and Engineering Working professionals to Experience
						the feel of Real-time 3D models of Engines and Spare parts of any vehicle, with the inclusion of responsive and spectacular visual arts,
						that makes E-learning easy.
					</div>
					<div className=" text-gray-400 leading-8">
						Have your very own Test Drive Experience <br />
						<a
							href="https://vr.ff.com/us/"
							className=" text-white hover:text-blue-400 transition ease-in hover:border-b delay-150 border-solid border-blue-400 duration-500"
						>
							Take Drive ▶
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
