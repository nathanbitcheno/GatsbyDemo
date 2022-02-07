import React from 'react';
import {Link, useI18next} from 'gatsby-plugin-react-i18next';
import { 
    mainFooter,
    language
    } from '../components/layout.module.css'
  
 
const Footer = ({title}) => {
    const {languages, originalPath} = useI18next();
    return (
      <footer className={mainFooter}>
        <h1 style={{margin: 0}}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`
            }}>
            {title}
          </Link>
        </h1>
        <ul className={language}>
          {languages.map((lng) => (
            <li key={lng}>
              <Link to={originalPath} language={lng}>
                {lng}
              </Link>
            </li>
          ))}
        </ul>
      </footer>
    );
};
 
export default Footer;