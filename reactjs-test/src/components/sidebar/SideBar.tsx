import { Link } from 'react-router-dom'
import './SideBar.css'
const SideBar = () => {
    return (
        <>
            <div className="sidebar">
                <Link to="/">
                    <img src={require('../../assets/images/burger_menu.png')} alt="Burger_Icon" id='burgerIcon' />
                </Link>
                <div className="home">
                    <div id="left-line"></div>
                    <img src={require('../../assets/images/home_icn.png')} alt="Home_Icn" className='homeIcon' />
                    <div id="circle"></div>
                </div>
            </div>
        </>
    )
}

export default SideBar