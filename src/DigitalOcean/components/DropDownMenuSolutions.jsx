import DropDownMenuLinks from "../utilities/DropDownMenuLinks";


const DropDownMenuSolutions = () => {
    return (
        <div className="w-full fixed z-20 mb-8 bg-white" id="DDMenuProducts">
            <div className="flex mt-5">
                <div className="w-1/3 bg-gray-50 pl-28 pt-8 pb-10 flex flex-col text-gray-600 font-inter">
                    <h4 className="dropDownMenuTitles ml-3">CLOUDWAYS</h4>
                    <DropDownMenuLinks
                        dropMenuTitle="Managed WordPress"
                        dropMenuP="Make your website faster and more secure."
                    />
                    <DropDownMenuLinks
                        dropMenuTitle="Managed Woocommerce"
                        dropMenuP="Hassle-free ecommerce website hosting."
                    />
                    <DropDownMenuLinks
                        dropMenuTitle="Managed Magento"
                        dropMenuP="Simple, efficent ecommerce hosting."
                    />
                </div>
                <div className="w-2/3 pl-12 pt-8 pb-10 flex gap-x-20 flex-wrap dropMenuSubLinks">
                    <ul className="flex flex-col w-56 pb-10">
                        <li className="dropDownMenuTitles">BY INDUSTRY</li>
                        <a href="#">Data Analytics</a>
                        <a href="#">Digital Marketing Agencies</a>
                        <a href="#">Ecommerce</a>
                        <a href="#">Advertising and Marketing Tech</a>
                        <a href="#">IT Consulting</a>
                        <a href="#">Developer Tools</a>
                        <a href="#">CI/CD Pipelines</a>
                        <a href="#">View All Industries</a>
                    </ul>
                    <ul className="flex flex-col w-56 pb-10">
                        <li className="dropDownMenuTitles">BY USE CASE</li>
                        <a href="#">Cloud VPN</a>
                        <a href="#">Web & Mobile Apps</a>
                        <a href="#">Game Development</a>
                        <a href="#">Video Streaming</a>
                        <a href="#">Virtual Machines</a>
                        <a href="#">Blockchain</a>
                        <a href="#">Website Hosting</a>
                        <a href="#">VPS Hosting</a>
                        <a href="#">View All Use Cases</a>
                    </ul>
                    <ul className="flex flex-col w-56 pb-10">
                        <li className="dropDownMenuTitles">STORAGE</li>
                        <a href="#" className="textJetBrain flex items-center">Speak with an Expert <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 ml-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg></a>

                    </ul>
                </div>
            </div>
            <div className="border flex py-3 justify-center">
                <a href="" className="textJetBrain flex items-center">See all solutions <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 ml-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg></a>
            </div>
        </div>
    )
}

export default DropDownMenuSolutions;