
"use client"
import Link from 'next/link';
import './menuLink.css';
import { usePathname } from 'next/navigation';

const MenuLink = ({item}) => {

    const pathname = usePathname()
    return (
        <Link href={item.path} className={`menulink-container ${pathname === item.path ? 'active' : ''}`} >
            {item.icon}
            {item.title}
        </Link>
    )
}

export default MenuLink