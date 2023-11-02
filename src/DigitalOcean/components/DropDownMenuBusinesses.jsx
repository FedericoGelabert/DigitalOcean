import DropDownMenuLinks from "../utilities/DropDownMenuLinks";


const DropDownMenuBusinesses = () => {
    return (
        <div className="w-full fixed z-20 mb-8 bg-white" id="DDMenuProducts">
            <div className="flex mt-5">
                <div className="w-1/3 bg-gray-50 pl-28 pt-8 pb-16 flex flex-col text-gray-600 font-inter">
                    <h4 className="dropDownMenuTitles ml-3">GROW YOUR BUSINESS</h4>
                    <DropDownMenuLinks
                        dropMenuTitle="The Wave"
                        dropMenuP="Content to level up your business."
                    />
                    <DropDownMenuLinks
                        dropMenuTitle="Find a partner"
                        dropMenuP="Work with a partner to get up and running in the cloud."
                    />
                    <DropDownMenuLinks
                        dropMenuTitle="Become a partner"
                        dropMenuP="Join our Partner Pod to connect with SMBs and startups like yours."
                    />
                    <DropDownMenuLinks
                        dropMenuTitle="UGURUS"
                        dropMenuP="Elite training for agencies & freelancers."
                    />
                </div>
                <div className="w-2/3 pl-12 pt-8 pb-16 flex gap-x-20 flex-wrap dropMenuSubLinks">
                    <ul className="flex flex-col w-56 pb-10">
                        <li className="dropDownMenuTitles">RESOURCES</li>
                        <a href="#">Customer Stories</a>
                        <a href="#">Hatch Startup Program</a>
                        <a href="#">Price Estimate Calculator</a>
                        <a href="#">One-Click Apps</a>
                        <a href="#">Security</a>
                        <a href="#">Migrate Workloads to DigitalOcean</a>
                    </ul>
                    <ul className="flex flex-col w-56 pb-10">
                        <li className="dropDownMenuTitles">FEATURED ARTICLES</li>
                        <div className="px-3 py-3 border rounded-2xl mb-5">
                            <p className="pb-2">Cloud cost optimization best practices</p>
                            <a href="#" className="textJetBrain flex items-center">Read more <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 ml-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg></a>
                        </div>
                        <div className="px-3 py-3 border rounded-2xl mb-5">
                            <p className="pb-2">How to choose a cloud provider</p>
                            <a href="#" className="textJetBrain flex items-center">Read more <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 ml-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg></a>
                        </div>
                        <div className="px-3 py-3 border rounded-2xl">
                            <p className="pb-2">Understanding cash flow vs. profit</p>
                            <a href="#" className="textJetBrain flex items-center">Read more <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 ml-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg></a>
                        </div>
                    </ul>
                    <ul className="flex flex-col w-56 pb-10">
                        <li className="dropDownMenuTitles">CONTACT</li>
                        <div className="px-3 py-3 border rounded-2xl bg-blue-200">
                            <p className="pb-2">Do you have any questions?</p>
                            <a href="#" className="textJetBrain flex items-center">Contact sales <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 ml-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg></a>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DropDownMenuBusinesses;