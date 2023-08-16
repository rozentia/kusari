import { createClient } from '@/prismicio'
import { PrismicNextLink } from '@prismicio/next'
import Link from 'next/link'
import { SettingsDocument } from '../../prismicio-types'

export default async function Footer() {
    const client = createClient()
    const settings = await client.getSingle<SettingsDocument>('settings')
    return (
        <footer>
            <Link href="/">Kusari Logo</Link>
            <p>®2023</p>
            <nav>
                {settings.data.navigation.map(({link, label}) => (
                    <li key={label}>
                        <PrismicNextLink field={link}>{label}</PrismicNextLink>
                    </li>
                ))}
            </nav>
        </footer>
    )
}