import React from 'react'

const Diff = ({ FormValue, setFormValue, DiffList }) => {



  return (
    <>
      <div>Diff</div>
      <select onChange={(e) => {
        setFormValue({...FormValue, diff:e.target.value})
      }}>
        {DiffList.map((item, index) => {
          return (
            <option value={item.value} key={index}>{item.text}</option>
          )
        })}
      </select>
    </>
    )
}

export default Diff
