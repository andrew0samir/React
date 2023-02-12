import React, { Component } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Home from '../Home/Home'
import MasterLayout from '../MasterLayout/MasterLayout'
import Notfound from '../Notfound/Notfound'
import Portfolio from '../Portfolio/Portfolio'



export default class App extends Component {
  

  routes = createBrowserRouter([
    { path:"/" , element:<MasterLayout/>,errorElement:<Notfound/> , children : [
      {index: true ,element : <Home/>},
      {path:"Portfolio" ,element : <Portfolio/>},
      {path:"About" ,element : <About/>},
      {path:"Contact" ,element : <Contact/>},
    ]}
  ])
  render() {
    return (
      <>
      <RouterProvider router={this.routes}/>
      </>
    )
  }
}
