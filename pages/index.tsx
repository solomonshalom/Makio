import React from 'react'

import Head from '@components/Head'
import Chart from '@components/Chart/Chart'
import Footer from '@components/Footer/Footer'
import global from '@css/global.style'

const Home: React.FC = () => {
  global()

  return (
    <>
      <Head title="New" />
      <Chart />
      <Footer />
    </>
  )
}

export default Home
