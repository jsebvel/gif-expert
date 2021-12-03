import { shallow } from 'enzyme';
import { GifGrid } from '../Components/GifGrid';
import { useFetchGifs } from '../hooks/useFetchGifs';
import '@testing-library/jest-dom';
jest.mock('../hooks/useFetchGifs');


describe('Test on GifGrid', () => {
    const category = 'guitar';
    // beforeEach(() => {
    //     wrapper = shallow(<GifGrid category={'anyCat'}></GifGrid>)
    // })
    test('Snapshot should match', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        const wrapper = shallow(<GifGrid category={category} />)
        expect(wrapper).toMatchSnapshot();
    });

    test('Should show items where images are loaded', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: false,
        });

        const gifs = [
            {
                id: 'ABC',
                url: 'https://anything',
                title: 'any title'

            },
            {
                id: 'ABCD',
                url: 'https://anythingD',
                title: 'any titleD'

            }
        ]

        useFetchGifs.mockReturnValue({
            data: gifs, 
            loading: false
        })
        const wrapper = shallow(<GifGrid category= {category} />)
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGreedItem').exists()).toBe(true);
        expect(wrapper.find('GifGreedItem').length).toBe(gifs.length);
    });
});
