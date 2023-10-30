import Product from "./Product";

const Products = () => {
    return (
        <div className="container mx-auto">
            <div className="flex flex-col items-center text-center pb-16">
                <h3 className="font-bold font-epilogue text-4xl pb-4 text-do-blue-dark">A cloud for your entire journey</h3>
                <p className="text-do-gray-subtext font-inter w-3/6">DigitalOcean’s suite of products is designed to be with you on every step of your journey, whether you want to do it yourself or get help from the experts.</p>
                <a href="#" className="flex items-center font-jetbrain text-do-blue-light font-medium mt-8">See all products <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 ml-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg> </a>               
            </div>
            <div className="flex flex-wrap justify-center">
                <Product
                    productSrc="https://www.digitalocean.com/_next/static/media/cloudways-logo.4b393732.svg"
                    productAlt="Cloudways logo"
                    productTitle="Managed hosting"
                    productP="Cloudways is a fully-managed cloud hosting solution for digital agencies & ecommerce businesses. Built to deliver performance without complexity."
                />
                <Product
                    productSrc="https://www.digitalocean.com/_next/static/media/droplets-icon.b6e4bb89.svg"
                    productAlt="Droplets icon"
                    productTitle="Virtual machines"
                    productP="DigitalOcean Droplets are simple, scalable virtual machines for all your web hosting and VPS hosting needs."
                />
                <Product
                    productSrc="https://www.digitalocean.com/_next/static/media/kubernetes-icon.bab9c67d.svg"
                    productAlt="Kubernetes icon"
                    productTitle="Kubernetes"
                    productP="DigitalOcean Kubernetes is a managed solution that is easy to scale and includes a 99.5% SLA for HA and free control plane."
                />
                <Product
                    productSrc="https://www.digitalocean.com/_next/static/media/app-platform-icon.699988d5.svg"
                    productAlt="Platform icon"
                    productTitle="App Platform"
                    productP="Build and deploy apps without managing infrastructure with DigitalOcean’s Platform as a Service and serverless solutions."
                />
                <Product
                    productSrc="https://www.digitalocean.com/_next/static/media/managed-databases-icon.34e236c6.svg"
                    productAlt="Databases icon"
                    productTitle="Managed databases"
                    productP="Managed MongoDB, Kafka, MySQL, PostgreSQL, and Managed Databases for Redis®* let you focus on your apps while we update and scale your databases."
                />
                <Product
                    productSrc="https://www.digitalocean.com/_next/static/media/spaces-storage-icon.847a812f.svg"
                    productAlt="Storage icon"
                    productTitle="Storage"
                    productP="DigitalOcean Spaces object storage and Volumes block storage are business-ready storage solutions."
                />
            </div>
            <div className="text-center flex justify-center">
                <p className="text-do-gray-subtext text-xs font-normal font-inter w-6/12 mt-12">*Redis is a registered trademark of Redis Ltd. Any rights therein are reserved to Redis Ltd. Any use by DigitalOcean is for referential purposes only and does not indicate any sponsorship, endorsement or affiliation between Redis and DigitalOcean.</p>
            </div>
        </div>
    )
}

export default Products;