import React  from 'react';
import PropTypes from 'prop-types'

import SearchInput from '../../components/SearchInput'
import FilterItem from '../../components/FilterItem/index'

import styles from './styles.scss';

const Filter = ({
                    filterKeys, activeKey, changeActiveKey,
                    changeTitle: onChange, title,
                }) =>

    <div className={styles.filter}>
        <SearchInput {...{title, onChange}}/>
        {
            filterKeys &&
            filterKeys.map((item,i) =>
                (
                    item === activeKey
                        ? (<FilterItem {...{item, changeActiveKey, activeKey, type: 'active'}} key={i}/>)
                        : (<FilterItem {...{item, changeActiveKey, type: ""}} key={i}/>)
                )
            )
        }
    </div>

Filter.propTypes = {
    filterKeys: PropTypes.array,
    activeKey: PropTypes.string,
    changeActiveKey: PropTypes.func,
    changeTitle: PropTypes.func,
    title: PropTypes.string
}
export  default Filter
