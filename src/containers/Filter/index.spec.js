import React from 'react'
import {shallow} from 'enzyme'

import Filter from '../Filter/index'
import SearchInput from '../../components/SearchInput/index'
import FilterItem from '../../components/FilterItem/index'


const props = {
    filterKeys: [],
    activeKey: "",
    changeActiveKey: () => {},
    changeTitle: () => {},
    title: ""
}

describe('Initial Filter', () => {
    const wrap = shallow(<Filter {...props}/>)
    it('render SearchInput', ()=>{
        expect(wrap.find(SearchInput)).toHaveLength(1)
    })
})

describe('init FilterKeys', ()=> {
    const nextProps = {
        ...props,
        filterKeys: new Array(9).fill("some")
    }
    const wrapper = shallow(<Filter {...nextProps}/>)
    it('render FilterItem', () => {
        expect(wrapper.find(FilterItem)).toHaveLength(nextProps.filterKeys.length)
    })
})

