import React from 'react'
import Layout from '../components/layout'
import {graphql} from 'gatsby'

const Post = ({
    data: {
        wordpressPost: {title, content},
    },
}) => (
    <Layout>
        <article>
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{__html: content}} />
        </article>
    </Layout>
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
