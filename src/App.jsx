import { useState } from 'react';
//create a function that holds the props 
function CakeItem({ image, title, flavor, rating, price }) {
  return (
    <div className="card m-2" style={{ width: '18rem', margin: '10px'}}>
       <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Flavor: {flavor}</p>
        <p className="card-text">Rating: {rating} ★</p>
        <p className="card-text">Price: {price}</p>
      </div>
    </div>
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
    flavor: "Vanilla",
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
  {
    image: "cake4.jpg",
    title: "Tiramisu Cake",
    flavor: "Coffee",
    rating: 4.9,
    price:"RM120.00"
  },
  {
    image: "cake5.jpg",
    title: "Mango Cheesecake",
    flavor: "Cheesecake",
    rating: 4.6,
    price:"RM89.00"
  },
  ]); 

//for filtering each flavour
const [selectedFlavor, setSelectedFlavor] = useState('All');
//filter the cakes based on the selected flavor. If the selected flavor is "All", then all cakes are displayed. 
// Otherwise, only the cakes that match the selected flavor are displayed.
const filteredCakes = selectedFlavor === 'All'
  ? cakes
  : cakes.filter((cake) => cake.flavor === selectedFlavor);

  const flavors = ["All", "Chocolate", "Vanilla", "Red Velvet", "Coffee", "Cheesecake"];

  // //create buttons for each flavor. When a button is clicked, 
   // the selected flavor is updated using the setSelectedFlavor function. The filteredCakes array is then mapped over to render a CakeItem component for each cake that matches the selected flavor.

return (
  //inline css to position the filter by flavor text at the top of the page
  <div className="app-wrapper">
    <div className="top-bar">
      <header className="app-header">
        <h1 className="shop-logo">Sweet Layers</h1>
        <p className="shop-tagline">Handcrafted cakes, one layer at a time</p>
      </header>
      </div>

      <div>
      <p className="cake-count">{filteredCakes.length} cakes</p>
      </div>

    <div className="flavor-buttons">
      {flavors.map((flavor) => (
        <button
          key={flavor}
          className="btn btn-outline-dark me-2 mb-2"
          onClick={() => setSelectedFlavor(flavor)}
        >
          {flavor}
        </button>
      ))}
    </div>

    <div className="cake-list">
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
  </div>
);
}



//use state : setter function (setSelectedFlavor) is used to update the state of selectedFlavor when a button is clicked. This triggers a re-render of the component, 
// and the filteredCakes array is updated based on the new selected flavor. 
// The CakeItem components are then re-rendered with the updated list of cakes.
//this why we use it for filtering
//compared to javasxript where we used block:none; display or block; to hide and show the cakes, in react we use state to manage the selected flavor and filter the cakes accordingly. This allows for a more dynamic and responsive user interface.
//because theres like no dom here




//add bootstrap elements to function 
//add button in the flabvors map











export default App;








/*

map goes throught every object in array
then for each one it PRODUCES a <CakeItem />
JSX renders it as a list
key is a special prop that helps React identify which items have changed, are added, or are removed. It should be a unique value for each item in the list. In this case, we use the title of the cake as the key.

*/