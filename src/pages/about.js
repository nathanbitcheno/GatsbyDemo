import * as React from 'react'
import {graphql} from 'gatsby';
import Layout from '../components/layout'
import { bodytext, heading } from '../components/layout.module.css'
import {Trans} from 'gatsby-plugin-react-i18next'

const AboutPage = () => {

    //const { t } = useTranslation();

    return (
        <Layout pageTitle="About">
            <h1 className={heading}><Trans>About</Trans></h1>
            <p className={bodytext}><Trans>AboutText</Trans></p>
        </Layout>
    )
}

export default AboutPage

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