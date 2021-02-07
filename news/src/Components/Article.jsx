import React from 'react'

function Article({ title, description, imageUrl, url}) {
    return (
        <article>
            <header>
                <h2>{title}</h2>
                <img src={imageUrl} alt="article-picture" width="150" height="150" />
            </header>
            <main>
                <section>
                    <p>{description}</p>
                </section>
                <section>
                    <a href={url}>Link to article</a>
                </section>
            </main>
        </article>
    )
}

export default Article;