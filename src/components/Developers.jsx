import s from './css/Developers.module.css'
import { useEffect } from 'react'
import { removeLocalStorage } from '../functions/RemoveLocalStorage'
import { motion } from 'framer-motion'
import nachoPic from '../images/nacho-iconic.png'
import laloPic from '../images/LaloFreak.png'

export const Developers = () => {
  useEffect(()=> {removeLocalStorage()},[])
  return (
    <div className={s.developersCont}>
      <div className={s.cardsCont} style={{padding:"8rem", display:"flex", justifyContent:"space-around"}}>
          <a target='_blank' rel="noreferrer" href='http://gwerh.developers.terminalkiller.site/'>
            <motion.div 
              initial={{opacity:0, y:10, background:"#ffffff20", boxShadow:"0px 0px 20px white", width: "300px", borderRadius:"15px", paddingBottom:"50px"}}
              transition={{duration: 2, type: 'spring'}}
              animate={{opacity:1, y:0}}
              >
          <>
              <img 
                  className={s.imgProfile} 
                  src={laloPic} 
                  alt="NachoIconic" 
                  width="100px"
                  />
              <h2 className={s.name} style={{color: "white", fontFamily:'Poppins', fontWeight: '300', filter:'drop-shadow(0px 0px .1px yellow)'}}>Gerardo Guarda</h2>
              <h3 className={s.alias} style={{color: "white", fontWeight: 'thin'}}>gwerh</h3>
          </>          
            <p style={{color:'white', fontFamily:'Poppins'}}>
              Develop, Design & Sound
            </p>

            </motion.div>
          </a>
          <a target='_blank' rel="noreferrer" href='https://portfolio-ignacio-melgarejo-27.vercel.app/'>
            <motion.div 
              initial={{opacity:0, y:10, background:"#ffffff20", boxShadow:"0px 0px 20px white", width: "300px", borderRadius:"15px", paddingBottom:"50px"}}
              transition={{duration: 2, type: 'spring'}}
              animate={{opacity:1, y:0}}
              >
          <>
              <img 
                  className={s.imgProfile} 
                  src={nachoPic} 
                  alt="NachoIconic" 
                  width="100px"
                  />
              <h2 className={s.name} style={{color: "white", fontFamily:'Poppins', fontWeight: '300', filter:'drop-shadow(0px 0px .1px yellow)'}}>Ignacio Melgarejo</h2>
              <h3 className={s.alias} style={{color: "white", fontWeight: 'thin'}}>nachoiconic</h3>
          </>
            <p style={{color:'white', fontFamily:'Poppins'}}>
              FullStack Web Developer
            </p>

            </motion.div>
          </a>

        </div>

    </div>
  )
}