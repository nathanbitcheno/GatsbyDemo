import * as React from "react"
import Layout from '../components/layout'
import { bodytext } from '../components/layout.module.css'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p className={bodytext}>This is a demo Gatsby/React page.</p>
    </Layout>
  )
}

export default IndexPage
