import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import Container from '../components/Container'
import Navbar from '../components/NavBar'


// interface Props {
//   cats: [];
//   name: string;
//   url: string;
// }

const Blogs: NextPage = ({  }) => {
    return (
      <div className="bg-dark font-sans">
        <Head>
        <title>Matias Silva Portfolio Blog</title>
        <meta name="description" content="portfolio site blog" />
        <link rel="icon" href="/ms.jpg" />
        </Head>
        <Container>
        <h1 className="font-bold">
          Blog
        </h1>

        </Container>
      </div>

      )
    }
    
  
    
    export default Blogs