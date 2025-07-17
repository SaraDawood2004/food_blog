"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./update.module.css";

const defaultBlogs = [
  { id: 1, title: "Bean Salad", slug: "bean-salad", description: "Refreshing bean salad.", image: "" },
  { id: 2, title: "Chicken Shakshuka", slug: "chicken-shakshuka", description: "Poached chicken with tomatoes.", image: "" },
  { id: 3, title: "Dham Biryani", slug: "dham-biryani", description: "Smoky biryani.", image: "" },
  { id: 4, title: "Bread Tom Salad", slug: "bread-tom-salad", description: "Crunchy bread salad.", image: "" },
  { id: 5, title: "Cheese Cake", slug: "cheese-cake", description: "Creamy cheesecake.", image: "" },
  { id: 6, title: "Courgette Grattin", slug: "courgette-grattin", description: "Light gratin.", image: "" },
  { id: 7, title: "Crab Cake", slug: "crab-cake", description: "Crispy crab cakes.", image: "" },
  { id: 8, title: "Garlic Chicken", slug: "garlic-chicken", description: "Comfort garlic chicken.", image: "" },
  { id: 9, title: "Goulash Gravy", slug: "goulash-gravy", description: "Hearty goulash.", image: "" },
  { id: 10, title: "Cheese Pasta", slug: "cheese-pasta", description: "Cheesy pasta.", image: "" },
];

export default function UpdateBlog() {
  const [allBlogs, setAllBlogs] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const router = useRouter();

  useEffect(() => {
    const storedDefaults = JSON.parse(localStorage.getItem("defaultBlogs")) || [];
    const storedUserBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    const merged = [
      ...defaultBlogs.map((def) => {
        const updated = storedDefaults.find((b) => b.id === def.id);
        return {
          ...def,
          title: updated?.title || def.title,
          slug: updated?.slug || def.slug,
          description: updated?.description || def.description,
          image: updated?.image || def.image,
        };
      }),
      ...storedUserBlogs,
    ];
    setAllBlogs(merged);
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();

    const newTitle = e.target.title.value.trim();
    const newDescription = e.target.description.value.trim();
    const newImageUrl = e.target.imageUrl.value.trim();

    if (!selectedId) {
      alert("Please select a blog to update.");
      return;
    }

    const updatedBlogs = [...allBlogs];
    const blogIndex = updatedBlogs.findIndex((b) => b.id === parseInt(selectedId));

    if (blogIndex === -1) {
      alert("Blog not found.");
      return;
    }

    if (newTitle) {
      updatedBlogs[blogIndex].title = newTitle;
      updatedBlogs[blogIndex].slug = newTitle.toLowerCase().replace(/\s+/g, "-");
    }

    if (newDescription) {
      updatedBlogs[blogIndex].description = newDescription;
    }

    if (newImageUrl) {
      updatedBlogs[blogIndex].image = newImageUrl;
    }

    const updatedUserBlogs = updatedBlogs.filter((b) => b.id > 10);
    const updatedDefaults = defaultBlogs.map((def) => {
      const updated = updatedBlogs.find((b) => b.id === def.id);
      return {
        ...def,
        title: updated?.title || def.title,
        slug: updated?.slug || def.slug,
        description: updated?.description || def.description,
        image: updated?.image || def.image,
      };
    });

    localStorage.setItem("blogs", JSON.stringify(updatedUserBlogs));
    localStorage.setItem("defaultBlogs", JSON.stringify(updatedDefaults));

    alert("Blog updated successfully!");
    router.push("/homeb");
  };

  const handleLogout = () => {
    localStorage.clear();
    router.push("/ad");
  };

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <h1 className={styles.heading}>Update Blog</h1>
        <div className={styles.links}>
          <Link href="/homeb">
            <p>Home</p>
          </Link>
          <Link href="/createblog">
            <p>Create Blog</p>
          </Link>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </nav>

      <form className={styles.form} onSubmit={handleUpdate}>
        <select
          value={selectedId}
          onChange={(e) => setSelectedId(e.target.value)}
          className={styles.inputField}
          required
        >
          <option value="">-- Select Blog to Update --</option>
          {allBlogs.map((blog) => (
            <option key={blog.id} value={blog.id}>
              {blog.title} (ID: {blog.id})
            </option>
          ))}
        </select>

        <input
          type="text"
          name="title"
          placeholder="New Title"
          className={styles.inputField}
        />

        <textarea
          name="description"
          placeholder="New Description"
          className={styles.inputField}
          rows={8}
        ></textarea>

        <input
          type="text"
          name="imageUrl"
          placeholder="New Image URL (optional)"
          className={styles.inputField}
        />

        <button type="submit" className={styles.submitButton}>
          Update
        </button>
      </form>
    </div>
  );
}
