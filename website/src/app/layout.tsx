import './globals.css'
import type { Metadata } from 'next'
import clsx from 'clsx'
import { nunito, nunitoSans } from '@/fonts'
import { createClient } from '@/prismicio'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient()
  const settings = await client.getSingle('settings')

  return {
      title: settings.data.site_title || 'kusari.io',
      description: settings.data.meta_description || 'Kusari stands as a holistic platform, integrating the best of existing solutions with innovative features tailored for the modern creative and entertainment industries. This comprehensive suite ensures that professionals have everything they need to streamline their processes, enhance collaboration, and navigate the evolving digital landscape.',
      openGraph: {
          // TODO Fill the fallback image url for OG image metadata
          images: [settings.data.og_image.url || '']
      }
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={clsx(nunito.variable, nunitoSans.variable)}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  )
}
