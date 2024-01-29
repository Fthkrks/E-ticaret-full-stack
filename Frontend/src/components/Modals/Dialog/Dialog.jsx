/* eslint-disable react/no-unescaped-entities */
import "./Dialog.css";
import PropTypes from "prop-types";

const Dialog = ({isDialog, SetIsDialog}) => {

  const handleCloseDialog = (e) =>{
    const checked = e.target.checked;
    localStorage.setItem("dialog", JSON.stringify(!checked))

  }

  return (
    <div className={`modal-dialog ${isDialog && "show"}`}>
    <div className="modal-content">
      <button className="modal-close"  onClick={() => SetIsDialog(false)}>
        <i className="bi bi-x"></i>
      </button>
      <div className="modal-image">
        <img src="/img/modal-dialog.jpg" alt=""/>
      </div>
      <div className="popup-wrapper">
        <div className="popup-content">
          <div className="popup-title">
            <h3>NEWSLETTER</h3>
          </div>
          <p className="popup-text">
            sign up to our newsletter and get exclusive deals you won find any where else straight to your inbox!
          </p>
          <form className="popup-form">
            <input type="text" placeholder="Enter Email Address Here"/>
            <button className="btn btn-primary">SUBSCRIBE</button>
            <label>
              <input type="checkbox" onChange={handleCloseDialog}/>
              <span>Don't show this popup again</span>
            </label>
          </form>
        </div>
      </div>

    </div>
    <div className="modal-overlay" onClick={() => SetIsDialog(false)}></div>
  </div>
  )
}

export default Dialog


Dialog.propTypes = {
  isDialog: PropTypes.bool,
  SetIsDialog: PropTypes.func

}