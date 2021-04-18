import { useState } from "react";
import Proptypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2){
            setCategories(lastCategories => [ inputValue, ...lastCategories]);
            setInputValue('');
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                value={inputValue}
                onChange={(e) => {
                    handleInputChange(e);
                }}
            ></input>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: Proptypes.func.isRequired
}