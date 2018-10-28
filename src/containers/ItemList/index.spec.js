import React from 'react'
import {shallow} from 'enzyme'

import Item from '../../components/Item/index'
import ItemList from './index'

const props = {
    list: [],
    activeKey: "all",
    title: ""
}

describe('Init container', () => {
    const wrapper = shallow(<ItemList {...props}/>)
    it('init', () => {
        expect(wrapper.find(Item)).toHaveLength(0)
    })
    it('test state', () => {
        expect(wrapper.state()).toEqual({list: []})
    })
})


