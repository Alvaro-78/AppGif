import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('test AddCategory component', () => {
    // calling jest.fn() we doing the same as a empty function
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    // clean mocks before each test
    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    });

    // print snapshot from component
    it('should printed addCategory component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    // find input then change value and simulate if happends
    it('should changed input text', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        input.simulate('change', { target: { value } });

        expect(wrapper.find('p').text().trim()).toBe(value);
    });

    // test form doesn't send any info in the event
    it('should/n send info from submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault() {} });

        expect(setCategories).not.toHaveBeenCalled();
    });

    // test inputChange then submit send info and setCattegories has been called
    it('should been called setCategories and clean textBox', () => {
        const value = 'Hola Pepe';

        wrapper.find('input').simulate('change', { target: { value } });
        wrapper.find('form').simulate('submit', { preventDefault() {} });

        expect(setCategories).toHaveBeenCalled();

        expect(wrapper.find('input').prop('value')).toBe('');
    });
});
