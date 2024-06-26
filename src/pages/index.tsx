import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import siteConfig from '../../config/site.config'
import Navbar from '../components/Navbar'
import FileListing from '../components/FileListing'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import SwitchLayout from '../components/SwitchLayout'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-gray-900">
      <Head>
        <title>{siteConfig.title}</title>
        <meta name="robots" content="noindex, nofollow" />
        <script type='text/javascript' src='//sortexampleposition.com/2d/fc/c4/2dfcc4499eb2fd87ac12369e6d9da638.js' />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-RBCGSFJ4CF" />
        <script type="text/javascript" data-cfasync="false" src="https://cdn.jsdelivr.net/gh/nataliadyer/onedrive-vercel-index/src/components/Customjs0.js" />
        <script type="text/javascript" data-cfasync="false" src="https://cdn.jsdelivr.net/gh/nataliadyer/onedrive-vercel-index/src/components/Customjs.js" />
        </Head>

      <main className="flex w-full flex-1 flex-col bg-gray-50 dark:bg-gray-800">
        <Navbar />
        <div className="mx-auto w-full max-w-5xl py-4 sm:p-4">
          <nav className="mb-4 flex items-center justify-between px-4 sm:px-0 sm:pl-1">
            <Breadcrumb />
            <SwitchLayout />
          </nav>
          <FileListing />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}
