import DropDownMenuLinks from "../utilities/DropDownMenuLinks";


const DropDownMenuDevelopers = () => {
    return (
        <div className="w-full fixed z-20 mb-8 bg-white" id="DDMenuProducts">
            <div className="flex mt-5">
                <div className="w-1/3 bg-gray-50 pl-28 pt-8 pb-10 flex flex-col text-gray-600 font-inter">
                    <h4 className="dropDownMenuTitles ml-3">OUR COMMUNITY</h4>
                    <DropDownMenuLinks
                        dropMenuTitle="Developer Center"
                        dropMenuP="Learn, build, and scale."
                    />
                    <DropDownMenuLinks
                        dropMenuTitle="Community Home"
                        dropMenuP="DevOps and development guides."
                    />
                    <DropDownMenuLinks
                        dropMenuTitle="CSS-Tricks"
                        dropMenuP="All thing web design."
                    />
                </div>
                <div className="w-2/3 pl-12 pt-8 pb-10 flex gap-x-20 flex-wrap dropMenuSubLinks">
                    <ul className="flex flex-col w-56 pb-10">
                        <li className="dropDownMenuTitles">RESOURCES</li>
                        <a href="#">Tutorials</a>
                        <a href="#">Questions and Answers</a>
                        <a href="#">Marketplace</a>
                        <a href="#">Tools</a>
                        <a href="#">Write for Donations</a>
                        <a href="#">Customer Stories</a>
                        <a href="#">DigitalOcean Blog</a>
                    </ul>
                    <ul className="flex flex-col w-56 pb-10">
                        <li className="dropDownMenuTitles">GET INVOLVED</li>
                            <a href="#">Hatch Startup Program</a>
                            <a href="#">Open Source Sponsorships</a>
                            <a href="#">Hacktoberfest</a>
                            <a href="#">DO Impact</a>
                            <a href="#">Nonprofits</a>
                    </ul>
                    <ul className="flex flex-col w-56 pb-10">
                        <li className="dropDownMenuTitles">DOCUMENTATION</li>
                            <a href="#">Quick Start</a>
                            <a href="#">Droplets</a>
                            <a href="#">Storage</a>
                            <a href="#">App Platform</a>
                            <a href="#">API Reference</a>
                            <a href="#">Domains and DNS</a>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DropDownMenuDevelopers;