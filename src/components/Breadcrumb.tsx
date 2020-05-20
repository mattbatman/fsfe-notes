import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';

const Breadcrumb = ({ currentPage }) => (
  <StaticQuery
    query={graphql`
      query BCQuery {
        allMarkdownRemark(sort: { fields: [frontmatter___order], order: ASC }) {
          totalCount
          edges {
            node {
              id
              frontmatter {
                title
                path
                order
              }
            }
          }
        }
      }
    `}
    render={(results) => (
      <BreadcrumbRenderer currentPage={currentPage} {...results} />
    )}
  />
);

const BreadcrumbRenderer = ({ allMarkdownRemark, currentPage }) => {
  const { edges } = allMarkdownRemark;
  const allFrontmatter = edges.map(({ node: { frontmatter } }) => frontmatter);
  const currentPageIndex = allFrontmatter.findIndex(
    (fm) => fm.order === currentPage
  );
  const nextPage = allFrontmatter[currentPageIndex + 1]
    ? allFrontmatter[currentPageIndex + 1]
    : null;
  const previousPage = allFrontmatter[currentPageIndex - 1]
    ? allFrontmatter[currentPageIndex - 1]
    : null;

  return (
    <footer className="clearfix">
      {previousPage ? (
        <Link to={previousPage.path} className="text-blue-500 float-left">
          &#60; {previousPage.title}
        </Link>
      ) : null}
      {nextPage ? (
        <Link to={nextPage.path} className="text-blue-500 float-right">
          {nextPage.title} &#62;
        </Link>
      ) : null}
    </footer>
  );
};

export default Breadcrumb;
