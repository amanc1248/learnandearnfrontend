import "../../../styles/component/loader/paymentLoader.css";
import { SpinnerLoaderC } from "../spinnerLoader/SpinnerLoader.c";
export const PaymentLoaderP = () => {
  return (
    <div className="payment__loader__div">
      <div className="payment__loader__inner__div">
        <SpinnerLoaderC></SpinnerLoaderC>
        Processing your payment details...
      </div>
    </div>
  );
};
