import React from 'react';
import PostShivani from '../components/common/post-shivani';
import trending from '../assests/mocks/trending';
import featured from '../assests/mocks/featured';
import ShivaniPost from '../components/common/shivani-post';

const trendingConfig = {
    1: {
        gridArea: ' 1 / 2 / 3 / 3 '

    }
}

const featuredConfig = {
    0: {
        gridArea: '1 / 1 / 2 / 3',
        height: '300px'
    },
    1: {
        height: '300px',
        // width: '630px',
    },
    3: {
        height: '630px',
        marginLeft: '30px',
        width: '630px',
    }
}

const mergeStyles = function (posts, config) {
    posts.forEach((post, index) => {
        post.style = config[index]
    })
};

mergeStyles(trending, trendingConfig);
mergeStyles(featured, featuredConfig);

const lastFeatured = featured.pop()

export default function Home() {
    return (
        <section className="container home">
            <div className="row">
                <h1>Featured Posts</h1>
                <section className='featured-posts-container'>
                <PostShivani posts={featured} columns={2} tagsOnTop={true} />
                <ShivaniPost post={lastFeatured} tagsOnTop={true}/>
                </section>
                <h2>Trending Posts</h2>
                <section className='trending-posts-container'>
                <PostShivani posts={trending} columns={3} />
                </section>
                
               
            </div>
        </section>
    )
}