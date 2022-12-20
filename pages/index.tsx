import type { NextPage } from "next"
import Head from "next/head"
import HeroSection from "../components/HeroSection"
import Contact from "../components/Contact"
import Products from "../components/Products"
import Location from "../components/Location"
import Reviews from "../components/Reviews"

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>
          Radiotronic Sdn Bhd | Main Reputable Dealer of Electrical Products and
          Electronic Components
        </title>

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>

      <HeroSection />
      <Products />
      {/* <Reviews /> */}
      <Contact />
      <Location />
    </div>
  )
}

export default Home
