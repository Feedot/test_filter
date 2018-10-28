import React  from 'react';
import PropTypes from 'prop-types'

import CheckBox from '../../components/CheckBox/index'
import styles from './styles.scss';

const FilterItem = ({item, type, changeActiveKey}) =>
    <div
        className={styles.filterItem}
        onClick = {() => changeActiveKey(item)}
    >
        <CheckBox activeKey={type}/>
        <span>{item[0].toUpperCase() + item.substring(1,item.length)}</span>
    </div>

FilterItem.propTypes = {
    item: PropTypes.string,
    type: PropTypes.string,
    changeActiveKey: PropTypes.func
}

export default FilterItem

