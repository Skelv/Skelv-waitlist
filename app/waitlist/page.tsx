"use client"
import Head from 'next/head'
import React, { useEffect } from 'react'




const Waitlist = () => {

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js";
        script.async = true;
        script.defer = true;
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = "https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css";
        document.head.appendChild(link)
        

        document.body.appendChild(script)
      return () => {
        document.head.removeChild(link)
        document.body.removeChild(script)

      };
    }, []);

  return (
    <>
        <Head>
            <link rel="stylesheet" type="text/css" href="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css"/>
        </Head>
    <div className="mx-5 flex flex-col justify-center items-center " >

      <p className="text-xl md:text-3xl font-Monteserrat-bold  my-10 text-center " >Be the first to access Skelv when we launch.</p>
      <p className='text-xl  my-10 text-center' >We'll contact you immediately we go live, so you don't miss out!</p>
    <div id="getWaitlistContainer" className=' my-10 items-center justify-center mx-auto ' data-waitlist_id="26650" data-widget_type="WIDGET_1"></div>
    
    
    </div>
    </>
  )
}

export default Waitlist
