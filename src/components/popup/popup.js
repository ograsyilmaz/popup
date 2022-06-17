import { useEffect } from "react";
import popupStyles from "./popupStyle.scss";
import { useSite } from "../../context/SiteContext";
import PopuModalHead from "./PopupModalHead";
import Close from "../../img/x.png";

function Popup(props) {
  const { isSubmitting } = useSite();

  const closeHandler = () => {
    props.onClose(false);
  };

  useEffect(() => {}, [props.show]);

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <span className={popupStyles.close} onClick={closeHandler}>
            <img src={Close} alt="" />
          </span>
        </div>
        {!isSubmitting ? (
          <PopuModalHead title={props.title} description={props.description} />
        ) : (
          <></>
        )}
        <div className="modalContent">{props.children}</div>
      </div>
    </div>
  );
}

export default Popup;
