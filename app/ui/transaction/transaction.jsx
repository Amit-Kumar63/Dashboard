import styles from "@/app/ui/transaction/transaction.module.css"
import Image from "next/image"

const Transaction = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Latest Transaction</h1>
        <table className={styles.table}>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Status</td>
                    <td>Date</td>
                    <td>Amount</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <div className={styles.user}>
                            <Image src={"/logo.png"} width={40} height={40} priority={true}/>
                            <span>Amit Kumar</span>
                        </div>
                    </td>
                    <td>
                        <span className={`${styles.pending} ${styles.status}`}>Pending</span>
                    </td>
                    <td>28/06/24</td>
                    <td>$999</td>
                </tr>
                <tr>
                    <td>
                        <div className={styles.user}>
                            <Image src={"/logo.png"} width={40} height={40} priority={true}/>
                            <span>Amit Kumar</span>
                        </div>
                    </td>
                    <td>
                        <span className={`${styles.done} ${styles.status}`}>Done</span>
                    </td>
                    <td>28/06/24</td>
                    <td>$999</td>
                </tr>
                <tr>
                    <td>
                        <div className={styles.user}>
                            <Image src={"/logo.png"} width={40} height={40} priority={true}/>
                            <span>Amit Kumar</span>
                        </div>
                    </td>
                    <td>
                        <span className={`${styles.cancelled} ${styles.status}`}>Cancelled</span>
                    </td>
                    <td>28/06/24</td>
                    <td>$999</td>
                </tr>
                <tr>
                    <td>
                        <div className={styles.user}>
                            <Image src={"/logo.png"} width={40} height={40} priority={true}/>
                            <span>Amit Kumar</span>
                        </div>
                    </td>
                    <td>
                        <span className={`${styles.done} ${styles.status}`}>Done</span>
                    </td>
                    <td>28/06/24</td>
                    <td>$999</td>
                </tr>
                <tr>
                    <td>
                        <div className={styles.user}>
                            <Image src={"/logo.png"} width={40} height={40} priority={true}/>
                            <span>Amit Kumar</span>
                        </div>
                    </td>
                    <td>    
                        <span className={`${styles.pending} ${styles.status}`}>Pending</span>
                    </td>
                    <td>28/06/24</td>
                    <td>$999</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Transaction