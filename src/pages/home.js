import React from 'react';
import PostShivani from '../components/common/post-shivani';
import trending from '../assests/mocks/trending';

export default function Home(){
    return (
        <section className="container home">
        <div className="row">
            <h2>Trending Posts</h2>
            <PostShivani posts={trending} columns={3} />
        </div>
    </section>
    )
}