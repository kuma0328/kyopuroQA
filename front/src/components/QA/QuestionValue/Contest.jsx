import React from 'react'

const Contest = ({ FormValue, setFormValue }) => {
  return (
    <>
      <div>コンテスト（URL）</div>
      <input 
      className='border border-black'
      onChange={(e) => {
        setFormValue({...FormValue, contest: e.target.value})
      }}
      ></input>
    </>
  )
}

export default Contest
