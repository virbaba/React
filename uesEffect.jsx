/*
  SPINNER.JSX
*/

function Spinner() {
    
 
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
}

export default Spinner;

/* APP.JSX */
import { useEffect } from "react";
import { useState } from "react";
import Spinner from "./Spinner";

function App() {
  const [fetchData, setFetchData] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setFetchData(true);

    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products); // Set the fetched data to the state variable
        setFetchData(false); // Update fetchData state to false after data is fetched
      })

      .catch((error) => {
        console.error("Error fetching data:", error);
        setFetchData(false); // Update fetchData state to false in case of an error
      });
  }, []);

  return (
    <>
      {fetchData ? (
        <Spinner />
      ) : (
        <div>
          {/* Render your products or use the data fetched */}
          {products.map((product) => (
            <div key={product.id}>{product.title}hi</div>
          ))}
        </div>
      )}
    </>
  );
}

export default App;
