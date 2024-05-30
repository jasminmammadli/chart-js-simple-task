import React, { useEffect, useState } from "react";
import axios from "axios";

import Table from "./components/Table";
import Chart from "./components/Chart";
import Filtered from "./components/Filtered";

function App() {
  const [data, setData] = useState(null);
  const [dublData, setDublData] = useState(null);
  const [search, setSearch] = useState({
    productName: "",
    productDate: "",
    productAmount: "",
  });
  function handleChange(e) {
    setSearch({ ...search, [e.target.name]: e.target.value });
  }
  useEffect(() => {
    axios
      .get("https://assignment-6fdaf-default-rtdb.firebaseio.com/orders.json")
      .then((res) => {
        setData(res.data), setDublData(res.data);
      });
  }, []);
  function handleSubmit(e) {
    e.preventDefault();
    const filtered = dublData
      .filter((item) =>
        item.product[0]?.name
          .toLowerCase()
          .includes(search.productName.trim().toLowerCase())
      )
      .filter(
        (item) =>
          !search.productAmount || item.amount === Number(search.productAmount)
      )
      .filter(
        (item) =>
          !search.productDate || item.date.slice(0, 10) === search.productDate
      );
    setData(filtered);
  }

  return (
    <div className="flex py-10 px-6 justify-between ">
      <div className="w-[48%]">
        <Filtered
          dublData={dublData}
          search={search}
          setSearch={setSearch}
          handleChange={handleChange}
          setData={setData}
          handleSubmit={handleSubmit}
        />
        <Table data={data} />
      </div>
      <div className="w-[49%]">
      <Chart dublData={dublData} />

      </div>
    </div>
  );
}

export default App;
