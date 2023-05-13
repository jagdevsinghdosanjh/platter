import React from 'react';
import Container from 'react-bootstrap/Container';
import NavigationMenu from './NavigationMenu';
import Home from './Home';
import About from './About'; 
import imageUrls from '../data/image-sources';
import LoadingIndicator from './common/LoadingIndicator';

const App = () => {
    return (
        <>
            <NavigationMenu />
            <Container>
                {/* <div>Hello</div> */}
                {/* <Home/> */}
                {/* <About imageUrls={imageUrls} /> */}
            <LoadingIndicator/>
            </Container>
        </>
    );
};

export default App;