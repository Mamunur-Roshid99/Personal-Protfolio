import React, { useEffect } from 'react'

import Home from './Home'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'

const Index = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section>
      <Home />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </section>
  )
}

export default Index
