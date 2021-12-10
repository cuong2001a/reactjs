import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useEffect, useState } from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Row from 'react-bootstrap/Row'
import '../../css/header.css'
import { NavLink, Link } from 'react-router-dom'
import { CategoryAPI } from '../../api/categoryAPI'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import HintUser from './HintUser'
const Header = () => {
    const [category, setCategory] = useState([]);
    useEffect(() => {
        cate();
        console.log(category)
    }, [])
    const cate = async () => {
        const { data } = await CategoryAPI.list();
        console.log(data);
        await setCategory(data)
    }

    return (
        <div>
            <Container className="my-3">
                <Row>
                    <Col xl={3} >
                        <img src="https://iweb.tatthanh.com.vn/pic/12/banner/logo(1).png" />
                    </Col>
                    <Col xl={5} className="d-flex justify-content-start align-items-center gap-3 ">
                        <div className="d-flex flex-column justify-content-start">
                            <div className="d-flex align-item-center">
                                <i className="fas fa-phone-alt"></i>
                                <p className="fw-bold m-0">Hotline</p>
                            </div>
                            <span className="fs-5 text-danger fw-bold">0989.248.835</span>
                        </div>
                        <div className="d-flex flex-column justify-content-start">
                            <div className="d-flex align-item-center">
                                <i className="fas fa-phone-alt"></i>
                                <p className="fw-bold m-0">Hotline</p>
                            </div>
                            <span className="fs-5 text-danger fw-bold">0989.248.835</span>
                        </div>
                    </Col>
                    <Col xl={4} className="d-flex justify-content-start align-items-center gap-2 height-auto">
                        <div className="input-group border border-3 border-dark rounded-pill gap-2 form-search">
                            <input type="text" className="border-0 px-1 rounded-pill" placeholder="Tim kiem" />
                            <label for="input-group-text">
                                <i className="fas fa-search px-1"></i>
                            </label>
                        </div>
                        {localStorage.getItem("token") ? <HintUser /> : (
                            <div className="">
                                <Link className=" text-decoration-none" to="/signIn"><i class="fas fa-user-circle fs-1"></i> </Link>
                            </div>
                        )}

                        <div className="border border-3 border-dark rounded-pill px-1 pt-1">
                           <Link to="/cart"><i class="fas fa-shopping-cart fs-5"></i></Link> 
                        </div>
                    </Col>

                </Row>

            </Container>
            <Container fluid style={{ backgroundColor: '#312783' }}>
                <Navbar className="mx-3" expand="lg">
                    <Container >

                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">

                            <Nav className="me-auto">
                                <NavLink className="text-decoration-none" to="/"><Nav.Link className="text-white nav-menu d-block position-relative text-decoration-none" href="#link">Trang Chủ</Nav.Link></NavLink>
                                {category.map((item) => {
                                    return (
                                        <div>
                                            <NavLink className="text-decoration-none" to={`/product/${item._id}`}><Nav.Link className="text-white nav-menu d-block position-relative text-decoration-none" href="#link" key={item}>{item.name}</Nav.Link></NavLink>
                                        </div>
                                    )
                                })}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
        </div>

    )
}

export default Header
