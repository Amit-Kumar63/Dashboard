import styles from "@/app/ui/product/product.module.css"
import Image from "next/image"
import Link from "next/link"

const Product = () => {
  return (
    <div className={styles.container}>
        <div className="top">
            <Link href={"/dashboard/products/add"}>
            <button className={styles.addBtn}>ADD NEW</button>
            </Link>
        </div>
        <table className={styles.table}>
            <thead>
                <tr>
                    <td>TITLE</td>
                    <td>DISCRIPTION</td>
                    <td>PRICE</td>
                    <td>CREATED AT</td>
                    <td>STOCK</td>
                    <td>ACTION</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <div className={styles.product}>
                            <Image src={"/logo.png"} width={40} height={40}/>
                            <span>Laptop</span>
                        </div>
                    </td>
                    <td>Lorem ipsum dolor sit amet conse</td>
                    <td>$99</td>
                    <td>28/06/24</td>
                    <td>Available</td>
                    <td>
                        <div className={styles.button}>
                            <Link href={"/dashboard/products/singleProduct"}><button className={styles.view}>View</button></Link>
                            <button className={styles.delete}>Delete</button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Product