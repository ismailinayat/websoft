import {useState, useEffect} from 'react';


import Link from 'next/link';

function Navbar() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    console.log(mobileMenuOpen)
    const mobileNavClasses = mobileMenuOpen ? "mobile__menu__background mobile__menu__active" : "mobile__menu__background"

    useEffect(() => {

        //mobileMenuOpen ? document.body.style.overflow = "hidden" : document.body.style.overflow="";
    })
    return (
        <>
            <div className="container">
                <div className="nav">
                    <div className="nav__logo">
                        <Link href="/">
                            <a>WebSoft</a>
                        </Link>
                    </div>

                    <div className="nav__link">

                        <div className="nav__link__container">
                            <li className="link">Home</li>
                            <li className="link">Our Process</li>
                            <li className="link">Our Projects</li>
                            <li className="link">Contact</li>
                        </div>
                    </div>

                    <div className="nav__btn">
                        <button>
                            <p>
                                Hire me
                            </p>
                        </button>
                    </div>

                    <div className="nav__burger" onClick={()=> setMobileMenuOpen(!mobileMenuOpen)}>
                        <div className={mobileMenuOpen? "nav__burger__line nav__burger__upper" : "nav__burger__line"} ></div>
                        <div className={mobileMenuOpen? "nav__burger__line nav__burger__middle" : "nav__burger__line"}></div>
                        <div className={mobileMenuOpen? "nav__burger__line nav__burger__bottom" : "nav__burger__line"}></div>
                    </div>
                </div>
            </div>

            <div className={mobileNavClasses}>

            </div>

            <div className={mobileMenuOpen? "mobile__menu__links-active mobile__menu__links" : "mobile__menu__links"}>
                <ul className="links__container">
                    <li className="link">Home</li>
                    <li className="link">Our Process</li>
                    <li className="link">Our Project</li>
                    <li className="link">Contact Us</li>
                </ul>

                <div className="nav__btn active">
                        <button>
                            <p>
                                Hire Us
                            </p>
                        </button>
                    </div>
            </div>
        </>
    )
}

export default Navbar
