import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { ProductAPI } from '../../api/productAPI';
import { Link } from 'react-router-dom'
import { storage } from '../../firebase/firebaseConfig';
import { CategoryAPI } from '../../api/categoryAPI';
import { toast } from 'react-toastify';
const ProductAdminAdd = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const [product, setProduct] = useState({})
    const [category, setCategory] = useState([])
    const onSubmit = (data) => {
        const handleUpload = () => {
            const image = data.image
            const ref = storage.ref(`images/${image[0].name}`);
            const upload = ref.put(image[0]);
            upload.on(
                "state_changed",
                snapshot => { },
                error => {
                    console.log(error);
                },
                () => {
                    storage
                        .ref("images")
                        .child(image[0].name)
                        .getDownloadURL()
                        .then(async (url) => {
                            try {
                                const productAdd = {
                                    name: data.name,
                                    price: data.price,
                                    category: data.category,
                                    description: data.description,
                                    images: url
                                }
                                console.log(productAdd)
                                await ProductAPI.add(productAdd);
                                toast.success("Thêm sản phẩm thành công")
                                navigate("/admin/product")
                            } catch (error) {
                                console.log(error)
                                toast.error("Thêm sản phẩm thất bại")
                            }

                        })
                }
            )
        }
        handleUpload();
    }

    useEffect(() => {
        const category = async () => {
            const { data } = await CategoryAPI.list();
            console.log(data);
            setCategory(data);
        }
        category();
    }, [])
    console.log(product)
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
                                <h1 className="h3 mb-0 text-gray-800">Thêm sản phẩm</h1>
                            </div>
                            <div className="">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="input-group gap-5 mb-2">
                                        <div className="w-25">
                                            <label className="fs-5 fw-bold">Tên sản phẩm</label>
                                            <input type="text" className="form-control " id="floatingInput" placeholder="name@example.com"
                                                {...register("name", { required: true })} />
                                            {errors.name && <span>Bạn phải nhập tên sản phẩm</span>}
                                        </div>
                                        <div className="w-25">
                                            <label className="fs-5 fw-bold">Giá sản phẩm</label>
                                            <input type="number" className="form-control" id="floatingInput" placeholder="name@example.com"
                                                {...register("price", { required: true })} />
                                            {errors.price && <span>Bạn phải nhập giá</span>}
                                        </div>
                                        <div className="w-25">
                                            <label className="fs-5 fw-bold">Danh mục sản phẩm</label>
                                            <select className="form-select" aria-label="Default select example"
                                                {...register("category")}>
                                                {category && category.map((item, index) => {
                                                    return (
                                                        <option key={index} value={item._id}>{item.name}</option>
                                                    )
                                                })}

                                            </select>
                                        </div>
                                    </div>
                                    <div className="input-group gap-5 mb-2">
                                        <div className="w-25">
                                            <label className="fs-5 fw-bold">Ảnh sản phẩm</label>
                                            <input type="file" className="form-control " id="floatingInput" placeholder="name@example.com"
                                                {...register("image", { required: true })} />
                                            {errors.image && <span>Cần upload ảnh</span>}
                                        </div>
                                        <div className="w-25">
                                            <label className="fs-5 fw-bold">Chi tiết sản phẩm</label>
                                            <textarea className="form-control " placeholder="Leave a comment here" id="floatingTextarea"
                                                {...register("description", { required: true })}></textarea>
                                            {errors.description && <span>Cần nhập thông tin chi tiết</span>}
                                        </div>
                                    </div>
                                    <button className="btn btn-primary">Thêm</button>
                                </form>
                            </div>
                        </div>
                        {/* /.container-fluid */}
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

export default ProductAdminAdd
