import Article from '../Components/Article';

function Headlines({ newsInfo }) {
     
    return (
        <div>
            <Article title={newsInfo.title} description={newsInfo.description} imageUrl={newsInfo.urlToImage} url={newsInfo.url} />
        </div>
    )
}

export default Headlines;