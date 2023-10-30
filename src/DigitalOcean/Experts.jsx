import ExpertsCard from "./ExpertsCard";


const Experts = () => {
    return (
        <div className="container mx-auto pt-32">
            <div className="flex flex-col items-center text-center pb-12">
                <h3 className="font-extrabold font-epilogue text-4xl pb-2 text-do-blue-dark">Learn from the experts</h3>
                <p className="text-do-gray-subtext font-inter font-normal w-3/6">Whether you want to learn about funding your business, installing Linux on Ubuntu,
                    or getting started on DigitalOcean, we have the educational resources for you.</p>
            </div>
            <div className="flex flex-wrap">
                <ExpertsCard
                    expertsCardSrc="https://www.digitalocean.com/_next/static/media/digitalocean-docs.26159f78.svg"
                    expertsCardAlt="DigitalOcean docs"
                    expertsCardTitle="Product documentation"
                    expertsCardP="Learn how to spin up a virtual machine, get started with block storage, and more with in-depth documentation."
                    expertsCardMargin="mr-6"
                />
                <ExpertsCard
                    expertsCardSrc="https://www.digitalocean.com/_next/static/media/boat-storm-lighthouse.4bdddec0.png"
                    expertsCardAlt="Boat storm lighthouse"
                    expertsCardTitle="Business advice"
                    expertsCardP="The Wave is DigitalOcean’s hub for startup and business-focused content on funding, hiring, and scaling."
                />
                <ExpertsCard
                    expertsCardSrc="https://www.digitalocean.com/_next/static/media/heart-speech-bubble-asterisk-graphic.6eb0678f.svg"
                    expertsCardAlt="Heart speech bubble asterisk graphic"
                    expertsCardTitle="Technical expertise"
                    expertsCardP="Visit DigitalOcean’s Community Website and CSS-Tricks to learn from wide range of technical tutorials."
                    expertsCardMargin="ml-6"
                />
            </div>
        </div>
    )
}

export default Experts;