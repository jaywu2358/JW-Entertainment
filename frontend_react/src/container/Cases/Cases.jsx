import React　from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants';
import './Cases.scss';
import { useTranslation } from 'react-i18next';

const Cases = () => {
  const { t } = useTranslation();

  return (
    <>
      <h2 className="head-text">
        <span> {t('cases.title')} </span>        
        </h2>
      
        <div className="app__profiles">
            <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="case-item"
            >
              <img src={images.jenfo} atl="Social Account Management"/>
              <h2 className="bole-text" style={{ marginTop: 20 }}>{t('cases.name1')}</h2>
              <p className="p-text" style={{ marginTop: 10 }}><strong>{t('cases.platform')}</strong>{t('cases.platform1')}</p>
              <p className="p-text" style={{ marginTop: 10 }}><strong>{t('cases.length')}</strong><br/>{t('cases.length1')}</p>
              <p className="p-text" style={{ marginTop: 10 }}><strong>{t('cases.follower')}</strong>{t('cases.follower1')}</p>
              <p className="p-text" style={{ marginTop: 10 }}><strong>{t('cases.income')}</strong>{t('cases.income1')}</p>

            </motion.div>

            <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="case-item"
            >
              <img src={images.penny} />
              <h2 className="bole-text" style={{ marginTop: 20 }}>{t('cases.name2')}</h2>
              <p className="p-text" style={{ marginTop: 10 }}><strong>{t('cases.platform')}</strong>{t('cases.platform2')}</p>
              <p className="p-text" style={{ marginTop: 10 }}><strong>{t('cases.length')}</strong><br/>{t('cases.length2')}</p>
              <p className="p-text" style={{ marginTop: 10 }}><strong>{t('cases.follower')}</strong>{t('cases.follower2')}</p>
              <p className="p-text" style={{ marginTop: 10 }}><strong>{t('cases.income')}</strong>{t('cases.income2')}</p>
            </motion.div>

            <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="case-item"
            >
              <img src={images.josh} />
              <h2 className="bole-text" style={{ marginTop: 20 }}>{t('cases.name3')}</h2>
              <p className="p-text" style={{ marginTop: 10 }}><strong>{t('cases.platform')}</strong>{t('cases.platform3')}</p>
              <p className="p-text" style={{ marginTop: 10 }}><strong>{t('cases.length')}</strong><br/>{t('cases.length3')}</p>
              <p className="p-text" style={{ marginTop: 10 }}><strong>{t('cases.follower')}</strong>{t('cases.follower3')}</p>
              <p className="p-text" style={{ marginTop: 10 }}><strong>{t('cases.income')}</strong>{t('cases.income3')}</p>
            </motion.div>

           

            <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="case-item"
            >
              <img src={images.era} />
              <h2 className="bole-text" style={{ marginTop: 20 }}>{t('cases.name4')}</h2>
              <p className="p-text" style={{ marginTop: 10 }}><strong>{t('cases.platform')}</strong>{t('cases.platform4')}</p>
              <p className="p-text" style={{ marginTop: 10 }}><strong>{t('cases.length')}</strong><br/>{t('cases.length4')}</p>
              <p className="p-text" style={{ marginTop: 10 }}><strong>{t('cases.follower')}</strong>{t('cases.follower4')}</p>
              <p className="p-text" style={{ marginTop: 10 }}><strong>{t('cases.income')}</strong>{t('cases.income4')}</p>
            </motion.div>
        </div>

        <div className="statement">
          <p>{t('cases.statement')}</p>
        </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Cases, 'app__cases'), 
  'cases',
  "app__whitebg"
);