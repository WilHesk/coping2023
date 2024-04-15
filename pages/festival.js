import Head from 'next/head'
import TestComponent from '../components/TestComponent';
import Image from 'next/image';

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
      
      <TestComponent img={{
        src: '/Coping-festival-logo-white-2024.svg',
        alt: 'coping festival logo'
      }} logo={<Image
        src=''
        alt=''
        width=''
        height=''
        className='object-conatin'
      />} title="Sat 22nd June" subtitle="Graystone Action Sports" body={(
        <>
          <p className='py-1 font-extralight text-lg text-white leading-6'>Feel the good vibes we create when we come together for something bigger than ourselves! This year we develop our long standing partnership with Graystone Action Sports to bring you another edition of Coping Festival. All festival ticket income donated to The Ben Raemers Foundation. </p>
        </>
      )} ctaLink="/festival" ctaText="Sign Up Here" />

<TestComponent img={{
        src: '/Battle of the stone graphic 2024.svg',
        alt: 'Battle of the stone graphic 2024'
      }} logo={<Image
        src=''
        alt=''
        width=''
        height=''
        className='object-conatin'
      />} title="" subtitle="" body={(
        <>
          <p className='py-1 font-extralight text-lg text-white leading-6'>Family crafts, beginner lessons and fun competitions will develop throughout the day into live music and hardcore skating as Battle of the Stone kicks off. Do not miss this one, there's fun for all ages and ability levels. £5000 for the individual Battle and £1000 prize with £1000 donation to The Ben Raemers Foundation for the teams battle.</p>
        </>
      )} ctaLink="/festival" ctaText="Sign up here" flipImage/>

<TestComponent img={{
        src: '/coping-festival-skate-comp-stairs.png',
        alt: 'skater flips down a stair set at graystone action sports'
      }} logo={<Image
        src=''
        alt=''
        width=''
        height=''
        className='object-conatin'
      />} title="" subtitle="" body={(
        <>
          <p className='py-1 font-extralight text-lg text-white leading-6'>
      What better is there to do on the weekend of Go Skateboarding Day & Summer Solstice? Coping Festival is our community and we’d love you to join us. We collaborate to raise money for charities by organising events that tell an ongoing story of togetherness. We encourage creative expression, action sports and wellbeing. Coping Festival 2024 will bring more individuals together to feel part of a caring community, raise more money for incredible causes that affect us all and tell the story of groups, businesses and brands who care about our collective mental health.</p>
        </>
      )} ctaLink="/festival" ctaText="Sign up here" />

<TestComponent img={{
        src: '/Battle of the stone team slamma graphic 2024.svg',
        alt: 'coping festival battle of the stone team graphic 2000 pounds prize'
      }} logo={<Image
        src=''
        alt=''
        width=''
        height=''
        className='object-conatin'
      />} title="" subtitle="" body={(
        <>
          <p className='py-1 font-extralight text-lg text-white leading-6'>New for 2024 is the TSA team slamma with £1000 up for grabs and £1000 donated to The Ben Raemers Foundation. The idea is that we can support any community from skate shops & parks to organisations and brands - if you've got a team of solid skaters that £1000 could be coming to your community!</p>
        </>
      )} ctaLink="/festival" ctaText="Sign up"/>

<TestComponent img={{
        src: '/coping festival workshop graphic.svg',
        alt: 'coping festival battle of the stone team graphic 2000 pounds prize'
      }} logo={<Image
        src=''
        alt=''
        width=''
        height=''
        className='object-conatin'
      />} title="" subtitle="" body={(
        <>
          <p className='py-1 font-extralight text-lg text-white leading-6'>New for 2024 is the TSA team slamma with £1000 up for grabs and £1000 donated to The Ben Raemers Foundation. The idea is that we can support any community from skate shops & parks to organisations and brands - if you've got a team of solid skaters that £1000 could be coming to your community!</p>
        </>
      )} ctaLink="/festival" ctaText="Sign up" flipImage/>

<TestComponent img={{
        src: '/coping-festival-skate-comp-young-lad.png',
        alt: 'young boy skatboarding'
      }} logo={<Image
        src=''
        alt=''
        width=''
        height=''
        className='object-conatin'
      />} title="" subtitle="" body={(
        <>
          <p className='py-1 font-extralight text-lg text-white leading-6'>New for 2024 is the TSA team slamma with £1000 up for grabs and £1000 donated to The Ben Raemers Foundation. The idea is that we can support any community from skate shops & parks to organisations and brands - if you've got a team of solid skaters that £1000 could be coming to your community!</p>
        </>
      )} ctaLink="/festival" ctaText="Sign up"/>
                     

      <Form heading='Get Early Ticket Access' message='Register for early bird tickets to Coping Festival 2024 and join our community.' formLabel='Email address' button='Sign up here'/>
      
    </div>
  );
}
