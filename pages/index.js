import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import Form from '../components/Form';
import TestComponent from '../components/TestComponent';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Coping UK | Home</title>
        <meta name="Coping UK homepage" content="Building stories for a brighter future any way we can" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero heading="Stories for a Brighter Future" message="We help courageous people design & build things that inspire community & wellbeing." />

      <TestComponent img={{
        src: '/Battle of the stone graphic 2024.svg',
        alt: 'battle of the stone at coping festival'
      }} logo={<Image
        src='/Coping-festival-logo-white-2024.svg'
        alt='coping festival skateboarder kickflipping stairset at graystone action sports'
        width='250'
        height='120'
        className='object-conatin'
      />} title="Skating | Creating | Wellbeing" subtitle="Sat 22nd June - Graystone Action Sports" body={(
        <>
          <p className='py-1 font-light text-md text-white leading-6'>Looking for a meaningful & family friendly event? Join us for a 12hr festival of crafts, beginner lessons and fun competitions, developing in intensity throughout the day into live music and hardcore skating. This charity fundraiser also features Battle of the Stone, offering a whopping £6000 prize pot for individuals & teams.</p>
        </>
      )} ctaLink="https://ecom.roller.app/graystoneactionsports/copingfestival2024/en/home" ctaText="Get Tickets Here" />

      <TestComponent img={{
        src: '/human kind illustration coping strategy.svg',
        alt: 'hand drawn image of lots of sad people saying me and one happy person saying us'
      }} logo={<Image
        src='/Coping-strategy-logo-white-2024.svg'
        alt='coping strategy logo'
        width='200'
        height='100'
        className='object-conatin'
      />} title="Strategy | Identity | Websites" subtitle="Communication for Courageous Organisations" body={(
        <>
          <p className='py-1 font-light text-md text-white leading-6'>Does your organisation need help building community amongst customers & staff? From some friendly advice and a logo, to a complex website, social media strategy or large scale marketing event. With over 20 years learning how to design & communicate effectively, using behavioural science ethically - we’re able to draw on our creative & technical dream team to tell your inspirational stories.</p>
        </>
      )} ctaLink="/strategy" ctaText="Click Here" flipImage />

      <Form heading='Get Early Ticket Access' message='Register for early bird tickets to Coping Festival 2024 and join our community.' formLabel='Email address' button='Sign up' />

    </div>
  );
}
