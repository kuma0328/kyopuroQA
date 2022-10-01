import React from 'react'

const Submission = ({ FormValue, setFormValue }) => {
  return (
    <>    
      <div>
        提出（URL）
      </div>
      <input 
      className='border border-black'
      onChange={(e) => {
        setFormValue({...FormValue, submission:e.target.value})
      }}
      ></input>
    </>

  )
}

export default Submission
