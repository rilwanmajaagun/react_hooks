import React, { useContext } from 'react'
import logo from '../../logo.svg'
import './Header.css'
import {Link} from 'react-router-dom'
import {UserContext, IncomeContext} from '../../App'

function Header() {

  const user = useContext(UserContext);
  const income = useContext(IncomeContext)
    return (
        <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className='link_wrap'>
            <Link className='link' to='/'><span>Home</span></Link>
            <Link className='link' to = '/about'><span>About</span></Link>
            <Link className='link' to ='/contact'><span>Contact</span></Link>
            <Link className="link" to ='/service'><span>services</span></Link>
            <div className = "greetings">
              Hello {user} {income}
            </div>
{/* 
            <UserContext.Consumer>
              {
                user =>{
                  return (
                    <IncomeContext.Consumer>
                      {income =>{
                        return  <div className="greetings">
                        <div > Hello {user} </div>
                        <span>{income}</span>
                      </div>;
                      }

                      }
                    </IncomeContext.Consumer>
                  )
                }
              }
            </UserContext.Consumer> */}
        </div>
      </header>
    </div>
    )
}

export default Header
