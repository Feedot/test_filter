import React from 'react';

import CheckBox from '../../components/CheckBox/index'
import icon from '../../assets/img/search_icon.png'

import styles from './styles.scss';

export default ({changeTitle, title, activeKey, self}) => {

    // validate on first space
    const onKeyPress = e => {
        const key = e.keyCode || e.which;
        (key === 32 && !e.target.value) && e.preventDefault()
    }
    const onChange = e => {
        self.input = e.target
        changeTitle(e)
    }
    return (
        <div className={styles.srcInput}>
            <CheckBox {...{activeKey: title}}/>
            <div className={styles.inputWrapper}>
                <img src={icon} alt=""/>
                <input {...{onKeyPress, onChange, placeholder: 'Search',}}/>
            </div>
        </div>
    )
}
