import { shallow } from 'enzyme';
import { AddCategory } from '../Components/AddCategory';

describe('test in add category', () => {
    const setCategories = jest.fn();
    let wrapper;
    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}></AddCategory>);

    });

    test('snapshop match', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Should change input text', () => {
        const inputValue = 'kid vs cat';
        const input = wrapper.find('input');
        input.simulate('change', { target: { value: inputValue } });
    });

    test('Should not call on submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault() { } });
        expect(setCategories).not.toHaveBeenCalled()
    });

    test('should call set categories and clean input text', () => {
        const inputValue = 'catwoman';
        const input = wrapper.find('input').simulate('change', { target: { value: inputValue } });
        const form = wrapper.find('form').simulate('submit', { preventDefault() { } });
        expect(setCategories).toHaveBeenCalled();
        expect(wrapper.find('input').prop('value')).toBe('');

    });
});