import * as React from 'react'
import { Link, graphql } from 'gatsby'
import {Trans} from 'gatsby-plugin-react-i18next'
import { 
    navLinks,
    navLinkItem,
    navLinkText
    } from './layout.module.css'

const Nav = () => {
    
    return (
        <div><ul className={navLinks}>
                <li className={navLinkItem}><Link to="/" className={navLinkText}><Trans>Home</Trans></Link></li>
                <li className={navLinkItem}><Link to="/about" className={navLinkText}><Trans>About</Trans></Link></li>
                <li className={navLinkItem}><Link to="/contact" className={navLinkText}><Trans>Contact</Trans></Link></li>
            </ul>
        </div>
    );
};
 
export default Nav;


export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;