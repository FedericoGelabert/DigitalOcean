import ExpertsCard from "../utilities/ExpertsCard";


const Experts = () => {
    return (
        <div className="container mx-auto pt-32 xl:px-28 px-4">
            <div className="flex flex-col items-center text-center pb-12">
                <h3 className="font-extrabold font-epilogue text-4xl pb-2 text-do-blue-dark">Learn from the experts</h3>
                <p className="text-do-gray-subtext font-inter font-normal xl:w-3/6 w-5/6">Whether you want to learn about funding your business, installing Linux on Ubuntu,
                    or getting started on DigitalOcean, we have the educational resources for you.</p>
            </div>
            <div className="flex flex-wrap justify-center">
                <ExpertsCard
                    expertsCardSrc="/images/digitalocean-docs.svg"
                    expertsCardAlt="DigitalOcean docs"
                    expertsCardTitle="Product documentation"
                    expertsCardP="Learn how to spin up a virtual machine, get started with block storage, and more with in-depth documentation."
                    expertsCardMargin="2xl:mr-6 mr-0"
                />
                <ExpertsCard
                    expertsCardSrc="/images/boat-storm-lighthouse.png"
                    expertsCardAlt="Boat storm lighthouse"
                    expertsCardTitle="Business advice"
                    expertsCardP="The Wave is DigitalOcean’s hub for startup and business-focused content on funding, hiring, and scaling."
                />
                <ExpertsCard
                    expertsCardSrc="/images/heart-speech-bubble-asterisk-graphic.svg"
                    expertsCardAlt="Heart speech bubble asterisk graphic"
                    expertsCardTitle="Technical expertise"
                    expertsCardP="Visit DigitalOcean’s Community Website and CSS-Tricks to learn from wide range of technical tutorials."
                    expertsCardMargin="2xl:ml-6 ml-0"
                />
            </div>
        </div>
    )
}

export default Experts;