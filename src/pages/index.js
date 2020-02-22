import React from 'react'
import {Link, graphql} from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = ({data}) => (
    <Layout>
        <SEO title="Home" />
        <h1>Timeline</h1>
        <ul>
            {data.allWordpressPost.edges.map(({node}) => (
                <li key={node.slug}>
                    <Link to={node.slug}>{node.title}</Link>
                </li>
            ))}
        </ul>
    </Layout>
)

export default IndexPage

export const query = graphql`
    query {
        allWordpressPost {
            edges {
                node {
                    title
                    slug
                }
            }
        }
    }
`
