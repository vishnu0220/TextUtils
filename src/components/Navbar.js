import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand">{props.title} </a>
          {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> */}
          {/* <span className="navbar-toggler-icon"></span> */}
          
          <div className={`form-check form-switch text-${props.mode === 'light'? 'dark' : 'light'} mobileToggleMode`}>
              <input className="form-check-input" onClick={props.toggleMode}
                      title='Toggle Mode'
                      type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          </div>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <li className="nav-item">
                <a className="nav-link active" aria-current="page">Home</a>
              </li> */}
            </ul>
            <div className={`form-check form-switch text-${props.mode === 'light'? 'dark' : 'light'}`}>
              <input className="form-check-input" title='Toggle Mode'
                      onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            </div>
          </div>
        </div>
    </nav>
  )
}

Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    aboutText : PropTypes.string,
}

// Navbar.defaultProps = {
//     title : "Set your title here",
//     aboutText : "About",
// }