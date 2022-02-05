import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { 
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    fullPage,
    navBar,
    siteTitle
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

                    <div><ul className={navLinks}>
                            <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
                            <li className={navLinkItem}><Link to="/about" className={navLinkText}>About</Link></li>
                            <li className={navLinkItem}><Link to="/contact" className={navLinkText}>Contact</Link></li>
                            </ul>
                    </div>
                </nav>
            <div className={container}>
                
                <main>
                    <h1 className={heading}>{pageTitle}</h1>
                    {children}
                </main>
            </div>
        </div>
    )
}

export default Layout