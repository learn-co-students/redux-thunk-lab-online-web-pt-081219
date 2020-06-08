import React from 'react' 

export default function CatList(props) {
  
  const renderCats = () => {
    if (props.loading) {
      return <div>Loading...</div>
    } else {
      return props.catPics.map(pic => 
        <img 
        src={pic.url}
        alt='a v cute cat'
        key={pic.id}
        height={300}
        width={300}
        />)
    }
  }

  return (
    <div>
     {renderCats()}
    </div> 
  )
}