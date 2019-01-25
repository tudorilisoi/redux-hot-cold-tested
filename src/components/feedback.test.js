import React from 'react';
import { shallow } from 'enzyme';
import { Feedback } from './feedback';

describe('<Feedback />', function() {
    it('Renders without crashing', function() {
        shallow(<Feedback />);
    });

    it('Renders some feedback', function() {
        const feedback = 'Test feedback';

        const wrapper = shallow(<Feedback feedback={feedback}/>);
        expect(wrapper.contains(feedback)).toEqual(true);
    });
});