import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import One from '../components/One'
import ServiceOne from '../components/ServiceOne'
import ServiceTwo from '../components/ServiceTwo'
import ServiceThree from '../components/ServiceThree'
import ServiceFour from '../components/ServiceFour'
import ServiceFive from '../components/ServiceFive'
import Four from '../components/Four'
import Five from '../components/Five'

class Home extends React.Component {
  render() {
    return (
      <Layout location="/">
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          title="SP DESIGN & ENGINEERING"
          meta={[
            { name: 'description', content: 'Electrical consultants and EA grade Electrical contractors' },
            { name: 'keywords', content: 'electrical contractor in chennai, electrical consultant' },
          ]}
        ></Helmet>
        <Banner />
        <One />
        <ServiceOne />
        <ServiceTwo />
        <ServiceThree />
        <ServiceFour />
        <ServiceFive />
        <Four />
        <Five />
      </Layout>
    )
  }
}

export default Home
