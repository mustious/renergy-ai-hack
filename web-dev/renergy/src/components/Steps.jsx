import Image from "next/image";
import StepsImg from "../../public/assets/steps.png";

function Steps() {
	return (
		<div className='w-sreen h-auto flex flex-col justify-center items-center  bg-gray-500'>
			<div className='my-5 text-3xl font-bold'>How the System works</div>
			<Image src={StepsImg} alt='Use case' className='' />
		</div>
	);
}

export default Steps;
