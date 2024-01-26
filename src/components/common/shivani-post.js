import React from 'react';
import TagRow from './tag-row';
// import {categoryColors} from './styles';

export default function ShivaniPost ({post,tagsOnTop}){
    const windowWidth = window.innerWidth
    const imageBackground = {backgroundImage:`url("${require(`../../assests/images/${post.image}`)}")`};
    const style = windowWidth > 900 ?{...imageBackground,...post.style}:imageBackground;
    console.log(post.categories);
    return (
        <a className="shivani-post overlay" style={style} href={post.link}>
            <div className='image-text' style={{justifyContent:tagsOnTop ? 'space-between' : 'flex-end'}}>
            {/* <div className='tags-container'>
                {
                    post.categories.map((tag,index)=>
                    <span key={index} className="tag"style={{backgroundColor: categoryColors[tag]}}>
                        {tag.toUpperCase()}
                    </span>)
                }
            </div> */}
            <TagRow tags={post.categories}/>
                <div>
                    <h2 className='image-title'>{post.title}</h2>
                    <span className="image-date">{post.date}</span>
                </div>
            </div>
        </a>
    )
}