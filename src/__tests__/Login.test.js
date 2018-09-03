import React from 'react';
import { shallow , mount } from 'enzyme';
import LoginPage from '../LoginPage/index';
import sinon from 'sinon';

let wrapped;
const wrapper = shallow(<LoginPage/>)

beforeEach(() => {
    wrapped = shallow(<LoginPage />)
});

describe('test cases for Login Page', () => {
    it('has a email input', () => {
        expect(wrapped.find('.email').length).toEqual(1);
    });

    it('has a password input', () => {
        expect(wrapped.find('.password').length).toEqual(1);
    })

    it('has a signin button', () => {
        expect(wrapped.find('.signIn').length).toEqual(1);
    })

    beforeEach(() => {
        wrapped.find('.email').simulate('change', {
            target: { value: 'demo@gmail.com' }
        });
        wrapped.update();
    });

    it('has input email text field that users can type in ', () => {
        expect(wrapped.find('.email').prop('value')).toEqual('demo@gmail.com');
    })

    beforeEach(() => {
        wrapped.find('.password').simulate('change', {
            target: { value: '123' }
        })
        wrapped.update();
    });

    it('has input password text field that users can type in ', () => {
        expect(wrapped.find('.password').prop('value')).toEqual('123')
    })

});

describe('<>')
