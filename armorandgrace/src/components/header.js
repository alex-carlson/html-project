export function Header() {
    return `<header>
        <!-- <img src="logo.png" alt="Logo"> -->
        <h1><a href="index.html">Armor and Grace</a></h1>

        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="sizingchart.html">Sizing Chart</a></li>
                <li>
                    <a href="cart.html">
                        <i class="fa-solid fa-cart-shopping"></i>
                        <span id="cart-count">0</span>
                    </a>
                </li>
            </ul>
        </nav>
    </header>`;
}