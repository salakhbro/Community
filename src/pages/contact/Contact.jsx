import React from 'react'
import { NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
// image import
import qrcodes from '../About/assets/QrCode.png'
import googleplay from '../About/assets/GooglePlay.png'
import AppStore from '../About/assets/AppStore.png'
import Icons from '../About/assets/icons.png'
import './Contact.css'

function Contact() {
    return (
        <div>

            < div className='bg-black' > Summer Sale For All Swim Suits And Free Express Delivery - OFF 50 % !
                <a href="/" className='shopnow'>ShopNow</a>
                <select select className="select" >
                    <option value="English">English</option>
                    <option value="Uzbek">Uzbek</option>
                </select >
            </div >

            <h1 className='exclusive'>Exclusive</h1>
            <header className='header'>
                <div className='linkbox'>
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/signup">Sign Up</NavLink>
                    <div className='search-box'>
                        <input type="text" className='looking' placeholder='What are you looking for?' />
                        <CiSearch className='search-icon' />
                    </div>
                    <div className="header-icons">
                        <CiHeart className='heart' />
                        <FaCartShopping />
                    </div>
                </div>

            </header>
            <div className="borders"></div>

            <div className='hom-con'>
                <span className='hom'>Homeㅤ/</span>
                <span className='con'>Contact</span>
            </div>
            <section className='headers'>
                <div className='one-box'>
                    <div className='calls'>
                        <FaPhoneAlt className='phone' />
                        <h4>Call To Us</h4>
                        <span>We are available 24/7, 7 days a week.</span>
                        <span>Phone: +8801611112222</span>
                    </div>
                    <div className="emails">
                        <MdEmail className='email' />
                        <h4>Write To US</h4>
                        <span>Fill out our form and we will contact <br /> you within 24 hours.</span>
                        <p>Emails: customer@exclusive.com</p>
                        <p>Emails: support@exclusive.com</p>
                    </div>
                </div>
            </section>
            <section className='headers-two'>
                <div className='two-box'>
                    <div className='inputs'>
                        <input type="text" className='input' placeholder='Your Name *' />
                        <input type="text" className='input' placeholder='Your Email *' />
                        <input type="text" className='input' placeholder='Your Phone *' />
                    </div>
                    <div className='big-inputs'>
                        <textarea name="Your Massage" className='massage' placeholder='Your Massage'></textarea>
                    </div>
                    <div className='btns'>
                        <button className='send-btn'>Send Massage</button>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <div className="container-footer">
                    <h2 className='links' style={{ marginLeft: "-40px" }}>Exclusive</h2>
                    <h2 className='links' style={{position:"relative", left:"40px"}}>Support</h2>
                    <h2 className='links' style={{position:"relative", left:"40px"}}>Account</h2>
                    <h2 className='links' style={{position:"relative", left:"40px"}}>Quick Link</h2>
                    <h2 className='links'>Download App</h2>
                </div>
                <div className="footer-container">

                    <div className="footer-col">
                        <h2 className="logo">Exclusive</h2>
                        <h3 style={{ color: "#fff" }}>Subscribe</h3>
                        <p>Get 10% off your first order</p>
                        <input type="text" className='input-email' placeholder='Enter your email' />
                        <i class="fa-solid fa-paper-plane send"></i>
                    </div>

                    <div className="footer-col">
                        <h3>Support</h3>
                        <p>111 Bijoy sarani, Dhaka,<br />DH 1515, Bangladesh.</p>
                        <p>exclusive@gmail.com</p>
                        <p>+88015-88888-9999</p>
                    </div>

                    <div className="footer-col" style={{ marginLeft: "-60px" }}>
                        <h3>Account</h3>
                        <p>My Account</p>
                        <p>Login / Register</p>
                        <p>Cart</p>
                        <p>Wishlist</p>
                        <p>Shop</p>
                    </div>

                    <div className="footer-col">
                        <h3>Quick Link</h3>
                        <p>Privacy Policy</p>
                        <p>Terms Of Use</p>
                        <p>FAQ</p>
                        <p>Contact</p>
                    </div>

                    <div className="footers-col">
                        <h3 className='downloads'>Download App</h3>
                        <p className="small-text">Save $3 with App New User Only</p>

                        <div className="app-box">
                            <img src={qrcodes} alt="this is a picture" />
                            <div className="stores">
                                <img src={googleplay} alt="this is a picture" />
                                <img src={AppStore} alt="this is a picture" />
                            </div>
                        </div>
                        <div className="socials">
                            <img src={Icons} alt="this is a picture" />
                        </div>
                    </div>
                </div>
                <div className='eng-footeri'>
                    <div className="eng-borderi"></div>
                    <h3 className='rimel'>© Copyright Rimel 2022. All right reserved</h3>
                </div>
            </footer>
        </div>
    )
}

export default Contact