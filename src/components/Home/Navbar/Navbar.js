import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-light ">
                <div class="container-fluid">
                    <span class="navbar-brand mb-0 h1" style={{fontFamily:'Anton',fontSize:'30px', fontWeight:'bold'}}>Plumber</span>

                    <ul class="nav-pills nav justify-content-end">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="login" style={{fontFamily:'oswald',fontSize:'20px'}}>login</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-dark" aria-current="page" href="/" style={{fontFamily:'oswald',fontSize:'20px'}}>Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-dark" href="admin" style={{fontFamily:'oswald', fontSize:'20px'}}>admin</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-dark" href="dashboard" style={{fontFamily:'oswald', fontSize:'20px'}}>dashboard</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-dark" href="find" tabindex="-1" aria-disabled="true" style={{fontFamily:'oswald', fontSize:'20px'}}>find</a>
                        </li>
                    </ul>
                </div>

            </nav>
        </div>
    );
};

export default Navbar;