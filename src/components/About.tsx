import ListGroup from 'react-bootstrap/ListGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faCode } from '@fortawesome/free-solid-svg-icons';

type Props = {
    imageUrls: string[]
};

const About = ({ imageUrls }: Props) => {
    return (
        <main>
            <section className="my-5">
                <header>
                    <h2>
                        <FontAwesomeIcon icon={faLink} className="me-2" />
                        Attributions
                    </h2>
                    <hr />
                </header>
                <p>
                    The author would like to thank
                    <a href="https://pixlr.com/x/" target="_blank"
                        rel="noreferrer"> Pixlr</a> for providing an awesome free photo-editing tool online.
                    The author also thanks the people who shared the images
                    (for commercial and royalty-free usage) which are used in this site.
                </p>
                <ListGroup>
                    {
                        imageUrls.map(
                            (imageUrl, idx) => (
                                <ListGroup.Item key={imageUrl}>
                                    <a href={imageUrl}>{imageUrl}</a>
                                </ListGroup.Item>
                            )
                        )
                    }
                </ListGroup>
            </section>

        </main>
    );
};
export default About;