import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import Strategy from '../components/Strategy';

import Festival from '../components/Festival';
import Form from '../components/Form';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Coping UK | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
                  
      <Festival
      heading="Graystone Action Sports - Saturday 22nd June"
      subhead="Skating | Creating | Wellbeing" 
      h31="Fundraising for The Ben Raemers Foundation on the weekend of Go Skateboarding Day & Summer Solstice"
      p1="Coping Festival is our community and we’d love you to join us. We collaborate to raise money for charities by organising events that tell an ongoing story of togetherness. We encourage creative expression, action sports and wellbeing. "
      p2="Coping Festival 2024 will bring more individuals together to feel part of a caring community, raise more money for incredible causes that affect us all and tell the story of groups, businesses and brands who care about our collective mental health."
      p3="Family crafts, beginner lessons and fun competitions will develop throughout the day into live music and hardcore skating with Battle of the Stone offering up a whopping £5000 prize pot thanks to Oakley."
      p4="Click below & register to get access to early discount tickets."
      
      button='Join Our Community'/>

      

      <Form heading='Get Early Ticket Access' message='Register for early bird tickets to Coping Festival 2024 and join our community.' formLabel='Email address' button='Sign up'/>
      
    </div>
  );
}
