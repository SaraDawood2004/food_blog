"use client";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

const HomePage = () => {
      const router = useRouter();
    
      const adminlogin = (e) => {
        e.preventDefault();
        router.push("/homeb");
      };
      const userlogin = (e) => {
        e.preventDefault();
        router.push("/homeblog");
      };
    
  return (
    <div className={styles.container}>
      <h1>My Food Story</h1>
      <p>A delicious journey of taste, stories, and flavor-packed moments</p>
      <div className={styles["button-group"]}>
        <button onClick={userlogin}>User Login</button>
        <button onClick={adminlogin}>Admin Login</button>
      </div>
    </div>
  );
};

export default HomePage;
