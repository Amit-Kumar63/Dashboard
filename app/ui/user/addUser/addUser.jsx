import styles from "@/app/ui/user/addUser/addUser.module.css"

const AddUser = () => {
  return (
    <div className={styles.container}>
        <form action="" className={styles.form}>
            <input type="text" placeholder="User name?" name="username" required/>
            <input type="email" placeholder="Email?" name="email" required />
            <input type="password" placeholder="Password" name="password" required/>
            <input type="number" placeholder="Phone" name="phone" required/>
            <select name="isAdmin" id="isAdmin">
                <option value={false}>IsAdmin</option>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
            </select>
            <select name="isActive" id="isActive">
                <option value={false}>isActive</option>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
            </select>
            <textarea name="address" id="address" rows={"16"} placeholder="Address" required/>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default AddUser