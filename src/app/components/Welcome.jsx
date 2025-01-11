import s from "./Welcome.module.css";
import { motion } from "framer-motion";
import aiImg from "../../assets/images/jpg/ai-image.jpg";

export const Welcome = () => {
  return (
    <div className={s.welcomeCont}>
      <ul className={s.welcomeText}>
        <div className={s.textAlign}>
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            transition={{ duration: 1.5 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2>¡Hola,</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            transition={{ duration: 1.5, delay: .15 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1>Bienvenido/a!</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            transition={{ duration: 1.5, delay: .3 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h3>Únete a nuestra Cooperativa de Programadores</h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            transition={{ duration: 1.5, delay: .45 }}
            animate={{ opacity: 1, x: 0 }}
            className={s.buttonContainer}
          >
            <a className={s.aButton} href="https://terminalkiller.cl/ai-testing">
              <button className={s.buttonIA}>
                Prueba nuestra IA en desarrollo
              </button>
            </a>
            <a className={s.aButton} href="mailto:gwerh.dev@gmail.com">
              <button disabled className={s.buttonContact}>
                Contactar
              </button>
            </a>
          </motion.div>
        </div>
        <div className={s.widthWrapper}>
          <div className={s.wrapper}>
            <div className={s.imageContainer}>
              <img className={s.aiImg} src={aiImg} alt="" />
            </div>
          </div>
        </div>
      </ul>
    </div>
  )
}