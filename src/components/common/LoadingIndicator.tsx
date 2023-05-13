import React from 'react';
import Spinner  from 'react-bootstrap/Spinner';
type Props = {

};

const LoadingIndicator = (props: Props) => {
    return (
        <Spinner animation="border" role="status">
            <span className="visually-hidden">...Loading</span>
        </Spinner>

    );

};

export default LoadingIndicator;