
const BannerSydney = () => {
    return (
        <div className="container mx-auto flex justify-center mt-48 mb-52 xl:px-28 lg:px-4 px-0">
            <div className="flex text-white relative lg:h-96 md:h-110 h-180 w-10/12 rounded-3xl"
             style={{ background: "rgb(0, 44, 155)", backgroundImage: "url('https://www.digitalocean.com/_next/static/media/servers-plant-illustration-right.0fc693fd.svg')", backgroundRepeat: "no-repeat", backgroundPosition: "right bottom" }}>
                <div className="flex flex-col lg:justify-between py-8 lg:pl-16 mob:pl-12 pl-8">
                    <h4 className="font-bold font-epilogue lg:w-7/12 mob:w-10/12 w-11/12 lg:text-4xl text-2xl lg:pb-0 pb-4">Deliver exceptional experiences with our newest data center in Sydney, Australia</h4>
                    <p className="max-w-xl lg:pb-0 pb-4 lg:w-8/12 w-11/12">Businesses in Australia and New Zealand have trusted DigitalOcean's cloud computing platform to deploy and scale next-generation applications while providing a superior customer experience.</p>
                    <a href="#" className="font-medium flex items-center font-jetbrain">Deploy in Sydney today<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 ml-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default BannerSydney;