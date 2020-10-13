// write your CatList component here
import React from 'react';

const CatList = (props) => {
    return (
        <div>
            {
                props.catPics.map(cat => {
                    return <img key={cat.id} src={cat.url} alt={cat.id} />
                })
            }
        </div>
    )
}

export default CatList

// import React from 'react';

// class CatList extends React.Component {
//     render() {
//         return (
//             <div>
//                 {
//                     this.props.catPics.map(cat => {
//                         return <img key={cat.id} src={cat.url} alt={cat.id} />
//                     })
//                 }
//             </div>
//         )
//     }
// }

// export default CatList