import data from '../pages/api/data.json';
// import axios from "axios"


const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

// const getItems = () => {
//   axios.get(`${process.env.NEXT_PUBLIC_APP_API}/api/products`).then((data) => {
//     return data
//   })
// };

const getItems = () => {
  return shuffle(data.clothes);

};

export default getItems;
