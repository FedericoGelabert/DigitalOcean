
const BannerNews = () => {
    return (
        <div className="container mx-auto flex justify-center mt-120 mb-52">
            <div className="flex text-white relative h-72 w-10/12 rounded-2xl"
             style={{ background: "rgb(48, 0, 145)", backgroundImage: "url('https://www.digitalocean.com/_next/static/media/do-gtm-cta-text-desktop.49ae262a.svg')", backgroundRepeat: "no-repeat", backgroundPosition: "right" }}>
                <div className="flex flex-col justify-between py-8 pl-16">
                    <h4 className="text-2xl font-bold font-epilogue w-5/6">What's new and what's next at DigitalOcean</h4>
                    <p className="max-w-xl w-5/6">Read all about our latest product enhancements, starting with Managed Kafka, more Droplet choices, GPU's for AI/ML apps, and get a sneak peek at the exciting product updates we’re planning this year and beyond.</p>
                    <a href="#" className="font-semibold flex items-center">Start reading <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 ml-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default BannerNews;