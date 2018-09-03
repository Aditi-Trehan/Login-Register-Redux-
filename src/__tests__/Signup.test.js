import React from 'react';
import { shallow} from 'enzyme';

import SignUpPage from '../SignUpPage';

let wrapped;

beforeEach(()=>{
    wrapped = shallow(<SignUpPage/>)
});

describe('test cases for signup page',()=>{
    it('has a first name input',()=>{
        expect(wrapped.find('.first_name').length).toEqual(1);
    });

    it ('has last name text field',()=>{
        expect(wrapped.find('.last_name').length).toEqual(1);
    })

    it('has an email text field',()=>{
        expect(wrapped.find('.email').length).toEqual(1);
    })

    it('has a password text field',()=>{
        expect(wrapped.find('.password').length).toEqual(1);
    })

    it('has a confirm password text field',()=>{
        expect(wrapped.find('.confirm_password').length).toEqual(1);
    })

    it('has a signup button ',()=>{
        expect(wrapped.find('.signUp').length).toEqual(1);
    })

    beforeEach(()=>{
        wrapped.find('.email').simulate('change',{
            target:{value:'demo@gmail.com'}
        });
        wrapped.update();
    });

    it('has an input email text field that users can type in',()=>{
        expect(wrapped.find('.email').prop('value')).toEqual('demo@gmail.com');
    })

    beforeEach(()=>{
        wrapped.find('.password').simulate('change',{
            target:{value:'123'}
        });
        wrapped.update();
    });

    it('has an input password text field that users can type in',()=>{
        expect(wrapped.find('.password').prop('value')).toEqual('123');
    })

    beforeEach(()=>{
        wrapped.find('.confirm_password').simulate('change',{
            target:{value:'123'}
        });
        wrapped.update();
    });

    it('has an input confirm password text field that users can type in ',()=>{
        expect(wrapped.find('.confirm_password').prop('value')).toEqual('123');
    })

    

})