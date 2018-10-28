import React  from 'react';
import PropTypes from 'prop-types'

import styles from './styles.scss';

const Item = ({item: {tags, title}}) =>
    <div className={styles.item}>
        <span>{title}</span>
        <div>
            {
                tags.reduce((arr,item) =>
                    arr.push(item[0].toUpperCase() + item.substring(1,item.length)) && arr
                    ,[])
                    .join(', ')
            }
        </div>
    </div>

Item.propTypes = {
    item: PropTypes.object
}

export  default Item

