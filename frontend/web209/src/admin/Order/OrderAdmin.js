import React, { useEffect, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { CartAPI } from '../../api/cartAPI'

const OrderAdmin = () => {
    const [order, setOrder] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
        const getOrder = async () => {
            const { data } = await CartAPI.list();
            console.log(data)
            setOrder(data);
        }
        getOrder();
        console.log(order)
    }, [])
    const onHandleRemove = async (id) => {
        console.log(id)
        try {
            const { data } = await CartAPI.remove(id);
            const newOrder = order.filter((item) => item._id !== data.remove._id);
            toast.success("Xóa thành công")
            console.log(newOrder)
            setOrder(newOrder);
        }
        catch (error) {
            toast.error(error.response.data)
        }
    }
    const onChangeStatus = async(id)=>{
        try {
            const {data}= await CartAPI.read(id);
            const ordernew ={
                ...data,
                status: true
            }
             await CartAPI.edit(id,ordernew)
             navigate("/admin/order")
            toast.success("thay đổi trạng thái thành công")
        } catch (error) {
            console.log(error)
            toast.error("thay đổi trạng thái thất bại")
        }
    }
    return (
        <div>
            {/* Page Wrapper */}
            <div id="wrapper">
                {/* Sidebar */}
                <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                    {/* Sidebar - Brand */}
                    <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                        <div className="sidebar-brand-icon rotate-n-15">
                            <i className="fas fa-laugh-wink" />
                        </div>
                        <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
                    </a>
                    {/* Divider */}
                    <hr className="sidebar-divider my-0" />
                    {/* Nav Item - Dashboard */}
                    <li className="nav-item active">
                        <Link className="nav-link collapsed" to="/admin">
                            <span className="fs-6 fw-bold">Dashboard</span>
                        </Link>
                    </li>
                    {/* Divider */}
                    <hr className="sidebar-divider" />
                    {/* Heading */}
                    <li className="nav-item">
                        {/* <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo"> */}
                        <Link className="nav-link collapsed" to="/admin/category">
                            <span className="fs-6 fw-bold">Category</span>
                        </Link>

                        {/* </a> */}
                    </li>
                    <hr className="sidebar-divider bg-light border-2" />
                    {/* Heading */}
                    <li className="nav-item">
                        {/* <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo"> */}
                        <Link className="nav-link collapsed" to="/admin/product">
                            <span className="fs-6 fw-bold">Product</span>
                        </Link>

                        {/* </a> */}
                    </li>
                    <hr className="sidebar-divider bg-light border-2" />
                    {/* Sidebar Toggler (Sidebar) */}
                    <li className="nav-item">
                        {/* <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo"> */}
                        <Link className="nav-link collapsed" to="/admin/user">
                            <span className="fs-6 fw-bold">User</span>
                        </Link>

                        {/* </a> */}
                    </li>
                    <hr className="sidebar-divider bg-light border-2" />
                    <li className="nav-item">
                        {/* <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo"> */}
                        <Link className="nav-link collapsed" to="/admin/order">
                            <span className="fs-6 fw-bold">Order</span>
                        </Link>

                        {/* </a> */}
                    </li>
                    <hr className="sidebar-divider bg-light border-2" />
                </ul>
                {/* End of Sidebar */}
                {/* Content Wrapper */}
                <div id="content-wrapper" className="d-flex flex-column">
                    {/* Main Content */}
                    <div id="content">
                        {/* Topbar */}
                        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                            {/* Sidebar Toggle (Topbar) */}
                            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                                <i className="fa fa-bars" />
                            </button>
                            {/* Topbar Search */}
                            <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                                <div className="input-group">
                                    <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                        <button className="btn btn-primary" type="button">
                                            <i className="fas fa-search fa-sm" />
                                        </button>
                                    </div>
                                </div>
                            </form>
                            {/* Topbar Navbar */}
                            <ul className="navbar-nav ml-auto">
                                {/* Nav Item - Search Dropdown (Visible Only XS) */}
                                <li className="nav-item dropdown no-arrow d-sm-none">
                                    <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fas fa-search fa-fw" />
                                    </a>
                                    {/* Dropdown - Messages */}
                                    <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
                                        <form className="form-inline mr-auto w-100 navbar-search">
                                            <div className="input-group">
                                                <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                                                <div className="input-group-append">
                                                    <button className="btn btn-primary" type="button">
                                                        <i className="fas fa-search fa-sm" />
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </li>
                                {/* Nav Item - User Information */}
                                <li className="nav-item dropdown no-arrow">
                                    <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">Douglas McGee</span>
                                        <img className="img-profile rounded-circle" src="img/undraw_profile.svg" />
                                    </a>
                                    {/* Dropdown - User Information */}
                                    <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                                        <a className="dropdown-item" href="#">
                                            <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
                                            Profile
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />
                                            Settings
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400" />
                                            Activity Log
                                        </a>
                                        <div className="dropdown-divider" />
                                        <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                            <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                                            Logout
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                        {/* End of Topbar */}
                        {/* Begin Page Content */}
                        <div className="container-fluid">
                            {/* Page Heading */}
                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 className="h3 mb-0 text-gray-800">Sản phẩm</h1>
                                <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i className="fas fa-download fa-sm text-white-50" /> Generate Report</a>
                            </div>
                            <div className="">
                            </div>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">Tên người đặt</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Số điện thoại</th>
                                        <th scope="col">Địa chỉ</th>
                                        <th scope="col">Trạng thái</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {order.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <th scope="row">{index++}</th>
                                                <td>{item.name}</td>
                                                <td>{item.email}</td>
                                                <td>{item.telephone}</td>
                                                <td>{item.address}</td>
                                                <td>{item.status ? "Duyệt" : "Chưa duyệt"}</td>
                                                <td>
                                                    <button type="button" onClick={() => onHandleRemove(item._id)} class="btn btn-danger ml-2">Xóa</button> 
                                                    <button type="button" onClick={() => onChangeStatus(item._id)} class="btn btn-success ml-2">Chốt đơn</button> 
                                              </td>
                                         </tr>
                                      )}
                                )}
                              </tbody>
                            </table>
                    </div>
                   
                </div>
                    {/* End of Main Content */}
                    {/* Footer */}
                    <footer className="sticky-footer bg-white">
                        <div className="container my-auto">
                            <div className="copyright text-center my-auto">
                                <span>Copyright © Your Website 2021</span>
                            </div>
                        </div>
                    </footer>
                    {/* End of Footer */}
                </div>
                {/* End of Content Wrapper */}
            </div>
            {/* End of Page Wrapper */}
            {/* Scroll to Top Button*/}
            <a className="scroll-to-top rounded" href="#page-top">
                <i className="fas fa-angle-up" />
            </a>
            {/* Logout Modal*/}
            <div className="modal fade" id="logoutModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                        <div className="modal-footer">
                            <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                            <a className="btn btn-primary" href="login.html">Logout</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderAdmin
