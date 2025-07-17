"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "../style_ad/hom.module.css";

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

const defaultBlogs = [
  { id: 1, slug: "bean", title: "Bean Salad", description: "Refreshing bean salad.", image: bean.src },
  { id: 2, slug: "beef", title: "Chicken Shakshuka", description: "Poached chicken with tomatoes.", image: beef.src },
  { id: 3, slug: "bir", title: "Dham Biryani", description: "Smoky biryani.", image: bir.src },
  { id: 4, slug: "bread", title: "Bread Tom Salad", description: "Crunchy bread salad.", image: bread.src },
  { id: 5, slug: "cake", title: "Cheese Cake", description: "Creamy cheesecake.", image: cake.src },
  { id: 6, slug: "cour", title: "Courgette Grattin", description: "Light gratin.", image: cour.src },
  { id: 7, slug: "crab", title: "Crab Cake", description: "Crispy crab cakes.", image: crab.src },
  { id: 8, slug: "gar", title: "Garlic Chicken", description: "Comfort garlic chicken.", image: gar.src },
  { id: 9, slug: "goulash", title: "Goulash Gravy", description: "Hearty goulash.", image: goulash.src },
  { id: 10, slug: "mac", title: "Cheese Pasta", description: "Cheesy pasta.", image: mac.src },
];

export default function HomeB() {
  const [blogs, setBlogs] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const storedDefaults = JSON.parse(localStorage.getItem("defaultBlogs")) || [];
    const storedUserBlogs = JSON.parse(localStorage.getItem("blogs")) || [];

    const mergedDefaults = defaultBlogs.map((def) => {
      const updated = storedDefaults.find((b) => b.id === def.id);
      return {
        ...def,
        title: updated?.title || def.title,
        slug: updated?.slug || def.slug,
        description: updated?.description || def.description,
        image: updated?.image || def.image,
      };
    });

    setBlogs([...mergedDefaults, ...storedUserBlogs]);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    router.push("/");
  };

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <h1>My Food Story - Admin</h1>
        <div className={styles.links}>
          <Link href="/createblog"><p>Create Blog</p></Link>
          <Link href="/updateblog"><p>Update Blog</p></Link>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </nav>

      <div className={styles.grid}>
        {blogs.map((blog) => (
          <Link key={blog.id || blog.slug} href={`/homeb/${blog.slug}`}>
            <div className={styles.card}>
              <img
                src={blog.image}
                alt={blog.title}
                className={styles.image}
              />
              <h3>{blog.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
