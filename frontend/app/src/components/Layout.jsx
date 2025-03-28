import React from 'react'
import Footer from "./Footer"
import Relance from "./Relance"

const Layout = () => {
  return (
    <main>
        <section className='flex items-center justify-center'>
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