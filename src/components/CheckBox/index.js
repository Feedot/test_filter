import React from 'react';
import PropTypes from 'prop-types'

import styles from './styles.scss';

const CheckBox = ({activeKey}) =>
        <div className={styles.outside}>
            {activeKey && <div></div>}
        </div>

CheckBox.propTypes = {
    activeKey: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool
    ])
}

export default CheckBox
