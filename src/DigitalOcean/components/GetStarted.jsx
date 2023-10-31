
const GetStarted = () => {
    return (
        <div className="container mx-auto my-32 flex justify-center">
            <div className="flex border w-10/12 p-9 rounded-2xl bg-white justify-between">
                <div className="flex flex-col items-start">
                    <h4 className="font-bold font-epilogue text-xl pb-2">Get started for free</h4>
                    <p className="w-5/6 font-inter text-do-gray-card">Sign up and get $200 in credit for your first 60 days with DigitalOcean.</p>
                </div>
                <div className="flex flex-col items-end justify-center">
                    <button className="px-5 py-2 border rounded-3xl bg-do-blue-light text-white font-semibold font-inter mb-3">Get started</button>
                    <span className="text-xs font-inter text-do-gray-card">This promotional offer applies to new accounts only.</span>
                </div>
            </div>
        </div>
    )
}

export default GetStarted;