import { Link } from 'react-router-dom'
import { NavItems } from '../data/Nav/NavItem'

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          {NavItems.map((item, index) => {
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

export default Navbar
