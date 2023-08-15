import { Nunito, Nunito_Sans } from 'next/font/google'

export const nunito = Nunito({ 
    subsets: ['latin'],
    variable: '--font-nunito',
    display: 'swap',
  })
  
export const nunitoSans = Nunito_Sans({ 
    subsets: ['latin'],
    variable: '--font-nunito-sans',
    display: 'swap',
  })