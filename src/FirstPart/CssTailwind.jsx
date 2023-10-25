// Using CSS and TailwindCSS

import Panel from "./Panel";

const CssTailwind = () => {
    return (
        <div className="cssTailwind">
            {/* CSS */}
            <div className="panel">
                <div className="panel-title">
                    Inicio
                </div>
                <div className="panel-body">
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Aliquam aperiam impedit voluptatem repellat autem.
                        Commodi necessitatibus quam deleniti neque blanditiis?
                    </p>
                <button className="btn-primary">Haz clic</button>
                </div>
            </div>
            <br />
            {/* TailwindCSS */}
            <div className="border border-blue-600">
                <div className="bg-blue-600 text-white pt-5 pb-5 pl-4">
                    Inicio
                </div>
                <div className="pt-5 pb-5 pl-5 pr-5 leading-8">
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Aliquam aperiam impedit voluptatem repellat autem.
                        Commodi necessitatibus quam deleniti neque blanditiis?
                    </p>
                    <button className="btn-primary">Más info</button>
                </div>
            </div>

            {/* Evitar la duplicación de código */}
            <Panel parrafo='Párrafo' title='About us' boton='Haz clic'/>
            <Panel parrafo='Párrafo 2' title='Contact' boton='Más info'/>

        </div>
    )
}

export default CssTailwind;