import { AuthenticateLoginHOCC } from "../../HOCs/AuthenticateLogin/AuthenticateLogin.hoc.c"
import { CourseContentC } from "./CourseContent.c"

export const CourseContentScreen = ()=>{
    return <>
        <AuthenticateLoginHOCC
        WrappedComponent={CourseContentC}
        ></AuthenticateLoginHOCC>
    </>
}