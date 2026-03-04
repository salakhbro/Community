import React from 'react'
import './Signup.css'

import { NavLink } from 'react-router-dom'

import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import Side from './assets/Side.png'
import Qrcode from './assets/Qrcode(1).png'
import GooglePlay from './assets/GooglePlay.png'
import AppStore from './assets/AppStore.png'
import Frame from './assets/Frame(5).png'
function Signup() {
    return (
        <>
            <div className='bg-black'>
                Summer Sale For All Swim Suits And Free Express Delivery - OFF 50 % !
                <a href="/" className='shopnow'>ShopNow</a>

                <select className="select">
                    <option value="English">English</option>
                    <option value="Uzbek">Uzbek</option>
                </select>
            </div>

            <h1 className='exclusive'>Exclusive</h1>

            <header className='header'>
                <div className='linkbox'>

                    <NavLink to="/">Home</NavLink>

                    <NavLink to="/contact">Contact</NavLink>

                    <NavLink to="/about">About</NavLink>

                    <NavLink to="/signup">Sign Up</NavLink>

                    <div className='search-box'>
                        <input
                            type="text"
                            className='looking'
                            placeholder='What are you looking for?'
                        />

                        <CiSearch className='search-icon' />
                    </div>

                    <div className="header-icons">
                        <CiHeart className='heart' />
                        <FaCartShopping />
                    </div>

                </div>
            </header>
            <div className="borders"></div>

            <section className='header-signup'>
                <div className='sides'>
                    <img src={Side} style={{ marginTop: "50px", marginLeft: "-45px" }} alt="this is a picture" />
                </div>
                <section className='nimadur'>
                    <div className="sign-up">
                        <h1 className='create'>Create an account</h1>
                        <p className='enter'>Enter your details below</p>
                    </div>
                    <div className="name-password">
                        <input type="text" className='name' placeholder='Name' />
                        <input type="text" className='emails' placeholder='Email or Phone Number' />
                        <input type="password" className='password' placeholder='Password' />
                        <div className="button-box">
                            <button className="account">Create Account</button>
                            <button className="google">Sign up with Google</button>
                        </div>
                        <p>Already have account?</p>
                    </div>
                </section>
            </section>

            <footer className="footer">
                <div className="container-footer">
                    <h2 className='links' style={{ marginLeft: "-40px" }}>Exclusive</h2>
                    <h2 className='links' style={{ position: "relative", left: "40px" }}>Support</h2>
                    <h2 className='links' style={{ position: "relative", left: "30px" }}>Account</h2>
                    <h2 className='links' style={{ position: "relative", left: "40px" }}>Quick Link</h2>
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
                            <img src={Qrcode} alt="this is a picture" />
                            <div className="stores">
                                <img src={GooglePlay} alt="this is a picture" />
                                <img src={AppStore} alt="this is a picture" />
                            </div>
                        </div>
                        <div className="socials">
                            <img src={Frame} alt="this is a picture" />
                        </div>
                    </div>
                </div>
                <div className='eng-footeri'>
                    <div className="eng-borderi"></div>
                    <h3 className='rimel'>© Copyright Rimel 2022. All right reserved</h3>
                </div>
            </footer>



        </>
    )
}

export default Signup