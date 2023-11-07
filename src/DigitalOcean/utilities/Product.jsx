
const Product = () => {

    const productList = [
        {
            id: 1,
            productSrc: "/images/cloudways-logo.svg",
            productAlt: "Cloudways logo",
            productTitle: "Managed hosting",
            productP: "Cloudways is a fully-managed cloud hosting solution for digital agencies & ecommerce businesses. Built to deliver performance without complexity.",
            productMargin: "mr-0 lg:mr-5"
        },
        {
            id: 2,
            productSrc: "/images/droplets-icon.svg",
            productAlt: "Droplets icon",
            productTitle: "Virtual machines",
            productP: ["DigitalOcean Droplets are simple, scalable virtual machines for all your web hosting",
                <a src="#" className="underline text-do-blue-medium"> web hosting</a>, " and ",
                <a src="#" className="underline text-do-blue-medium"> VPS hosting</a>, " needs."],
            productMargin: ""
        },
        {
            id: 3,
            productSrc: "/images/kubernetes-icon.svg",
            productAlt: "Kubernetes icon",
            productTitle: "Kubernetes",
            productP: "DigitalOcean Kubernetes is a managed solution that is easy to scale and includes a 99.5% SLA for HA and free control plane.",
            productMargin: "lg:mr-5 xl:mr-0 xl:ml-5"
        },
        {
            id: 4,
            productSrc: "/images/app-platform-icon.svg",
            productAlt: "Platform icon",
            productTitle: "App Platform",
            productP: "Build and deploy apps without managing infrastructure with DigitalOcean’s Platform as a Service and serverless solutions.",
            productMargin: "mr-0 xl:mr-5"
        },
        {
            id: 5,
            productSrc: "/images/managed-databases-icon.svg",
            productAlt: "Databases icon",
            productTitle: "Managed databases",
            productP: "Managed MongoDB, Kafka, MySQL, PostgreSQL, and Managed Databases for Redis®* let you focus on your apps while we update and scale your databases.",
            productMargin: ""
        },
        {
            id: 6,
            productSrc: "/images/spaces-storage-icon.svg",
            productAlt: "Storage icon",
            productTitle: "Storage",
            productP: "DigitalOcean Spaces object storage and Volumes block storage are business-ready storage solutions.",
            productMargin: "ml-0 lg:ml-5"
        }
    ]


    return (
        <div className="flex flex-wrap justify-center">
            {
                productList.map((product) => (
                    <div className={`shadow-xl flex w-11/12 lg:w-5/12 xl:w-3.9/12 2xl:h-64 xl:h-72 mob:h-72 h-96 rounded-3xl my-5 bg-white ${product.productMargin}`} key={product.id}>
                        <div className="p-10 flex justify-between flex-col">
                            <div className="flex flex-col">
                                <div className="flex mb-2">
                                    <img src={product.productSrc} alt={product.productAlt} className="w-9 object-contain" />
                                    <h3 className="text-2xl font-semibold font-epilogue ml-3">{product.productTitle}</h3>
                                </div>
                                <p className="text-do-gray-card font-inter">{product.productP}</p>
                            </div>
                            <button className="flex items-center font-jetbrain text-do-blue-light font-medium">Learn more <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 ml-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                            </svg></button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Product;