import Link from 'next/link'
import Image from 'next/image'

const TextComponent = ({ img, logo, title, subtitle, body, ctaText, flipImage }) => (
    <section id='festival' className='flex items-center justify-center min-h-screen bg-fixed bg-center bg-cover custom-img'>
        <div className={`h-5/6 rounded-3xl flex items-center justify-center w-screen max-w-screen-lg flex-col ${flipImage ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
            <div className='flex-1'>
                <Image
                    src={img.src}
                    alt={img.alt}
                    width='1000'
                    height='1000'
                    className='object-contain bg-white'
                />
            </div>
            <div className='flex-1 flex justify-center flex-col px-2 sm:p-6'>
                <Link href='/festival'>
                    <a className='px-4'>
                        <div className='pt-10 pb-6'>
                            {logo}
                        </div>
                        <h1 className='py-1 font-bold text-xl text-white uppercase leading-6'>{title}</h1>
                        {subtitle && <h1 className='py-1 font-medium text-l text-pink leading-5'>{subtitle}</h1>}
                        {body}
                        <p className='pt-1 pb-4 font-bold text-pink hover:text-white'>{ctaText}</p>
                    </a>
                </Link>
            </div>
        </div>
    </section>
)

export default TextComponent