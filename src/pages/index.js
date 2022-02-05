import * as React from "react"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <StaticImage
        src="../images/TreerootRed.png"
        alt="Tree of life"
        height="600"
      />
    </Layout>
  )
}

export default IndexPage
