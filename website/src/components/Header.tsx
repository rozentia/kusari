import { createClient } from '@/prismicio'
import { PrismicNextLink } from '@prismicio/next'
import Link from 'next/link'

export default async function Header() {
    const client = createClient()
    const settings = await client.getSingle('settings')
    return (
        <header><Link href="/">Kusari Logo</Link>
            <nav>
                {settings.data.navigation.map(({link, label}) => (
                    <li key={label}>
                        <PrismicNextLink field={link}>{label}</PrismicNextLink>
                    </li>
                ))}
            </nav>
        </header>
    )
}