"use client"; 
import styles from "../styles/log.module.css";
import { useRouter } from "next/navigation";

export default function LoginUser() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/homeblog");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>User Login</h1>
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
