import React from 'react';

import styles from './styles.scss';

export default ({activeKey}) => {
    return (
        <div className={styles.outside}>
            {activeKey && <div></div>}
        </div>
    )
}
