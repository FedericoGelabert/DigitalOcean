
const BannerSydney = () => {
    return (
        <div className="container mx-auto flex justify-center mt-48 mb-52">
            <div className="flex text-white relative h-96 w-9.5/12 rounded-3xl"
             style={{ background: "rgb(0, 44, 155)", backgroundImage: "url('https://www.digitalocean.com/_next/static/media/servers-plant-illustration-right.0fc693fd.svg')", backgroundRepeat: "no-repeat", backgroundPosition: "right bottom" }}>
                <div className="flex flex-col justify-between py-8 pl-16">
                    <h4 className="text-4xl font-bold">Deliver exceptional<br/> experiences with our newest<br/> data center in Sydney,<br/> Australia</h4>
                    <p className="max-w-xl">Businesses in Australia and New Zealand have trusted DigitalOcean's<br/> cloud computing platform to deploy and scale next-generation<br/> applications while providing a superior customer experience.</p>
                    <a href="#" className="font-medium flex items-center font-jetbrain">Deploy in Sydney <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 ml-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default BannerSydney;