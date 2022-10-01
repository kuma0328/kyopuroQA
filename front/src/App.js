import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Title, Navbar, Home, Ranking, Qa, Question } from './components/index'
import { Atcoder, Codeforces, Yukicoder } from './components/QA/Contest/index'

function App() {
  return (
    <>
      <BrowserRouter>
      <Title />
      <Navbar />
        <Routes>
          <Route exact path='/' element={ <Home />}/>
          <Route path='/qa' element={<Qa />}/>
          <Route path='/ranking' element={<Ranking/>}/>

          <Route path='/qa/question' element={<Question/>}/>
          <Route path='/qa/atcoder' element={<Atcoder/>}/>
          <Route path='/qa/codeforces' element={<Codeforces/>}/>
          <Route path='/qa/yukicoder' element={<Yukicoder/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
