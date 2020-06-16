// write your CatList component here
import React from 'react';

const CatList = ({ catPics }) => 

    <div>
        {catPics.map((x, i) => (<img key={i} src={x.url} alt={x.id} ></img>))}
    </div>


export default CatList;