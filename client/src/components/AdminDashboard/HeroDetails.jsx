import React, {useEffect} from 'react';
import image from '../../assets/images/hero.png'
import HeroStore from "../../stores/HeroStore.js";
import axios from "axios";

const HeroDetails = () => {

    // const { heroDetails, heroDetailsRequest } = HeroStore()

    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get("http://localhost:8000/api/v1/ReadContent/678072bc2830b9662190bc62",{
                    withCredentials: true,
                })//
                console.log('Response:', res.data);

            } catch (error) {
                console.error("Error fetching hero details:", error);
            }
        })();
    }, []);


    // console.log('hero details', heroDetails);

    return (
        <section className='hero-details'>
            <div className="container">
                <div className="card mt-4 p-5">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <h3>Hero Title</h3>
                                <p>this is title</p>
                                <h3>Hero Content</h3>
                                <p>this is content</p>
                                <h3>Hero Button Text</h3>
                                <p>this is button text</p>
                            </div>
                            <div className="col-12 col-lg-6">
                                <h3>Hero Image</h3>
                                <img width='300px' src={image} alt="image"/>
                            </div>
                        </div>
                        <button className='btn btn-danger'>Delete Content</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroDetails;