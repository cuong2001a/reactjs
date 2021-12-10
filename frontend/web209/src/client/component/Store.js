import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Card from 'react-bootstrap/esm/Card';
import 'bootstrap/dist/css/bootstrap.min.css'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import OwlCarousel from 'react-owl-carousel';
import { ProductAPI } from '../../api/productAPI';
import Button from 'react-bootstrap/esm/Button'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { CategoryAPI } from '../../api/categoryAPI';
import "../../css/Store.css"
import { Link } from 'react-router-dom';
const Store = (props) => {
    console.log(props)
    const [product, setProduct] = useState([]);

    const ProductApi = async () => {
        const { data } = await ProductAPI.list()
        setProduct(data);
    }
    useEffect(() => {
        ProductApi();

    }, [])
    // console.log("Store cate", category)
    // console.log("Store cate", products)

    return (
        <Container  >
            <section className="my-4">
                <Container>
                
                    <Card style={{}}>
                        <Card.Header className="p-0" style={{ backgroundColor: "#e4e4e4" }}>
                            <Row>
                                <Col xl={3} className="position-relative" >
                                    <div className="px-2 py-2" style={{ backgroundColor: "#312783" }}>
                                        <h2 className="fs-5 fw-bold text-white" >Sản phẩm</h2>
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
                                                        <Card.Img variant="top" style={{}} className="mx-auto img-card" src={item.images} />
                                                        <Card.Body className="body-card">
                                                            <Card.Title className="fs-6">
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
        </Container>
    )
}

export default Store
