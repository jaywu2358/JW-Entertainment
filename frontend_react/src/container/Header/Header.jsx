import React from 'react';
import { motion } from 'framer-motion';
import './Header.scss';
import { useTypewriter } from 'react-simple-typewriter'
import { AppWrap } from '../../wrapper';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();

  const [text, count] = useTypewriter({
    words: [
       t('header.title'),
    ],
    loop: true,
    delaySpeed: 2000
  });

  

  return (
    <div className="app__header app__flex">

      <motion.div
        whileInView={{ opacity: [0, 1], scale:[0, 1] }}               
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img">
          
          <div className="app__header-badge">
            <motion.div             
            whileInView={{ scale: [0, 1.5, 1] }}
            transition={{ duration: 1, ease: 'easeInOut' }} 
            className="">

                <h1><span>{text} &lt;</span></h1>
                <br />
                <br />
                <p>{t('header.des')}</p>
                              

            </motion.div>        
          

            
          </div>
                  
      </motion.div>

    </div>
  )
}

export default AppWrap(Header, 'home');