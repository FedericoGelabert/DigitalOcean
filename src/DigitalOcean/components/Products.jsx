import Product from "../utilities/Product";

const Products = () => {
    return (
        <div className="container mx-auto xl:px-28 px-4">
            <div className="flex flex-col items-center text-center pb-16">
                <h3 className="font-bold font-epilogue text-4xl pb-4 text-do-blue-dark">A cloud for your entire journey</h3>
                <p className="text-do-gray-subtext font-inter lg: lg:w-3/6 w-5/6">DigitalOcean’s suite of products is designed to be with you on every step of your journey, whether you want to do it yourself or get help from the experts.</p>
                <a href="#" className="flex items-center font-jetbrain text-do-blue-light font-medium mt-8">See all products <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 ml-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg> </a>
            </div>
            <div className="flex flex-wrap">
                <Product />
            </div>
            <div className="text-center flex justify-center">
                <p className="text-do-gray-subtext text-xs font-normal font-inter lg:w-6/12 w-9/12 mt-12">*Redis is a registered trademark of Redis Ltd. Any rights therein are reserved to Redis Ltd. Any use by DigitalOcean is for referential purposes only and does not indicate any sponsorship, endorsement or affiliation between Redis and DigitalOcean.</p>
            </div>
        </div>
    )
}

export default Products;