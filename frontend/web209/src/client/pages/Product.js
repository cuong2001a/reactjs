import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Footer from '../component/Footer'
import Header from '../component/Header'
import Card from 'react-bootstrap/esm/Card';
import 'bootstrap/dist/css/bootstrap.min.css'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Button from 'react-bootstrap/esm/Button'
import '../../css/Product.css'
import { useParams } from 'react-router';
import { ProductAPI } from '../../api/productAPI';
import { CategoryAPI } from '../../api/categoryAPI';
import { Link, NavLink } from 'react-router-dom';
const Product = () => {
    const { id } = useParams()
    const [product, setProduct] = useState([])
    const [category, setCategory] = useState([])

    const categoryId = async () => {
        const { data } = await CategoryAPI.read(id)
        setCategory(data)
    }
    const listProductById = async () => {
        const { data } = await ProductAPI.listByCategory(id);
        setProduct(data)
    }
    useEffect(() => {
        listProductById();
        categoryId()
    }, [category])
    console.log(id);
    console.log(product)
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
                            <a >{category.name}</a>
                        </li>
                    </ol>
                </Container>
            </Container>
            <section className="my-4">
                <Container>
                    <div className="">
                        <h2 className="text-title text-danger text-center"> {category.name}</h2>
                        <hr />
                        <p className="text-primary fw-bold">Đầy đủ các mẫu áo bóng đá đội tuyển quốc gia mùa giải 2021 đẹp nhất, mới nhất. Đặt áo
                            cho đội tặng ngay bóng 300K+ 2 bộ quần áo 120k + phiếu mua hàng 200k. <br />
                            <span className="text-danger">Liên hệ: Hotline/Zalo: 0989.248.835</span> </p>
                    </div>
                    <Card style={{}}>
                        <Card.Header className="p-0" style={{ backgroundColor: "#e4e4e4" }}>
                            <Row>
                                <Col xl={3} className="position-relative" >
                                    <div className="px-2 py-2" style={{ backgroundColor: "#312783" }}>
                                        <h2 className="fs-5 fw-bold text-white" >{category.name}</h2>
                                    </div>
                                </Col>
                                <Col className="d-flex align-items-center justify-content-end" xl={9}>
                                    <div className="d-flex justify-content-end align-item-center">
                                        <span className="border border-dark mx-2 px-1 py-1 rounded-pill">Ao euro 2021</span>
                                        <span className="border border-dark mx-2 px-1 py-1 rounded-pill">Ao euro 2021</span>
                                        <span className="border border-dark mx-2 px-1 py-1 rounded-pill">Ao euro 2021</span>
                                        <span className="border border-dark mx-2 px-1 py-1 rounded-pill">Ao euro 2021</span>

                                    </div>
                                </Col>
                            </Row>
                        </Card.Header>
                        <Card.Body className="px-1 py-2">
                            <Row>
                                {product.map((item) => {
                                    return (

                                        <Col xl={2} className="mb-2">
                                            <div className="">
                                                <Card className="mx-auto" style={{}}>
                                                    <Link className="text-decoration-none " to={`/productDetail/${item._id}`}>
                                                        <Card.Img variant="top" style={{}} className="mx-auto" src={item.images} />
                                                        <Card.Body>
                                                            <Card.Title>
                                                                {item.name}
                                                            </Card.Title>
                                                            <Card.Text>
                                                                <span className="text-danger fw-bold">{item.price}đ </span>
                                                                <span className="text-dark ">({item.category.name})</span>
                                                            </Card.Text>
                                                            <a href="" className="text-decoration-none">Chi tiết</a>
                                                        </Card.Body>
                                                    </Link>
                                                </Card>
                                            </div>
                                        </Col>


                                    )
                                })}
                            </Row>
                        </Card.Body>
                        <Card.Footer className="text-center">
                            <Button variant="danger">Xem thêm</Button>
                        </Card.Footer>
                    </Card>
                </Container>
            </section>
            <Footer />
        </div>
    )
}

export default Product
