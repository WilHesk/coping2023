import Head from 'next/head'
import Hero from '../components/Hero'

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Coping UK | Contact</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero heading='Connect With Our Community' message='We want to bring together those who are working on themselves to benefit those around them and our planet. Please reach us at copingfestival@gmail.com or follow @copinguk on instagram while we finish building our website!' button='Donate'/>
      
      
    </div>
  );
}