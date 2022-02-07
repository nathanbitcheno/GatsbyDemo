import * as React from "react"
import Layout from '../components/layout'
import {Trans} from 'gatsby-plugin-react-i18next'
import { 
  bodytext,
  error,
  heading
  } from '../components/layout.module.css'

//const IndexPage = () => {
class IndexPage extends React.Component {
  state = {
    loading: true,
    error: false,
    fetchedData: []
  }

  componentDidMount() {
    fetch('https://catfact.ninja/fact').then(response => {
      return response.json()
    }).then(json => {
      this.setState({
        fetchedData: json.fact,
        loading: false
      })
    })
  }

  render (){
    
    const {loading, fetchedData} = this.state
    return(
    <Layout pageTitle="Cat Fact">
      <h1 className={heading}><Trans>Cat Fact</Trans></h1>
      {loading ? (
      
        <p class={error}>LOADING...</p>
      ) : (
        <p class={bodytext}>{fetchedData}</p>
      )}
      
    </Layout>
    )

  }
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