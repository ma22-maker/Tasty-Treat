import React from 'react'
import Header from './Header'
import Footer from './Footer'

const BaseLayout = ({ children }) => {
    return (
      <div>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    );
  };

export default BaseLayout