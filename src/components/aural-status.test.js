import React from 'react';
import { shallow } from 'enzyme';
import { AuralStatus } from './aural-status';

describe('<AuralStatus />', function() {
    it('Renders without crashing', function() {
        shallow(<AuralStatus />);
    });

    it('Renders an aural status update', function() {
        const status = 'You are listening to a game';

        const wrapper = shallow(<AuralStatus auralStatus={status}/>);
        expect(wrapper.contains(status)).toEqual(true);
    });
});