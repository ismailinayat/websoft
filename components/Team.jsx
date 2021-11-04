import React from 'react'

const team = [
    {
        name: "Mohammad Ismail",
        position: "Founder and Developer",
        image: "milo.jpg",
        linkedIn: "https://www.linkedin.com/in/ismailinayat/",
        twitter: "https://twitter.com/ismailinayat"
    },
    {
        name: "Zeeshan Amjad",
        position: "Founder, Designer and Frontend Developer",
        image: "shani.jpg",
        linkedIn: "https://www.linkedin.com/in/ismailinayat/",
        twitter: "https://twitter.com/ismailinayat"
    },
    {
        name: "Mohsin Masoon",
        position: "Customer Relations and Finance",
        image: "moni.jpg",
        linkedIn: "https://www.linkedin.com/in/ismailinayat/",
        twitter: "https://twitter.com/ismailinayat"
    },
    {
        name: "Bilal Qureshi",
        position: "Sales Manager",
        image: "bali.jpg",
        linkedIn: "https://www.linkedin.com/in/ismailinayat/",
        twitter: "https://twitter.com/ismailinayat"
    },
    {
        name: "Muhammad Umair",
        position: "International Relations",
        image: "milo.jpg",
        linkedIn: "https://www.linkedin.com/in/ismailinayat/",
        twitter: "https://twitter.com/ismailinayat"
    },
    {
        name: "Muhammad Zubair",
        position: "Partner",
        image: "milo.jpg",
        linkedIn: "https://www.linkedin.com/in/ismailinayat/",
        twitter: "https://twitter.com/ismailinayat"
    }
]

function Team() {
    return (
        <div className='team'>

            <div className="heading">

                <div className="heading__secondary">
                    <p>
                        Our Team
                    </p>
                </div>

                <div className="heading__primary">
                    <h3>
                         The most qualified and talented individuals
                    </h3>
                </div>

            </div>

            <div className="team__members">
                {team.map(member => (

                <div className="member">
                    <div className="card">
                        <div className="img">
                            <img src={`/team/${member.image}`} alt="" />
                        </div>

                        <div className="detail">
                            <div className="name">
                                <h3>{member.name}</h3>
                            </div>

                            <div className="position">
                                <p className="position__text">
                                    {member.position}
                                </p>
                            </div>
                        </div>

                        <div className="social">
                            <div className="social__link">f</div>
                            <div className="social__link">T</div>
                            <div className="social__link">I</div>
                        </div>
                    </div>
                </div>
                ))}

                
            </div>
        </div>
    )
}

export default Team

/*
<div className="member">
                    <div className="card">
                        <div className="img">
                            <img src="/assets/team/member-1.png" alt="" />
                        </div>

                        <div className="detail">
                            <div className="name">
                                <h3>Saimon Harmer</h3>
                            </div>

                            <div className="position">
                            <p className="position__text">
                                    CEO and Founder
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="member">
                    <div className="card">
                        <div className="img">
                            <img src="/assets/team/member-1.png" alt="" />
                        </div>

                        <div className="detail">
                            <div className="name">
                                <h3>Saimon Harmer</h3>
                            </div>

                            <div className="position">
                            <p className="position__text">
                                    CEO and Founder
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="member">
                    <div className="card">
                        <div className="img">
                            <img src="/assets/team/member-1.png" alt="" />
                        </div>

                        <div className="detail">
                            <div className="name">
                                <h3>Saimon Harmer</h3>
                            </div>

                            <div className="position">
                            <p className="position__text">
                                    CEO and Founder
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="member">
                    <div className="card">
                        <div className="img">
                            <img src="/assets/team/member-1.png" alt="" />
                        </div>

                        <div className="detail">
                            <div className="name">
                                <h3>Saimon Harmer</h3>
                            </div>

                            <div className="position">
                            <p className="position__text">
                                    CEO and Founder
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="member">
                    <div className="card">
                        <div className="img">
                            <img src="/assets/team/member-1.png" alt="" />
                        </div>

                        <div className="detail">
                            <div className="name">
                                <h3>Saimon Harmer</h3>
                            </div>

                            <div className="position">
                            <p className="position__text">
                                    CEO and Founder
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
*/