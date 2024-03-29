import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar/>     
      <Component {...pageProps} />
      <Footer/>
    </div>

  )
  
}

export default MyApp
