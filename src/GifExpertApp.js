import { useState } from "react";
import { AddCategory } from "./Components/AddCategory";
import { GifGrid } from "./Components/GifGrid";

const GifExpertApp = ({defaultCategories = []}) => {
    // const [categories, setCategories] = useState(['One punch']);
    const [categories, setCategories] = useState(defaultCategories);
    // const categories = ['One punch', 'Samuari X', 'Dragon Ball'];
    // const handleApp = () => {
    //     setCategories([...categories, 'Yuyu Hakusho']);
    //     console.log(categories);
    // }

    return <>
        <h2>Gif ExpertApp</h2>
        <AddCategory setCategories={setCategories} />
        <hr />
        <ol>
            {
                categories.map(categorie => (
                   <GifGrid
                    key={categorie}
                    category= {categorie}
                    />
                ))
            }
        </ol>
    </>
}
export default GifExpertApp;