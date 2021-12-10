import React, { useEffect, useState } from 'react'
import { Card, Container, Table } from 'react-bootstrap'
import Footer from '../component/Footer'
import Header from '../component/Header'
import '../../css/Cart.css';
import { toast } from 'react-toastify';
import FormCard from '../component/FormCard';
import { CartAPI } from '../../api/cartAPI';
import { useNavigate } from 'react-router';
const Cart = () => {
    const [product, setProduct] = useState([])
    const [total, setTotal] = useState(0)
    const navigate = useNavigate();
    const [formData, setFormData] = useState({})
    const formData1 = async (data) => {
        if (product.length == 0) {
            toast.error("Bạn chưa có đơn hàng nào !")
        } else {
            const order = {
                email: data.email,
                name: data.name,
                address: data.address,
                telephone: data.tel,
                product: product,
                totalMoney: total,
                shipping: data.shipping
            }
            await CartAPI.add(order);
            toast.success("đặt hàng thành công")
            navigate("/success");
        }
    }
    console.log("cart", formData)
    const totalCart = (product) => {
        let total1 = 0
        if (product.length && product) {
            for (let i = 0; i <= product.length-1; i++) {
                total1 += Number(product[i].price) * Number(product[i].quanity)
            }
            console.log('total',total1)
            setTotal(total1)
        }
    }
    const removeItem = async (id) => {
        let item = JSON.parse(localStorage.getItem("cart"));
        for (let i = 0; i < item.length; i++) {
            if (item[i].id == id) {
                var a = item.filter(item => item.id !== id)
            }
        }
        console.log(a)
        toast.success("xoa thanh cong");
        setProduct(a)
        localStorage.setItem('cart', JSON.stringify(a))

    }
    useEffect(() => {
        const data = localStorage.getItem('cart');
        console.log(data)
        setProduct(JSON.parse(data))
        totalCart(product);
    }, [])
    return (
        <div>
            <Header />
            <Container fluid style={{ boxShadow: "0 2px 5px rgb(0 0 0 / 6%)" }}>
                <Container className="position-relative pt-1">
                    <ol className="d-flex p-0 flex-wrap fs-6">
                        <li className=" mx-1">
                            <a>Trang chủ</a>
                        </li>
                        <li className="item-link mx-1">
                            <a >Sản phẩm</a>
                        </li>
                        <li className="item-link mx-1">
                            <a >Giỏ hàng</a>
                        </li>
                    </ol>
                </Container>
            </Container>
            <section className="container my-4">
                <div className="">
                    <h2 className="text-title text-danger text-center">1. Giỏ hàng của bạn</h2>
                </div>
                <table className="table w-75 container text-center">
                    <thead>
                        <tr>
                            <th scope="col">Ảnh</th>
                            <th scope="col">Tên sản phẩm</th>
                            <th scope="col">Số lượng</th>
                            <th scope="col">Giá tiền</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {product && product.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="col" className="images"><img className="" src={item.images} /></th>
                                    <th scope="col">{item.name}</th>
                                    <th scope="col">{item.quanity}</th>
                                    <th scope="col">{item.price}</th>
                                    <th scope="col"> <button className="border-0 bg-light" onClick={() => removeItem(item.id)}><i className="fas fa-trash"></i></button></th>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <div className="text-end">
                    <h4 className="text-danger">Tổng tiền của bạn là:{total}VNĐ </h4>
                </div>
                <FormCard formCallBack={formData1} />

            </section>
            <Footer />
        </div>
    )
}

export default Cart
