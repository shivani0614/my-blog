import react from 'react'
import  ShivaniPost  from './shivani-post';
export default function PostShivani({posts,columns, tagsOnTop}){
    return(
        <section className="shivani" style={{gridTemplateColumns:`repeat(${columns},minmax(275px,1fr))`}}>
            {
                posts.map((post,index)=>
                <ShivaniPost {...{post, index, tagsOnTop, key:index}}/>)
            }
        </section>
    )
}