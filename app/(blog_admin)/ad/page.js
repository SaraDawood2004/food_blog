"use client"; 
import styles from "../style_ad/ad.module.css";
import { useRouter } from "next/navigation";

export default function LoginAdmin() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/homeb");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Admin Login</h1>
      <div className={styles.formWrapper}>
        <form className={styles.form_content} onSubmit={handleSubmit}>
          <input type="text" placeholder="Username" className={styles.inputField} />
          <input type="email" placeholder="Email" className={styles.inputField} />
          <input type="password" placeholder="Password" className={styles.inputField} />
          <button type="submit" className={styles.submitButton} >Submit</button>
        </form>
      </div>
    </div>
  );
}
