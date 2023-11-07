
const Reviews = () => {
    return (
        <div className="relative">
            <img src="/images/top-wave-blue.svg" alt="Divisor" className="w-full" />
            <div className="bg-do-reviews">
                <div className="container mx-auto relative xl:px-28 px-4">
                    <img src="/images/garnish-blue.svg" alt="Granish blue" className="absolute z-10 xl:top-24 top-36 xl:left-36 hidden md:block"/>
                    <img src="/images/garnish-2-blue.svg" alt="Granish2 blue" className="absolute z-30 lg:top-40 top-180 first-letter:xl:right-24 right-10 hidden md:block"/>
                    <div className="flex justify-center">
                        <h3 className="text-4xl text-center font-bold font-inter text-do-blue-dark pt-16 md:w-4/6 w-6/6">How real businesses use DigitalOcean to accelerate their growth</h3>
                    </div>
                    <div className="flex justify-center md:py-20 py-20 pt-0 lg:flex-row flex-col gap-y-8 lg:gap-y-0 items-center">
                        <div className="text-white lg:w-8/12 xl:w-6/12 w-12/12 mob:h-110 lg:h-96 h-140 bg-do-blue-light p-8 flex flex-col justify-between rounded-3xl relative z-10 mt-16">
                            <div className="flex justify-between mob:flex-row flex-col">
                                <img src="/images/h-grant-designs-logo.png" alt="H Grant Designs Logo" className="w-40 object-contain" />
                                <div className="mob:flex gap-4 hidden">
                                    <button className="py-3 px-6 rounded-lg bg-do-gray-o hover:bg-do-gray-oh hover:duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                                    </svg>
                                    </button>
                                    <button className="py-3 px-6 rounded-lg bg-do-gray-o hover:bg-do-gray-oh hover:duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                    </svg></button>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-2xl leading-6 font-medium font-epilogue tracking-tight">How H Grant Design uses Cloudways managed hosting to manage client websites.</h4>
                                <p className="tracking-tight w-11/12">“For me, support is key. If a company provides amazing support, that goes above anything else. Cloudways offers fantastic support. The easy installation of WordPress is also really impressive. I can get a new install done within 2 minutes, and it 'just works.'”</p>
                            </div>
                            <div>
                                <button className="flex items-center font-jetbrain font-semibold">Read the interview <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 ml-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                                </button>
                            </div>
                        </div>
                        <div className="relative lg:right-16 right-0 ">
                            <img src="/images/h-grant-designs-card.png" alt="" className="xl:h-96 rounded-3xl"/>
                        </div>
                    </div>
                </div>
            </div>
            <img src="/images/top-wave-blue.svg" alt="Divisor" className="w-full rotate-180 align-bottom block bottom-0.4 relative"/>
        </div>
    )
}


export default Reviews;