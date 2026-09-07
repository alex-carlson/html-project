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
    <section class="full-width color-fill padding" style="padding-top: 140px;">
        <h1>Sizing Charts</h1>
        <div>
            <h2>Adult Shirts</h2>
            <table>
                <tr>
                    <td>
                        <h3>Size</h3>
                    </td>
                    <td>
                        <h3>Chest</h3>
                    </td>
                    <td>
                        <h3>Body Length</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>S</p>
                    </td>
                    <td>36" - 37"</td>
                    <td>27"</td>
                </tr>
                <tr>
                    <td>
                        <p>M</p>
                    </td>
                    <td>
                        <p>39" - 40"</p>
                    </td>
                    <td>28"</td>
                </tr>
                <tr>
                    <td>
                        <p>L</p>
                    </td>
                    <td>41" - 42"</td>
                    <td>29"</td>
                </tr>
            </table>
        </div>
        <div>
            <h2>Children's Shirts</h2>
            <table>
                <tr>
                    <td>
                        <h3>Size</h3>
                    </td>
                    <td>
                        <h3>Chest</h3>
                    </td>
                    <td>
                        <h3>Body Length</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>0/3m</p>
                    </td>
                    <td>17"</td>
                    <td>17.5"</td>
                </tr>
                <tr>
                    <td>
                        <p>12/18m</p>
                    </td>
                    <td>
                        <p>19.75"</p>
                    </td>
                    <td>20.25"</td>
                </tr>
                <tr>
                    <td>
                        <p>8</p>
                    </td>
                    <td>26"</td>
                    <td>24"</td>
                </tr>
            </table>
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
