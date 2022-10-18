import React from 'react'
import Input from '../../components/input/Input'
import './DashBoard.css'

const DashBoard = () => {
    return (
        <div className='dashboard'>
            <div className="sidebar">
                <img src={require('../../assets/images/burger_menu.png')} alt="Burger_Icon" id='burgerIcon' />
                <div className="home">
                    <div id="left-line"></div>
                    <img src={require('../../assets/images/home_icn.png')} alt="Home_Icn" className='homeIcon' />
                    <div id="circle"></div>
                </div>
            </div>

            <header className="header">
                <div className="nav">
                    <div className="logo">
                        <img src={require('../../assets/images/pass_logo.png')} alt="" />
                    </div>
                    <div className="options">
                        <img src={require('../../assets/images/sync.png')} alt="" />
                        <img src={require('../../assets/images/profile.png')} alt="" />
                    </div>
                </div>
            </header>

            <div className="container">
                <div className="container-nav">
                    <div className="logo">
                        <h1>Sites</h1>
                        <div id="line"></div>
                    </div>
                    <div className="options">
                        <div className="search">
                            <input type="text" placeholder='Search' className='searchInput' />
                            <img src={require('../../assets/images/search.png')} alt="" />
                        </div>

                        <img src={require('../../assets/images/add_btn.png')} alt="" />
                    </div>
                </div>
                <div className="container-content">
                    <div className="container-add-files">
                        <div className="addfile">
                            <p>Please Click on the “+” symbol
                                to add sites</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashBoard