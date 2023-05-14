import React from 'react';
import IRestaurant from '../../models/IRestaurant';
import { Card } from 'react-bootstrap';
import Rating from '../common/Rating';

type Props = {
    restaurant: IRestaurant
};

const RestaurantsListItem = ({ restaurant }: Props) => {
    const {
        name,
        description,
        rating,
        numRatings,
        imageUrl
    } = restaurant;

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`${process.env.REACT_APP_API_BASE_URL}${imageUrl}`} />
            <Card.Body>
                <Card.Title className="d-flex justify-content-between">
                    <div>
                        {name}
                        <div className="text-sm">
                            <Rating value={rating} className="me-2" />
                            {rating}({numRatings} rating)
                        </div>
                    </div>
                    <div>
                        <a href="/" className="btn btn btn-primary btn-sm">
                            Menu
                        </a>
                    </div>

                </Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
        </Card>
    );
}

export default RestaurantsListItem;