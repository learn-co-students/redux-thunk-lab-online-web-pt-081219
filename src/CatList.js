// write your CatList component here
import React, { Component } from 'react';

class CatList extends Component {

renderCat = () => this.props.catPics.map(cat => <img key={cat.id} alt={cat.id} src={cat.url}/> )

    render() {
        return (
            <div>
                {this.renderCat()}
            </div>
        );
    }
};

export default CatList;