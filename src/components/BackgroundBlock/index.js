import React from 'react';
import s from './BackgroundBlock.module.scss';

import backgroundImg from './img/background.jpg';

const BackgroundBlock = ({children, fullheight=true}) => {
  
  const styleCover = {
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: 'cover',
  }
  if(fullheight){
    styleCover.height = '100vh';
  }
  return(
    <div className={s.cover} style={styleCover}>
      <div className='s.wrap'>
        {children}
      </div>
    </div>
  )
}

export default BackgroundBlock;