import './Card.css';
import { useState } from 'react';
import Modal from '../modal/Modal';

const Card = (props: any) => {

    let image = `${props.element.url}/favicon.ico`;

    const [editModal, setEditModal] = useState(false);

    return (
        <>
            <div className="site-element" onClick={() => setEditModal(true)}>
                <div className="site-title">
                    <img src={require('../../assets/images/facebook.png')} alt="" className='site-img' />
                    <div className="site-details">
                        <p className='site-name'>{props.element.site}</p>
                        <div className='copy-password'>
                            <img src={image} alt="" />
                            <p>Copy Password</p>
                        </div>
                    </div>
                </div>

                <div className="site-link">
                    <p>{props.element.url}</p>
                </div>
            </div>

            {
                editModal && <Modal trigger={editModal} setTrigger={setEditModal} type="edit"/>
            }

        </>
    )
}

export default Card