

const BottomSignUp = () => {
    return (
        <div className="mt-32">
            <img src="/images/top-wave-blue.svg" alt="Divisor" className="w-full topwaveFilter" />
            <div className="bg-do-cyan">
                <div className="container mx-auto pt-16 pb-20 xl:px-28 px-4">
                    <div className="flex flex-col items-center text-center">
                        <h3 className="font-black font-epilogue text-4xl pb-2 text-do-blue-dark">Start building today</h3>
                        <p className="font-inter text-do-gray-subtext pb-5">Sign up now and you'll be up and running on DigitalOcean in just minutes.</p>
                        <button className="px-5 py-3 rounded-lg bg-white font-inter font-semibold hover:bg-gray-50 hover:duration-300">Sign up to get started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BottomSignUp;