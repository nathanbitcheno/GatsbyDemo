import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Footer from './footer'
import Nav from './nav'
import {Trans} from 'gatsby-plugin-react-i18next'
import { 
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    fullPage,
    navBar,
    siteTitle,
    footer
    } from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
    query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `)
    return (
        <div className={fullPage}>
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>
                <nav className={navBar}>

                    <header className={siteTitle}>{data.site.siteMetadata.title}</header>
                    <Nav></Nav>
                    
                </nav>
            <div className={container}>
                <main>
                    {children}
                </main>
            </div>
            <Footer className={footer}></Footer>
        </div>
        
    )
}

export default Layout

