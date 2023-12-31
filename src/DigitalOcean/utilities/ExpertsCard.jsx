
const ExpertsCard = ({ expertsCardSrc, expertsCardAlt, expertsCardTitle, expertsCardP, expertsCardMargin }) => {

    


    return (
            <div className={`shadow-xl flex flex-col 2xl:w-3.9/12 lg:w-8/12 mob:w-10/12 w-12/12 2xl:h-120 lg:h-180 md:h-150 h-130 rounded-3xl my-5 bg-white relative ${expertsCardMargin}`} >
                <div className="flex justify-between flex-col">
                    <img src={expertsCardSrc} alt={expertsCardAlt} className="rounded-t-3xl" />
                    <div className="flex flex-col p-10">
                        <h3 className="text-2xl font-semibold font-epilogue pb-1">{expertsCardTitle}</h3>
                        <p className="text-do-gray-card font-inter pb-7">{expertsCardP}</p>
                        <a src="#" className="flex items-center font-jetbrain text-do-blue-light font-medium cursor-pointer">Learn more <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 ml-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                        </svg></a>
                    </div>
                </div>
            </div>
    )
}

export default ExpertsCard;