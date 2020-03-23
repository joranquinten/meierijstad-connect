import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

/* Additional Navbar Styles */
import './navbar.scss';

/* Change links in the gatsby-config.js file in the main dir */

const Navbar = () => {
	const data = useStaticQuery(graphql`
      query {
          site {
              siteMetadata {
                  title,
                  menuLinks {
		                  title,
		                  link,
		                  icon
                  }
              }
          }
      }
	`);

	const MenuLinks = data.site.siteMetadata.menuLinks.map((el,i) => (
		<li key={`navbar-link-${i}`}><Link activeClassName={'active'} className={'ui small basic black icon button'} to={el.link}><i className={`icon ${el.icon}`} />{' '}{el.title}</Link></li>
	))

	return (
		<nav>
			<ul>
				{ MenuLinks }
			</ul>
		</nav>
	);
};

export default Navbar;
