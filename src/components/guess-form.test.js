import React from 'react';
import { shallow, mount } from 'enzyme';
import { GuessForm } from './guess-form';
import { makeGuess } from '../actions';

describe('<GuessForm />', function() {
    it('Renders without crashing', function() {
        shallow(<GuessForm />);
    });

    it('Should dispatch makeGuess when the form is submitted', function() {
        const dispatch = jest.fn();
        const wrapper = mount(<GuessForm dispatch={dispatch} />);
        const value = 7
        const input = wrapper.find('input[type="number"]')
        input.simulate('change', { target: { value: value } });
        wrapper.simulate('submit');
        expect(dispatch).toHaveBeenCalledWith(makeGuess(value));
    });

    it('Should reset the input when the form is submitted', function() {
        const dispatch = jest.fn();
        const wrapper = mount(<GuessForm dispatch={dispatch} />);
        const value = 7
        const input = wrapper.find('input[type="number"]');
        input.simulate('change', { target: { value: value } });
        wrapper.simulate('submit');
        expect(input.instance().value).toEqual('');
    });
});