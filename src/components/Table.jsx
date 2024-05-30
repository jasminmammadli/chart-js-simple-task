import React from 'react'

function Table({data}) {
  return (
    <table className='border-2 border-[#ced4da] w-full'>
        <thead>
          <tr>
            <th className='text-left border-2 border-[#ced4da] py-2 ps-2'>Product Name</th>
            <th className='text-left border-2 border-[#ced4da] py-2 ps-2'>Order Date</th>
            <th className='text-left border-2 border-[#ced4da] py-2 ps-2'>Order Amount</th>
            <th className='text-left border-2 border-[#ced4da] py-2 ps-2'>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item) => (
              <tr key={item._id}>
                <td className='border-2 border-[#ced4da] py-2 ps-2'>{item?.product[0]?.name}</td>
                <td className='border-2 border-[#ced4da] py-2 ps-2'>{item.date.slice(0, 10)}</td>
                <td className='border-2 border-[#ced4da] py-2 ps-2'>{item.amount}</td>
                <td className='border-2 border-[#ced4da] py-2 ps-2'>{item?.product[0]?.price}</td>
              </tr>
            ))}
        </tbody>
      </table>
  )
}

export default Table