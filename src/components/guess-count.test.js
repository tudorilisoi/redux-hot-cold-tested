import React from 'react';
import { shallow } from 'enzyme';
import { GuessCount } from './guess-count';

describe('<GuessCount />', function() {
    it('Renders without crashing', function() {
        shallow(<GuessCount />);
    });

    it('Renders the correct guess count', function() {
        const value = 7;
        const wrapper = shallow(<GuessCount guessCount={value}/>);
        expect(wrapper.text()).toEqual(`You've made ${value} guesses!`);
    });
});