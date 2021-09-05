import React from "react";

const members = [
	{
		name: "Mustapha Abdullahi",
		about:
			"Team Lead. Student of Computer Engineering at Ahmadu Bello University",
		stacks: ["Machine Learning", "Backend Development"],
		id: 1,
	},
	{
		name: "Abdullahi Yunus",
		about: "Student of Electrical Engineering at Ahmadu Bello University.",
		stacks: ["Machine Learning", "Full-Stack Development"],
		id: 2,
	},
	{
		name: "Shallom Micah",
		about: "Student of Computer Engineering at Ahmadu Bello University",
		stacks: ["Machine Learning", "NLP"],
		id: 3,
	},
	{
		name: "Abdulkareem Usman Adedayo",
		about:
			"Recent Graduate of University of Ibadan. Studied Petroleum Engineering",
		stacks: ["Research", "Data Science"],
		id: 4,
	},
	{
		name: "Rilwan Oluwaseun Ayoade",
		about:
			"Recent Graduate of University of Ibadan. Studied Agricultural and Environmental Engineering",
		stacks: ["Mathematical Modelling", "Data Analysis"],
		id: 5,
	},
];

function Members() {
	const menbersEntry =
		members &&
		members.map((member) => (
			<div
				className='max-w-sm rounded overflow-hidden shadow-lg h-2/5 w-3/4 md:w-2/4'
				key={member.id}
			>
				{/* <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> */}
				<div className='px-6 py-4'>
					<div className='font-bold text-xl mb-2'>{member.name}</div>
					<p className='text-gray-700 text-base'>{member.about}</p>
				</div>
				<div className='px-6 pt-4 pb-2'>
					{member.stacks &&
						member.stacks.map((stack) => (
							<span
								key={Math.random()}
								className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'
							>
								{stack}
							</span>
						))}
				</div>
			</div>
		));
	return (
		<div className='w-screen h-auto flex flex-col py-12' id='team'>
			<div className='font-bold text-center text-2xl'>Team</div>
			<div className='flex items-center justify-center flex-wrap '>
				{menbersEntry}
			</div>
		</div>
	);
}

export default Members;
