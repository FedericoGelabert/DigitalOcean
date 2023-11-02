
const BannerTour = () => {
    return (
        <div className="container mx-auto flex justify-center mt-48 mb-32 xl:px-28">
            <div className="flex text-white relative lg:h-52 h-120 w-10/12 rounded-3xl"
             style={{ background: "rgb(20, 51, 214)", backgroundImage: "url('https://www.digitalocean.com/_next/static/media/banner-background.f302a2e4.svg')", backgroundRepeat: "no-repeat", backgroundPosition: "right bottom" }}>
                <div className="flex flex-col lg:justify-between py-8 lg:pl-16 pl-12">
                    <h4 className="text-3xl font-bold font-epilogue lg:pb-0 pb-5 w-5/6">Quick product tours</h4>
                    <p className="max-w-xl lg:pb-0 pb-5 w-11/12">Check out our brief product tours to see how simple, easy, and pleasant it is to use DigitalOcean's cloud hosting products.</p>
                    <a href="#" className="font-medium flex items-center font-jetbrain">Take a tour<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 ml-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default BannerTour;