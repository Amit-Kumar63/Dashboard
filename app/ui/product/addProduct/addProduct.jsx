import styles from "@/app/ui/product/addProduct/addProduct.module.css"

const AddProduct = () => {
  return (
    <div className={styles.container}>
        <form action="" className={styles.form}>
            <input type="text" placeholder="Title" name="title" required/>
            <select name="category" id="category">
                <option value="general">Choose a Category</option>
                <option value="kitchen">Kitchen</option>
                <option value="phone">Phone</option>
                <option value="computer">Computer</option>
            </select>
            <input type="number" placeholder="Price" name="price" required/>
            <input type="number" placeholder="Stock" name="stock" required/>
            <input type="text" placeholder="Colour" name="colour" required/>
            <input type="text" placeholder="Size" name="size" required/>
            <textarea name="desc" id="desc" rows={"16"} placeholder="Discription" required/>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default AddProduct