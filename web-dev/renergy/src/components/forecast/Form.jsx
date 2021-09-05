import React from "react";

function Form() {
	return (
		<div className='w-screen flex justify-center items-center absolute bottom-0'>
			<form className='w-full max-w-sm'>
				<div className='flex w-full justify-evenly items-center py-2'>
					<select className='block w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'>
						<option value='0'>Next 5hrs</option>
						<option value='1'>Next 12hrs</option>
						<option value='2'>Next 24hrs</option>
					</select>
					<button
						className='flex-shrink-0 bg-indigo-500 hover:bg-green-700 border-teal-500 hover:border-teal-700 text-sm border-1 text-white py-1 px-1 rounded ml-2'
						type='button'
					>
						Forecast
					</button>
				</div>
			</form>
		</div>
	);
}

export default Form;
