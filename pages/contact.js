import Head from 'next/head'
import Contact from '../components/Contact';
import Form from '../components/Form';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Coping UK | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Form heading='Get Early Ticket Access' message='Join our community for early access discount tickets to Coping Festival and other events.' formLabel='Email address' button='Sign up'/>

      <Contact 
      heading="Let's Create" 
      subhead="Stories for a Brighter Future"
      p="We'd love to hear from you if you you have an interest in building a community around your business or organisation." 
      email='info@copinguk.org' 
      insta='@copinguk'
      />

      
      
    </div>
  );
}