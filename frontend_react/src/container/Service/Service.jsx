import React, {useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants';
import './Service.scss';
import { useTranslation } from 'react-i18next';

const Service = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <h2 className="head-text">
        <span> {t('service.title')} </span>        
        </h2>
      
        <div className="app__profiles">
            <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            >
              <img src={images.publicrelationship} atl="Social Account Management"/>
              <h2 className="bole-text" style={{ marginTop: 20 }}>{t('service.title1')} </h2>
              <p className="p-text" style={{ marginTop: 10 }}>{t('service.des1')}</p>

            </motion.div>

            <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            >
              <img src={images.creatingguidance} />
              <h2 className="bole-text" style={{ marginTop: 20 }}>{t('service.title2')}</h2>
              <p className="p-text" style={{ marginTop: 10 }}>{t('service.des2')}</p>
            </motion.div>

            <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            >
              <img src={images.stableincome} />
              <h2 className="bole-text" style={{ marginTop: 20 }}>{t('service.title3')}</h2>
              <p className="p-text" style={{ marginTop: 10 }}>{t('service.des3')}</p>
            </motion.div>

            <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            >
              <img src={images.safetyguarantee} />
              <h2 className="bole-text" style={{ marginTop: 20 }}>{t('service.title4')}</h2>
              <p className="p-text" style={{ marginTop: 10 }}>{t('service.des4')}</p>

            </motion.div>
        </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Service, 'app__service'), 
  'service',
  "app__whitebg"
);