import React from 'react'

import {BsFillTelephoneFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import {AiFillHome} from 'react-icons/ai'

function Contact() {
    return (
        <div>
            <section className="section-book">

                <div className="img__left">

                </div>
                <div className="img__right">

                </div>
                <div className="row">

                    <div className="book">
                        
                        
                       
                        <div className="book__form">

                            <div className="form__title">
                                <h2>Tell Us About Your Project.</h2>
                                <h4>It's easy. Just fill the form below.</h4>
                            </div>
                            <form action="#" className="form">

                                <div className="form__group">
                                    <input type="text" className="form__input" id="name" placeholder="Full Name" required/>
                                    <label htmlFor="name" className="form__label">Full Name</label>
                                </div>

                                <div className="form__group">
                                    <input type="email" className="form__input" id="email" placeholder="Email address" required/>
                                    <label htmlFor="email" className="form__label">Email address</label>
                                </div>

                                <div className="form__group">
                                    <textarea type="text" className="form__input" id="message" rows="4" placeholder="Write your message" required/>
                                    <label htmlFor="message" className="form__label">Write your message</label>
                                </div>


                                <button className="btn btn--green u-margin-top-medium">Send Email &rarr;</button>

                            </form>

                        </div>

                        <div className="contact">
                            <div className="contact__info">
                                <div className="heading">
                                    <h3>Contact Information</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, nemo.</p>
                                </div>

                                <div className="info__container">

                                <div className="info phone">
                                    <div className="icon phone__icon">
                                    <BsFillTelephoneFill size="20"></BsFillTelephoneFill>
                                    </div>

                                    <div className="phone__number">

                                        <p className="number__1">
                                            +92-336-551173
                                        </p>

                                        <p className="number__2">
                                        +92-330-9326341
                                        </p>
                                    </div>

                                </div>

                                <div className="info email">
                                    <div className="icon email__icon">
                                    <MdEmail size="20"></MdEmail>
                                    </div>

                                    <div className="email__mail">
                                        <p>ismailinayat@gmail.com</p>
                                    </div>
                                </div>

                                <div className="info address">
                                    <div className="icon address__icon">
                                    <AiFillHome size="20"></AiFillHome>
                                    </div>

                                    <div className="address__address">
                                        <p>Office # 18, Talha Heights, Range Road, Rawalpindi, Pakistan</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
