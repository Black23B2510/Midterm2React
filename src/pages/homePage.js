import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const FoodSearch = () => {
  const [food, setFood] = useState([]);
  const [search, setSearch] = useState();
  const getFood = () => {
    axios
      .get("http://localhost:8000/api/food")
      .then(function (response) {
        setFood(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  };
  const handleSearch = async (e, search) => {
    const res = await axios.get(
      `http://127.0.0.1:8000/api/foodSearch?search=${search}`
    );
    setFood(res.data.data);
  };
  useEffect(() => {
    getFood();
  }, []);
  return (
    <div>
      <div>
        <label htmlFor="search">Name</label>
        <br />
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          id="search"
          name="search"
        />
        <br />
        <label htmlFor="price">Price</label>
        <br />
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="number"
          id="search"
          name="search"
        />
        <br />
        <br />
        <button
          className="btn btn-success"
          onClick={(e) => handleSearch(e, search)}
          type="submit"
        >
          Search
        </button>
      </div>
      <h1>
        -------------------------------------------------Menu--------------------------------------
      </h1>
      {!!food ? (
        food.map((food, index) => (
          <div key={index} className="food">
            <div>
              <a href="">
                <img
                  src={`http://127.0.0.1:8000/images/${food.image}`}
                  alt=""
                />
              </a>
            </div>
            <div>
              <div>{food.name}</div>
              <div>{food.description}</div>
              <div>
                {" "}
                <button type="button" className="btn btn-success">
                  View more
                </button>
                <td>
                  <Link to={"/quantity"}>
                    
                      View quantity
                   
                  </Link>
                </td>
              </div>
            </div>
            <div>----------------------------------------------------</div>
            <div>
              <h4>{food.price}VND</h4>
            </div>
          </div>
        ))
      ) : (
        <div>No data for displaying</div>
      )}
      <div></div>
    </div>
  );
};
export default FoodSearch;
