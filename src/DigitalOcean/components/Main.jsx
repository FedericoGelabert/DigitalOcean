
const Main = () => {
    return (
        <div className="xl:pt-28 pt-16">
            <div className="xl:pt-32 pt-16 bg-do-blue-light bg-main-image bg-cover rounded-b-main sm:h-200 h-250 relative z-10">
                <div className="container mx-auto flex items-center flex-col text-white xl:px-28 px-4">
                    <h1 className="text-6xl font-bold font-epilogue text-center">Dream it. Build it. Grow it.</h1>
                    <p className="mt-5 text-center font-inter text-xl lg:w-4/6 w-6/6">Whatever your vision—a SaaS app, an AI/ML business, a website, an eCommerce store— build it here
                        using DigitalOcean's simple, cost-effective cloud hosting services.</p>
                    <div className="mt-8 font-semibold flex lg:gap-x-5 font-inter lg:flex-row flex-col">
                        <button className="lg:px-7 sm:px-24 px-10 mb-5 py-3 rounded-lg bg-do-blue-mediumdark hover:bg-do-blue-bhover hover:duration-300 ">Sign up with email</button>
                        <button className="lg:px-4 sm:px-24 px-10 py-3 mb-5 rounded-lg bg-white flex gap-3 items-center text-black justify-center"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
                            <path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                        </svg>Sign up with Google</button>
                        <button className="lg:px-4 sm:px-24 px-10 mb-5 py-2 rounded-lg bg-white flex gap-3 items-center text-black justify-center"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
                            <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                        </svg> Sign up with GitHub</button>
                    </div>
                </div>
                <div className="container mx-auto flex justify-center mt-16 xl:px-28 px-4">
                    <img alt="Preview of the DigitalOcean Control Panel " src="https://www.digitalocean.com/_next/static/media/dashboardMockup.2c5abdba.svg" className="rounded-xl lg:w-8/12 w-11/12 shadow-2xl"></img>
                </div>
                <div className="flex container mx-auto gap-20 justify-center mt-10 font-inter xl:px-28 px-4 md:flex-row md:no-wrap flex-wrap">
                    <div className="w-64">
                        <h4 className="text-4xl font-semibold pb-2 text-do-blue-light">#1</h4>
                        <p className="leading-2 text-gray-600">In IaaS usability, VPS for SMBs,<br/> & SMB Hosting <a href="#" className="text-do-blue-light font-normal underline">on G2</a></p>
                    </div>
                    <div className="w-64">
                        <h4 className="text-4xl font-semibold pb-2 text-do-blue-light">15</h4>
                        <p className="leading-2 text-gray-600">Globally distributed <br/>datacenters</p>
                    </div>
                    <div className="w-64">
                        <h4 className="text-4xl font-semibold pb-2 text-do-blue-light">99.99%</h4>
                        <p className="leading-2 text-gray-600">Uptime SLA for Droplets and <br/>Volumes block storage</p>
                    </div>
                    <div className="w-64">
                        <h4 className="text-4xl font-semibold pb-2 text-do-blue-light">&gt;600k</h4>
                        <p className="leading-2 text-gray-600">Customers building with <br/>DigitalOcean</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;