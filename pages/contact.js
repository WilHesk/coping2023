import Head from 'next/head';
import Contact from '../components/Content';


export default function contact() {
  return (
    <div>
      <Head>
        <title>Coping UK | Contact</title>
        <meta name="Coping UK contact details" content="Follow or get in touch using instagram to find our more about CopingUK or Coping Festival and all things Skating, Creating and Wellbeing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div> 
        <Contact 
        heading='Join Our Community' 
        subhead='Help us on our mission to improve Mental Health'   
        h31='@CopingUK' p1="Follow us on instagram and DM if you'd like to collaborate" 
        button='2023 recap'   button2='Auction'/>
      </div>
    
    </div>
    
  );
}