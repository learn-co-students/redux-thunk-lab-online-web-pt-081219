// write your CatList component here
import React from 'react';

const CatList = ({ catPics }) => 

    <div>
        {catPics.map(x=> <img src={x.url} alt={x.id} key={x.id}></img>)}
    </div>


export default CatList;