import React from 'react';
import PostShivani from '../components/common/post-shivani';
import trending from '../assests/mocks/trending';
import featured from '../assests/mocks/featured';
import ShivaniPost from '../components/common/shivani-post';
import PostGrid from '../components/common/post-grid';

import PageRenderer from '../page-renderer';

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
        post.author ='Shivani Developer'
        post.description = 'Dedicated front-end developer with 4 years of experience creating responsive, user-friendly web applications. Proficient in HTML5, CSS3, JavaScript, React JS, Angular JS, Databases, SQL. Adept at collaborating with cross-functional teams to deliver high-quality projects meeting both client and business requirements.'
    })
};

const recentPosts =[...trending,...featured,...featured]

mergeStyles(trending, trendingConfig);
mergeStyles(featured, featuredConfig);

const lastFeatured = featured.pop()

export default function Home() {
    return (
        <main className='home'>
            <section className="container">
                <div className="row">
                    <h1>Featured Posts</h1>
                    <section className='featured-posts-container'>
                        <PostShivani posts={featured} columns={2} tagsOnTop={true} >
                        
                        </PostShivani>
                        <ShivaniPost post={lastFeatured} tagsOnTop={true} />
                    </section>
                    
                </div>
                </section>

                <section className="bg-white">
                <section className="container">
                <div className="row">
                <h1>Recent Posts</h1>
                        <PostGrid posts={recentPosts}  />
                    
                </div>
                </section>
                </section>

                
                
                <section className="container">
                <div className="row">
                <h2>Trending Posts</h2>
                    <section className='trending-posts-container'>
                        <PostShivani posts={trending} columns={3} />
                    </section>
                </div>
                </section>
                
            

        </main>

    )
}