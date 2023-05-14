import React from 'react';
import Container from 'react-bootstrap/Container';
import NavigationMenu from './NavigationMenu';
import Home from './Home';
import About from './About';
import imageUrls from '../data/image-sources';
import LoadingIndicator from './common/LoadingIndicator';
import Rating from './common/Rating';
import RestaurantsList from './restaurants-lists/RestaurantsList';
import RestaurantsListItem from './restaurants-lists/RestaurantsListItem';
import IRestaurant from '../models/IRestaurant';

const restaurant :IRestaurant = {
    "id": 1,
    "name": "Mad About Pizza",
    "description": "Delicious pizzas baked in wood-fired oven. We serve authentic Italian varieties, classic American pizzas, and desi ones too!",
    "cuisines": [
        "Italian",
        "American",
        "Fusion"
    ],
    "opens": "11:00",
    "closes": "23:30",
    "rating": 4.1,
    "numRatings": 125,
    "costForTwo": 600,
    "imageUrl": "/images/restaurants/mad-about-pizza/restaurant.jpg"
}

const App = () => {
    return (
        <>
            <NavigationMenu />
            <Container>
                {/* <div>Hello</div> */}
                {/* <Home/> */}
                {/* <About imageUrls={imageUrls} /> */}
                {/* <LoadingIndicator size="large" message="The restaurants are being fetched. Please wait..."/> */}
                // <Rating value={2.7} className="me-2" />
                {/* <RestaurantsListItem restaurant={restaurant} /> */}
                <RestaurantsList />
            </Container>
        </>
    );
};

export default App;