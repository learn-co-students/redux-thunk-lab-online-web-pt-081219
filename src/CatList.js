// write your CatList component here
import React from 'react';

const CatList = (props) => {
    return (
        props.catPics.map(cat => {
            return <img key={cat.id} src={cat.url} alt="cat"/>
        })
    )
}

export default CatList