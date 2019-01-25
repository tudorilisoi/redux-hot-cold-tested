import React from 'react';
import { shallow } from 'enzyme';
import InfoSection from './info-section';

describe('<InfoSection />', function() {
    it('Renders without crashing', function() {
        shallow(<InfoSection />);
    });
});