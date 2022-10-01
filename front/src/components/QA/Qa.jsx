import { Link } from 'react-router-dom'
import { ContestItems } from '../../data/Nav/ContestItem'

const Qa = () => {
  return (
    <>
      <nav>
        <ul>
          {ContestItems.map((item,index) => {
            return (
              <li key={index}>
                <div>
                  <Link to={item.link}>{item.title}</Link>
                </div>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}

export default Qa
