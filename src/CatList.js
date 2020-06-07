// write your CatList component here
import React, { Component } from 'react'

class CatList extends Component {

    render (){
        const catPicList = this.props.catPics.map(catPic => <img key={catPic.id} src={catPic.url}/>)
        return (
            <ul>{catPicList}</ul>
        )
    }

}

export default CatList