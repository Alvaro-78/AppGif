import React from 'react';
import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('test component', () => {
    const setCategories = () => {
        return 'cualquier cosa';
    };
    const wrapper = shallow(<AddCategory setCategories={setCategories} />);

    it('should print addCategory component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should changed input text', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        input.simulate('change', { target: { value } });

        expect(wrapper.find('p').text().trim()).toBe(value);
    });
});
