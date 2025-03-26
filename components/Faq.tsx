import React from 'react'
import Accordion from './Accordion'

const Faq = () => {
  return (
    <div className='max-[1302px]:mx-5 mx-32' id='faq'>
     <h3 className='text-2xl font-Monteserrat-bold my-10 mx-auto max-w-[1000px]' >FAQs</h3>
     <div role='tablist' className="accordion-w"> 
     <Accordion title='What is Skelv, and How does it work?' text='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga dignissimos, ducimus magni accusamus quasi saepe itaque maxime reprehenderit incidunt molestias accusantium iusto pariatur, fugiat tempore dicta corrupti eligendi reiciendis! Dolorum.' />
     <Accordion title='Who can use Skelv' text='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga dignissimos, ducimus magni accusamus quasi saepe itaque maxime reprehenderit incidunt molestias accusantium iusto pariatur, fugiat tempore dicta corrupti eligendi reiciendis! Dolorum.' />
     <Accordion title='What is Skelv, and How does it work?' text='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga dignissimos, ducimus magni accusamus quasi saepe itaque maxime reprehenderit incidunt molestias accusantium iusto pariatur, fugiat tempore dicta corrupti eligendi reiciendis! Dolorum.' />
     <Accordion title='What is Skelv, and How does it work?' text='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga dignissimos, ducimus magni accusamus quasi saepe itaque maxime reprehenderit incidunt molestias accusantium iusto pariatur, fugiat tempore dicta corrupti eligendi reiciendis! Dolorum.' />
     <Accordion title='What is Skelv, and How does it work?' text='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga dignissimos, ducimus magni accusamus quasi saepe itaque maxime reprehenderit incidunt molestias accusantium iusto pariatur, fugiat tempore dicta corrupti eligendi reiciendis! Dolorum.' />
     </div>
    </div>
  )
}


export default Faq
