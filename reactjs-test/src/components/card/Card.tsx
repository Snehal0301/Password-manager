import './Card.css'
const Card = () => {
    return (
        <>
            <div className="site-element">
                <div className="site-title">
                    <img src={require('../../assets/images/facebook.png')} alt="" className='site-img' />
                    <div className="site-details">
                        <p className='site-name'>FaceBook</p>
                        <div className='copy-password'>
                            <img src={require('../../assets/images/copy.png')} alt="" />
                            <p>Copy Password</p>
                        </div>
                    </div>
                </div>

                <div className="site-link">
                    <p>www.facebook.com</p>
                </div>
            </div>
        </>
    )
}

export default Card