import * as React from "react"
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import CatFact from '../components/catfact'
import {Trans} from 'gatsby-plugin-react-i18next'
import { 
    heading
    } from '../components/layout.module.css'

const IndexPage = () => {

    return(
        <Layout pageTitle="Cat Fact">
            <h1 className={heading}><Trans>Cat Fact</Trans></h1>
            <CatFact></CatFact>
        </Layout>
    )

}
export default IndexPage

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