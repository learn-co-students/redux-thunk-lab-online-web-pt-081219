// write your CatList component here
import React from 'react'

export default function CatList(props) {
    return (
        <div>
            {props.catPics.map(pic => <img key={pic.id} src={pic.url}></img>)}
        </div>
    )
}

