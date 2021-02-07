import React from 'react'

function ArticleNews({ news }) {
    return (
        <article>
            <header>
                <h2>{news.title}</h2>
                <a href={news.url}><img src={news.urlToImage} width="150" height="150" /></a>
            </header>
            <main>
                <section>
                    <p>{news.description}</p>
                </section>
                <section>
                    {/* <a href={news.url}>Link to article</a> */}
                </section>
            </main>
        </article>
    )
}

export default ArticleNews;