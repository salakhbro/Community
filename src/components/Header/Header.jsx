import React, { useState } from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'
// icon import
import { CiSearch } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { FiSmartphone } from "react-icons/fi";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { BsSmartwatch } from "react-icons/bs";
import { CiCamera } from "react-icons/ci";
import { CiHeadphones } from "react-icons/ci";
import { SiYoutubegaming } from "react-icons/si";
import { FaEye } from "react-icons/fa";
// img import
import apple from '../Header/assets/apple.png'
import iPhone from '../Header/assets/iphone(14).png'
import Right from '../Header/assets/right(arrow).png'
import Left from '../Header/assets/left(arrow).png'
import Group from '../Header/assets/Group(0).png'
import QrCode from '../Header/assets/Qrcode(1).png'
import GooglePlay from '../Header/assets/GooglePlay.png'
import AppStore from '../Header/assets/AppStore.png'
import Frames from '../Header/assets/Frame(5).png'
import Jaket from '../Header/assets/jaket.png'
import Stars from '../Header/assets/stars.png'
import Bag from '../Header/assets/bag.png'
import Retexe from '../Header/assets/retexe.png'
import Desk from '../Header/assets/desk.png'
import Jec from '../Header/assets/jec.png'
import Cesar from '../Header/assets/cesar.png'
import Camera from '../Header/assets/camera.png'
import Asus from '../Header/assets/asus.png'
import Unsplash from '../Header/assets/unsplash.png'
import Mers from '../Header/assets/mers.png'
import Sarakanoshka from '../Header/assets/sarakanoshka.png'
import Fantech from '../Header/assets/fantech.png'
import Jackets from '../Header/assets/jackets.png'
import Playstations from '../Header/assets/playstation(1).png'
// import Womans from '../Header/assets/womans.png'
import Amazon from '../Header/assets/amazon.png'
import Gucci from '../Header/assets/gucci.png'
import Services from '../Header/assets/services.png'
import Servis from '../Header/assets/services (1).png'
import ServiCes from '../Header/assets/services (2).png'


function Header() {

    return (
        <>
            {/* eng header qismi */}
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

            {/* hero qismi */}
            <section className='header-hero'>
                <div className='hero-li'>
                    <li className="menu-item">
                        <a href="/women">
                            Woman’s Fashion <span>›</span>
                        </a>
                    </li>

                    <li className="menu-item">
                        <a href="/men">
                            Men’s Fashion <span>›</span>
                        </a>
                    </li>

                    <li className="menu-item">
                        <a href="/men">
                            Home & Lifestyle
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="/men">
                            Medicine
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="/men">
                            Sports & Outdoor
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="/men">
                            Baby’s & Toys
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="/men">
                            Groceries & Pets
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="/men">
                            Health & Beauty
                        </a>
                    </li>
                </div>
                <div className="border"></div>

                <div className='heros'>
                    <img src={apple} style={{ padding: "45px 60px" }} alt="Apple" />
                    <h3 className='iphone'>iPhone 14 Series</h3>
                    <h1 className='voucher'>Up to 10% <br /> off Voucher</h1>
                    <NavLink className="shopnows" to="/signup">Shop Now</NavLink> <p className='arrow'>-=</p>
                    <img src={iPhone} className='iphones' alt="iPhone 14 Series" />
                    <div className="header-box">
                        <div className="box"></div>
                        <div className="box"></div>
                        <div className="boxs"></div>
                        <div className="box"></div>
                        <div className="box"></div>
                    </div>
                </div>
            </section>

            <section>
                <div className='todays-deals'>
                    <div className='bir-bir'></div> <h3 className='todays'>Today’s</h3>
                    <div className='flashs'>
                        <h1 className='sales'>Flash Sales</h1>
                        <div className='day-hours'>
                            <h3 className='times'>Days</h3>
                            <h3 className='times'>Hours</h3>
                            <h3 className='times'>Minutes</h3>
                            <h3 className='times'>Seconds</h3>
                        </div>
                        <div className='timer'>
                            <h1 className="timer-box">03</h1>
                            <h1 className="timer-box">23</h1>
                            <h1 className="timer-box">19</h1>
                            <h1 className="timer-box">56</h1>
                        </div>
                        <div className='boluv'>
                            <h1 className="boluv-box">:</h1>
                            <h1 className="boluv-box">:</h1>
                            <h1 className="boluv-box">:</h1>
                        </div>
                        <div className="arrows">
                            <img src={Left} alt="Left Arrow" className='left-arrow' />
                            <img src={Right} alt="Right Arrow" className='right-arrow' />
                        </div>
                    </div>
                </div>

                {/* qilib oxirgacha bolmagan joy = ) */}
                <section className='groups'>
                    <img src={Group} alt="Group" />
                    <button className="products">View All Products</button>
                    <hr style={{ marginTop: "100px" }} />
                </section>
            </section>

            <section>
                <div className='categorys'>
                    <div className='bg-cate'></div> <h3 className='cates'>Categories</h3>
                </div>
                <h1 className='browse-by'>Browse By Category</h1>
                <div className='left-and-right'>
                    <img src={Left} alt="Left Arrow" className='left-arrow' />
                    <img src={Right} alt="Right Arrow" className='right-arrow' />
                </div>
                <section className='category-header'>
                    <div className='category-cards'>
                        <FiSmartphone className='phoone' /> <h3 className='text'>Phones</h3>
                    </div>
                    <div className='category-cards'>
                        <HiOutlineComputerDesktop className='phoone' /> <h3 className='computers-text'>Computers</h3>
                    </div>
                    <div className='category-cards'>
                        <BsSmartwatch className='phoone' /> <h3 className='watch-text'>SmartWatch</h3>
                    </div>
                    <div className='categorys-cards'>
                        <CiCamera className='phoone' /> <h3 className='camera-text'>Cameras</h3>{/* endi shu camerani rangi oq bolmadi teacher  */}
                    </div>
                    <div className='category-cards'>
                        <CiHeadphones className='phoone' /> <h3 className='headphones-text'>HeadPhones</h3>
                    </div>
                    <div className='category-cards'>
                        <SiYoutubegaming className='phoone' /> <h3 className='gaming-text'>Gaming</h3>
                    </div>
                </section>
                <div className="hr"></div>
            </section>

            <div className='categoryyss'>
                <div className='bg-cate'></div> <h3 className='cates'>Best Selling Products</h3>
            </div>
            <div className='viewss'>
                <button className='view-btn'>View All</button>
            </div>
            <section className='hero-items'>

                <div className='container-item'>
                    <div className='mahsulot'>
                        <img src={Jaket} alt="this is a picture" />
                        <div className='card-icons'>
                            <CiHeart />
                            <FaEye />
                        </div>
                    </div>
                    <div className='north'>
                        <h3>The north coat</h3>
                        <div className='uch'>
                            <h3 className='two-hundred-sixty'>$260</h3>
                            <h3 className='two-hunderd-sixtys'>$360</h3>
                        </div>
                        <img src={Stars} className='star' alt="this is a picture" />
                    </div>
                </div>
                <div className='container-item'>
                    <div className='mahsulot'>
                        <img src={Bag} style={{ marginLeft: "30px" }} alt="this is a picture" />
                        <div className='card-icons'>
                            <CiHeart />
                            <FaEye />
                        </div>
                    </div>
                    <div className='north'>
                        <h3>Gucci duffle bag</h3>
                        <div className='uch'>
                            <h3 className='two-hundred-sixty'>$960</h3>
                            <h3 className='two-hunderd-sixtys'>$1160</h3>
                        </div>
                        <img src={Stars} className='star' alt="this is a picture" />
                    </div>
                </div>
                <div className='container-item'>
                    <div className='mahsulot'>
                        <img src={Retexe} alt="this is a picture" />
                        <div className='card-icons'>
                            <CiHeart />
                            <FaEye />
                        </div>
                    </div>
                    <div className='north'>
                        <h3>RGB liquid CPU Cooler</h3>
                        <div className='uch'>
                            <h3 className='two-hundred-sixty'>$160</h3>
                            <h3 className='two-hunderd-sixtys'>$170</h3>
                        </div>
                        <img src={Stars} className='star' alt="this is a picture" />
                    </div>
                </div>
                <div className='container-item'>
                    <div className='mahsulot'>
                        <img src={Desk} alt="this is a picture" />
                        <div className='card-icons'>
                            <CiHeart />
                            <FaEye />
                        </div>
                    </div>
                    <div className='north'>
                        <h3>Small BookSelf</h3>
                        <div className='uch'>
                            <h3 className='two-hundred-sixty'>$360</h3>
                        </div>
                        <img src={Stars} className='star' alt="this is a picture" />
                    </div>
                </div>
            </section>

            <section className='categorie'>
                <div className='bg-zero'>
                    <h3 className='gories'>Categories</h3>
                    <h1 className='music'>Enhance Your <br /> Music Experience</h1>
                    <div className='yumaloq-head'>
                        <div className="hours-box">23</div>
                        <div className="hours-box">05</div>
                        <div className="hours-box">59</div>
                        <div className="hours-box">35</div>
                    </div>
                    <button className='buynow'>Buy Now!</button>
                </div>
                <div className='kalonka'>
                    <img src={Jec} alt="this is a picture" />
                </div>
            </section>

            <section>
                <div className='ours'>
                    <div className="orange"></div>
                    <h3 className='product'>Our Products</h3>
                </div>
                <h1 className='pro-x'>Explore Our Products</h1>
                <div className='small-head'>
                    <div className='lefts'>←</div>
                    <div className='rights'>→</div>
                </div>
                <section className='bigs-item'>
                    <section className='small-cards'>
                        <div className="item">
                            <img src={Cesar} alt="this is a picture" />
                            <div className='eyes'>
                                <CiHeart />
                                <FaEye />
                            </div>
                        </div>
                        <div className='north'>
                            <h3 className='breeds'>Breed Dry Dog Food</h3>
                            <div className='uch'>
                                <h3 className='two-hundred-sixty'>$100</h3>
                                <img src={Stars} className='star' alt="this is a picture" />
                            </div>
                        </div>
                    </section>
                    <section className='small-cards'>
                        <div className="item">
                            <div style={{ flexDirection: "column" }}>
                                <img src={Camera} className='camera' alt="this is a picture" />
                                <button className='add-cart'>Add To Cart</button>
                            </div>
                            <div className='eye'>
                                <CiHeart />
                                <FaEye />
                            </div>
                        </div>
                        <div className='north'>
                            <h3 className='breeds'>CANON EOS DSLR Camera</h3>
                            <div className='uch'>
                                <h3 className='two-hundred-sixty'>$360</h3>
                                <img src={Stars} className='star' alt="this is a picture" />
                            </div>
                        </div>
                    </section>
                    <section className='small-cards'>
                        <div className="item">
                            <img src={Asus} alt="this is a picture" />
                            <div className='eyye'>
                                <CiHeart />
                                <FaEye />
                            </div>
                        </div>
                        <div className='north'>
                            <h3 className='breeds'>ASUS FHD Gaming Laptop</h3>
                            <div className='uch'>
                                <h3 className='two-hundred-sixty'>$700</h3>
                                <img src={Stars} className='star' alt="this is a picture" />
                            </div>
                        </div>
                    </section>
                    <section className='small-cards'>
                        <div className="item">
                            <img src={Unsplash} alt="this is a picture" />
                            <div className='hearts'>
                                <CiHeart />
                                <FaEye />
                            </div>
                        </div>
                        <div className='north'>
                            <h3 className='breeds'>Curology Product Set </h3>
                            <div className='uch'>
                                <h3 className='two-hundred-sixty'>$500</h3>
                                <img src={Stars} className='star' alt="this is a picture" />
                            </div>
                        </div>
                    </section>
                </section>

                <section className='new-products'>
                    <div className='items-merscha'>
                        <div className="item">
                            <div className="news">NEW</div>
                            <img src={Mers} alt="this is a picture" />
                            <div className='heaart'>
                                <CiHeart />
                                <FaEye />
                            </div>
                        </div>
                        <div className='north'>
                            <h3 className='breeds'>Kids Electric Car</h3>
                            <div className='uch'>
                                <h3 className='two-hundred-sixty'>$960</h3>
                                <img src={Stars} className='star' alt="this is a picture" />
                            </div>
                        </div>
                        <div className='head-red'>
                            <div className="reds"></div>
                            <div className="red"></div>
                        </div>
                    </div>
                    <div className="items-merscha">
                        <div className="item">
                            <div className="news">NEW</div>
                            <img src={Sarakanoshka} alt="this is a picture" />
                            <div className='heaart' style={{ marginLeft: "-10px" }}>
                                <CiHeart />
                                <FaEye />
                            </div>
                        </div>
                        <div className='north'>
                        </div>
                        <h3 className='breeds'>Jr. Zoom Soccer Cleats</h3>
                        <div className='threes'>
                            <h3 className='two-hundred-sixty'>$1160</h3>
                            <img src={Stars} className='star' alt="this is a picture" />
                        </div>
                        <div className='head-red'>
                            <div className="yellow"></div>
                            <div className="red"></div>
                        </div>
                    </div>
                    <div className='items-merscha'>
                        <div className="item">
                            <div className="news">NEW</div>
                            <img src={Fantech} alt="this is a picture" />
                            <div className='heaart'>
                                <CiHeart />
                                <FaEye />
                            </div>
                        </div>
                        <div className='north'>
                            <h3 className='breeds'>GP11 Shooter USB Gamepad</h3>
                            <div className='uch'>
                                <h3 className='two-hundred-sixty'>$660</h3>
                                <img src={Stars} className='star' alt="this is a picture" />
                            </div>
                        </div>
                        <div className='head-red'>
                            <div className="blacks"></div>
                            <div className="red"></div>
                        </div>
                    </div>

                    <div className="items-merscha">
                        <div className="item">
                            <img src={Jackets} className='jacket' alt="this is a picture" />
                            <div className='heaarts'>
                                <CiHeart />
                                <FaEye />
                            </div>
                        </div>
                        <div className='north'>
                            <h3 className='breeds'>Quilted Satin Jacket</h3>
                            <div className='uch'>
                                <h3 className='two-hundred-sixty'>$660</h3>
                                <img src={Stars} className='star' alt="this is a picture" />
                            </div>
                        </div>
                        <div className='head-red'>
                            <div className="green"></div>
                            <div className="red"></div>
                        </div>
                    </div>
                </section>
                <div className="button-view">
                    <button className='produc-btn'>View All Products</button>
                </div>
            </section>
            <div className='small-sec'>
                <h1 className='features'>Featured</h1>
            </div>
            <h1 className='arrival'>New Arrival</h1>
            <section className='container-head'>
                <div className='playstation-five'>
                    <img src={Playstations} className='playstation' alt="this is a picture" />
                    <div className='black-ps'>
                        <h4 className='play-five'>PlayStation 5</h4>
                        <p className='coming'>Black and White version of  the PS5 coming <br /> out on sale.</p>
                        <a href="#" className='nows-shop'>Shop Now</a>
                    </div>
                </div>
                <div className='two-box'>
                    <div className='womens-box'>
                        <div className='tops'>
                            <h1 className='women'>Women’s Collections</h1>
                            <p className='that-p'>Featured woman collections that <br /> give you another vibe.</p>
                            <a href="#" className='shops'>Shop Now</a>
                            {/* <img src={Womans} className='girl' alt="this is a picture" /> */}
                        </div>
                    </div>
                    <section className='twos-boxs'>
                        <div className="speakers-box">
                            <div className="speeks">
                                <h1 className='speek'>Speakers</h1>
                                <p className='amazon'>Amazon wireless speakers</p>
                                <a href="#" className='foots-now'>Shop Now</a>
                            </div>
                            <div className='amazon-img'>
                                <img src={Amazon} className='amazons' alt="this is a picture" />
                            </div>
                        </div>
                        <div className="gucci-box">
                            <img src={Gucci} className='gucci' alt="this is a picture" />
                            <div className='div-gucci'>
                                <h1 className='perfume'>Perfume</h1>
                                <p className='gucci-p'>GUCCI INTENSE OUD EDP</p>
                                <a href="#" className='gucci-shop'>Shop Now</a>
                            </div>
                        </div>
                    </section>
                </div>
            </section>

            <div className="services-images">
                <img src={Services} className='ser' alt="this is a picture" />
                <img src={Servis} alt="this is a picture" />
                <img src={ServiCes} className='sers' alt="this is a picture" />
            </div>
            <section className='foottrs'>
                <div className='customs'>
                    <h3>FREE AND FAST DELIVERY</h3>
                    <span>Free delivery for all orders over $140</span>
                </div>
                <div style={{ marginLeft: "50px" }}>
                    <h3>FREE AND FAST DELIVERY</h3>
                    <span>Free delivery for all orders over $140</span>
                </div>
                <div style={{ marginLeft: "50px" }}>
                    <h3>FREE AND FAST DELIVERY</h3>
                    <span>Free delivery for all orders over $140</span>
                </div>
            </section>

            <footer className="footer">
                <div className="container-footer">
                    <h2 className='links' style={{ marginLeft: "-40px" }}>Exclusive</h2>
                    <h2 className='links' style={{ position: "relative", left: "40px" }}>Support</h2>
                    <h2 className='links' style={{ position: "relative", left: "40px" }}>Account</h2>
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
                            <img src={QrCode} alt="this is a picture" />
                            <div className="stores">
                                <img src={GooglePlay} alt="this is a picture" />
                                <img src={AppStore} alt="this is a picture" />
                            </div>
                        </div>
                        <div className="socials">
                            <img src={Frames} alt="this is a picture" />
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

export default Header