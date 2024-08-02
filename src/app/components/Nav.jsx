import s from "./Nav.module.css";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";

export const Nav = () => {
  return (
    <div className={s.refNav}>
      <section className={s.navSectionCont}>
        <div className={s.navCont}>
          <div className={s.divNav}>
            <ul className={s.ulNav}>
              <Logo height={"70px"} />
              <ul className={s.ulMenu}>
                <li><Link to="/">Inicio</Link></li>
                <li>
                  <Link to="/about" rel="noreferrer">
                    Quiénes somos
                  </Link>
                </li>
                <li><a href="https://getexpert.netlify.app">GetExpert</a></li>
              </ul>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}