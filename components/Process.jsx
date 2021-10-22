import React from 'react';

import ArrowEven from './icons/ArrowEven';
import ArrowOdd from './icons/ArrowOdd';

function Process() {
    return (
        <div className="process">

            <div className="process__heading">
                <div className="process__heading--secondary">
                    <p>
                        Whats the Process
                    </p>
                </div>

                <div className="process__heading--primary">
                    <h3>
                        Our Website development process is as follow
                    </h3>
                </div>
            </div>

            <div className="process__container">


                
                <div className="process__single">

                    <div className="process__num">
                        <h3>01</h3>
                    </div>
                    <div className="svg svd--odd">
                        <ArrowOdd></ArrowOdd>
                    </div>

                    <div className="process__title">
                        <h4>
                            Create and Finalize Design
                        </h4>
                    </div>

                    <div className="process__paragraph">
                        <p>
                            Get your blood tests delivered at home collect a sample from the your blood tests.
                        </p>
                    </div>
                </div>

                <div className="process__single">

                    <div className="process__num">
                        <h3>02</h3>
                    </div>

                    <div className="svg svg--even">
                        <ArrowEven ></ArrowEven>
                    </div>

                    <div className="process__title">
                        <h4>
                            Create and Finalize Design
                        </h4>
                    </div>

                    <div className="process__paragraph">
                        <p>
                            Get your blood tests delivered at home collect a sample from the your blood tests.
                        </p>
                    </div>
                </div>

                <div className="process__single">

                    <div className="process__num">
                        <h3>03</h3>
                    </div>

                    <div className="svg svg--odd">
                        <ArrowOdd></ArrowOdd>
                    </div>

                    <div className="process__title">
                        <h4>
                            Create and Finalize Design
                        </h4>
                    </div>

                    <div className="process__paragraph">
                        <p>
                            Get your blood tests delivered at home collect a sample from the your blood tests.
                        </p>
                    </div>
                </div>

                <div className="process__single">

                    <div className="process__num">
                        <h3>04</h3>
                    </div>

                    <div className="process__title">
                        <h4>
                            Create and Finalize Design
                        </h4>
                    </div>

                    <div className="process__paragraph">
                        <p>
                            Get your blood tests delivered at home collect a sample from the your blood tests.
                        </p>
                    </div>
                </div>
                
            </div>

        </div>
    )
}

export default Process
/*
 <svg>
                        <use href="./icons/arrowEven.svg"></use>
                    </svg>
*/