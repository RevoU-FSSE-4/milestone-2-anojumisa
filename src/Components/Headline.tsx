import React from "react";


const Headline = () => {
	return (
		<div className=" w-full mx-1 my-6 text-left bg-white rounded-xl shadow-md overflow-hidden md:w-full">
			<div className="md:flex">
				<div className="md:shrink-0">
					<img
						className="h-100 w-full object-cover md:h-full md:w-100"
						src="https://loremflickr.com/g/320/240/team"
					/>
				</div>
				<div className="p-8">
                    <h1 className="underline font-extrabold text-2xl text-red-700">Highlight of The Day</h1>
					<div className="uppercase tracking-wide text-l text-black font-semibold">
						Washington Post
					</div>
					<a
						href="#"
						className="block mt-1 text-3xl leading-tight font-medium text-black hover:underline"
					>
						Stormy Daniels's lawyer completes testimony in Trump's hush money trial
					</a>
					<p className="mt-2 text-slate-500 italic">
					Donald Trump’s criminal trial in Manhattan on Thursday reached Day 10.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Headline;
