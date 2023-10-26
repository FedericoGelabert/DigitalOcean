
const Reviews = () => {
    return (
        <div className="relative">
            <img src="https://www.digitalocean.com/_next/static/media/top-wave-blue-6.1b592f40.svg" alt="Divisor" className="w-full" />
            <div className="bg-do-reviews">
                <div className="container mx-auto relative">
                    <img src="https://www.digitalocean.com/_next/static/media/garnish-blue.26799a4e.svg" alt="Granish blue" className="absolute" style={{ zIndex: '10', top: '100px', left: '150px' }}/>
                    <img src="https://www.digitalocean.com/_next/static/media/garnish-2-blue.5aa0f894.svg" alt="Granish2 blue" className="absolute" style={{ zIndex: '10', top: '160px', right: '100px' }} />
                    <div className="flex justify-center">
                        <h3 className="text-4xl text-center font-bold font-epilogue text-do-blue-dark pt-16">How real businesses use DigitalOcean to <br /> accelerate their growth</h3>
                    </div>
                    <div className="flex justify-center py-20">
                        <div className="text-white w-5.5/12 h-88 bg-do-blue-light p-8 flex flex-col justify-between rounded-3xl relative z-50 mt-16">
                            <div className="flex justify-between">
                                <img src="https://www.digitalocean.com/_next/static/media/h-grant-designs-logo.eec0d013.png" alt="H Grant Designs Logo" className="w-40 object-contain" />
                                <div className="flex gap-4">
                                    <button className="py-3 px-6 rounded-lg bg-do-gray-o hover:bg-do-gray-oh hover:duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                                    </svg>
                                    </button>
                                    <button className="py-3 px-6 rounded-lg bg-do-gray-o hover:bg-do-gray-oh hover:duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                    </svg></button>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-2xl leading-6 font-medium font-epilogue tracking-tight">How H Grant Design uses Cloudways managed<br /> hosting to manage client websites.</h4>
                                <p className="tracking-tight">“For me, support is key. If a company provides amazing support, that goes above anything else. Cloudways offers fantastic support. The easy installation of WordPress is also really impressive. I can get a new install done within 2 minutes, and it 'just works.'”</p>
                            </div>
                            <div>
                                <button className="flex items-center font-jetbrain font-semibold">Read the interview <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 ml-2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                                </button>
                            </div>
                        </div>
                        <div className="relative right-16">
                            <img src="https://www.digitalocean.com/_next/static/media/h-grant-designs-card.4c8bc703.png" alt="" className="h-96 rounded-3xl" />
                        </div>
                    </div>
                </div>
            </div>
            <img src="https://www.digitalocean.com/_next/static/media/top-wave-blue-6.1b592f40.svg" alt="Divisor" className="w-full rotate-180 "/>
        </div>
    )
}


export default Reviews;