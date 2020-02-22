import React from 'react'
import {graphql} from 'gatsby'

const Post = ({title, content}) => (
    <article>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{__html: content}} />
    </article>
)
export default Post

export const query = graphql`
    query($slug: String!) {
        wordpressPost(slug: {eq: $slug}) {
            title
            content
        }
    }
`
