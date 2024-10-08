"use client";

export default function App() {

    return (
        <div className="flex flex-col gap-8 justify-center items-start w-full mx-12">
            <div className="flex flex-col gap-6 justify-start items-start pt-12">
                <div className="w-[382px] h-[30px]"><p className="font-bold text-2xl text-primary-600">Bachelors of Computer Science</p></div>
                <button className="bg-primary-600 text-white font-semibold h-[38px] w-[150px] rounded-full text-sm px-3">View Roadmap</button>
            </div>
            <div className="flex flex-row justify-start items-center gap-6 w-full pt-4">
                <div className="flex flex-col justify-center items-center gap-6">
                    <div className="flex flex-col border-2 border-gray-400 w-[278px] h-[214px] rounded-3xl">
                        <p className="font-bold text-xl text-primary-600 px-8 py-4">Account info</p>
                    </div>
                    <div className="flex flex-col border-2 border-gray-400 w-[278px] h-[132px] rounded-3xl px-8 py-4">
                        <p className="font-bold text-xl text-primary-600 pb-3">Status</p>
                        <p className="text-primary-700 text-md font-semibold pb-2">Overall CGPA: 9.4</p>
                        <p className="text-primary-700 text-md font-semibold">Major CGPA: 8.3</p>
                    </div>
                    <div className="flex flex-col border-2 border-gray-400 w-[278px] h-[173px] px-8 py-4 rounded-3xl">
                        <p className="font-bold text-xl text-primary-600 pb-3">Progress</p>
                        <p className="text-primary-700 text-md font-semibold pb-2">Completed: 50%</p>
                        <p className="text-primary-700 text-md font-semibold pb-2">In-Progress: 20%</p>
                        <p className="text-primary-700 text-md font-semibold">Incomplete: 30%</p>
                    </div>
                </div>
                <div className="flex flex-col border-2 border-gray-400 w-[482px] h-[563px] rounded-3xl">
                    <p className="font-bold text-xl text-primary-600 px-8 py-4">Courses</p>
                </div>
                <div className="flex flex-col border-2 border-gray-400 w-[384px] h-[563px] rounded-3xl">
                    <p className="font-bold text-xl text-primary-600 px-8 py-4">Course Info</p>
                </div>
            </div>
        </div>
    );
}
