import { useState } from "react";
import Link from "next/link";

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<nav className='bg-white shadow dark:bg-gray-800 z-10 w-full fixed'>
				<div className='container px-6 py-3 mx-auto md:flex'>
					<div className='flex items-center justify-between'>
						<div>
							<a
								className='text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300'
								href='#a'
							>
								Renergy
							</a>
						</div>

						{/* <!-- Mobile menu button --> */}
						<div className='flex md:hidden'>
							<button
								type='button'
								className='text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400'
								aria-label='toggle menu'
								onClick={() => setIsOpen(!isOpen)}
							>
								<svg viewBox='0 0 24 24' className='w-6 h-6 fill-current'>
									<path
										fillRule='evenodd'
										d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'
									></path>
								</svg>
							</button>
						</div>
					</div>

					{/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
					<div
						className={`w-full md:flex md:items-center md:justify-between md:block ${
							isOpen ? "block" : "hidden"
						}`}
					>
						<div className='flex flex-col px-2 py-3 -mx-4 md:flex-row md:mx-0 md:py-0'>
							<Link href='/'>
								<a className='px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2'>
									Home
								</a>
							</Link>
							<a
								href='#about'
								className='px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2'
							>
								About
							</a>
							<a
								href='#team'
								className='px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2'
							>
								Team
							</a>
							<a
								href='#footer'
								className='px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2'
							>
								Contact
							</a>
						</div>

						<div className='relative'>
							{/* <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
								<svg
									className='w-5 h-5 text-gray-400'
									viewBox='0 0 24 24'
									fill='none'
								>
									<path
										d='M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z'
										stroke='currentColor'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									></path>
								</svg>
							</span> */}

							{/* <input
								type='text'
								className='w-full py-3 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
								placeholder='Search'
							/> */}
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
