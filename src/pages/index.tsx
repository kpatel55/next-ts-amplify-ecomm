import { Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
// import Image from 'next/image'
import Nav from '../components/Nav'
import ProductsList from '../components/Products'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          Latest | Shoe Store
        </title>
      </Head>
      <Nav />
      <Typography variant='h3' sx={{ mt: 12, px: 15 }}>
        New Arrivals
      </Typography>
      <ProductsList />
    </>
  )
}

export default Home
