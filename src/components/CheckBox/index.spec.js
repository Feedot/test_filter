import React  from 'react';
import {shallow} from 'enzyme'

import CheckBox from './index'

describe ('CheckBox off', () => {
    const wrapper = shallow(<CheckBox {...{activeKey: false}}/>)
    it('off', ()=>{
        expect(wrapper.find('div')).toHaveLength(1)
    })
})

describe('CheckBox on', ()=>{
    const wrapper = shallow(<CheckBox {...{activeKey: true}}/>)
    it('on', ()=> {
        expect(wrapper.find('div')).toHaveLength(2)
    })
})
