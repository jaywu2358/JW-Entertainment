import React from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import './NavBar.scss';
import { images }  from '../../constants'
import { useState } from 'react';
import { useTranslation } from 'react-i18next';


const NavBar = ( {onLanguageChange} ) => {
    const [toggle, setToggle] = useState(false); 
    const { t, i18n } = useTranslation();
    
    const handleLanguageChange = (lng) => {
        i18n.changeLanguage(lng);
        onLanguageChange(lng);
      };
      
  return (
    <nav className="app__navbar">
        <div className="app__navbar-logo">
            <a href={"/#home"}>
            <img src={images.logo} alt="logo" />
            </a>
            
        </div>
        <ul className="app__navbar-links">
        
            {['home', 'about', 'service', 'history', 'cases', 'contact'].map((item)=> (
                <li className="app__flex p-text" key={`link-${item}`}>
                    <div />
                     <a href={`#${item}`}>{t(item)}</a>
                     
                </li>
                
            ))}   
        </ul>

        <button onClick={()=>handleLanguageChange('en')} id="english" class="lang-btn"><img src={images.usflag} alt="Flag Icon" class="flag-icon"/>EN</button>
        <button onClick={()=>handleLanguageChange('cn')} id="chinese" class="lang-btn"><img src={images.cnflag} alt="Flag Icon" class="flag-icon"/>中文</button>
        <button onClick={()=>handleLanguageChange('jp')} id="japanese" class="lang-btn"><img src={images.jpflag} alt="Flag Icon" class="flag-icon"/>日語</button>

        <div className="app__navbar-menu">
            <HiMenuAlt4 onClick={()=> setToggle(true)}/>
            {toggle && (
                    <motion.div
                        whileInView={{ x: [300, 0]}}
                        transition={{ duration: 0.85, ease: 'easeOut' }}
                    >
                        
                        <HiX onClick={()=> setToggle(false)}/>
                        <ul>
                        {['home', 'about', 'service', 'history', 'cases', 'contact'].map((item)=> (
                            <li key={item}>                                
                                <a href={`#${item}`} onClick={() => setToggle(false)}>{t(item)}</a>
                            </li>
                        ))}
                        </ul>
                    </motion.div>
                )}
        </div>
    </nav>
  )
}

export default NavBar