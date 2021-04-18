import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGreedItem } from "./GifGreedItem";

export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([])
    // useEffect(() => {
    //     getGifs(category).then(imgs => setImages(imgs));
    // }, [category])
    const {data: images, loading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
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
