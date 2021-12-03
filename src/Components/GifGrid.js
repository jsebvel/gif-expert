import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGreedItem } from "./GifGreedItem";
import PropTypes from 'prop-types';


export const GifGrid = ({ category }) => {
    // const [images, setImages] = useState([])
    // useEffect(() => {
    //     getGifs(category).then(imgs => setImages(imgs));
    // }, [category])
    const { data: images, loading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {loading && <p className="animate_animated animate_fadeIn">{category}</p>}
            <div className="card-grid animate__animated animate__bounce">
                {
                    images.map(img =>
                        <GifGreedItem
                            key={img.id}
                            {...img} />
                    )
                }
            </div>
        </>
    )
}

GifGrid.protoTypes = {
    category: PropTypes.string.isRequired
}
