import { useEffect } from "react";
import popupStyles from "./popupStyle.scss";


function Popup(props) {


  const closeHandler = () => {
    props.onClose(false);
  };

  useEffect(() => {}, [props.show]);

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <span className={popupStyles.close} onClick={closeHandler}>
            x
          </span>
        </div>
        <div className="title">
          <h1>{props.title}</h1>
        </div>
        <div className="modalContent">{props.children}</div>
      </div>
    </div>
  );
}

export default Popup;
