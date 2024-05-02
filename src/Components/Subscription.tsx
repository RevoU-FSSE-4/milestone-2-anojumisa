import React from "react";

const Subscription = () => {
	return (
		<div className="flex flex-col justify-between my-5">
			<h1 className="self-center text-2xl font-semibold whitespace-nowrap my-4 dark:text-black">
				AJ News
			</h1>
			<h2>Let's subscribe so you don't miss the latest updates!</h2>
			<div className="my-4">
				<form className="max-w-md mx-auto">
					<label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
						Search
					</label>
					<div className="relative">
						
						<input
							type="search"
							id="default-search"
							className="block w-full p-4 ps-10 text-sm text-gray-200 border border-gray-100 rounded-lg bg-gray-10 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Your email..."
							required
						/>
						<button
							type="submit"
							className="text-white absolute end-2.5 bottom-2.5 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-blue-800"
						>
							Subscribe
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Subscription;
