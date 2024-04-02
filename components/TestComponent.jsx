import Link from 'next/link'

const TextComponent = ({ img, logo, title, subtitle, body, ctaText }) => (
    <section id='festival' className='flex items-center justify-center min-h-screen bg-fixed bg-center bg-cover custom-img'>
        <div className='h-5/6 rounded-3xl flex items-center justify-center w-screen max-w-screen-lg flex-col md:flex-row'>
          <div className='flex-1'>
            {img}
          </div>
          <div className='flex-1 rounded-xl flex justify-center flex-col bg-white border-4 hover:border-pink border-dkpink backdrop-blur-md sm:p-10'>
            <Link href='/festival'>
              <a className='px-4'>
              <div className='pt-10 pb-6'>
                {logo}
              </div> 
                <h1 className='py-1 font-bold text-xl uppercase leading-6'>{title}</h1> 
                {subtitle && <h1 className='py-1 font-medium text-l text-dkpink leading-5'>{subtitle}</h1>}
                {body}
                <p className='pt-1 pb-4 font-bold text-dkpink'>{ctaText}</p> 
              </a>
            </Link>            
          </div>
        </div>          
    </section>
)

export default TextComponent