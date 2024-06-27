import styles from "./sidebar.module.css"
import Image from "next/image"

import {
   MdDashboard ,
   MdSupervisedUserCircle,
   MdShoppingBag,
   MdAttachMoney
  } from "react-icons/md";

import MenuLinks from "./menuLinks/menuLinks";
import Link from "next/link";


const menuItems = [
  {
    title: "Users",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard/>
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />
      },
      {
        title: "Transactions",
        path: "/dashboard/transaction",
        icon: <MdAttachMoney/>
      }
    ]
  }
]

export const Sidebar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.userProfile}>
            <Image src="/logo.png"
             width={50} height={50} className={styles.userImage}
             alt="user-profile-image"
             />
            <div className={styles.userDetails}>
                <span className={styles.username}>Amit</span>
                <span className={styles.userTitle}>Kumar</span>
            </div>
        </div>
        <ul className={styles.list}>
          {menuItems.map((items, idx)=> (
            <li key={idx}>
              <span className={styles.item}>{items.title}</span>
              {
                items.list.map((i, idx)=> (
                  <MenuLinks key={idx} item={i}/>
                ))
              }
            </li>
          ))}
        </ul>
    </div>
  )
}
