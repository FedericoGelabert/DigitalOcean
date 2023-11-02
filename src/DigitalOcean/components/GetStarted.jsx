
const GetStarted = () => {
    return (
        <div className="container mx-auto my-32 flex justify-center xl:px-28 px-4">
            <div className="flex border md:w-10/12 w-12/12 p-9 rounded-2xl bg-white justify-between md:flex-row flex-col">
                <div className="flex flex-col items-start">
                    <h4 className="font-bold font-epilogue text-xl pb-2">Get started for free</h4>
                    <p className="md:w-5/6 w-11/12 font-inter text-do-gray-card md:pb-0 pb-5">Sign up and get $200 in credit for your first 60 days with DigitalOcean.</p>
                </div>
                <div className="flex flex-col md:items-end justify-center items-center">
                    <button className="px-5 py-2 border rounded-3xl bg-do-blue-light text-white font-semibold font-inter mb-3 md:w-10/12 w-full">Get started</button>
                    <span className="text-xs font-inter text-do-gray-card md:text-right">This promotional offer applies to new accounts only.</span>
                </div>
            </div>
        </div>
    )
}

export default GetStarted;