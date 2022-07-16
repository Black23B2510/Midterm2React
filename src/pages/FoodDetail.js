import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const FoodDetail = () => {
  const id = useParams();
  const [detail, setDetail] = useState([]);
  const getDetail = async () => {
    const res = await axios.get(`http://localhost:8000/api/food/${5}`);
    setDetail({ ...res.data.data });
  };
  useEffect(() => {
    getDetail();
  }, []);
  return (
    <div>
      <h1>Chi tiết sản phẩm</h1>
      <div>
        {!!detail ? (
          detail.map((fd, index) => (
            <div key={index}>
              <h3>{fd.name}</h3>
              <img src={`http://127.0.0.1:8000/images/${fd.image}`} alt="" />
            </div>
          ))
        ) : (
          <div>No data to display</div>
        )}
      </div>
    </div>
  );
};
export default FoodDetail;
