import React from 'react';
import { connect } from 'dva';
import User from '../components/User'
// import styles from './IndexPage.css';

function Cart() {
  return (
      <>
        <User></User>
      </>
  );
}


export default connect()(Cart);
