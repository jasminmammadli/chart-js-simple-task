import React, { useState } from "react";

function Filtered({ dublData,handleSubmit, search, handleChange,setData }) {
    const [typeDate,setTypeDate]=useState("text")

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <input
        type="text"
        name="productName"
        placeholder="Search Product"
        value={search.productName}
        onChange={handleChange}
        className="border-2 border-[#ced4da] p-2 rounded-s-md outline-none"
      />
      <input
        type="number"
        name="productAmount"
        placeholder="Enter order amount"
        value={search.productAmount}
        onChange={handleChange}
        className="border-2 border-[#ced4da] p-2 outline-none"
      />
      <input
        type={typeDate}
        name="productDate"
        placeholder="Enter Date"
        value={search.productDate}
        onFocus={(e)=>setTypeDate(e.target.type = "date")}
        onBlur={(e)=>setTypeDate(e.target.type = "text")}
        onChange={handleChange}
        className="border-2 border-[#ced4da] p-2 outline-none"
      />
      <button className="py-2 px-4 border-2 border-[#0c6efd] bg-[#0c6efd] rounded-e-md text-white">Filter</button>
    </form>
  );
}

export default Filtered;
