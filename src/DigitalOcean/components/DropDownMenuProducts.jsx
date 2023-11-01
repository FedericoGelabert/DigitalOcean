import DropDownMenuLinks from "../utilities/DropDownMenuLinks";


const DropDownMenuProducts = () => {
    return (
        <div className="w-full fixed z-20 mb-8 bg-white" id="DDMenuProducts">
            <div className="flex mt-5">
                <div className="w-1/3 bg-gray-50 pl-28 pt-8 pb-24 flex flex-col text-gray-600 font-inter">
                    <h4 className="dropDownMenuTitles ml-3">FEATURED PRODUCTS</h4>
                    <DropDownMenuLinks
                        dropMenuTitle="Droplets"
                        dropMenuP="Scalable virtual machines"
                    />
                    <DropDownMenuLinks
                        dropMenuTitle="Kubernetes"
                        dropMenuP="Managed Kubernetes clusters"
                    />
                    <DropDownMenuLinks
                        dropMenuTitle="Paperspace"
                        dropMenuP="Build & scale AI models"
                    />
                    <DropDownMenuLinks
                        dropMenuTitle="Cloudways"
                        dropMenuP="Managed cloud hosting"
                    />
                    <DropDownMenuLinks
                        dropMenuTitle="App Platform"
                        dropMenuP="Get apps to market faster"
                    />
                    <DropDownMenuLinks
                        dropMenuTitle="Databases"
                        dropMenuP="Worry-free setip & maintenance"
                    />
                </div>
                <div className="w-2/3 pl-12 pt-8 pb-24 flex gap-x-20 flex-wrap dropMenuSubLinks">
                    <ul className="flex flex-col w-56 pb-10">
                        <li className="dropDownMenuTitles">COMPUTE</li>
                        <a href="#">Droplets</a>
                        <a href="#">CPU-Optimized Droplets</a>
                        <a href="#">Kubernetes</a>
                        <a href="#">App Platform</a>
                        <a href="#">Functions</a>
                        <a href="#">GPUs</a>
                    </ul>
                    <ul className="flex flex-col w-56 pb-10">
                        <li className="dropDownMenuTitles">CLOUD WEBSITE HOSTING</li>
                        <a href="#">Cloudways</a>
                    </ul>
                    <ul className="flex flex-col w-56 pb-10">
                        <li className="dropDownMenuTitles">STORAGE</li>
                        <a href="#">Spaces Object Storage</a>
                        <a href="#">Volume Block Storage</a>
                    </ul>
                    <ul className="flex flex-col w-56 pb-10">
                        <li className="dropDownMenuTitles">NETWORKING</li>
                        <a href="#">Virtual Private Cloud (VPC)</a>
                        <a href="#">Cloud Firewalls</a>
                        <a href="#">Load Balancers</a>
                        <a href="#">DNS</a>
                        <a href="#">DDoS Protection</a>
                    </ul>
                    <ul className="flex flex-col w-56 pb-10">
                        <li className="dropDownMenuTitles">MANAGED DATABASES</li>
                        <a href="#">MongoDB</a>
                        <a href="#">Kafka</a>
                        <a href="#">MySQL</a>
                        <a href="#">PostgreSQL</a>
                        <a href="#">Managed Databases for Redis</a>
                    </ul>
                    <ul className="flex flex-col w-56 pb-10">
                        <li className="dropDownMenuTitles">DEVELOPER TOOLS</li>
                        <a href="#">API</a>
                        <a href="#">CLI</a>
                        <a href="#">Support Plans</a>
                        <a href="#">Monitoring</a>
                        <a href="#">Uptime</a>
                        <a href="#">SnapShooter</a>
                    </ul>
                    <ul className="flex flex-col w-56 pb-10">
                        <li className="dropDownMenuTitles">AI/ML</li>
                        <a href="#">Paperspace</a>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DropDownMenuProducts;