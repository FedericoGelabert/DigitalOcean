
const DropDownMenuLinks = ({ dropMenuP, dropMenuTitle}) => {
    return (
        <div>
            <div className="group py-4 px-3 w-5/6 hover:bg-blue-200 rounded-xl cursor-pointer">
                <h5 className="text-xl font-medium text-gray-800 group-hover:text-do-blue-light">{dropMenuTitle}</h5>
                <p>{dropMenuP}</p>
            </div>
        </div>
    )
}

export default DropDownMenuLinks;