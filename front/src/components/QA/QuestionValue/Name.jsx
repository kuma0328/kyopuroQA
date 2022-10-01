import React from 'react'
import { AtcoderDiffItems } from '../../../data/Question/AtcoderDiffItem'
import { CodeforcesDiffItems } from '../../../data/Question/CodeforcesDiffItem'
import { YukicoderDiffItems } from '../../../data/Question/YukicoderDiffItem'


const Name = ({ FormValue, setFormValue, setDiffList }) => {

  const onChangeHandler = (e) => {
    setFormValue({...FormValue, name:e.target.value});
    if (e.target.value === 'atcoder') setDiffList(AtcoderDiffItems)
    if (e.target.value === 'codeforces') setDiffList(CodeforcesDiffItems)
    if (e.target.value === 'yukicoder') setDiffList(YukicoderDiffItems)
  }

  return (
    <>
      <div>コンテスト名</div>
        <form onChange={(e) => {
          onChangeHandler(e)
        }}>
          atcoder<input type='radio' name='contest' value='atcoder'></input>
          codeforces<input type='radio' name='contest' value='codeforces'></input>
          yukicoder<input type='radio' name='contest' value='yukicoder'></input>
        </form>
    </>
  )
}

export default Name
