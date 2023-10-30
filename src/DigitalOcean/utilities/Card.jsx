
const Card = ({ cardSrc, cardAlt, cardTitle, cardP }) => {
    return (
        <div className="shadow-lg flex w-5.5/12 h-52 rounded-2xl mx-8 my-5 bg-gray-50">
            <div className="w-7/12 flex justify-center">
                <img src={cardSrc} alt={cardAlt} className="w-9 object-contain"/>
            </div>
            <div className="flex flex-col justify-center pr-6">
                <h5 className="font-medium pb-3 text-do-gray-card">{cardTitle}</h5>
                <p className="font-inter text-do-gray-card">{cardP}</p>
            </div>
        </div>
    )
}

export default Card;