import Head from 'next/head'
import Members from '../src/components/Members'
import Display from '../src/components/Display'
import Footer from '../src/components/Footer'
import Steps from '../src/components/Steps'
import About from '../src/components/About'
import Bot from '../src/Bot'
import { useState, useCallback } from 'react'

export default function Home() {

  const [isopen, setIsopen] = useState(true)
  const handleV = useCallback(
    () => {
      setIsopen(!isopen)
    },
    [isopen],
  )

  return (
    <div>
      <Head>
        <title>Renergy</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <>
        {isopen ? <Bot isopen={handleV} /> : null}
        <Display />
        <About />
        <Steps />
        <Members />
        <Footer />
      </>

    </div>
  )
}
