import React from 'react';
import Container from 'react-bootstrap/Container';
import NavigationMenu from './NavigationMenu';
import Home from './Home';
import About from './About'; 
import imageUrls from '../data/image-sources';

const App = () => {
    return (
        <>
            <NavigationMenu />
            <Container>
                {/* <div>Hello</div> */}
                {/* <Home/> */}
                <About imageUrls={imageUrls} />
            </Container>
        </>
    );
};

export default App;