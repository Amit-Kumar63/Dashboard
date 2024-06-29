import styles from "@/app/ui/user/singleUser/singeUser.module.css"
import Image from "next/image"

const SingeUser = () => {
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.imageContainer}>
                <Image src={"/logo.png"} fill/>
            </div>
            <span>Amit Kumar</span>
        </div>
        <div className={styles.formContainer}>
            <form action="" className={styles.form}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" placeholder="Amit Kumar" name="username"/>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="ak@gmail.com" />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder="Amit123"/>
                <label htmlFor="phone">Phone</label>
                <input type="number" id="phone" name="phone" placeholder="1234567451"/>
                <label htmlFor="address">Address</label>
                <textarea name="address" id="address" placeholder="xyz city"/>
                <label htmlFor="isAdmit">isAdmin</label>
                <select name="isAdmin" id="isAdmin">
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <label htmlFor="isActive">isActive</label>
                <select name="isActive" id="isActive">
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <button type="submit">Update</button>
            </form>
        </div>
    </div>
  )
}

export default SingeUser