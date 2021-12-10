import React, { useEffect, useState } from 'react'
import Header from '../component/Header'
import '../../css/Home.css'
import Store from '../component/Store'
import Footer from '../component/Footer'
import Container from 'react-bootstrap/esm/Container'
import Slider from '../component/Slider'
import { CategoryAPI } from '../../api/categoryAPI'
const Home = () => {
    const [category, setCategory] = useState([])
    useEffect(() => {
        const getCategory = async () => {
            try {
                const { data } = await CategoryAPI.list();
                console.log(data)
                setCategory(data);
            } catch (error) {
                console.log(error)
            }
        }
        getCategory();
    }, [])
    return (
        <div>
            <Header />
            <Container fluid >
                <Slider />
            </Container>
            <Store data={category} />
            <Footer />
        </div>
    )
}

export default Home
