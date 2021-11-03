import React from 'react';
import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

describe('test component', () => {
    // global vars
    const title = 'algo';
    const url = 'http://localhost:3000/';
    const wrapper = shallow(<GifGridItem title={title} url={url} />);

    // just for create snapshot
    it('should render component correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    // test paragraph html element
    it('should had paragraph with title', () => {
        const paragraph = wrapper.find('p');

        expect(paragraph.text().trim()).toBe(title);
    });

    // test props from component
    it('should had same url and alt from props', () => {
        const img = wrapper.find('img');
        console.log(img.prop('src'));

        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });

    // test className
    it('should had style animate_fadeIn', () => {
        const div = wrapper.find('div');
        console.log(div.prop('className'));
        const className = div.prop('className');

        expect(className.includes('animate__fadeIn')).toBe(true);
    });
});
