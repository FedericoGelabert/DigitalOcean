import Card from "../utilities/Card";

const Benefits = () => {
    return (
        <div className="container mx-auto xl:px-28 px-4">
            <div className="flex flex-col items-center text-center pb-16">
                <h3 className="font-bold font-epilogue text-4xl pb-4 text-do-blue-dark">Benefits to activate the builder in you</h3>
                <p className="text-do-gray-subtext font-medium font-inter lg:w-3/6 w-5/6">From simple tools and predictable pricing to support designed for growing businesses, DigitalOcean's cloud is built to serve the unique needs of startups and SMBs.</p>
            </div>
            <div className="flex flex-wrap justify-center">
                <Card
                    cardSrc="/images/bar-chart.png"
                    cardAlt="bar chart"
                    cardTitle="Build and ship faster using simple tools"
                    cardP="All of our products are built with simplicity at their core, so you can spend your time focusing on building apps, not infrastructure." />
                <Card
                    cardSrc="/images/dollar-up-splash.png"
                    cardAlt="dolar up splash"
                    cardTitle="Grow profitably with predictable cloud costs"
                    cardP={["Our predictable pricing and leading price-to-performance ratio contribute to an ROI of 186%",
                        <a src="#" className="underline text-do-blue-medium"> according to a Forrester study.</a>]}
                />
                <Card
                    cardSrc="/images/speech-bubbles.png"
                    cardAlt="speech bubbles"
                    cardTitle="Reduce your roadblocks with dedicated support"
                    cardP="Get free, personalized support or upgrade to paid plans to receive dedicated help and faster response times."
                />
                <Card
                    cardSrc="/images/arrows.png"
                    cardAlt="arrows"
                    cardTitle="Improve customer experience by building on a reliable platform"
                    cardP="Deliver superior customer experience with our globally distributed platform, minimal downtime, and intuitive products."
                />
            </div>
        </div>
    )
}

export default Benefits;