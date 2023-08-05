import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../css/customToast.css";

const ShowToast = (title, toastClass) => {
  return toast(title, {
    position: "top-center",
    autoClose: 700,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    className: toastClass,
  });
};

export default ShowToast;
