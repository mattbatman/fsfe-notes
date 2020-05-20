import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

// the data prop will be injected by the GraphQL query below.
// data.markdownRemark holds your post data
export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout order={frontmatter.order}>
      <h1 className="text-3xl font-bold mb-2">{frontmatter.title}</h1>
      <div
        className="note-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        order
      }
    }
  }
`;
