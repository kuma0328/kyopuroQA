import axios from 'axios'

const Add = ({ FormValue}) => {

  const onClickHandler = () => {
    console.log(FormValue)
    console.log(FormValue.name)
    const url = '/qa'
    axios.post(url, 
      {name:FormValue.name, diff:FormValue.diff, contest:FormValue.contest, language:FormValue.language, submission:FormValue.submission, text:FormValue.text})
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
    }

  return (
    <>
      <div>
        <button
        className='border border-black'
        onClick={onClickHandler}
        >提出</button>
      </div>
    </>
  )
}

export default Add
