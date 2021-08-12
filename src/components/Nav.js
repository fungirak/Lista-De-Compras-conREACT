import React from 'react'

const Nav = () => {
    return (
        <div>
             <nav className="nav bg-light justify-content-between fixed-top">

                <h4 className="text-dark shadow m-2 rounded-pill p-2">MI LISTA DE COMPRAS</h4>

                <ul className="nav p-2">
                    
                    <li className="nav-item mr-2">
                        <a href="https://www.fungirak.com" target="_blank">
                            <img src="fungi.svg" alt="" className="nav-link boton-nav" />
                        </a>
                    </li>

                    <li className="nav-item mr-2">
                        <a href="https://www.github.com/fungirak" target="_blank">
                            <img src="github.png" alt="" className="nav-link boton-nav" />
                        </a>
                    </li>
                </ul>


            </nav>   
        </div>
    )
}

export default Nav