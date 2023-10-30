

const BottomSignUp = () => {
    return (
        <div className="mt-32 ">
            <img src="https://www.digitalocean.com/_next/static/media/top-wave-blue-6.1b592f40.svg" alt="Divisor" className="w-full topwaveFilter" />
            <div className="bg-do-cyan">
                <div className="container mx-auto pt-20 pb-16">
                    <div className="flex flex-col items-center">
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