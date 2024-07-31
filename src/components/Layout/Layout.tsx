import Head from 'next/head';
import { ReactNode } from 'react';

import Header from '@components/Header';
import Footer from '@components/Footer';

import styles from './Layout.module.scss';

type LayoutProps = {
  children: JSX.Element | ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.layout}>
      <Head>
        <link rel="icon" href="/logo.ico" />
      </Head>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
