import { Route, Routes,} from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import ShopPage from './Pages/ShopPage'
import BlogDetails from './components/BlogDeatils/BlogDetails'
import Contact from './components/Contact/Contact'
import CartPage from './Pages/CartPage'
import Auth from './components/Auth/Auth'
import UserPage from './Pages/Admin/UserPage'
import ProductDetailsPage from './Pages/ProductDetailsPage'
import CategoryPage from './Pages/Admin/Categories/CategoryPage'
import UpdateCategoryPage from './Pages/Admin/Categories/UpdateCategoryPage'
import CreateCategoryPage from './Pages/Admin/Categories/CreateCategoryPage'
import CreateProductPage from './Pages/Admin/Products/CreateProductsPage'
import ProductsPage from './Pages/Admin/Products/ProductPage'
import UpdateProductsPage from './Pages/Admin/Products/UpdateProductsPage'
import CouponPage from './Pages/Admin/Coupon/CouponPage'
import CreateCouponPage from './Pages/Admin/Coupon/CreateCouponPage'
import UpdateCouponPage from './Pages/Admin/Coupon/UpdateCouponPage'
import Succes from './Pages/Succes'




function App() {
  return (
    <Routes>
      <Route path = "/" element = {<HomePage/>}/>
      <Route path = "/shop" element = {<ShopPage/>}/>
      <Route path = "/blogdetail/:id" element = {<BlogDetails/>} />
      <Route path='/product/:id' element= {<ProductDetailsPage/>}/>
      <Route path = "/contact" element = {<Contact/>}/>
      <Route path = "/cart" element = {<CartPage/>}/>
      <Route path = "/auth" element= {<Auth/>}/>
      <Route path="/success" element={<Succes/>}/>
      <Route path="/admin/*">
      <Route path="users" element={<UserPage/>}/>
      <Route path='categories' element={<CategoryPage/>}/>
      <Route path = "categories/create/" element={<CreateCategoryPage/>}/>
      <Route path = "categories/update/:id" element={<UpdateCategoryPage/>} />
      <Route path = "products" element={<ProductsPage/>}/>
      <Route path = "products/create/" element={<CreateProductPage/>}/>
      <Route path = "products/update/:id" element={<UpdateProductsPage/>} />
      <Route path = "coupons" element={<CouponPage/>}/>
      <Route path = "coupons/create/" element={<CreateCouponPage/>}/>
      <Route path = "coupons/update/:id" element={<UpdateCouponPage/>}/>

      </Route>

    </Routes>
  )
}

export default App
