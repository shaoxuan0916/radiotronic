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
          Electronic Components | Walkie Talkie Sabah Malaysia
        </title>
        <meta
          content="Radiotronic Sdn Bhd | Main Reputable Dealer of Electrical Products and
          Electronic Components | Walkie Talkie Sabah Malaysia | https://www.radiotronicwalkietalkie.com.my/ "
          name="description"
        />
        <meta key="og_type" property="og:type" content="website" />
        <meta
          content="Radiotronic Sdn Bhd | Main Reputable Dealer of Electrical Products and
          Electronic Components | Walkie Talkie Sabah Malaysia | https://www.radiotronicwalkietalkie.com.my/ "
          property="og:title"
        />
        <meta
          content="Radiotronic Sdn Bhd | Main Reputable Dealer of Electrical Products and
           Electronic Components | Walkie Talkie Sabah Malaysia | https://www.radiotronicwalkietalkie.com.my/ "
          property="og:description"
        />
        <meta key="og_locale" property="og:locale" content="en_IE" />
        <meta
          key="og_site_name"
          property="og:site_name"
          content="Radiotronic Sdn Bhd"
        />

        <meta
          key="og_url"
          property="og:url"
          content="https://www.radiotronicwalkietalkie.com.my/"
        />
        <meta name="robots" content="index,follow" />
        <meta
          content="Radiotronic Sdn Bhd | Main Reputable Dealer of Electrical Products and
          Electronic Components | Walkie Talkie Sabah Malaysia | https://www.radiotronicwalkietalkie.com.my/ "
          property="twitter:title"
        />
        <meta
          content="Radiotronic Sdn Bhd | Main Reputable Dealer of Electrical Products and
          Electronic Components | Walkie Talkie Sabah Malaysia | https://www.radiotronicwalkietalkie.com.my/ "
          property="twitter:description"
        />
        <link
          rel="canonical"
          href="https://www.radiotronicwalkietalkie.com.my/"
        />
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
