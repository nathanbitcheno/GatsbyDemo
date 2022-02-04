import * as React from 'react'
import Layout from '../components/layout'
import { bodytext } from '../components/layout.module.css'

const AboutPage = () => {
    return (
        <Layout pageTitle="About">
            <p className={bodytext}>About this demo site.</p>
        </Layout>
    )
}

export default AboutPage