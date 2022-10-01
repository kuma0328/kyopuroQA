import { useState } from 'react'
import { Contest, Diff, Language, Submission, Text, Add, Name} from './QuestionValue/index'

const Question = () => {
  const [FormValue, setFormValue] = useState({ name:"", diff:"", contest:"", language:"", submission:"", text:""})
  const [DiffList, setDiffList] = useState([])

  return (
    <>
      <div className='text-xl'>
        <Name
        FormValue={FormValue}
        setFormValue={setFormValue}
        setDiffList={setDiffList}
        />
        <Diff
        FormValue={FormValue}
        setFormValue={setFormValue}
        DiffList={DiffList}
        />
        <Contest
        FormValue={FormValue}
        setFormValue={setFormValue}
        />
        <Language
        FormValue={FormValue}
        setFormValue={setFormValue}        
        />
        <Submission
        FormValue={FormValue}
        setFormValue={setFormValue}        
        />
        <Text
        FormValue={FormValue}
        setFormValue={setFormValue}        
        />
        <Add
        FormValue={FormValue}
        />
      </div>
    </>
  )
}

export default Question
