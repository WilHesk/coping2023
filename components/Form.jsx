import React from 'react';

const Form = ({heading, message, formLabel, button}) => {
  return (
    <section className='pt-40 pb-10 flex flex-col gap-8 sm:flex-row sm:items-end'>
        <div className='mx-auto max-w-screen-sm px-7'>
            <h2 className='text-5xl pb-1'>{heading}</h2>
            <p className='text-xl font-light text-dkgrey'>{message}</p>
            <form className='pt-4 flex flex-col gap-8 sm:flex-row sm:items-end' action='/api/newsletter'>
                <div className='flex flex-col gap-1'>
                    <label>{formLabel}</label>
                    <input type='email' name='email' required className='border border-dkgrey rounded'/>
                </div>
                {/* h-field */}
                <div className='onhp'>
                    <label htmlFor='name'>Name</label>
                    <input type='text' autoComplete='off' name='name' />
                </div>
                <button type='submit' className='px-4 py-2 rounded border bg-dkpink text-white hover:bg-white hover:border-dkpink hover:text-dkgrey'>{button}</button>
            </form>
        </div>
    </section>
  ); 
}

export default Form