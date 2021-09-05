function Bot({ isopen }) {
	return (
		<div className='absolute z-9 bottom-0 right-0 p-6'>
			<div
				onClick={isopen}
				className='text-lg font-bold cursor-pointer text-green-600 hover:text-red-900'
			>
				X
			</div>
			<iframe
				height='430'
				width='350'
				src='https://bot.dialogflow.com/7c4c7c07-cbe8-46e0-ae02-61c850244cc9'
			></iframe>
		</div>
	);
}

export default Bot;
