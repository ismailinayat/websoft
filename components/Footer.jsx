import React from 'react'

function Footer() {
    return (
        <div>
            <footer className="footer">
              <div className="footer__logo-box">
                <img src="img/logo-green-2x.png" alt="Websoft Logo" className="footer__logo"/>
              </div>

              <div className="footer__row">

                  <div className="footer__navigation">
                    <ul className="footer__list">
                      <li className="footer__list-item"><a href="" className="footer__link">Company</a></li>
                      <li className="footer__list-item"><a href="" className="footer__link">Contact Us</a></li>
                      <li className="footer__list-item"><a href="" className="footer__link">Careers</a></li>
                      <li className="footer__list-item"><a href="" className="footer__link">Privacy Policy</a></li>
                      <li className="footer__list-item"><a href="" className="footer__link">Terms</a></li>
                    </ul>
                  </div>
 
                <div className="footer__copyright">
                  <p className="footer__copyright--text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At provident voluptas, expedita quasi nesciunt odio ipsum facere beatae, cumque quas quia odit praesentium omnis autem et dolores? 
                Cupiditate laudantium, itaque, numquam dignissimos minima ipsam praesentium reiciendis nemo eligendi animi ipsa ab nostrum ullam totam. Vel iste laudantium sint aliquam? Laudantium accusamus 
                dolore natus inventore? A deserunt rerum perspiciatis sunt dolor laboriosam atque accusantium quos voluptatum in, iste natus iusto, at est voluptate ipsa sapiente dolorum eaque omnis? 
            
                  </p>
                </div>
              </div>
            </footer>
        </div>
    )
}

export default Footer
