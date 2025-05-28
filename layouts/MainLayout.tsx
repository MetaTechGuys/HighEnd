import { PropsWithChildren } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Copyright from './components/Copyright';

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      <main className="w-screen bg-red-100">{children}</main>
      <Footer />
      <Copyright />
    </>
  );
}
