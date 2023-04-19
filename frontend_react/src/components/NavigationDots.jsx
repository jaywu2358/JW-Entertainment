import React from 'react';

const NavigationDots = ( {active} ) => {
  return (
    <div className="app__navigation">
            {['home', 'about', 'service', 'history', 'cases' ,'contact'].map((item, index)=> (
                                     
            // eslint-disable-next-line jsx-a11y/anchor-has-content
            <a 
                href={`#${item}`} 
                key={ item + index }
                className="app__navigation-dot"
                style={active === item ? { backgroundColor: '#ac848e' } : {} }
            />
                
        
    ))}
    </div>
  )
}

export default NavigationDots