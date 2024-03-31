import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import Festivalclicker from '../components/Festivalclicker';

import Festival from '../components/Festival';
import Form from '../components/Form';
import Strategyclicker from '../components/Strategyclicker';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Coping UK | Home</title>
        <meta name="Coping UK homepage" content="Building stories for a brighter future any way we can" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero heading="Stories For a Brighter Future" message="Join our mission to build communities & tell inspiring stories that improve how we’re coping."/>
                  
      <Festivalclicker festivaltitle="Coping Festival" festivalp1="Coping Festival Paragraph Coping Festival Paragraph Coping Festival Paragraph Coping Festival Paragraph Coping Festival Paragraph Coping Festival Paragraph Coping Festival Paragraph Coping Festival Paragraph Coping Festival Paragraph Coping Festival Paragraph Coping Festival Paragraph" festivalclick="Click Here"/>

      <Strategyclicker strategytitle="yo" strategyp1="yo yo" strategyclick="yo yo yo"      />

      <Form heading='Get Early Ticket Access' message='Register for early bird tickets to Coping Festival 2024 and join our community.' formLabel='Email address' button='Sign up'/>
      
    </div>
  );
}
