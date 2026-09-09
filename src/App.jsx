import { useState } from 'react';
//Notes:
//we use fragments in jsx to separate the different elements
//useState rerenders the page everytime it is triggered based on requirement
//use imports and exports of files for easier and cleaner code

//create a function that holds the props  
//function will hold the parameters
//we dont hardcode anything here because we want to create a dynamic website
//we will pass the data through PROPS


//blue print for just ONE cake card
//instead of making like 11 different cake cards, just make one template
//and pass the data through it using props! #smartgirlmoment
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


//display  - main component where everything lives inside of
function App() { //cakes is an array of objects that contains the information for each cake. 
  //so here is all the data lives, we write it here and itll pass through fx CakeItem to be displayed as cards

  const cakes = [
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
    title: "Indulgent Red Velvet Cake",
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
{
    image: "cake6.jpg",
    title: "Blueberry Cheesecake",
    flavor: "Cheesecake",
    rating: 4.7,
    price:"RM79.00"
  },
  {
    image: "cake7.jpg",
    title: "Raspberry Pistachio Cake",
    flavor: "Pistachio",
    rating: 4.3,
    price:"RM120.00"
  },
  {
    image: "cake8.jpg",
    title: "Fruit Frenzy Cake",
    flavor: "Vanilla",
    rating: 4.7,
    price:"RM99.00"
  },
  {
    image: "cake9.jpg",
    title: "Black Forest Cake",
    flavor: "Chocolate",
    rating: 4.2,
    price:"RM109.00"
  },
{
    image: "cake10.jpg",
    title: "Strawberry Matcha Cake",
    flavor: "Matcha",
    rating: 4.8,
    price:"RM189.00"
  },
  {
    image: "cake11.jpg",
    title: "Strawberry Cheesecake",
    flavor: "Cheesecake",
    rating: 4.6,
    price:"RM159.00"
  },
{
    image: "cake12.jpg",
    title: "Coffee Cake",
    flavor: "Coffee",
    rating: 4.9,
    price:"RM169.00"
  },
  {
    image: "cake13.jpg",
    title: "Blueberry Matcha Cake",
    flavor: "Matcha",
    rating: 4.1,
    price:"RM89.00"
  }
  
  ]; 

//for filtering each flavour
const [selectedFlavor, setSelectedFlavor] = useState('All');
//filter the cakes based on the selected flavor. If the selected flavor is "All", then all cakes are displayed. 
// Otherwise, only the cakes that match the selected flavor are displayed.
const filteredCakes = selectedFlavor === 'All'
  ? cakes
  : cakes.filter((cake) => cake.flavor === selectedFlavor);

  const flavors = ["All", "Chocolate", "Vanilla", "Red Velvet", "Coffee", "Cheesecake", "Pistachio", "Matcha"];

  // //create buttons for each flavor. When a button is clicked, 
   // the selected flavor is updated using the setSelectedFlavor function. The filteredCakes array is then mapped over to render a CakeItem component for each cake that matches the selected flavor.

return (
  //nav bar 
<>
<nav className="navbar">
  <div className="navbar-inner">
    {/* Added logo image and title wrapper */}
<a href="#home" className="navbar-brand">
      <img 
        src="/sweet-layers-logo.png" 
        alt="Sweet Layers Logo" 
        className="navbar-logo"
      />
     
    </a>


    <ul className="navbar-links">
      <li><a href="#home">Home</a></li>
      <li><a href="#cakes">Cakes</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </div>
</nav>

{/* home section */}

<section id="home" className="home-section">
   <h1 className="shop-logo pinyon-script-regular">Sweet Layers</h1>
        <p className="shop-tagline varela-round-regular">Home of the sweetest cakes ❤︎ </p>
        <a href="#cakes" className="btn btn-outline-dark hero-cta">Browse Cakes</a>
      </section>


      {/* cakes counter section */}
<section id="cakes" className="app-wrapper">
  <p className="cake-count">{filteredCakes.length} cakes</p>

{/* flavor buttons */}
{/* to map EACH flavor in the variable flavors, then create a button for it so data is related */}
{/* so no need to create like 7 different buttons just for the flavours*/}
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

{/*  when we use a usestate, we wanna  */}

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
  </section>
  

 {/* ABOUT */}
 <section id="about" className="about-section">
        <h2 className="section-title">About Us</h2>
        <p className="section-text">
          Sweet Layers started as a small home kitchen project and grew into a
          neighborhood favorite for handcrafted, made-to-order cakes. Every cake
          is baked fresh, layered by hand, and decorated with real ingredients. Each layer made with love!
        </p>
      </section>

       {/* contact */}
      <section id="contact" className="contact-section">
        <h2 className="section-title">Contact Us</h2>
        <p className="section-text">Have a custom order or a question? Reach out.</p>
        <ul className="contact-list">
          <li>📍 Shah Alam, Selangor</li>
          <li>📞 +60 12-649-6467</li>
          <li>✉️ hello@sweetlayers.com</li>
        </ul>
      </section>
</>
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