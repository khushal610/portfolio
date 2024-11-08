import React from 'react'

function Contact() {
  return (
    <div>

      <div className='flex items-center justify-center p-10'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58662.5648948339!2d72.46095229500787!3d23.228151707263887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c25e6c08bf663%3A0xff94e46a22aeb386!2sKalol%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1730987687344!5m2!1sen!2sin" width="90%" height="600" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

        <div className='contact-form-body flex items-center justify-center w-full py-14 bg-gray-50'>
        <div className='contact-form-container flex flex-col items-center justify-center w-full'>
            <h1 className='text-center text-4xl pb-10'>Contact Me</h1>
            <form autoComplete='off' className='flex flex-col gap-4 w-6/12'>
                <input type="text" className='border border-b-2 p-2 outline-none w-full' placeholder='Name' />
                <input type="email" className='border border-b-2 p-2 outline-none' placeholder='Email' />
                <input type="tel" className='border border-b-2 p-2 outline-none' placeholder='Contact No' />
                <textarea rows={"5"} className='resize-none border border-b-2 p-2 outline-none' placeholder='Type Here Your Message'></textarea>
                <button className='border-2 p-2 border-black rounded-md'>Submit</button>
            </form>
        </div>
    </div>
    </div>
  )
}

export default Contact
