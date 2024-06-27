'use client'
import Link from "next/link"
import styles from "@/app/ui/sidebar/menuLinks/menuLinks.module.css"
import { usePathname } from "next/navigation"

const MenuLinks = ({item}) => {
  const pathname = usePathname()
  return (
    <div>
      <Link href={item.path} className={`${styles.container} ${pathname === item.path && styles.active}`}>
      {item.icon}
      {item.title}
      </Link>
    </div>
  )
}

export default MenuLinks