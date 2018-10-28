import React from 'react';

import CheckBox from '../../components/CheckBox/index'
import icon from '../../assets/img/search_icon.png'

import styles from './styles.scss';

export default ({onChange, title: activeKey}) =>
        <div className={styles.srcInput}>
            <CheckBox {...{activeKey}}/>
            <div className={styles.inputWrapper}>
                <img src={icon} alt=""/>
                <input
                    {...{
                    // validate on first space
                        onKeyPress: e =>
                            ((e.keyCode || e.which) === 32 &&
                            !e.target.value) && e.preventDefault(),
                        onChange,
                        placeholder: 'Search',
                    }}
                />
            </div>
        </div>
