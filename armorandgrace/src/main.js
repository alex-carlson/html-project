import './style.css'
import heroImg from './assets/hero.png'
import javascriptLogo from './assets/javascript.svg'
import viteLogo from './assets/vite.svg'
import { setupCounter } from './counter.js'
import { Header } from './components/header.js'
import { Announcements } from './components/announcements.js'

document.querySelector('#app').innerHTML = `
  ${Header()}
  ${Announcements()}
    <section class="padding text-center full-width min-height position-relative"
        style=" background-size: cover; background-image: url('https://images.unsplash.com/photo-1498354136128-58f790194fa7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');">
        <div class="position-absolute top-50 start-50 translate-middle">
            <h2>Summer Sale on now! 🌞😎</h2>
            <p>Shop our summer collection <a href="summer.html">Here!</a></p>
        </div>
    </section>

    <section class="padding-xl text-left full-width color-fill min-height">
        <h2>Browse the full catalog</h2>
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=1470&auto=jpg&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        class="d-block w-100" alt="Shirts">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Shirts</h5>
                        <p><a href="products/shirts.html">Browse All Shirts</a></p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="https://images.unsplash.com/photo-1681206659759-565bd4c48b76?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        class="d-block w-100" alt="Accessories">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Accessories</h5>
                        <p><a href="products/accessories.html">Browse All Accessories</a></p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="https://images.unsplash.com/photo-1649566169356-e47e8d9809e4?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        class="d-block w-100" alt="Hoodies">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Hoodies</h5>
                        <p><a href="products/hoodies.html">Browse All Hoodies</a></p>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </section>

    <footer class="full-width padding">
        <div class="float-left third">
            <form>
                <label for="email">Email Address</label>
                <input type="email" name="email" id="email">
                <input type="submit" value="Sign Up" onclick="OnButtonClick()">
            </form>
        </div>
        <div class="float-left third">
            <ul class="social">
                <li>
                    <a href="https://www.instagram.com/?hl=en" target="_blank">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                </li>
                <li><a href="https://www.tiktok.com/foryou" target="_blank"><i class="fa-brands fa-tiktok"></i></a></li>
                <li><a href="https://www.youtube.com/" target="_blank"><i class="fa-brands fa-youtube youtube"></i></a>
                </li>
            </ul>
        </div>
        <div class="float-left third">
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="tables.html">Sizing Chart</a></li>
            </ul>
        </div>
    </footer>
`

setupCounter(document.querySelector('#counter'))
