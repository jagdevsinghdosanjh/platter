import React, { useState, useEffect } from 'react';
import { Row, Col, Alert } from 'react-bootstrap';
import IRestaurant from '../../models/IRestaurant';
import { LoadingStatus } from '../../models/types';
import LoadingIndicator from '../common/LoadingIndicator';

type Props = {

};

const madAboutPizza =
{
    "id": 1,
    "name": "Mad About Pizza",
    "description": "Delicious pizzas baked in wood-fired oven. We serve authentic Italian varieties, classic American pizzas, and desi ones too!",
    "cuisines": ["Italian", "American", "Fusion"],
    "opens": "11:00",
    "closes": "23:30",
    "rating": 4.1,
    "numRatings": 125,
    "costForTwo": 600,
    "imageUrl": "/images/restaurants/mad-about-pizza/restaurant.jpg"
}

const RestaurantDetails = (props: Props) => {
    const [status, setStatus] = useState<LoadingStatus>('LOADING');
    const [restaurant, setRestaurant] = useState<IRestaurant | null>(null);
    const [error, setError] = useState<Error | null>(null);

   const fetchRestaurant=()=> {
        setTimeout(()=>{
            setRestaurant(madAboutPizza);
            setStatus('LOADED');
        },3000);
    };

    useEffect(fetchRestaurant, []);

    let el;
    switch (status) {
        case 'LOADING':
            el = (
                <LoadingIndicator
                    size="large"
                    message="We are going to fetch the details of restaurant. Please Wait..."
                />
            );
            break;
        case 'LOADED':
            const {
                name,
                description,
                cuisines,
                opens,
                closes,
                rating,
                numRatings,
                costForTwo,
                imageUrl
            }=restaurant as IRestaurant;
            el = (
                <Row>
                    <Col xs={12} lg={4}>
                        <img 
                            src={`${process.env.REACT_APP_API_BASE_URL}${imageUrl}`}
                            alt={name} className="w-100"/>
                    </Col>
                    <Col xs={12} lg={8}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium quis ratione obcaecati. Et ad labore quis delectus, non id aliquam beatae fugit dicta quo quia fuga. Mollitia laboriosam accusamus porro.
                    </Col>
                </Row>
            );
            break;
        case 'ERROR_LOADING':
            el = (
                <Alert variant="Danger">
                    {error?.message}
                </Alert>
            );
            break;
    }
    return el;

    // componentDidMount() {
    //     setTimeout(() => {
    //         //     this.setState({
    //         //         status:'LOADED',
    //         //         restaurants
    //         //    });
    //         this.setState({
    //             status: 'ERROR_LOADING',
    //             error: new Error('Some Error')
    //         });
    //     }, 3000);
    // }
}
export default RestaurantDetails;