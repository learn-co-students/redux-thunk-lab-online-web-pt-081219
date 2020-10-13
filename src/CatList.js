// write your CatList component here
import React from 'react';

const CatList = props => {

    const catPics = props.catPics.map(catPic => <img key={catPic.id} src={catPic.url} />)

    return (
        <div>
            { catPics }
        </div>
    );
}

export default CatList;