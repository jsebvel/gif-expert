import { shallow } from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';
import React from 'react';


describe('Testing on Gif expert app', () => {

    test('should match with snapshot', () => {
        const wrapper = shallow(<GifExpertApp />)
        expect(wrapper).toMatchSnapshot();
    });

    test('Should show category list', () => {
        const categories = ['goku', 'saitama', 'the hunter'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />)
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    })
});