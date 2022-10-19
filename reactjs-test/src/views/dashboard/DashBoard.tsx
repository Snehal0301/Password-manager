import Card from '../../components/card/Card'
import Header from '../../components/header/Header'
import SideBar from '../../components/sidebar/SideBar'
import './DashBoard.css'
import { useState } from 'react'
import Modal from '../../components/modal/Modal'

const DashBoard = () => {
    const data = [
        {
            url: 'www.facebook.com',
            site: 'Facebook',
        },
        {
            url: 'www.youtube.com',
            site: 'Youtube'
        },
        {
            url: 'www.twitter.com',
            site: 'Twitter'
        },

    ]

    // let data: any;
    // data = JSON.parse(localStorage.getItem("formdata")|| "[]")

    const [modal, setModal] = useState(false);

    return (
        <div className='dashboard'>
            <SideBar />
            <Header />
            <div className="container">
                <div className="container-elements">
                    <div className="container-nav">
                        <div className="logo">
                            <h1>Sites</h1>
                            <div id="line"></div>
                        </div>
                        <div className="options">
                            <div className="search">
                                <input type="text" placeholder='Search' className='searchInput' />
                                <img src={require('../../assets/images/search.png')} alt="search" />
                            </div>
                            <img src={require('../../assets/images/add_btn.png')} alt="add btn" onClick={() => setModal(true)} />
                        </div>
                    </div>
                    <div className="dropdown">
                        <div className="dropbtn">
                            <p>Social Media</p>
                            <div className="number">
                                <p>{data.length}</p>
                            </div>
                            <img src={require('../../assets/images/Path Copy.png')} alt="path copy" />
                        </div>
                    </div>
                    {/* IMPORTANT DONT DELETE */}
                    {/* <div className="container-content">
                        <div className="container-add-files">
                            <div className="addfile">
                                <p>Please Click on the “+” symbol
                                    to add sites</p>
                            </div>
                        </div>
                    </div> */}
                    <div className="site-elements">
                        {
                            data.map((element) => {
                                return (
                                    <Card element={element} />
                                )
                            })
                        }
                    </div>

                    {
                        modal &&
                        <Modal trigger={modal} setTrigger={setModal} type="add"/>
                    }
                </div>
            </div>
        </div>
    )
}

export default DashBoard