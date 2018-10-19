import React  from 'react';

import CheckBox from '../../components/CheckBox/index'
import styles from './styles.scss';

export default ({item, type, changeActiveKey}) =>
        <div
            className={styles.filterItem}
            onClick = {() => changeActiveKey(item)}
        >
            <CheckBox activeKey={type}/>
            {item[0].toUpperCase() + item.substring(1,item.length)}
        </div>
