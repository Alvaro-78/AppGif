import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('test component', () => {
    const setCategories = jest.fn();
    let wrapper;

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    });

    it('should print addCategory component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should changed input text', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        input.simulate('change', { target: { value } });

        expect(wrapper.find('p').text().trim()).toBe(value);
    });

    it('should/n send info freom submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault() {} });

        expect(setCategories).not.toHaveBeenCalled();
    });
});
