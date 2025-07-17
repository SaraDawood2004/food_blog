"use client";

import styles from "./create.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CreateBlog() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.clear();
    router.push("/ad");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const title = e.target.title.value.trim();
    const description = e.target.description.value.trim();
    const imageUrl = e.target.imageUrl.value.trim();

    if (!title || !description) {
      alert("Title and Description are required.");
      return;
    }
    const existingBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    const newBlog = {
      id: Date.now(),
      title,
      description,
      slug: title.toLowerCase().replace(/\s+/g, "-"),
      image: imageUrl || "https://via.placeholder.com/150",
    };

    localStorage.setItem("blogs", JSON.stringify([...existingBlogs, newBlog]));

    alert("Blog created successfully!");

    router.push("/homeb");
  };

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <h1 className={styles.heading}>Create New Blog</h1>
        <div className={styles.links}>
          <Link href="/homeb">
            <p>Home</p>
          </Link>
          <Link href="/updateblog">
            <p>Update Blog</p>
          </Link>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </nav>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Food Title"
          className={styles.inputField}
          required
        />
        <textarea
          name="description"
          placeholder="Description / Review"
          className={styles.inputField}
          rows={5}
          required
        ></textarea>
        <input
          type="text"
          name="imageUrl"
          placeholder="Image URL (optional)"
          className={styles.inputField}
        />

        <button type="submit" className={styles.submitButton}>
          Publish Blog
        </button>
      </form>
    </div>
  );
}
