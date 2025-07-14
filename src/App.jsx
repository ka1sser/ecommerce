import { useState } from 'react'
import Nav from './Navigation/Nav'
import Products from './Products/Products'
import Recommended from './Recommended/Recommended'
import Sidebar from './Sidebar/Sidebar'
import Card from './components/Card'

// ------ Database ------
import products from './db/data'

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ------ Input Filter ------
  const [query, setQuery] = useState("");
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const filtereditems = products.filter((products) =>
    products.title.toLocaleLowerCase().indexOf(query.toLocaleUpperCase() !== -1)
  );

  // ------ Radio Filters ------
  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  //  ------ Button Filter
  const handleClick = e => {
    setSelectedCategory(e.target.value)
  }

  function filteredData(products, selected, query) {
    let filteredProducts = products

    // Filtering input items
    if (query) {
      filteredData = filtereditems
    }

    // Selected Filter
    if (selected) {
      filteredProducts = filteredProducts.filter(({ category, color, company, newPrice, title }) =>
        category === selected ||
        color === selected ||
        company === selected ||
        newPrice === selected ||
        title === selected
      );
    }

    return filteredProducts.map(({ img, title, star, reviews,prevPrice, newPrice }) => (
      <Card
        key={Math.random()}
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        prevPrice={prevPrice}
        newPrice={newPrice}
      />
    ));
  }

  filteredData(products, selectedCategory, query)

  return (
    <div>
      <Sidebar handleChange={handleChange}/>
      <Nav />
      <Recommended />
      <Products />
    </div>
  );
}

export default App
