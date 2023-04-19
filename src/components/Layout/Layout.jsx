import React, {createContext, memo, useContext, useEffect, useRef} from 'react';

import {AppContext} from '../../contexts/AppContext.js';

import Header from '../Header';
import Footer from '../Footer';

const Layout = ({children}) => {
  const modalBg = useRef();

  const appContext = useContext(AppContext);

  useEffect(() => {
    appContext.modalBg = modalBg.current;
  }, [modalBg.current]);

  return <>
    <Header/>
    {children}
    <Footer/>
    <div ref={modalBg} className="modal-background"/>
  </>;
};

export default memo(Layout);