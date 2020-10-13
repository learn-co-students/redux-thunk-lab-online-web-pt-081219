// write your CatList component here
import React from "react";

const CatList = (props) => {
  const cats = props.catPics.map((pic) => {
    return <img key={pic.id} src={pic.url}></img>;
  });
  return <div>{cats}</div>;
};

export default CatList;
