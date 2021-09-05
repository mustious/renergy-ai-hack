import React from "react";
import { useRouter } from "next/router";

function Display() {
	const router = useRouter();
	return (
		<div className='display'>
			<aside className='p-4 w-1/2 h-full flex justify-center items-center flex-col'>
				<div className='font-bold text-2xl md:text-6xl'>Renergy</div>
				<div className='my-3 text-md md:text-xl text-center'>
					Rethinking Emission using Artificial Intelligence, IoT and smart
					devices
				</div>
				<button
					onClick={() => router.push("/forecast")}
					className='bg-gray-500 h-10 w-40 hover:bg-gray-800 hover:text-gray-200 px-2 font-bold text-white text-md rounded'
				>
					Try it
				</button>
			</aside>
		</div>
	);
}

export default Display;
