import React, { useState } from 'react';
import TagRow from './tag-row';
import { Link } from 'react-router-dom';
// import {categoryColors} from './styles';


// const navLinks = [
//     {
//         title: 'Can anyone code?',
//         date: moment().format('MMMM DD, YYYY'),
//         categories: ['Tech Culture', 'Tech News'],
//         link: '#',
//         image: 'anyone_can_code.jpg',
//     },
//     {
//         title: 'Using AWS S3 for Storing Blog Images',
//         date: moment().format('MMMM DD, YYYY'),
//         categories: ['Cloud'],
//         link: '#',
//         image: 'cloud_storage.jpeg',
//     },
//     {
//         title: 'Popular Programming Languages in 2020',
//         date: moment().format('MMMM DD, YYYY'),
//         categories: ['Tech News', 'Tech Culture'],
//         link: '#',
//         image: 'programming_languages.jpeg'
//     },
//     {
//         title: 'Brain Hacks for Learning to Program',
//         date: moment().format('MMMM DD, YYYY'),
//         categories: ['Brain Health'],
//         link: '#',
//         image: 'neuron.jpg'
//     },
// ]



export default function ShivaniPost({ post, tagsOnTop }) {
    const windowWidth = window.innerWidth
    const imageBackground = { backgroundImage: `url("${require(`../../assests/images/${post.image}`)}")` };
    const style = windowWidth > 900 ? { ...imageBackground, ...post.style } : imageBackground;
    console.log(post.categories);

    return (

        <a className="shivani-post overlay" style={style} href={post.link}>
            <Link to='./blog' className={"link-styles"}>
                <div
                    className='image-text'
                    style={{ justifyContent: tagsOnTop ? 'space-between' : 'flex-end' }}
                >
                    <TagRow tags={post.categories} />
                    <div>
                        <h2 className='image-title'>{post.title}</h2>
                        <span className="image-date">{post.date}</span>
                    </div>
                </div>
            </Link>
        </a>

    )
}