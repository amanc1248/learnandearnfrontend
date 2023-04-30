import { LabelInputPasswordNormalC } from "../../components/input/labelInputPasswordNormal/labelInputPasswordNormal.c";
import { LabelInputTextNormalC } from "../../components/input/labelInputTextNormal/labelInputTextNormal.c";
import "../../styles/adminLoginScreen.css";
export const AdminLoginScreenP = () => {
  return (
    <div className="admin__login__screenP__div">
      <form action="" onSubmit={() => {}}>
        <h3 className="admin__login__title">Admin Login</h3>
        <LabelInputTextNormalC
          label="Username"
          labelHtmlForInputId="username"
          inputPlaceholder="Username"
          inputRequired={true}
        ></LabelInputTextNormalC>
        <LabelInputPasswordNormalC
          label="Password"
          labelhtmlForInputId="password"
          labelPlaceholder="Password"
          inputRequired={true}
        ></LabelInputPasswordNormalC>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};
