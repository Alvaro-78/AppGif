import useFetchGifs from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Testing custom Hook useFetchGifs', () => {
    // test what should return our custom hook
    it('return initial state', () => {
        const { result } = renderHook(() => useFetchGifs('random'));
        const { data, loading } = result.current;

        expect(data).toEqual([]);
        expect(loading).toEqual(true);
    });
});
