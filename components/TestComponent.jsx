import Link from 'next/link'
import Image from 'next/image'

const TextComponent = ({ img, logo, title, subtitle, body, ctaText, flipImage, ctaLink}) => (
    <section id='festival' className='flex items-center justify-center min-h-screen bg-fixed bg-center bg-cover custom-img'>
        <div className={`h-5/6 flex items-center justify-center w-screen max-w-screen-lg flex-col md:pt-0 ${flipImage ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
            <div className='flex-1 px-4'>
                <Image
                    src={img.src}
                    alt={img.alt}
                    width='500'
                    height='500'
                    className='object-contain'
                />
            </div>
            <div className='flex-1 flex justify-center flex-col px-2 '>
                <Link href={`${ctaLink}`}>
                    <a className='px-4' target="blank" >
                        <div className=''>
                            {logo}
                        </div>
                        <h1 className='pt-1 font-medium text-xl text-white uppercase leading-none'>{title}</h1>
                        {subtitle && <h1 className='pb-1 font-medium text-xl text-white uppercase'>{subtitle}</h1>}
                        {body}
                        <p className='pt-1 pb-4 font-medium text-xl text-pink hover:text-white uppercase'>{ctaText}</p>
                    </a>
                </Link>
            </div>
        </div>
    </section>
)

export default TextComponent