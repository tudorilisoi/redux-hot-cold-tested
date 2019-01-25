import React from 'react';
import { shallow } from 'enzyme';
import Game from './game';

describe('<Game />', function() {
    it('Renders without crashing', function() {
        shallow(<Game />);
    });
});