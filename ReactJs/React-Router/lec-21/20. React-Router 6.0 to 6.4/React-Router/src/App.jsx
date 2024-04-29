import './App.css'
// import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import Blog from './Pages/Blog'
import Shop from './Pages/Shop'
import Contact from './Pages/Contact'
import Error404 from './Pages/Error404'
import OrderSummary from './Pages/OrderSummary'
import Product from './Pages/Product'
import ProductFeatures from './Pages/ProductFeatures'
import NewProduct from './Pages/NewProduct'
import User from './Pages/User'
import Admin from './Pages/Admin'
import UserDetail from './Pages/UserDetail'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Profile from './Pages/Profile'
// import { AuthProvider } from './Pages/Auth'
import Login from './Pages/Login'
import RequireAuth from './Pages/RequireAuth'
import Layout from './Pages/Layout'

const router = createBrowserRouter([
  {
    path:'/',element:<Layout/>,
    children:[
      {path:'/',element:<Home/>},
      {path:'aboutus',element:<AboutUs/>},
      {path:'contact',element:<Contact/>},
      {path:'shop',element:<Shop/>},
      {path:'blog',element:<Blog/>},
      {path:'ordersummary',element:<OrderSummary/>},
      {path:'product',element:<Product/>,children:[{path:'newproduct',element:<NewProduct/>},{path:'ProductFeature',element:<ProductFeatures/>}]},
      {path:'user',element:<User/>,children:[{path:'admin',element:<Admin/>},{path:':userId',element:<UserDetail/>}]},
      {path:'Profile',element:<RequireAuth><Profile/></RequireAuth>},
      {path:'Login',element:<Login/>},
      {path:'*',element:<Error404/>}
    ]
  }  
])

function App() {

  return (
    <>
    <RouterProvider router= {router}>  </RouterProvider>
    {/* <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="shop" element={<Shop />} />
          <Route path="blog" element={<Blog />} />
          <Route path="ordersummary" element={<OrderSummary />} />
          
          <Route path='product' element={<Product />}>
            <Route path="ProductFeature" element={<ProductFeatures/>}></Route>
            <Route path='newproduct' element={<NewProduct/>}></Route>
          </Route>

          <Route path="user" element={<User/>}>
            <Route path="admin" element={<Admin/>}></Route>
            <Route path=":userId" element={<UserDetail/>}></Route>
          </Route>
          <Route path="Profile" element={
            <RequireAuth>
              <Profile/>
            </RequireAuth>
          }/>
          <Route path="Login" element={<Login/>}/>

          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider> */}
    </>
  )
}

export default App

// Relative URL
// index
// use params
// use search params
// React.lazy