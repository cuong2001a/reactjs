import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Footer from '../component/Footer'
import Header from '../component/Header'
import '../../css/ProductDetail.css'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Button from 'react-bootstrap/esm/Button'
import '../../css/header.css'
import "@fortawesome/react-fontawesome"
import { useParams } from 'react-router'
import { ProductAPI } from '../../api/productAPI'
import { addToCart } from '../service/AddToCart'
const ProductDetail = () => {
    const {id}= useParams();
    const [product, setProduct]= useState([]);
    useEffect(()=>{
        try {
            const productById=async ()=>{
                const {data}= await ProductAPI.read(id);
                setProduct(data)
            }
            productById();
        } catch (error) {
           console.log(error) 
        }
        
        console.log(product);

    },[])
    return (
        <div>
            <Header />
            <Container fluid style={{ boxShadow: "0 2px 5px rgb(0 0 0 / 6%)" }}>
                <Container className="position-relative pt-1">
                    <ol className="d-flex p-0 flex-wrap fs-6">
                        <li className=" mx-1">
                            <a>Trang chủ</a>
                        </li>
                        <li className="item mx-1">
                            <a >Sản phẩm</a>
                        </li>
                        <li className="item mx-1">
                            <a >Áo đội tuyển QG</a>
                        </li>
                        <li className="item mx-1">
                            <a >Áo đội tuyển Việt Nam 2021</a>
                        </li>
                    </ol>
                </Container>
            </Container>
            <section>
                <Container>
                
                             <Row>   
                                   <Col xl={4}>
                            <div className="img-product p-3 w-100">
                                <img width='100%' src={product.images}/>
                            </div>
                        </Col>
                        <Col xl={8}>
                            <h2 className="fs-3 title mb-6">{product.name}</h2>
                            <p className="fs-5">Giá bán: <span className="text-danger fw-bold">{product.price}đ</span></p>
                            <span className="fs-5">Mô tả</span>
                            <p>{product.description}</p>
                            <div className="d-flex mb-4">
                                 <Button variant="danger">Mua ngay</Button>
                                 <a href="" onClick={()=> addToCart(product._id,product.name,product.images,product.price,product.cateogry)} className="mx-4 d-flex align-items-center text-decoration-none btn btn-primary" > 
                                 <span> Thêm vào giỏ hàng</span>
                                 </a>
                            </div>
                            <div>
                                <p className="fs-6">
                                    <span>Tư vấn mua hàng: </span>
                                    <i class="fas fa-phone-alt border border-1 rounded-circle p-1 bg-primary text-white mx-2"></i>
                                    <span className="fw-bold">0971455981</span>
                                    <i class="fas fa-phone-alt border border-1 rounded-circle p-1 bg-primary text-white mx-2"></i>
                                    <span className="fw-bold">0971455981</span>
                                </p>
                            </div>

                        </Col>
                    </Row>
            
                </Container>
            </section>
            <Footer />
        </div>
    )
}

export default ProductDetail
