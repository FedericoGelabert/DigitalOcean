

const Panel = ( {parrafo, title, boton}) => {
    return (
        <>
            <div className="panel">
                <div className="panel-title">
                    {title}
                </div>
                <div className="panel-body">
                    <p>{parrafo}</p>
                    <button className="btn-primary">{boton}</button>
                </div>
            </div>
        </>
    )
}

export default Panel;