import React from 'react'
import Image from 'next/image';
import Rating from './Rating'

import Avatar1 from './images/avatar1.png';
import Avatar2 from './images/avatar2.png';
import Avatar3 from './images/avatar3.png';
import Avatar4 from './images/avatar4.png';

const data = [
  {
    id: 1,
    title: 'Modern look & trending design',
    description:
      'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
    avatar: Avatar1,
    name: 'Denny Hilguston',
    designation: '@denny.hil',
    review: 4,
  },
  {
    id: 2,
    title: 'Design Quality & performance',
    description:
      'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
    avatar: Avatar2,
    name: 'Denny Hilguston',
    designation: '@denny.hil',
    review: 5,
  },
  {
    id: 3,
    title: 'Layout and organized layers',
    description:
      'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
    avatar: Avatar3,
    name: 'Denny Hilguston',
    designation: '@denny.hil',
    review: 5,
  },
  {
    id: 4,
    title: 'Modern look & trending design',
    description:
      'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
    avatar: Avatar4,
    name: 'Denny Hilguston',
    designation: '@denny.hil',
    review: 4,
  },
];


function Testimonial() {
    return (
        <>
            
            {data.map((testimonial) => {
                console.log(testimonial.avatar)
                return (

                <div className='testimonial__card' key={testimonial.id}>
                    <Rating rating = {testimonial.review}></Rating>
                    <div className="review__title">
                        <h3>{testimonial.title}</h3>
                    </div>

                    <div className="review__description">
                        <p>{testimonial.description}</p>
                    </div>

                    <div className="user">
                        <div className="user__img">
                            <Image src={testimonial.avatar}></Image>
                        </div>
                    </div>
                </div>
                )
            })}
        </>

        
    )
}

export default Testimonial
