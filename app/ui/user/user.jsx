
import styles from "@/app/ui/user/user.module.css"
import Image from "next/image"
import Link from "next/link"

const User = () => {
  return (
    <div className={styles.container}>
       <div className={styles.top}>
       <Link href={"/dashboard/users/add"}><button className={styles.addBtn}>ADD NEW</button></Link>
       </div>
        <table className={styles.table}>
            <thead>
            <tr>
                    <td>NAME</td>
                    <td>EMAIL</td>
                    <td>CREATED AT</td>
                    <td>ROLE</td>
                    <td>STATUS</td>
                    <td>ACTION</td>
                </tr>
            </thead>
                <tr>
                    <td>
                        <div className={styles.user}>
                            <Image src={"/logo.png"} width={40} height={40} alt="user-image" />
                            <span>Amit Kumar</span>
                        </div>
                        </td>
                    <td>ak@gmail.com</td>
                    <td>28/06/24</td>
                    <td>Admin</td>
                    <td>Active</td>
                    <td>
                        <div className={styles.button}>
                        <Link href={"/dashboard/users/singleUser"}><button className={styles.view}>View</button></Link>
                        <button className={styles.delete}>Delete</button>
                        </div>
                    </td>
                </tr>
        </table>
    </div>
  )
}

export default User