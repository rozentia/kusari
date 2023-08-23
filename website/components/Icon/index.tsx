import * as FaIcons from 'react-icons/fa6'
import * as BoxIcons from 'react-icons/bi'
import * as IonIcons from 'react-icons/io5'
import * as FeatherIcons from 'react-icons/fi'
import * as LineAwesomeIcons from 'react-icons/lia'
import * as AntDesignIcons from 'react-icons/ai'
import * as CircumIcons from 'react-icons/ci'
import * as RemixIcons from 'react-icons/ri'
import { IconContext, IconType } from 'react-icons'

//: https://dev.to/hansott/how-to-check-if-string-is-member-of-union-type-1j4m
const AVAILABLE_PACKAGES = ['boxIcons','fontAwesome', 'ion', 'feather', 'lineAwesome', 'antDesign', 'circum', 'remix'] as const
type APTuple = typeof AVAILABLE_PACKAGES;
type IconPackageName = APTuple[number];

const icons: {[key in IconPackageName]: { [key: string]: IconType}} = {
    'boxIcons': {...BoxIcons},
    'fontAwesome': {...FaIcons},
    'ion': {...IonIcons},
    'feather': {...FeatherIcons},
    'lineAwesome': {...LineAwesomeIcons},
    'antDesign': {...AntDesignIcons},
    'circum': {...CircumIcons},
    'remix': {...RemixIcons},
}

type IconProps = {
    packageName?: string
    iconName?: string
    className?: string
    size?: string
    color?: string
}

const safeIconPackageName = (value: string = 'fontAwesome'): IconPackageName => AVAILABLE_PACKAGES.includes(value as IconPackageName) ? value as IconPackageName : AVAILABLE_PACKAGES[0]
const fallbackIcon = FaIcons.FaCircleExclamation

/**
 * Returns the React icon by name and package or **FaCircleExclamation** if no icon could be resolved.
 * To browse for icons visit https://react-icons.github.io/react-icons/ 
 * #### Available package names:
 * - boxIcons
 * - fontAwesome
 * - ion
 * - feather
 * - lineAwesome
 * - antDesign
 * - circum
 * - remix
 * @param {IconProps} {packageName, iconName}
 */
export default function Icon({
    packageName = 'fontAwesome',
    iconName = 'FaCircleExclamation',
    className,
    size,
    color
}: IconProps) {
    const IconComponent = icons[safeIconPackageName(packageName)][iconName] || fallbackIcon
    return (
        // <IconContext.Provider 
        //     value={{ 
        //         style: { 
        //             verticalAlign: 'middle',
        //         },
        //         color,
        //         size,
        //         className,
        //     }}>
            <IconComponent color={color || 'white'} size={size} className={className}/>
        // </ IconContext.Provider>
    )
}

