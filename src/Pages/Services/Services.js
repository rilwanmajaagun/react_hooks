import React from 'react'
import { Link} from 'react-router-dom'
import { ServicesContext } from '../../App'
import Products from '../Product/Product'





const Services = () => {
    return (
        <div>

            <ServicesContext.Consumer>
                {
                    Service =>{
                    return <div>
                        <h2>{Service}</h2>
                        <Products/>
                    </div>
                    }
                }
            </ServicesContext.Consumer>

        </div>
    )
}

export default Services
