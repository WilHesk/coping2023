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

      <Strategyclicker strategytitle="Communication" strategyp1="Does your organisation need help building community amongst customers & staff? From some simple advice to a full brand ID, complex website or social media strategy, with over 20 years learning how to design effectively, questioning what is helpful and ethical - we’re able to draw on our extensive experience and creative network to tell your inspirational stories." strategyclick="Click Here"      />

      <Form heading='Get Early Ticket Access' message='Register for early bird tickets to Coping Festival 2024 and join our community.' formLabel='Email address' button='Sign up'/>
      
    </div>
  );
}
