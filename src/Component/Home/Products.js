import React, { useEffect } from 'react'
import { Container, Image } from "react-bootstrap";
import OwlCarousel from 'react-owl-carousel';
import yj3 from "../../assets/images/j3.webp";
import page2 from "../../assets/images/page2.png";
import i3 from "../../assets/images/FRP Fan Blade.webp";
import jy1 from "../../assets/images/j1.webp";
import j2 from "../../assets/images/j2.png";

import 'owl.carousel/dist/assets/owl.carousel.css';


import AOS from "aos";
import "aos/dist/aos.css";
const Products = () => {
    const options = {
        stagePadding: 0,
        loop: true,
        margin: 30,
        nav: true,
        autoplay: true,
        dots: false,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 2,
            },
            700: {
                items: 2,
            },
            1000: {
                items: 2,
            },
            1100: {
                items: 2,
            },
            1200: {
                items: 3,
            }
        },
    };
    useEffect(() => {
        AOS.init({
          easing: "linear",
          once: true,
          delay: 400,
          duration: 800,
        });
        AOS.refresh()
      }, []);
    return (
        <>
            <section className='products_wrap'>
                <Container>
                    <div className='products_title'>
                        <h2 className='h2_title'>products</h2>
                        <p className='pera'>This product list provides an overview of towers to help you determine which is right for your application.</p>
                    </div>
                    <OwlCarousel className='owl-theme hero_slider'  {...options}>
                        <div className='item' data-aos="fade-up">                                                                                                                     
                            <div className='item_card'>
                                <figure className='item_card_img'>
                                    <Image src={yj3} alt='Secure' />
                                </figure>
                                <article className='item_card_body'>
                                    <h3 className="h3_title ">Fill PVC Splash Bar</h3>
                                    {/* <p className='pera'>MCT Gray Cooling Tower</p> */}
                                    {/* <button className='btn item_card_btn'>View product</button> */}
                                </article>
                            </div>
                        </div>

                        <div className='item' data-aos="fade-up">
                            <div className='item_card'>
                                <figure className='item_card_img'>
                                    <Image src={page2 } alt='Secure' />
                                </figure>
                                <article className='item_card_body'>
                                    <h3 className="h3_title ">FRP Cooling Tower Fan</h3>
                                    {/* <p className='pera'>FRP Cooling Tower Fans</p> */}
                                    {/* <button className='btn item_card_btn'>View product</button> */}
                                </article>
                            </div>
                        </div>
                        <div className='item' data-aos="fade-up">
                            <div className='item_card'>
                                <figure className='item_card_img'>
                                    <Image src={i3} alt='Secure' />
                                </figure>
                                <article className='item_card_body'>
                                    <h3 className="h3_title ">FRP Fan Blades</h3>
                                    {/* <p className='pera'>pvc fills for cooling tower</p> */}
                                    {/* <button className='btn item_card_btn'>View product</button> */}
                                </article>
                            </div>
                        </div>
                        <div className='item' data-aos="fade-up">
                            <div className='item_card'>
                                <figure className='item_card_img'>
                                    <Image src={jy1} alt='Secure' />
                                </figure>
                                <article className='item_card_body'>
                                    <h3 className="h3_title ">honeycom PVC fills</h3>
                                    {/* <p className='pera'>pvc fills for cooling tower</p> */}
                                    {/* <button className='btn item_card_btn'>View product</button> */}
                                </article>
                            </div>
                        </div>
                        <div className='item' data-aos="fade-up">
                            <div className='item_card'>
                                <figure className='item_card_img'>
                                    <Image src={j2} alt='Secure' />
                                </figure>
                                <article className='item_card_body'>
                                    <h3 className="h3_title ">PVC V-Bar</h3>
                                    {/* <p className='pera'>pvc fills for cooling tower</p> */}
                                    {/* <button className='btn item_card_btn'>View product</button> */}
                                </article>
                            </div>
                        </div>
                    </OwlCarousel>
                </Container>
            </section>
        </>
    )
}

export default Products
