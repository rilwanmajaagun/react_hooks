import React,{ useContext } from 'react'
import { ServicesContext, UserContext } from '../../App'


const Products = () => {
    
    const Products = useContext(UserContext)
    return (
        <div>
            Hello {Products}
        </div>
    )
}

export default Products
