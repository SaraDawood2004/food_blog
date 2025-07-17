"use client";

import { useEffect, useState } from "react";
import styles from "../../style_ad/hom.module.css";
import bean from "../../images/bean.jpeg";
import beef from "../../images/beef.jpeg";
import bir from "../../images/bir.jpeg";
import bread from "../../images/bread.jpeg";
import cake from "../../images/cake.jpeg";
import cour from "../../images/cour.jpeg";
import crab from "../../images/crab.jpeg";
import gar from "../../images/gar.jpeg";
import goulash from "../../images/goulash.jpeg";
import mac from "../../images/mac.jpeg";

const foodData = {
  bean: {
    name: "Bean Salad",
    img: bean.src,
    description: "This was a refreshing dish during my summer picnic. The beans were tangy and crisp!",
  },
  beef: {
    name: "Chicken Shakshuka",
    img: beef.src,
    description: "My first time trying this and I was amazed by the flavor of tomatoes with poached chicken.",
  },
  bir: {
    name: "Dham Biryani",
    img: bir.src,
    description: "An unforgettable dinner at a friend's wedding. The biryani was smoky and aromatic.",
  },
  bread: {
    name: "Bread Tom Salad",
    img: bread.src,
    description: "Tried this in a food festival, so crunchy and juicy with olive oil drizzled.",
  },
  cake: {
    name: "Cheese Cake",
    img: cake.src,
    description: "Baked this for my birthday, turned out creamy and rich!",
  },
  cour: {
    name: "Courgette Grattin",
    img: cour.src,
    description: "A light and healthy dish I tried during my diet. Still tasted amazing.",
  },
  crab: {
    name: "Crab Cake",
    img: crab.src,
    description: "Had it at a coastal restaurant—soft on the inside and crispy on the outside.",
  },
  gar: {
    name: "Garlic Chicken",
    img: gar.src,
    description: "My comfort food. Made this multiple times during lockdown!",
  },
  goulash: {
    name: "Goulash Gravy",
    img: goulash.src,
    description: "Hearty and flavorful. Tried this at a Hungarian restaurant.",
  },
  mac: {
    name: "Cheese Pasta",
    img: mac.src,
    description: "Late night cravings solved with this gooey cheesy dish.",
  },
};

const DynamicPages = ({ params }) => {
  const { id } = params;
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    if (foodData[id]) {
      setBlog({
        name: foodData[id].name,
        img: foodData[id].img,
        description: foodData[id].description,
      });
    } else {
      const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
      const found = storedBlogs.find((b) => b.slug === id);
      if (found) {
        setBlog({
          name: found.title,
          img: found.image,
          description: found.description,
        });
      }
    }
  }, [id]);

  if (!blog) {
    return (
      <div className={styles.container_dynamic}>
        <h2>Food not found</h2>
      </div>
    );
  }

  return (
    <div className={styles.container_dynamic}>
      <h1>{blog.name}</h1>
      <br />
      <img src={blog.img} alt={blog.name} className={styles.image1} />
      <br />
      <p className={styles.description}>{blog.description}</p>
    </div>
  );
};

export default DynamicPages;
