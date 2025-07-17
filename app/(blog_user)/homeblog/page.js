"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "../styles/hom.module.css";

import bean from "../images/bean.jpeg";
import beef from "../images/beef.jpeg";
import bir from "../images/bir.jpeg";
import bread from "../images/bread.jpeg";
import cake from "../images/cake.jpeg";
import cour from "../images/cour.jpeg";
import crab from "../images/crab.jpeg";
import gar from "../images/gar.jpeg";
import goulash from "../images/goulash.jpeg";
import mac from "../images/mac.jpeg";

// FIXED: Matching blog.slug with correct keys
const slugToImage = {
  bean: bean,
  beef: beef,
  bir: bir,
  bread: bread,
  cake: cake,
  cour: cour,
  crab: crab,
  gar: gar,
  goulash: goulash,
  mac: mac,
};

export default function HomeBlog() {
  const [blogs, setBlogs] = useState([]);
  const router = useRouter();

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("auth"); // if you're using some auth token
    router.push("/"); // redirect to landing/login page
  };

  useEffect(() => {
    const defaultBlogs = [
      { id: 1, title: "Bean Salad", slug: "bean", description: "Refreshing bean salad.", image: "" },
      { id: 2, title: "Chicken Shakshuka", slug: "beef", description: "Poached chicken with tomatoes.", image: "" },
      { id: 3, title: "Dham Biryani", slug: "bir", description: "Smoky biryani.", image: "" },
      { id: 4, title: "Bread Tom Salad", slug: "bread", description: "Crunchy bread salad.", image: "" },
      { id: 5, title: "Cheese Cake", slug: "cake", description: "Creamy cheesecake.", image: "" },
      { id: 6, title: "Courgette Grattin", slug: "cour", description: "Light gratin.", image: "" },
      { id: 7, title: "Crab Cake", slug: "crab", description: "Crispy crab cakes.", image: "" },
      { id: 8, title: "Garlic Chicken", slug: "gar", description: "Comfort garlic chicken.", image: "" },
      { id: 9, title: "Goulash Gravy", slug: "goulash", description: "Hearty goulash.", image: "" },
      { id: 10, title: "Cheese Pasta", slug: "mac", description: "Cheesy pasta.", image: "" },
    ];

    const storedDefaults = JSON.parse(localStorage.getItem("defaultBlogs"));
    if (!storedDefaults || storedDefaults.length === 0) {
      localStorage.setItem("defaultBlogs", JSON.stringify(defaultBlogs));
    }

    const finalDefaults = JSON.parse(localStorage.getItem("defaultBlogs")) || [];
    const userBlogs = JSON.parse(localStorage.getItem("blogs")) || [];

    const merged = [...finalDefaults, ...userBlogs];
    setBlogs(merged);
  }, []);

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <h1>My Food Story</h1>
        <button onClick={handleLogout}>Logout</button>
      </nav>

      <div className={styles.grid}>
        {blogs.map((blog) => {
          const imageSrc = slugToImage[blog.slug]?.src || blog.image || "https://via.placeholder.com/300x200?text=No+Image";
          return (
            <Link key={blog.id} href={`/homeblog/${blog.slug}`}>
              <div className={styles.card}>
                <img src={imageSrc} alt={blog.title} className={styles.image} />
                <h3>{blog.title}</h3>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
