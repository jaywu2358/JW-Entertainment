import React, { useState } from 'react';
import { images } from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper'
import { client } from '../../client';
import './Footer.scss';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className='title'>
      <h2 className="head-text">{t('footer.title')}</h2>
      </div>
      
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:jwentertainment.global@gmail.com" className="p-text">jwentertainment.global@gmail.com</a>
        </div>
        <div className="wechatqr">
          <img src={images.wechatqr} alt="wechatqr" />  
        </div>
      </div>

      

      <p className="copyright">@2023 J&W Entertainment</p>
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
  )