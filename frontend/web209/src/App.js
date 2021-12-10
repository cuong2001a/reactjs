
import { BrowserRouter, Routes, Route, NavLink, Link, Outlet } from 'react-router-dom'
import Dashboard from './admin/Dashboard';
import CategoryAdd from './admin/Category/CategoryAdd';
import './css/App.css';
import Home from './client/pages/Home';
import ProductDetail from './client/pages/ProductDetail';
import Product from './client/pages/Product';
import Category from './admin/Category/Category';
import CategoryEdit from './admin/Category/CategoryEdit';
import ProductAdmin from './admin/Product/ProductAdmin';
import ProductAdminAdd from './admin/Product/ProductAdminAdd';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductAdminEdit from './admin/Product/ProductAdminEdit';
import SignUp from './client/pages/SignUp';
import SignIn from './client/pages/signIn';
import UserAdmin from './admin/User/UserAdmin';
import Cart from './client/pages/Cart';
import UserAdminEdit from './admin/User/UserAdminEdit';
import Success from './client/pages/Success';
import OrderAdmin from './admin/Order/OrderAdmin';
function App() {
  
  return (
    <div>
      <BrowserRouter>
      <Routes>
        {/* Client */}
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/productDetail/:id' element={<ProductDetail />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/signIn' element={<SignIn/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path="/success" element={<Success/>}/>
        {/* Admin */}
        <Route path="/admin" element={<Dashboard/>} />
        <Route path='/admin/category' element={<Category/>} />
        <Route path='/admin/category/add' element={<CategoryAdd/>} />
        <Route path='/admin/category/:id/edit' element={<CategoryEdit />} />
        <Route path="/admin/product" element={<ProductAdmin/>} />
        <Route path="/admin/product/add" element={<ProductAdminAdd/>} />
        <Route path='/admin/product/:id/edit' element={<ProductAdminEdit />} />
        <Route path="/admin/user" element={<UserAdmin/>} />
        <Route path='/admin/user/:id/edit' element={<UserAdminEdit />} />
        <Route path="/admin/order" element={<OrderAdmin/>} />
      </Routes>
    </BrowserRouter>
    <ToastContainer /> 
    </div>
   
  );
}
function Admin() {
  return (
    <div>
      <div>
        <NavLink to="/admin" activeClass="active">
          <Dashboard />
        </NavLink>
        <NavLink to="admin/category" activeClass="active">
          <Category />
        </NavLink>
        <NavLink to="admin/categoryAdd" activeClass="active">
          <CategoryAdd />
        </NavLink>
        <NavLink to="admin/product" activeClass="active">
          <ProductAdmin />
        </NavLink>
      </div>
      <Outlet />
    </div>


  )
}

export default App;
