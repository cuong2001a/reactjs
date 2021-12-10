import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'

const Footer = () => {
    return (
        <div className="footer">
            <Container>
                <Row>
                    <Col xl={3}>
                        <ul className="p-0">
                            <li className="fs-6 mb-4 fw-bold">CHẤP NHẬN THANH TOÁN </li>
                            <li className="mb-2">Chuyển khoản ngân hàng </li>
                            <li className="mb-2">Visa, Master Card </li>
                            <li className="mb-2">Thanh toán khi nhận hàng </li>
                        </ul>
                    </Col>
                    <Col xl={3}>
                        <ul className="p-0">
                            <li className="fs-6 mb-4 fw-bold">HỖ TRỢ KHÁCH HÀNG </li>
                            <li className="mb-2">Bảng báo giá </li>
                            <li className="mb-2">Hình thức thanh toán </li>
                            <li className="mb-2">Giao hàng & trả hàng </li>
                            <li className="mb-2">Chính sách Bảo hành </li>

                        </ul>
                    </Col>
                    <Col xl={3}>
                        <h2 className="fs-6 mb-4 fw-bold">ÁO BÓNG ĐÁ TRÊN</h2>
                        <div className="d-flex mb-2">
                            <span className="mr-3"><img src="https://iweb.tatthanh.com.vn/pic/12/menu/images/1(1).png" /></span>
                            <span className="mr-3"><img src="https://iweb.tatthanh.com.vn/pic/12/menu/images/2(2).png" /></span>
                            <span className="mr-3"><img src="https://iweb.tatthanh.com.vn/pic/12/menu/images/3(2).png" /></span>
                            <span className="mr-3"><img src="https://iweb.tatthanh.com.vn/pic/12/menu/images/4(2).png" /></span>
                        </div>
                        <div >
                            <img src="https://iweb.tatthanh.com.vn/pic/12/menu/images/bct.jpg" />
                        </div>
                    </Col>
                    <Col xl={3}>
                        <h2 className="fs-6 mb-4 fw-bold">Fanpage Facebook</h2>
                        <iframe frameborder="0" height="180" scrolling="no" class=" lazyloaded"
                            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                            data-src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Faobongda.net.vn%2F&amp;tabs=timeline&amp;width=280&amp;height=130&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=true&amp;appId" width="400"></iframe>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer
