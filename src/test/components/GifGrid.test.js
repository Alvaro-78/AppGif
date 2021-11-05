import React from 'react';
import { shallow } from 'enzyme';
import GifGrid from '../../components/GifGrid';
import useFetchGifs from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('test GifGrid component', () => {
    // Mock data
    useFetchGifs.mockReturnValue({
        data: [],
        loading: true,
    });

    const category = 'random';
    const wrapper = shallow(<GifGrid category={category} />);

    // tes component
    it('should render component correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    // test our custom Hook return mock data
    it('should show items when images are loaded useFetchGifs', () => {
        const gifs = [
            {
                id: 'abc',
                url: 'https://localhost/loquesea/cosa.jpg',
                title: 'Cualquiercosa',
            },
            {
                id: 'def',
                url: 'https://localhost/loquesea/otracosa.jpg',
                title: 'Cualquier otra cosa',
            },
        ];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
        });

        const wrapper = shallow(<GifGrid category={category} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    });
});
