import { SpinnerLoaderC } from "../spinnerLoader/SpinnerLoader.c";
import "../../../styles/component/loader/paymentLoader.css";

export const VideoLoaderP = () => {
  return (
    <div className="col-lg-9">
      <div className="payment__loader__inner__div">
        <SpinnerLoaderC></SpinnerLoaderC>
        Processing your video...
      </div>
    </div>
  );
};
