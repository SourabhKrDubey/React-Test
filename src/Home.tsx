import React, { Fragment, useState } from 'react';
import Header from './layouts/Header';
import IconFree from "./assets/images/icon-free.jpg";
import IconPro from "./assets/images/icon-pro.jpg";

const Home = () => {
    const [price, setPrice] = useState(30);
    const [range, setRange] = useState("0");
    const handleChange = (e: { target: { value: any; }; }) => {
        const { value } = e.target;
        if (parseInt(value)) {
            setPrice(30 * parseInt(value));
        } else {
            setPrice(30);
        }
        setRange(value);
    }
    return (
        <Fragment>
            <Header />
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 offset-1">
                            <div className="card-deck mb-3 text-center mt-5">
                                <div className="card mb-4 box-shadow">
                                    <div className="card-header bg-dark-blue p-5 text-center bottom-rounded-radius">
                                        <img src={IconFree} alt="Free" />
                                        <h3 className="font-weight-bold text-white">Croptomize</h3>
                                        <h2 className="font-weight-bold text-white">Free</h2>
                                    </div>
                                    <div className="card-body text-left">
                                        <a href="#" className="btn-yellow-2 font-weight-bold d-block text-center">Sign Up</a>
                                        <h3 className="card-title pricing-card-title mt-3">iOS App Features Include:</h3>

                                        <ul className="list-unstyled mt-3 mb-4 custom-listing">
                                            <li>Sometimes you want to use the collapse plugin to trigger hidden content.</li>
                                            <li>Sometimes you want to use the collapse plugin to trigger hidden content.</li>
                                            <li>Sometimes you want to use the collapse plugin to trigger hidden content.</li>
                                            <li>Sometimes you want to use the collapse plugin to trigger hidden content.</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card mb-4 box-shadow">
                                    <div className="card-header bg-dark-blue p-5 text-center bottom-rounded-radius">
                                        <img src={IconPro} alt="Pro" />
                                        <h3 className="font-weight-bold text-white">Croptomize <span className="rounded-special">PRO</span></h3>
                                        <h2 className="font-weight-bold text-white">${price}<small>/month</small></h2>
                                    </div>
                                    <div className="card-body text-left">
                                        <div className="range-box">
                                            <div className="range-slider">
                                                <input className="range-slider__range" type="range" id="range" value={range} min="0" max="50" step="5" onChange={handleChange} />
                                            </div>
                                            <div className="equal-span">
                                                <span>0</span>
                                                <span>5</span>
                                                <span>10</span>
                                                <span>15</span>
                                                <span>20</span>
                                                <span>25</span>
                                                <span>30</span>
                                                <span>35</span>
                                                <span>40</span>
                                                <span>45</span>
                                                <span>50</span>
                                            </div>
                                        </div>
                                        <a href="#" className="btn-yellow-2 font-weight-bold d-block text-center">Purchase</a>
                                        <h3 className="card-title pricing-card-title mt-3">iOS App Features Include:</h3>

                                        <ul className="list-unstyled mt-3 mb-4 custom-listing">
                                            <li>Sometimes you want to use the collapse plugin to trigger hidden content.</li>
                                            <li>Sometimes you want to use the collapse plugin to trigger hidden content.</li>
                                            <li>Sometimes you want to use the collapse plugin to trigger hidden content.</li>
                                            <li>Sometimes you want to use the collapse plugin to trigger hidden content.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Home;