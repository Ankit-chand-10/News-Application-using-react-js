import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

const Navbar = ({setCategory}) => {
    return (

        <div className="navbar navbar-expand-lg navbar-dark bg-dark ">
            <div className="container-fluid">
                <a href="/"><span className='badge bg-light text-dark fs-7'>News</span></a>
              

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        
                        <li className="nav-item">
                            <div className="nav-link" onClick={() => setCategory("technology")}>Technology</div>
                        </li>

                        <li className="nav-item">
                            <div className="nav-link" onClick={() => setCategory("business")}>Business</div>
                        </li>

                        <li className="nav-item">
                            <div className="nav-link" onClick={() => setCategory("health")}>Health</div>
                        </li>

                        <li className="nav-item">
                            <div className="nav-link" onClick={() => setCategory("science")}>Science</div>
                        </li>

                        <li className="nav-item">
                            <div className="nav-link" onClick={() => setCategory("sports")}>Sports</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" onClick={() => setCategory("entertainment")}>Entertainment</div>
                        </li>
                    </ul>  
                 
                    
                </div>
            </div>
        </div>

    )
}

export default Navbar