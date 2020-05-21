import React, { useState } from 'react';
import Nav from './Nav';
import NavButton from './NavButton';
import Breadcrumb from './Breadcrumb';

const Layout = ({ children, order }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="Layout md:flex">
      <Nav isOpen={isNavOpen} />
      <NavButton isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <div className="py-12 container w-full md:w-4/5">
        <main role="main" className="mb-6">
          {children}
        </main>
        <Breadcrumb currentPage={order} />
      </div>
    </div>
  );
};

export default Layout;
