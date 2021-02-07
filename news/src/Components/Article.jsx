import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

function Article({ title, description, imageUrl, url}) {
    return (
        <Container fluid>
            <article>
                <header>
                    <h2>{title}</h2>
                    <a href={url}><img src={imageUrl} width="150" height="150" /></a>
                </header>
                <main>
                    <section>
                        <p>{description}</p>
                    </section>
                    <section>
                        {/* <a href={url}>Link to article</a> */}
                    </section>
                </main>
            </article>
        </Container>
    )
}

export default Article;