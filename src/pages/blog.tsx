import type { NextPage, GetStaticProps } from 'next'
import Navbar from '../components/NavBar'

// interface Props {
//   cats: [];
//   name: string;
//   url: string;
// }

const Blogs: NextPage = ({  }) => {
    return (
      <div className='container h-screen bg-light'>
        <Navbar />
        <h1 className="font-bold">
          Blog
        </h1>
      </div>

      )
    }
    
    // // This function gets called at build time on server-side. It won't be called on client-side, so you can even do direct database queries.
    // export const getStaticProps: GetStaticProps = async () => {
    //   // const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
    //   // const { chars } = await res.json()
    //   const response = [{
    //       name: 'Pokémon',
    //       url: 'http://picsum.photos/200/300'
    //     }, {
    //       name: 'Michael',
    //       url: 'http://picsum.photos/200/300'
    //     }
    //   ]
    
    //   // By returning { props: { posts } }, the Blog component
    //   // will receive `posts` as a prop at build time
    //   return {
    //     props: {
    //       characters: response,
    //     },
    //   }
    // }
    
    export default Blogs