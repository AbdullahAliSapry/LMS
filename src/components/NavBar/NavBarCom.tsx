import { Link } from "react-router-dom"; // استيراد Link من React Router
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button"; // استيراد Button من React Bootstrap
import Styles from "./NavBarCom.module.css"

const { styleBtn, StyleLink } = Styles;
const NameTeacher = import.meta.env.VITE_SERVER_TeacherName;

function NavBarCom() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        {/* الشعار في البداية */}
        <Navbar.Brand as={Link} to={'/'}>موقع الاستاذ {NameTeacher}</Navbar.Brand>

        {/* قائمة التبديل على الشاشات الصغيرة */}
        <Navbar.Toggle aria-controls="navbarScroll" />

        {/* توسيط الروابط في المنتصف */}
        <Navbar.Collapse id="navbarScroll" className="justify-content-center">
          <Nav
            className="d-flex justify-content-center my-2 my-lg-0" // توسيط الروابط
            style={{ maxHeight: "100px" }}
            navbarScroll>
            <Nav.Link as={Link} to="/">
              الرئيسية
            </Nav.Link>
            <Nav.Link as={Link} to="/lectures">
              المحاضرات
            </Nav.Link>
            <Nav.Link as={Link} to="/packages">
              الباقات
            </Nav.Link>
            <Nav.Link as={Link} to="/complaints">
              الشكاوي
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        {/* زر "تسجيل الدخول" في النهاية */}
        <Navbar.Text>
          <Button variant="primary" className={styleBtn}>
            <Link to={`/login`} className={StyleLink}> تسجيل الدخول</Link>
          </Button>
        </Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default NavBarCom;
