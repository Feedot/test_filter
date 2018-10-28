import React  from 'react';
import {shallow} from 'enzyme'

import FilterItem from './index'
import CheckBox from '../../components/CheckBox/index'

const props = {
    item:"all",
    type: null,
    changeActiveKey: () => {}
}
const values = [
    "All",
    "Marketing-automation",
    "Ad-network",
    "Analytics",
    "Backend",
    "Game-engine",
    "Development-tool",
    "Social",
    "Commerce"
]

describe('Init components', ()=>{
    const wrapper = shallow(<FilterItem {...props}/>)
    it('init CheckBox', ()=>{
        expect(wrapper.find(CheckBox)).toHaveLength(1)
    })
    it('init default value', () =>{
        expect(wrapper.find('span').text()).toEqual('All')
    })
})

values.map(item =>
    describe('Init filter item',() => {
        const wrapper = shallow(<FilterItem {...{...props, item}}/>)
        it('init item value', ()=>{
            expect(wrapper.find('span').text()).toEqual(item)
        })
    })
)



