import React  from 'react';

import SearchInput from '../../components/SearchInput'
import FilterItem from '../../components/FilterItem/index'

import styles from './styles.scss';

export  default ({
        filterKeys, activeKey, changeActiveKey,
        changeTitle, title, self
    }) =>
        <div className={styles.filter}>
            <SearchInput {...{title, changeTitle, activeKey, self}}/>
            {
                filterKeys.map((item,i) =>
                    (
                        item === activeKey
                            ? (<FilterItem {...{item, changeActiveKey, activeKey, type: 'active'}} key={i}/>)
                            : (<FilterItem {...{item, changeActiveKey}} key={i}/>)
                    )
                )
            }
        </div>
