import Button from '../button/Button'
import { useState } from 'react';
import '../modal/Modal.css'

const Modal = (props: any) => {

  const [user, setUser] = useState({
    url: "", siteName: "", sector: "", username: "", sitepass: "", notes: ""
  })

  let name: any, value: any;

  const handleInputs = (e: any) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value })
  }

  const allFormData: any = [];

  const formData = (e: any) => {
    e.preventDefault();
    allFormData.push(user)
    localStorage.setItem("formdata", JSON.stringify(allFormData))
  }

  const resetForm = () => {
    setUser({ ...user, url: "", siteName: "", sector: "", username: "", sitepass: "", notes: "" })
  }

  return (
    <>
      {props.trigger} ?
      <>
        <div className="modal">
          <div className="overlay"></div>
          <div className="modal-content">
            <div className="modal-title">
              {props.type === 'add' ?
                <p>Add Site</p>
                :
                <>
                  <p>Site Details</p>
                  <div className="submitBtn">Edit</div>
                </>
              }
            </div>
            <form className="input-container" onSubmit={formData}>
              <div className="url-input">
                <label htmlFor="url">URL</label>
                <input type="text" id='url' value={user.url} name="url" onChange={handleInputs} required />
              </div>

              <div className="input-sections">
                <div className="section-1">
                  <label htmlFor="site-name">Site Name</label>
                  <input type="text" id='site-name' value={user.siteName} name="siteName" onChange={handleInputs} required />
                </div>
                <div className="section-2">
                  <label htmlFor="sector">Sector/Folder</label>
                  <input type="text" id='sector' value={user.sector} name="sector" onChange={handleInputs} required />
                </div>
              </div>
              <div className="input-sections">
                <div className="section-1">
                  <label htmlFor="user-name">UserName</label>
                  <input type="text" id='user-name' value={user.username} name="username" onChange={handleInputs} required />
                </div>
                <div className="section-2">
                  <label htmlFor="site-password">SitePassword</label>
                  <input type="text" id='site-password' value={user.sitepass} name="sitepass" onChange={handleInputs} required />
                </div>
              </div>

              <div className="url-input">
                <label htmlFor="textarea">Notes</label>
                <textarea id="textarea" value={user.notes} name="notes" onChange={handleInputs} required />
              </div>
              {
                props.type === 'add' ?
                  <div className="submit-buttons">
                    <div className='resetBtn' onClick={resetForm} >
                      Reset
                    </div>
                    <Button text="Save" class_name="submitBtn" />
                  </div>
                  : ""
              }
            </form>
            <img src={require('../../assets/images/close_btn.png')} onClick={() => props.setTrigger(false)} className="close-modal" alt="" />
          </div>
        </div>
      </>
      :
      <>
      </>
    </>
  )
}

export default Modal