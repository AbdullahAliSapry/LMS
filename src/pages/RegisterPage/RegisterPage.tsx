import { Link } from "react-router-dom";
import Styles2 from "./RegisterPage.module.css";

const {
  TitleSection,
  NameStyle,
  parentDiv,
  RightDiv,
  LeftDiv,
  ImageStyle,
  bodyStyle,
  BtnStyle,
  styleLinkReset,
  styleQ,
} = Styles2;
const NameTeacher = import.meta.env.VITE_SERVER_TeacherName;

export default function RegisterPage() {
  return (
    <>
      <div className={parentDiv}>
        <div className={RightDiv}>
          <div className={styleQ}>
            <span> لديك حساب بالفعل؟</span>
            <Link to={`/login`} className={styleLinkReset}>
              الدخول الي حسابك{" "}
            </Link>
          </div>
          <div className={TitleSection}>
            <h4>أنشاء حساب</h4>
          </div>

          <div className={bodyStyle}>
            <form>
              <div className={NameStyle}>
                <div>
                  <label htmlFor="fName">الاسم الاول</label>
                  <input type="text" id="fName" />
                </div>
                <div>
                  <label htmlFor="mName">الاسم الثاني</label>
                  <input type="text" id="fName" />
                </div>
                <div>
                  <label htmlFor="lName">الاسم الثالث</label>
                  <input type="text" id="fName" />
                </div>
              </div>
              <div>
                <label htmlFor="email">البريد الاكتروني</label>
                <input type="email" id="email" />
              </div>
              <div>
                <label htmlFor="phone">رقم الهاتف</label>
                <input type="text" id="phone" />
              </div>
              <div>
                <label htmlFor="fatherPhone">رقم هاتف ولي الامر</label>
                <input type="text" id="fatherPhone" />
              </div>
              <div>
                <label htmlFor="year">السنه الدراسيه</label>
                <select name="year" id="year">
                  <option value="1">الصف الاول الثانوي</option>
                  <option value="3">الصف الثاني الثانوي</option>
                  <option value="3">الصف الثالث الثانوي</option>
                </select>
              </div>
              <div>
                <label htmlFor="Gender">النوع</label>
                <select name="gender" id="Gender">
                  <option value="male">ذكر</option>
                  <option value="female">أنثى</option>
                </select>
              </div>
              <div>
                <label htmlFor="password"> كلمه المرور</label>
                <input type="text" id="phone" />
              </div>
              <div>
                <label htmlFor="confirmPassword">تأكيد كلمه المرور</label>
                <input type="text" id="confirmPassword" />
              </div>

              <button type="submit" className={BtnStyle}>
                انشاء حساب
              </button>
            </form>
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
