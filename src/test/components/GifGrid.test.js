import React from 'react';
import { shallow } from 'enzyme';
import GifGrid from '../../components/GifGrid';
import useFetchGifs from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('test GifGrid component', () => {
    useFetchGifs.mockReturnValue({
        data: [],
        loading: true,
    });

    const category = 'random';
    const wrapper = shallow(<GifGrid category={category} />);

    it('should render component correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should show items when images are loaded useFetchGifs  ', () => {
        const gifs = [
            {
                id: 'abc',
                url: 'https://localhost/loquesea/cosa.jpg',
                title: 'Cualquiercosa',
            },
        ];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: true,
        });

        const wrapper = shallow(<GifGrid category={category} />);

        expect(wrapper).toMatchSnapshot();
    });
});
