import React from 'react'
import { graphql } from 'gatsby'
import { error } from '../components/layout.module.css'
import {Trans} from 'gatsby-plugin-react-i18next'

function TextError(props) {
    return (
        <div className={error}>
            <Trans>{props.children}</Trans>
        </div>
    )
}

export default TextError

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