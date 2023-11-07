
const Card = ({ cardSrc, cardAlt, cardTitle, cardP }) => {
    return (
        <div className="shadow-lg flex sm:flex-row flex-col mob:justify-center w-12/12 2xl:w-5.5/12 sm:h-52 mob:h-64 h-80 rounded-2xl sm:mx-8 mx-2 sm:my-5 my-6 bg-gray-50">
            <div className="sm:w-7/12 w-12/12 flex justify-center sm:pb-0 pb-5">
                <img src={cardSrc} alt={cardAlt} className="sm:w-9 w-16 object-contain"/>
            </div>
            <div className="flex flex-col justify-center sm:pr-6 pr-0 px-6">
                <h5 className="font-medium pb-3 text-do-gray-card">{cardTitle}</h5>
                <p className="font-inter text-do-gray-card w-5/6">{cardP}</p>
            </div>
        </div>
    )
}

export default Card;