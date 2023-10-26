import Card from "./Card";

const Benefits = () => {
    return (
        <div className="container mx-auto">
            <div className="flex flex-col items-center text-center pb-16">
                <h3 className="font-bold font-epilogue text-4xl pb-4 text-do-blue-dark">Benefits to activate the builder in you</h3>
                <p className="text-do-gray-subtext font-medium">From simple tools and predictable pricing to support designed for growing<br /> businesses, DigitalOcean's cloud is built to serve the unique needs of startups and<br /> SMBs.</p>
            </div>
            <div className="flex flex-wrap justify-center">
                <Card
                    cardSrc="https://www.digitalocean.com/_next/static/media/bar-chart.656d9366.png"
                    cardAlt="bar chart"
                    cardTitle="Build and ship faster using simple tools"
                    cardP="All of our products are built with simplicity at their core, so you can spend your time focusing on building apps, not infrastructure." />
                <Card
                    cardSrc="https://www.digitalocean.com/_next/static/media/dollar-up-splash.6b8727f3.png"
                    cardAlt="dolar up splash"
                    cardTitle="Grow profitably with predictable cloud costs"
                    cardP={["Our predictable pricing and leading price-to-performance ratio contribute to an ROI of 186%",
                        <a src="#" className="underline text-do-blue-medium"> according to a Forrester study.</a>]}
                />
                <Card
                    cardSrc="https://www.digitalocean.com/_next/static/media/speech-bubbles.cc4ac392.png"
                    cardAlt="speech bubbles"
                    cardTitle="Reduce your roadblocks with dedicated support"
                    cardP="Get free, personalized support or upgrade to paid plans to receive dedicated help and faster response times."
                />
                <Card
                    cardSrc="https://www.digitalocean.com/_next/static/media/arrows.5086d9da.png"
                    cardAlt="arrows"
                    cardTitle="Improve customer experience by building on a reliable platform"
                    cardP="Deliver superior customer experience with our globally distributed platform, minimal downtime, and intuitive products."
                />
            </div>
        </div>
    )
}

export default Benefits;