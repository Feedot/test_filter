import React, {Component}  from 'react';

import Filter from '../Filter/index'
import ItemList from '../ItemList/index'

import styles from './styles.scss';

class App extends Component {
    state={
        list: [],
        filterKeys: [],
        activeKey: "all",
        title: ''
    }

    // change active key and disable title value
    changeActiveKey = activeKey =>{
        activeKey !== this.state.activeKey &&
        this.setState({activeKey, title: ''});
        this.input && (this.input.value = '')
    }

    // change title and disable active key when using search input
    // accept value "all" for filter when search input is empty
    changeTitle = e => {
        const {value} = e.target
        this.input = e.target

        // cut excess spaces in input value
        const title = value.split(' ').reduce((arr,item) => {
                item && (arr ? arr+= ` ${item}` : arr += item)
                return arr
        },"")
        if (value) this.setState({activeKey: '', title})
        else this.setState({activeKey: 'all', title: ''})
    }

    // generate tags for filter
    generateTags = list => {

        // generate obj with different tags
        const tags = list.reduce((obj, {tags}) => {
            tags.map(tag => !obj[tag] && (obj[tag] = 1))
            return obj
        },{})

        // getting array with tags and adding key "all" for rendering all items
        const filterKeys = Object.keys(tags)
        filterKeys.unshift('all')

        // init global state for app
        this.setState({filterKeys, list})
    }

    // getting data for app
    componentDidMount(){
        fetch('sdks.json')
            .then(res => res.json())
            .then(({results: list}) => this.generateTags(list))
    }
    render () {
        const {
            state: {filterKeys, activeKey, list, title},
            changeActiveKey, changeTitle
        } = this
        return (
            <div className={styles.app}>
                <Filter {...{filterKeys,activeKey, title, changeActiveKey, changeTitle}}/>
                <ItemList {...{title,list,activeKey}} />
            </div>
        )
    }
}
export default App;
