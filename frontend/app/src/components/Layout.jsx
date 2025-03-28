import React from 'react'
import Footer from "./Footer"
import Relance from "./Relance"

const Layout = () => {
  return (
    <main>
        <section className='flex items-center justify-center'>
        <div className='absolute top-0 left-0 w-full min-h-screen bg-black opacity-80'>
                <video
                    autoPlay
                    loop
                    muted
                    className='w-full h-full object-cover fixed'>
                    <source src="/assets/videos/player.mp4" type="video/mp4" />

                </video>
            </div>
{/* Content */}
        <Relance />
        </section>


        
{/* Footer */}
        <footer className='flex flex-col w-full justify-end'>
            <Footer />
        </footer>
    </main>
  )
}

export default Layout