import React from 'react'
import  './Toast.css'

const Toast = () => {
    return (
        <div className='toast-success'>
            <p>Congrats!!! SignIn to access the Vault</p>
            <i className="fa-solid fa-xmark"></i>
        </div>
    )
}

export default Toast