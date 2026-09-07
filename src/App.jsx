import { useState } from 'react';
//create a function that holds the props 
function CakeItem({ image, title, flavor, rating, price }) {
  return (
    <>
      <h1> {title} </h1>
      <p> {flavor} </p>
      <p> {rating} </p>
      <p> {price} </p>
      <img src={image} alt={title} />
    </>
  );
}
//display 
function App() { //cakes is an array of objects that contains the information for each cake. The useState hook is used to create a state variable called cakes and a function called setCakes that can be used to update the state. The initial value of cakes is an array of three objects, each representing a different cake with its image, title, flavor, rating, and price.
  const [cakes] = useState([
    {
    image: "cake1.jpg",
    title: "Betsy's Chocolate Cake",
    flavor: "Chocolate",
    rating: 4.5,
    price:"RM69.00"
  },
    {
    image: "cake2.jpg",
    title: "Dreamy Vanilla Cake",
    flavor: "Vanilla, Cherry",
    rating: 4.0,
    price:"RM110.00"
  },
    {
    image: "cake3.jpg",
    title: "The Red and White",
    flavor: "Red Velvet",
    rating: 4.8,
    price:"RM150.00"
  },
  ]); 

//for filtering each flavour
const [selectedFlavor, setSelectedFlavor] = useState('All');
//filter the cakes based on the selected flavor. If the selected flavor is "All", then all cakes are displayed. 
// Otherwise, only the cakes that match the selected flavor are displayed.
const filteredCakes = selectedFlavor === 'All'
  ? cakes
  : cakes.filter((cake) => cake.flavor === selectedFlavor);

  const flavors = ["All", "Chocolate", "Vanilla", "Red Velvet"];

  // //create buttons for each flavor. When a button is clicked, 
   // the selected flavor is updated using the setSelectedFlavor function. The filteredCakes array is then mapped over to render a CakeItem component for each cake that matches the selected flavor.

return (
  <div>
    <div>
      {flavors.map((flavor) => (
        <button key={flavor} onClick={() => setSelectedFlavor(flavor)}>
          {flavor}
        </button>
      ))}
    </div>
   
    {filteredCakes.map((cake) => (
      <CakeItem
        key={cake.title}
        image={cake.image}
        title={cake.title}
        flavor={cake.flavor}
        rating={cake.rating}
        price={cake.price}
      />
    ))} 
  </div>
);

}

//for filtering















export default App;








/*

map goes throught every object in array
then for each one it PRODUCES a <CakeItem />
JSX renders it as a list
key is a special prop that helps React identify which items have changed, are added, or are removed. It should be a unique value for each item in the list. In this case, we use the title of the cake as the key.

*/