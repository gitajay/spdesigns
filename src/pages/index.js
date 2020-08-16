import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import One from '../components/One'
import Two from '../components/Two'
import Three from '../components/Three'
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
        <Two />
        <Three />
        <Four />
        <Five />
      </Layout>
    )
  }
}

export default Home
