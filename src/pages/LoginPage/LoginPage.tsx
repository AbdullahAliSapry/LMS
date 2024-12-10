import { Link } from "react-router-dom";
import Styles from "./LoginPage.module.css";

const {
  parentDiv,
  RightDiv,
  LeftDiv,
  titleStyle,
  ImageStyle,
  bodyStyle,
  BtnStyle,
  styleLinkReset,
  styleQ,
} = Styles;

const NameTeacher = import.meta.env.VITE_SERVER_TeacherName;
export default function LoginPage() {
  return (
    <>
      <div className={parentDiv}>
        <div className={RightDiv}>
          <div className={titleStyle}>
            <span>مرحبا بعودتك</span>
            <h4>موقع مستر {NameTeacher}</h4>
          </div>
          <div className={bodyStyle}>
            <form>
              <div>
                <label htmlFor="EMailOrPhone">
                  البريد الاكتروني/رقم الهاتف
                </label>
                <input type="text" id="EMailOrPhone" />
              </div>
              <div>
                <label htmlFor="Password">كلمة المرور</label>
                <input type="password" id="Password" />
                <Link to={`/reset-password`} className={styleLinkReset}>
                  نسيت كلمه السر؟
                </Link>
              </div>
              <button type="submit" className={BtnStyle}>
                تسجيل الدخول
              </button>
            </form>
            <div className={styleQ}>
              <span>ليس لديك حساب ؟ </span>
              <Link to={`/register`} className={styleLinkReset}>
                انشاء حساب جديد
              </Link>
            </div>
          </div>
        </div>
        <div className={LeftDiv}>
          <img
            src="./../../../src/assets/images/change_color.png"
            alt=""
            className={ImageStyle}
          />{" "}
        </div>
      </div>
    </>
  );
}
