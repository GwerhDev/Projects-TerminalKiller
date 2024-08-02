import s from './Logo.module.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import logo from "../../assets/images/svg/terminalkiller-logo.svg";

export const Logo = (props) => {
  const { href, height } = props;

  return (
    <Link to={href || "/"} className={s.container}>
      <img className={s.terminalkillerLogo} src={logo} alt="Logo" height={height || "100%"} />
      <ul className={s.slogan}>
        <p className={s.title} style={{ fontSize: `calc(${height}/4)` }}>TerminalKiller Project</p>
        <small className={s.subtitle} style={{ fontSize: `calc(${height}/8)` }}>Aprende, comparte y hazlo tú mismo</small>
      </ul>
    </Link>
  );
};
