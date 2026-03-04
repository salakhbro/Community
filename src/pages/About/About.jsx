import React from 'react'
import { NavLink } from 'react-router-dom';
// icons import
import { CiSearch, CiHeart } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import './About.css'
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
// image import
import Girls from '../About/assets/girls.png'
import Services from '../About/assets/services.png'
import Tom from '../About/assets/tom.png'
import Money from '../About/assets/money.png'
import Cart from '../About/assets/cart.png'
import MoneyBag from '../About/assets/money-bag.png'
import Emma from '../About/assets/emma.png'
import Will from '../About/assets/will.png'
import Dastavka from '../About/assets/cars.png'
import Quloqchin from '../About/assets/quloqchin.png'
import Frame from '../About/assets/frame.png'
import qrcodes from '../About/assets/QrCode.png'
import googleplay from '../About/assets/GooglePlay.png'
import AppStore from '../About/assets/AppStore.png'
import Icons from '../About/assets/icons.png'

function About() {

  return (
    <div>
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

      <div className='abouts'>
        <span className='hom'>Homeㅤ/</span>
        <span className='con'>ㅤ Contact</span>
      </div>

      <section className='main-hero'>
        <div className='hero'>
          <h1 className='story'>Our Story</h1>
          <span className='online-span'>Launced in 2015, Exclusive is South Asia’s premier online shopping <br /> makterplace with an active presense in Bangladesh. Supported <br /> by wide range of tailored marketing, data and service solutions, <br /> Exclusive has 10,500 sallers and 300 brands and serves 3 <br /> millioons customers across the region. </span>
          <span className='offer-span'>Exclusive has more than 1 Million products to offer, growing at a <br /> very fast. Exclusive offers a diverse assotment in categories <br /> ranging  from consumer.</span>
        </div>
        <div className='image-girls'>
          <img src={Girls} alt="this is a picture" />
        </div>
      </section>

      <section className='container'>
        <div className='box-abouts'>
          <div className='boxni-ichi'>
            <img src={Services} className='servis' alt="this is a picture" />
            <h1 className='ten-k'>10.5k</h1>
            <span className='active-span'>Sallers active our site</span>
          </div>
        </div>
        <div className='box-abouts'>
          <div className='boxni-ichi'>
            <img src={Money} className='servis' alt="this is a picture" />
            <h1 className='ten-k'>33k</h1>
            <span className='active-span'>Mopnthly Produduct Sale</span>
          </div>
        </div>
        <div className='box-abouts'>
          <div className='boxni-ichi'>
            <img src={Cart} className='servis' alt="this is a picture" />
            <h1 className='ten-k'>45.5k</h1>
            <span className='active-span'>Customer active in our site</span>
          </div>
        </div>
        <div className='box-abouts'>
          <div className='boxni-ichi'>
            <img src={MoneyBag} className='servis' alt="this is a picture" />
            <h1 className='ten-k'>25k</h1>
            <span className='active-span'>Anual gross sale in our site</span>
          </div>
        </div>
      </section>

      <div className='headers-tom-emma'>

        <section className='tom-emma-will' style={{ padding: "100px" }}>
          <div className='mans-box'>
            <img src={Tom} style={{ marginTop: "40px" }} alt="this is a picture" />
          </div>
          <div className='tom-about'>
            <h2 className='toms'>Tom Cruise</h2>
            <span className="founder-span">Founder & Chairman</span>
            <div className='tom-icons'>
              <CiTwitter />
              <FaInstagram />
              <FaLinkedinIn />
            </div>
          </div>
        </section>
        <section className='tom-emma-will'>
          <div className='mans-box'>
            <img src={Emma} style={{ marginTop: "40px" }} alt="this is a picture" />
          </div>
          <div className='tom-about' style={{ marginLeft: "40px" }}>
            <h2 className='emma'>Emma Watson</h2>
            <span className="directory-span">Managing Director</span>
            <div className='tom-icons' style={{ marginLeft: "-20px" }}>
              <CiTwitter />
              <FaInstagram />
              <FaLinkedinIn />
            </div>
          </div>
        </section>
        <section className='tom-emma-will' style={{ padding: "100px" }}>
          <div className='mans-box'>
            <img src={Will} style={{ marginTop: "40px" }} alt="this is a picture" />
          </div>
          <div className='tom-about'>
            <h2 className='will'>Will Smith</h2>
            <span className="founder-span">Product Designer</span>
            <div className='tom-icons' style={{ marginLeft: "40px" }}>
              <CiTwitter />
              <FaInstagram />
              <FaLinkedinIn />
            </div>
          </div>
        </section>
      </div>

      <div className="services-images">
        <img src={Dastavka} alt="this is a picture" />
        <img src={Quloqchin} alt="this is a picture" />
        <img src={Frame} alt="this is a picture" />
      </div>
      <section className='foottrs'>
        <div className='customs'>
          <h3>FREE AND FAST DELIVERY</h3>
          <span>Free delivery for all orders over $140</span>
        </div>
        <div style={{ marginLeft: "50px" }}>
          <h3>24/7 CUSTOMER SERVICE</h3>
          <span>Friendly 24/7 customer support</span>
        </div>
        <div style={{ marginLeft: "50px" }}>
          <h3>MONEY BACK GUARANTEE</h3>
          <span>We reurn money within 30 days</span>
        </div>
      </section>


      <footer className="footer">
        <div className="container-footer">
          <h2 className='links' style={{ marginLeft: "-40px" }}>Exclusive</h2>
          <h2 className='links'>Support</h2>
          <h2 className='links'>Account</h2>
          <h2 className='links'>Quick Link</h2>
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

export default About
