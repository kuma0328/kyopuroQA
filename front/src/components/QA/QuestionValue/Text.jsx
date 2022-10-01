import React from 'react'

const Text = ({ FormValue, setFormValue }) => {
  return (
    <>
      <div>分からない点</div>
      <textarea 
      className='border border-black'
      onChange={(e) => {
        setFormValue({...FormValue, text:e.target.value})
      }}>

      </textarea>
    </>
  )
}

export default Text
