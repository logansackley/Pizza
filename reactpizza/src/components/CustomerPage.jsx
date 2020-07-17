import React, { useState } from 'react'
import {Button, Input, FormGroup, Navbar} from 'reactstrap'
import {Link} from 'react-router-dom'
import FadeIn from 'react-fade-in'


function CustomerPage(props){

    const [customerName, setCustomerName] =useState('')

    return(
        <div>
        <div className="content" style={{
            position: 'absolute', left: '50%', top: '35%',
            transform: 'translate(-50%, -50%)'
        }}>
            
            <h1> Start Your Order</h1>
            <FadeIn>
            <FormGroup>
                <Input type='text' name ='ordername' placeholder ='Your Name' className="my-2" value={customerName} onChange={(e)=> setCustomerName(e.target.value)}/>
            </FormGroup>

            <Link to={{pathname: "/order", data:{customerName}}}>
            <Button size ="lg" color='danger' style={{
            position: 'absolute', left: '21%'}}>
                Start Order
            </Button>
            </Link>
            </FadeIn>
           
        </div>
         <Navbar expand="sm" variant="light" bg="dark" className="text-center justify-content-center" style={{
            position: 'absolute', left: '50%', top: '97%',
            transform: 'translate(-50%, -50%)'
        }}>
          <p> Logan Sackley</p>
        </Navbar>
        </div>
    )
}

export default CustomerPage