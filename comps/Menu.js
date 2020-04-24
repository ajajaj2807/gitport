import "../styles/main.scss";

const Menu = (props) => {
  return (
    <div className="menu-container">
      <div className="close-btn" onClick={props.close}>
        <i class="fas fa-times"></i>
      </div>
      <div className="menu-info">
        <span className="mail">
          Send me a 'Hi!' at: <br /> <b>ajajaj2807@gmail.com</b>
        </span>
        <span className="address">
          Find me at: <br />
          <b>
            {" "}
            MMM Hall, IIT Kharagpur <br /> WB, India 721302{" "}
          </b>
        </span>
        <div className="menu-social">
          <a href="https://www.fb.com/ajajaj2807">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com/_ajajaj_">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/ajajaj2807">
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a href="https://www.github.com/ajajaj2807">
            <i class="fab fa-github"></i>
          </a>
        </div>
      </div>
      <div className="nav-items">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/cv">Curriculum Vitae</a>
      </div>
    </div>
  );
};

export default Menu;
