import React from 'react';
import categoryColors from './styles';
export default function ShivaniPost ({post,tagsOnTop}){
    const style = {backgroundImage:`url("${require(`../../assests/images/${post.image}`)}")`}
    return (
        <a className="shivani-post overlay" style={style} href={post.link}>
            <div className='image-text'>
            <div className='tags-container'>
                {
                    post.categories.map((tag,index)=>
                    <span key={index} className={{backgroundColor:categoryColors[tag]}}>
                        {tag.toUpperCase()}
                    </span>)
                }
            </div>
                <div>
                    <h2 className='image-title'>{post.title}</h2>
                    <span className="image-date">{post.date}</span>
                </div>
            </div>
        </a>
    )
}