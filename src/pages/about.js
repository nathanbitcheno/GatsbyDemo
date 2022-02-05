import * as React from 'react'
import Layout from '../components/layout'
import { bodytext } from '../components/layout.module.css'

const AboutPage = () => {
    return (
        <Layout pageTitle="About">
            <p className={bodytext}>We did some stuff. It was grand.</p>
            <p className={bodytext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet hendrerit ipsum. Donec sodales faucibus lectus id fringilla. Nulla a ligula dignissim, dignissim sapien sed, vulputate ipsum. Cras nec eleifend lacus. Etiam et condimentum enim. Duis ac vehicula enim. Fusce a vehicula neque. Donec ornare rutrum eros eu finibus. Ut pharetra euismod vehicula. Vivamus vestibulum, metus ut faucibus vulputate, massa arcu faucibus velit, eget cursus sem risus ac ipsum. Fusce efficitur arcu vitae rhoncus fermentum. Nullam in nisl a elit tempus fermentum quis quis nibh.</p>
            <p className={bodytext}>Mauris euismod dolor nec bibendum volutpat. Mauris arcu lectus, scelerisque non convallis sit amet, gravida sit amet velit. Sed quis ultricies quam, a finibus ipsum. Mauris tempus sed nulla at eleifend. Nunc eget ligula sit amet risus fringilla tempor eu at massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent iaculis risus elit, ut tristique dui iaculis id. Aenean pulvinar facilisis orci, aliquet interdum ligula interdum nec. Maecenas aliquet magna a ante aliquet sagittis. Suspendisse potenti. Proin id dignissim risus, ut ornare est.</p>
            <p className={bodytext}>Nulla vitae malesuada nunc, et ultrices metus. Mauris fringilla mollis sapien, congue luctus ligula consequat non. Cras tellus ex, faucibus vitae iaculis sed, aliquet id mauris. Nunc et arcu ac lectus feugiat accumsan ut vel tellus. In ac metus mi. Vivamus non metus lacinia, dignissim quam dapibus, interdum justo. Etiam imperdiet finibus augue, ut auctor turpis elementum eu. Sed aliquet dolor massa, ut scelerisque eros rutrum ullamcorper.</p>
        </Layout>
    )
}

export default AboutPage