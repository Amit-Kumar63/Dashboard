import styles from "@/app/ui/product/singleProduct/singleProduct.module.css"
import Image from "next/image"

const SingleProduct = () => {
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.imageContainer}>
                <Image src={"/logo.png"} fill/>
            </div>
            <span>Iphone</span>
        </div>
        <div className={styles.formContainer}>
            <form action="" className={styles.form}>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" name="title" placeholder="Iphone"/>
                <label htmlFor="price">Price</label>
                <input type="number" placeholder="$999" id="price" name="price"/>
                <label htmlFor="colour">Colour</label>
                <input type="text" placeholder="Green" id="colour" name="colour"/>
                <label htmlFor="size">Size</label>
                <input type="text" placeholder="X" id="size" name="size"/>
                <label htmlFor="cat">Category</label>
                <input type="text" placeholder="Kitchen" id="cat" name="category"/>
                <label htmlFor="discription">Discription</label>
                <input type="text" id="discription" name="discription" placeholder="4 Gb ram"/>
                <button>Update</button>
            </form>
        </div>
    </div>
  )
}

export default SingleProduct