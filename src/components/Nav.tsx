import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';

const Nav = ({ isOpen }) => (
  <StaticQuery
    query={graphql`
      query NavQuery {
        allMarkdownRemark(sort: { fields: [frontmatter___order], order: ASC }) {
          totalCount
          edges {
            node {
              id
              frontmatter {
                title
                path
              }
            }
          }
        }
      }
    `}
    render={(results) => <NavRenderer isOpen={isOpen} {...results} />}
  />
);

const NavRenderer = ({ allMarkdownRemark, isOpen }) => {
  const { edges } = allMarkdownRemark;
  const allFrontmatter = edges.map(({ node: { frontmatter } }) => frontmatter);

  return (
    <nav
      className={`Nav absolute md:sticky inset-0 h-screen overflow-y-auto pt-12 px-2 text-gray-800 font-semibold w-1/2 md:w-1/5 transition-transform duration-300 ease-in-out transform ${
        isOpen ? 'is-open' : 'is-closed'
      }`}
    >
      <ul className="w-full">
        {allFrontmatter.map(({ title, path }) => (
          <li key={title} className="mb-2 text-sm">
            <Link to={path}>{title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
