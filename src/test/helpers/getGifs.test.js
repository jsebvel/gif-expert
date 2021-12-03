import { shallow } from 'enzyme';
import { getGifs } from '../../helpers/getGifs';

describe('tests about function get gifs fetch', () => {
    test('Should have at leat 5 elements', async () => {
        const result = await getGifs('one punch');
        expect(result.length).toBe(5)
    });
});