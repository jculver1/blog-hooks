import React from 'react'

const Header = () => {
    return(
        <div>
            <nav class="nav">
                <a class="nav-link active" href="#">Home</a>
                <a class="nav-link" href="#">My Blog</a>
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </nav>
        </div>
    )
}

export default Header