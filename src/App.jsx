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

function App() { 
  return (
    <div>
      <CakeItem
        image="cake1.jpg"
        title="Betsy's Chocolate Supreme"
        flavor="Chocolate"
        rating={4.5}
        price="RM69.00"
      />
      <CakeItem
        image="cake2.jpg"
        title="Dreamy Vanilla Cake"
        flavor="Vanilla, Cherry"
        rating={4.0}
        price="RM110.00"
      />
        <CakeItem
        image="cake3.jpg"
        title="The Red and White"
        flavor="Red Velvet"
        rating={4.8}
        price="RM150.00"
      />
    </div>
  );
}

export default App;