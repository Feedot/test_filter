import React from 'react'
import {shallow} from 'enzyme'

import CheckBox from '../../components/CheckBox/index'
import SearchInput from './index'

describe('init SearchInput', () => {
    const wrap = shallow(<SearchInput {...{activeKey: ""}}/>)
    it('render CheckBox', ()=>{
        expect(wrap.find(CheckBox)).toHaveLength(1)
    })
    it('render input', () => {
        expect(wrap.find('input')).toHaveLength(1)
    })
})
