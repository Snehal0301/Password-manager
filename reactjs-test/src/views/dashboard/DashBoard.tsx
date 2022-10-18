import Card from '../../components/card/Card'
import Header from '../../components/header/Header'
// import Modal from '../../components/modal/Modal'
import SideBar from '../../components/sidebar/SideBar'
import './DashBoard.css'
import { useState } from 'react'

const DashBoard = () => {
    const [modal, setModal] = useState(false)
    // const [data, setData] = useState(true)
    const showModal = () => {
        setModal(!modal)
    }

    // const getModalState = (data: any) => {
    //     console.log("This is from moadl", data);
    // }
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
                            <img src={require('../../assets/images/add_btn.png')} alt="add btn" onClick={showModal} />
                        </div>
                    </div>
                    <div className="dropdown">
                        <div className="dropbtn">
                            <p>Social Media</p>
                            <div className="number">
                                <p>07</p>
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
                        <Card />
                        <Card />
                        <Card />
                    </div>
                    {
                        modal &&
                        <>
                            {/* <Modal modelState={getModalState} /> */}
                            <div className="modal">
                                <div className="overlay"></div>
                                <div className="modal-content">
                                    <h2>Hello Modal</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
                                        perferendis suscipit officia recusandae, eveniet quaerat assumenda
                                        id fugit, dignissimos maxime non natus placeat illo iusto!
                                        Sapiente dolorum id maiores dolores? Illum pariatur possimus
                                        quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
                                        placeat tempora vitae enim incidunt porro fuga ea.
                                    </p>
                                    <button className="close-modal" onClick={showModal} >
                                        CLOSE
                                    </button>
                                </div>
                            </div>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default DashBoard