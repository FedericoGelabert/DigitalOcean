
const BannerTour = () => {
    return (
        <div className="container mx-auto flex justify-center mt-48 mb-32">
            <div className="flex text-white relative h-56 w-10/12 rounded-3xl"
             style={{ background: "rgb(20, 51, 214)", backgroundImage: "url('https://www.digitalocean.com/_next/static/media/banner-background.f302a2e4.svg')", backgroundRepeat: "no-repeat", backgroundPosition: "right bottom" }}>
                <div className="flex flex-col justify-between py-8 pl-16">
                    <h4 className="text-3xl font-bold font-epilogue">Quick product tours</h4>
                    <p className="max-w-xl">Check out our brief product tours to see how simple, easy, and pleasant it is to use DigitalOcean's cloud hosting products.</p>
                    <a href="#" className="font-medium flex items-center font-jetbrain">Take a tour<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 ml-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default BannerTour;