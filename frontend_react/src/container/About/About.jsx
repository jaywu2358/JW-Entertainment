import React, {useState, useEffect } from 'react';
import { AppWrap, MotionWrap } from '../../wrapper';
import { useTranslation } from 'react-i18next';
import './About.scss';


const About = () => {
  const { t } = useTranslation();
 
  return (
    <>
      <h2 className="head-text">
      <span> {t('about.about')} </span>
      <br />  
      </h2>

      <p>{t('about.description')}</p>
      <br />
      <br />    
      
        
    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'), 
  'about',
  "app__whitebg"
);