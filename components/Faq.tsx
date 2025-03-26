import React from 'react'
import Accordion from './Accordion'

const Faq = () => {
  return (
    <div className='max-[1302px]:mx-5 mx-32' id='faq'>
     <h3 className='text-2xl font-Monteserrat-bold my-10 mx-auto max-w-[1000px]' >FAQs</h3>
     <div role='tablist' className="accordion-w"> 
     <Accordion title='What is Skelv, and how does it work?' text='Skelv is a platform that connects small businesses with aspiring professionals seeking real-world experience. Businesses post tasks,
 talents apply and complete them, receive feedback, and build strong portfolios while helping businesses grow.
' />
     <Accordion title='Who can use Skelv' text='Skelv is designed for small businesses looking for skilled support and aspiring professionals who want to gain real-world experience. 
It’s a platform where both can connect, collaborate, and grow together.
Professionals looking to build their portfolio apply for tasks that match their skills, complete them, and gain hands-on experience.
' />
     <Accordion title='Why should I use Skelv?
' text='Skelv helps businesses get quality work done while giving aspiring professionals the chance to gain hands-on experience.
 It’s a win-win platform where businesses grow, and talents build strong portfolios.
' />
     <Accordion title='How do businesses ensure quality work?
' text='Businesses review applicants, provide clear task descriptions, and give feedback after completion. Talents also earn ratings,
 helping businesses choose skilled professionals for their needs.
' />
     <Accordion title='Is Skelv free to use?
' text='Yes! Skelv is currently free for both businesses and talents. You can post tasks, apply for projects, and gain experience at no cost.
' />
     </div>
    </div>
  )
}


export default Faq
