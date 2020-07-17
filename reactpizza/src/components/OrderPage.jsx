import React, { useState } from 'react'
import {Button} from 'reactstrap'
import {Link, useHistory} from 'react-router-dom'
import axios from 'axios'
import PizzaBuilder from './PizzaBuilder'
import FadeIn from 'react-fade-in'

function OrderPage(props){

    const history = useHistory()
    const [selectedToppings, selectToppings] =useState([])
    const [done, setDone] = useState(false)
    const custName = props.location.data.customerName

        function submitPizza(){
            const customerName =  props.location.data.customerName
              let host = window.location.origin
              host = host.replace(/:[0-9]*/gi, '')
            //`${host}::3001/api/orders`
            axios.post(`${host}:3001/api/orders`,{
                customer: customerName,
                size: 12,
                toppings: selectedToppings,
                price: 15.99
            })
            setDone(true)

        }


        function toppingClick(ing){
            let newArray = addOrRemove(selectedToppings, ing)
            selectToppings(newArray)
        }

        const addOrRemove = (arr, item) => (arr.includes(item) ? arr.filter((i) => i !== item) : [...arr, item])

        function buttonColor(ing){
            if(selectedToppings.includes(ing)){
                return 'danger'
            } else{
                return 'secondary'
            }
        }

        if (done){
                setTimeout(()=>{
                    setDone(false)
                    history.push('/')
                },2000)
                return(

                <div className='content'>
                    <h3>Thank you for your order, {custName}. It will be done shortly</h3>
                </div>
            )
        }

        return(
            <div className='orderPage'>
                 <div className='pizzaView'>
                    <PizzaBuilder toppings={selectedToppings} />
                         </div>
                    <div className="orderOptions">
                    <FadeIn>
                        <h2>Welcome, {custName}  </h2>
                        <h3 className="py-3">Select Pizza Options</h3>
                        <div>
                            <Button onClick={() => toppingClick('cheese')} color={buttonColor('cheese')}>
                                Cheese
                            </Button>
                            <Button onClick={() => toppingClick('pepperoni')} color={buttonColor('pepperoni')}>
                                Pepperoni
                            </Button>
                            <Button onClick={() => toppingClick('olives')} color={buttonColor('olives')}>
                                Olives
                            </Button>
                            <Button onClick={() => toppingClick('mushrooms')} color={buttonColor('mushrooms')}>
                                Mushrooms
                            </Button>
                            <Button onClick={() => toppingClick('ham')} color={buttonColor('ham')}>
                                Ham
                            </Button>
                            <Button onClick={() => toppingClick('onions')} color={buttonColor('onions')}>
                                Onions
                            </Button>
                            <Button onClick={() => toppingClick('basil')} color={buttonColor('basil')}>
                                Basil
                            </Button>
                        </div>
                        
                        <Button onClick={submitPizza} color='success' size='lg' className='btn-block my-3'>
                            Order Pizza
                        </Button>
                        <Link to='/'>
                        <Button>
                            Start Over
                        </Button>
                        </Link>
                    </FadeIn>
                        
                    </div>
            </div>
        )

}

export default OrderPage