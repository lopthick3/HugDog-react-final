import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Blog from './pages/BLOG/Blog'
import ProductList from './pages/Product/ProductList'
import ProductPageDetail from './pages/Product/ProductPageDetail'
import Member from '../src/pages/member/Member'
import ServiceQuery from './pages/service/ServiceQuery'
import ServiceDetail from './pages/service/ServiceDetail'

function App() {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/member">
            <Member />
          </Route>
          <Route path="/service/query">
            <ServiceQuery />
          </Route>
          <Route path="/service/detail/:sid">
            <ServiceDetail />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/productlist">
            <ProductList />
          </Route>
          <Route path="/productpagedetail">
            <ProductPageDetail />
          </Route>
        </Switch>
        <Footer />
      </>
    </Router>
  )
}

export default App
