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

      <Hero heading="Stories for a Brighter Future" message="We help courageous people design & build things that communicate inspiring messages of community & wellbeing."/>
                  
      <Festivalclicker
      festivaltitle="Skating | Creating | Wellbeing"
      festivalsubtitle="Sat 22nd June - Graystone Action Sports"
      festivalp1="Looking for a meaningful & family friendly event? Join us for a 12hr festival of crafts, beginner lessons and fun competitions, developing in intensity throughout the day into live music and hardcore skating. This charity fundraiser also features Battle of the Stone, offering a whopping £6000 prize pot for individuals & teams." festivalclick="Click Here"/>

      <Strategyclicker strategytitle="yo" strategyp1="yo yo" strategyclick="yo yo yo"      />

      <Form heading='Get Early Ticket Access' message='Register for early bird tickets to Coping Festival 2024 and join our community.' formLabel='Email address' button='Sign up'/>
      
    </div>
  );
}
