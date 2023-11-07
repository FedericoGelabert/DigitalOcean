
const BannerNews = () => {
    return (
        <div className="container mx-auto flex justify-center lg:mt-130 sm:mt-200 mt-250 mb-52 xl:px-28 px-4">
            <div className="flex text-white relative lg:h-72 h-150 w-11/12 rounded-2xl bg-bottom"
             style={{ background: "rgb(48, 0, 145)", backgroundImage: "url('/images/BannerNews.svg')", backgroundRepeat: "no-repeat", backgroundPosition: "right bottom"}}>
                <div className="flex flex-col lg:justify-between py-8 lg:pl-16 mob:pl-12 pl-8">
                    <h4 className="text-2xl font-bold font-epilogue w-5/6 pb-3">What's new and what's next at DigitalOcean</h4>
                    <p className="max-w-xl w-5/6 pb-3">Read all about our latest product enhancements, starting with Managed Kafka, more Droplet choices, GPU's for AI/ML apps, and get a sneak peek at the exciting product updates we’re planning this year and beyond.</p>
                    <a href="#" className="font-semibold flex items-center">Start reading <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 ml-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default BannerNews;