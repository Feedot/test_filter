import React, {Component}  from 'react';

import Item from '../../components/Item/index'

import styles from './styles.scss';

class ItemList extends Component {
    state = {list: []}

    // filtration depends on active key or title and change state for re-render component
    changeList = (list, activeKey, title) => {
        // set all list when filter has value "all"
        if (activeKey === 'all') this.setState({list})
        else if (title) {
            this.setState({
                // filtration elements which matches with title
                list: list.filter(item =>
                        !item.title.toLowerCase().indexOf(title.toLowerCase()) && item)
            })
        }
        else this.setState({
                // filtration elements which matches with active key
                list: list.filter(item => item.tags.some((elem) => elem === activeKey) && item)
            })

    }

    // this method calls function when will be changed active key filter
    componentWillReceiveProps({activeKey,list, title}) {
        this.changeList(list, activeKey, title)
    }
    render () {
        const {state: {list}} = this
        return (
            <div className={styles.itemList}>
                {list.map((item,i) => <Item key={i} {...{item}}/>)}
            </div>
        )
    }
}
export default ItemList;
