import React, { useEffect } from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'
import '../../css/Success.css'
import { Link } from 'react-router-dom'
const Success = () => {
    useEffect(()=>{
        localStorage.removeItem("cart")
    },[])
    return (
        <div>
            <Header/>
            <div className="container logo-success">
                <img src="https://iweb.tatthanh.com.vn/pic/12/banner/logo(1).png"/>
                <h2 className="fs-5 text-primary text-uppercase">Đặt hàng thành công</h2>
                <div>
                     <Link to="/" className="btn btn-danger">Về trang chủ</Link>
                </div>
               
            </div>
            <Footer/>
        </div>
    )
}

export default Success
