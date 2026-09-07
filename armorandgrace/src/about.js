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
    
  <section class="padding min-height" style="min-height: 650px;">
        <div class="float-left third">
            <h1>Our Mission</h1>
            <p>The goal of Armor and Grace is to provide trendy and ethically sourced products, that help the local
                community.</p>
        </div>
        <div class="float-right two-thirds">
            <img src="https://images.unsplash.com/photo-1592247945554-c4a7c1879021" alt="">
        </div>
    </section>

    <section class="padding color-fill">
        <h2 class="text-center">About Armor and Grace</h2>
        <p class="text-center">Armor and Grace was established in 2026, with a vision to create beautiful sustainable
            fashion that serves to
            empower people.</p>
    </section>

    <section class="padding">
        <h2>Follow us on our socials</h2>
        <p>Keep up with what we're doing on Youtube, TikTok, and Instagram!</p>
        <p>Or sign up for our email list!</p>
        <p>Links in the footer below.</p>
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
