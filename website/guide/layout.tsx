import './globals.css'
import type { Metadata } from 'next'
import clsx from 'clsx'
import { nunito, nunitoSans, sora, code, grotesk } from '@/fonts'
import { createClient, repositoryName } from '@/prismicio'
import { PrismicPreview } from '@prismicio/next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { SettingsDocument } from '../../prismicio-types'

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
    <html lang="en" className={clsx(
      nunito.variable,
      nunitoSans.variable,
      sora.variable,
      code.variable,
      grotesk.variable,
      )}>
      <body className='font-sans bg-n-8 text-n-1 text-base'>
        {children}
        <PrismicPreview repositoryName={repositoryName} />
        <svg className="block" width={0} height={0}>
              <defs>
                  <linearGradient id="btn-left" x1="50%" x2="50%" y1="0%" y2="100%">
                      <stop offset="0%" stopColor="#89F9E8" />
                      <stop offset="100%" stopColor="#FACB7B" />
                  </linearGradient>
                  <linearGradient id="btn-top" x1="100%" x2="0%" y1="50%" y2="50%">
                      <stop offset="0%" stopColor="#D87CEE" />
                      <stop offset="100%" stopColor="#FACB7B" />
                  </linearGradient>
                  <linearGradient id="btn-bottom" x1="100%" x2="0%" y1="50%" y2="50%">
                      <stop offset="0%" stopColor="#9099FC" />
                      <stop offset="100%" stopColor="#89F9E8" />
                  </linearGradient>
                  <linearGradient id="btn-right" x1="14.635%" x2="14.635%" y1="0%" y2="100%">
                      <stop offset="0%" stopColor="#9099FC" />
                      <stop offset="100%" stopColor="#D87CEE" />
                  </linearGradient>
              </defs>
          </svg>
        </body>
    </html>
  )
}
