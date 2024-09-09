import CircularProgress from '@mui/material/CircularProgress';
import React from 'react';

import style from './styles/Loader.module.css'

const Loader = () => {
  return (
    <div className={style.loaderContainer}>
      <div className={style.Loader}>
        <CircularProgress />
        <p>Подождите немног, идет загрузка...</p>
      </div>
    </div>
  )
}

export default Loader;
