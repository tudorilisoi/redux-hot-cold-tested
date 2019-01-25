import React from 'react';
import { shallow } from 'enzyme';
import StatusSection from './status-section';

describe('<StatusSection />', function() {
    it('Renders without crashing', function() {
        shallow(<StatusSection />);
    });
});