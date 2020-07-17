import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import CustomerPage from './components/CustomerPage'
import OrderPage from './components/OrderPage'
import KitchenPage from './components/KitchenPage'
import Header from './components/Header'
import About from './components/About'
import './App.css'
import { Container, Row, Col} from 'reactstrap'

//functional componenets is the new react
export default function App(){
  return(
    <div>
    <Router>
    <Container fluid className="p-0 min-vh-100 d-flex flex-column">
       <Header/> 
      <Row noGutters className = "flex-grow-1">
      <Col className="background" md="12" >
      <Switch>
        <Route exact path ="/" component ={CustomerPage}/>
        <Route path ="/About" component ={About}/>
        <Route path ="/order" component ={OrderPage}/>
        <Route path='/kitchen' component={KitchenPage} />
      </Switch>
      </Col>
      </Row>   
      </Container>
    </Router>

    </div>
  )

}

