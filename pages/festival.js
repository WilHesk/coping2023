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
        src: '/Coping-festival-2024.svg',
        alt: 'coping festival logo'
      }} title="Sat 22nd June" subtitle="Graystone Action Sports" body={(
        <>
          <p className='py-1 font-extralight text-lg text-white leading-6'>Join us on Saturday 22nd June, from 10am until late and feel the good vibes we create when we come together for something bigger than ourselves! This year we develop our long standing partnership with Graystone Action Sports to bring you another edition of Coping Festival featuring Battle of the Stone. We combine skateboarding, music, art, and a variety of family-friendly activities to promote mental health awareness and raise funds for The Ben Raemers Foundation. </p>
        </>
      )} ctaLink="/Coping Festival Program 2024.pdf" ctaText="Full Event Guide" />

      <TestComponent img={{
        src: '/Battle of the stone graphic 2024.svg',
        alt: 'Battle of the stone graphic 2024'
      }} title="" subtitle="" body={(
        <>
          <p className='py-1 font-extralight text-lg text-white leading-6'>Arts & crafts, beginner lessons and fun competitions will develop throughout the day into live music and hardcore skating - do not miss this one, there's fun for all ages and ability levels. Whether you're a seasoned skater wanting to compete for a share of £6k cash and a heap of awesome prizes, a complete beginner, or just looking for a fun day out, we strive to make the event super inclusive and create something for everyone. We're learning each year how to keep the event inclusive and building our network of incredible humans who facilitate it! </p>
        </>

      )} ctaLink="https://ecom.roller.app/graystoneactionsports/copingfestival2024/en/home" ctaText="Get Tickets Here" flipImage />

      <TestComponent img={{
        src: '/coping-festival-art-wall.jpg',
        alt: 'molly seed skateboarding airs out of ramp at coping festival graystone action sports'
      }} title="" subtitle="" body={(
        <>
          <p className='py-1 font-extralight text-lg text-white leading-6'>
            What better is there to do on the weekend of Go Skateboarding Day & Summer Solstice? Coping Festival is our community and we’d love you to join us. We collaborate to raise money for charities by organising events that tell an ongoing story of togetherness. We encourage creative expression, action sports and wellbeing. Coping Festival 2024 will bring more individuals together to feel part of a caring community, raise more money for incredible causes that affect us all and tell the story of groups, businesses and brands who care about our collective mental health.</p>
        </>
      )} ctaLink="https://ecom.roller.app/graystoneactionsports/copingfestival2024/en/home" ctaText="Get Tickets Here" />

      <TestComponent img={{
        src: '/Battle of the stone team rumble graphic 2024.svg',
        alt: 'coping festival battle of the stone team graphic 2000 pounds prize'
      }} title="" subtitle="" body={(
        <>
          <p className='py-1 font-extralight text-lg text-white leading-6'>New for 2024 is The Battle of the Stone Team Rumble with £1000 up for grabs for the winning team of three. The idea is that we can support any community from skate shops & parks to organisations and brands - if you've got a team of solid skaters that £1000 could be coming to your community!</p>
        </>
      )} ctaLink="https://ecom.roller.app/graystoneactionsports/copingfestival2024/en/home" ctaText="Get Tickets Here" flipImage/>

      <TestComponent img={{
        src: '/coping-festival-grip-tape-artwork.jpg',
        alt: 'coping festival battle of the stone team graphic 2000 pounds prize'
      }} title="" subtitle="" body={(
        <>
          <p className='py-1 font-extralight text-lg text-white leading-6'>This year we're pairing world class artists and skaters to create one of a kind custom painted skateboard artwork. The artists will create completely unique artwork on decks that have been ridden and donated by pro skaters. These decks will tell a completely individual story about collaboration and expression and will be auctioned off to the highest bidders, with funds going to the artist and 50% going to The Ben Raemers Foundation.</p>
        </>
      )} ctaLink="https://ecom.roller.app/graystoneactionsports/copingfestival2024/en/home" ctaText="Get Tickets Here"/>

      <TestComponent img={{
        src: '/coping festival workshop graphic.svg',
        alt: 'young boy skatboarding'
      }} title="" subtitle="" body={(
        <>
          <p className='py-1 font-extralight text-lg text-white leading-6'>As always Coping Festival is a celebration of skating, creating & wellbeing focused on raising money & awareness for mental health charities, providing an inclusive environment & building communities. All of the festival entry fee goes to The Ben Raemers Foundation and includes use of Graystone's incredible facilities. Registration for Battle of the Stone is for skaters & teams who want to compete only and the entry fee goes towards the running costs of the event. The skate areas will be limited for festival ticket holders due to the competitions, however kids games and fun competitions will be held earlier in the day. A full timetable will be provided when tickets go on sale, but for now register for early access to secure your ticket.</p>
        </>
      )} ctaLink="https://ecom.roller.app/graystoneactionsports/copingfestival2024/en/home" ctaText="Get Tickets Here" flipImage/>


      <Form heading='Get Early Ticket Access' message='Register for early bird tickets to Coping Festival 2024 and join our community.' formLabel='Email address' button='Sign up here' />

    </div>
  );
}
