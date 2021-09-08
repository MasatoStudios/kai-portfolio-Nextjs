import Head from 'next/head'
import Image from 'next/image'
import Layout, {siteTitle} from '../components/layout'
import Navbar from '../components/navbar'

// TODO:
// // Make GIF work

const homeTitle = 'Kai Webb | Home'

const Home = () => {
  return (
		<>
			<Head>
				<title>{homeTitle}</title>
			</Head>
			<Navbar />
			<Layout>
				
			</Layout>
		</>
	)
}

export default Home