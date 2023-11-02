
const HamburgerMenu = () => {
    return (
        <div className="w-full fixed z-40 mb-8 bg-white mt-16">
            <div className="flex mt-5">
                <div className="w-full">
                    <ul className="flex flex-col font-inter font-medium">
                        <a href="#" className="flex items-center py-3 border-b mx-5 justify-between">Products <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-gray-600 -rotate-90">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg></a>
                        <a href="#" className="flex items-center py-3 border-b mx-5 justify-between">Solutions <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-gray-600 -rotate-90">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg></a>
                        <a href="#" className="flex items-center py-3 border-b mx-5 justify-between">Developers <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-gray-600 -rotate-90">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg></a>
                        <a href="#" className="flex items-center py-3 border-b mx-5 justify-between">Businesses <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-gray-600 -rotate-90">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg></a>
                        <a href="#" className="flex items-center py-3 border-b mx-5 justify-between">Pricing <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-gray-600 -rotate-90">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg></a>
                    </ul>
                    <div className="flex mt-6 sm:hidden">
                        <button className="w-1/2 py-2 border mx-4 rounded-xl font-medium border-black hover:bg-do-gray hover:duration-300">Log in</button>
                        <button className="w-1/2 py-2 border-black mx-4 rounded-xl font-medium bg-do-blue-medium text-white hover:bg-do-blue-mediumdark hover:duration-300">Sign up</button> 
                    </div>
                    <div className="flex flex-col py-4 gap-4 font-inter my-6">
                        <button className="py-2 border border-do-blue-light mx-4 rounded-xl font-medium text-do-blue-light">Blog</button>
                        <button className="py-2 border border-black mx-4 rounded-xl font-medium hover:border-do-blue-light hover:text-do-blue-light">Docs</button>
                        <button className="py-2 border border-black mx-4 rounded-xl font-medium hover:border-do-blue-light hover:text-do-blue-light">Get Support</button>
                        <button className="py-2 border border-black mx-4 rounded-xl font-medium hover:border-do-blue-light hover:text-do-blue-light">Sales</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HamburgerMenu;