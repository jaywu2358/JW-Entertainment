import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import {  client } from '../../client';
import { useTranslation } from 'react-i18next';
import './History.scss';


const History = () => {
  const { t } = useTranslation();

  return (
    <>
    <div className="app__skills-container">
    <div className='title'>
      <h2 className='head-text'><span>{t('history.title')}</span></h2>
    </div>

      <motion.div
        className="app__skills-exp-item"
        key="1"
      >
        <div className="app__skills-exp-year">
          <p className="bold-text">2017</p>
        </div>
          <motion.div className="app__skills-exp-works">
                <motion.div
                whileInView={{opacity: [0, 1]}}
                transition={{duration: 0.5}}
                className="app__skills-exp-work"
                data-tip               
                >
                  <h4 className="bold-text">{t('history.title1')}</h4>
                  <p className="p-text">{t('history.des1')}</p>
                </motion.div>
           </motion.div>
      </motion.div>

      <motion.div
        className="app__skills-exp-item"
        key="1"
      >
        <div className="app__skills-exp-year">
          <p className="bold-text">2019</p>
        </div>
          <motion.div className="app__skills-exp-works">
                <motion.div
                whileInView={{opacity: [0, 1]}}
                transition={{duration: 0.5}}
                className="app__skills-exp-work"
                data-tip               
                >
                  <h4 className="bold-text">{t('history.title2')}</h4>
                  <p className="p-text">{t('history.des2')}</p>
                </motion.div>
           </motion.div>
      </motion.div>

      <motion.div
        className="app__skills-exp-item"
        key="1"
      >
        <div className="app__skills-exp-year">
          <p className="bold-text">2021</p>
        </div>
          <motion.div className="app__skills-exp-works">
                <motion.div
                whileInView={{opacity: [0, 1]}}
                transition={{duration: 0.5}}
                className="app__skills-exp-work"
                data-tip               
                >
                  <h4 className="bold-text">{t('history.title3')}</h4>
                  <p className="p-text">{t('history.des3')}</p>
                </motion.div>
           </motion.div>
      </motion.div>

      <motion.div
        className="app__skills-exp-item"
        key="1"
      >
        <div className="app__skills-exp-year">
          <p className="bold-text">2022</p>
        </div>
          <motion.div className="app__skills-exp-works">
                <motion.div
                whileInView={{opacity: [0, 1]}}
                transition={{duration: 0.5}}
                className="app__skills-exp-work"
                data-tip               
                >
                  <h4 className="bold-text">{t('history.title4')}</h4>
                  <p className="p-text">{t('history.des4')}</p>
                </motion.div>
           </motion.div>
      </motion.div>

      <motion.div
        className="app__skills-exp-item"
        key="1"
      >
        <div className="app__skills-exp-year">
          <p className="bold-text">{t('history.now')}</p>
        </div>
          <motion.div className="app__skills-exp-works">
                <motion.div
                whileInView={{opacity: [0, 1]}}
                transition={{duration: 0.5}}
                className="app__skills-exp-work"
                data-tip               
                >
                  <h4 className="bold-text">{t('history.title5')}</h4>
                  <p className="p-text">{t('history.des5')}</p>
                </motion.div>
           </motion.div>
      </motion.div>

      
      
    </div>
    
    </>
  )
}

export default AppWrap(
  MotionWrap(History, 'app__history'), 
  'history',
  "app__whitebg"
);