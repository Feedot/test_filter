import React  from 'react';

import styles from './styles.scss';

export  default ({item: {tags, title}}) =>
        <div className={styles.item}>
            {title}
            <div>
                {
                    tags.reduce((arr,item) =>
                        arr.push(item[0].toUpperCase() + item.substring(1,item.length)) && arr
                    ,[])
                        .join(', ')
                }
            </div>
        </div>
