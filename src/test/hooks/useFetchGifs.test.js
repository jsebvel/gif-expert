import { shallow } from "enzyme";
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks'

describe('Test about custom hook useFetch', () => {
    test('should return intial state', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('one punch'));
        const { data, loading } = result.current;
        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBeTruthy()
    });
    
    test('should return imag list and loding in false', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('one punch'));
        await waitForNextUpdate();
        const { data, loading } = result.current;
        expect(data.length).toBe(5);
        expect(loading).toBeFalsy()

    });
});