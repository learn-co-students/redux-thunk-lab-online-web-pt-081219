
// .then() syntax
// export function fetchCats() {
//   return (dispatch) => {
//     dispatch({type: 'LOADING_CATS'})
//     fetch('https://learn-co-curriculum.github.io/cat-api/cats.json')
//     .then(res => res.json())
//     .then(cats => dispatch({type: 'ADD_CATS', cats: cats.images}))
//   }
// }

// async/await syntax
export function fetchCats() {
  return async (dispatch) => {
    dispatch({type: 'LOADING_CATS'})
    try {
    let res = await fetch('https://learn-co-curriculum.github.io/cat-api/cats.json')
    if (!res.ok) {
      throw res
    }
    let cats = await res.json()
    dispatch({type: 'ADD_CATS', cats: cats.images})
    } catch(err) {
      alert("bad cats")
    }
  }
}