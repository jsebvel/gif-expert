import { shallow } from 'enzyme';
import { GifGreedItem } from '../Components/GifGreedItem.js';

describe('test about gif greed item', () => {
    const title = 'some title';
    const url = 'some url';
    const wrapper = shallow(<GifGreedItem title={title} url={url}></GifGreedItem>)

    test('snapshot should match', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('shallow should contain title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe('some title');
    });

    test('shallow should contain img url and alt', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });
});