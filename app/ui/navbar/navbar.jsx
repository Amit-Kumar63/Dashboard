'use client'
import styles from "@/app/ui/navbar/navbar.module.css"
import { usePathname } from "next/navigation"
import { MdNotifications, MdOutlineChat, MdPublic, MdSearch } from "react-icons/md"

const Navbar = () => {
    const pathname = usePathname()
  return (
    <div className={styles.container}>
        <span className={styles.title}>{pathname.split("/").pop()}</span>
        <div className={styles.menu}>
            <div className={styles.search}>
                <MdSearch/>
                <input type="search" placeholder="Search...." className={styles.input}/>
            </div>
            <div className={styles.icons}>
                <MdOutlineChat size={20}/>
                <MdNotifications size={20}/>
                <MdPublic size={20}/>
            </div>
        </div>
    </div>
  )
}

export default Navbar