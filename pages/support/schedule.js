import React from 'react'
import Head from 'next/head'
import Navigation from '../../components/navigation'
import SupportSubmenu from '../../components/supportSubmenu'

export default function ScheduleForm(){
    return(
        <div className="schedulePage">
            <Head>
                <title>Alluvium</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navigation/>
            <main className="scheduleForm">
                <SupportSubmenu/>
                <div className="scheduleFormHeader">
                    <p className="title">Would you like to chat with a professional?</p>
                </div>
                <div className="mainForm">
                    <form>
                        <div className="formInput">
                            <label htmlFor="full_name">Full Name</label>
                            <input type="text" name="full_name" required placeholder="Kostantinos Mavropanos"/> 
                        </div>
                        <div className="formInput">
                            <label htmlFor="company_name">Company Name</label>
                            <input type="text" name="company_name" required placeholder="Mavro Corp"/> 
                        </div>
                        <div className="formInput">
                            <label htmlFor="email">E-mail Address</label>
                            <input type="email" name="email" required placeholder="kmavr@mavrocorp.com"/> 
                        </div>
                        <div className="formInput">
                            <label htmlFor="reason">Reason for meeting</label>
                            <input type="email" name="reason" required placeholder="Tell us what’s on your mind"/> 
                        </div>
                        <input type="submit" className="scheduleSubmitBtn" value="+ Schedule Meeting"/>
                    </form>
                </div>
            </main>
        </div>
        
    )
}