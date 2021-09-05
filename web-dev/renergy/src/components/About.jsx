function About() {
	return (
		<div
			className='w-screen h-64 flex justify-evenly items-center flex-col py-8'
			id='about'
		>
			<div className='font-bold text-xl my-3'>About the Project</div>
			<div className='w-3/4 text-center text-base'>
				This project started during the AI for Energy Hackathon that was hosted
				by Data Science Nigeria. Our solution integrates AI, IoT and other smart
				devices to solve Emission problems facing the community.
			</div>
		</div>
	);
}

export default About;
