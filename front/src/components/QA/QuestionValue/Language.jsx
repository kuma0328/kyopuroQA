import React from 'react'
import { LanguageItems } from '../../../data/Question/LanguageItem'

const Language = ({ FormValue, setFormValue }) => {
  return (
    <>
      <div>言語</div>
      <select onChange={(e) => {
        setFormValue({...FormValue, language:e.target.value})
      }}>
        {LanguageItems.map((item, index) => {
          return (
            <option value={item.value} key={index}>{item.text}</option>
          )
        })}
      </select>
    </>
  )
}

export default Language
