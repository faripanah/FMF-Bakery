import { useState, useEffect } from "react";
import styles from "./UsersList.module.css"; 

function UsersList() {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch users from backend
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/users"); 
        const data = await response.json();
        setPeople(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p>Loading users...</p>;

  return (
    <main>
      <h2>{people.length} Users:</h2>
      <section className={styles["users-container"]}>
        {people.map((person) => {
          const { _id, name, email, address, phone, image } = person;
          return (
            <article key={_id} className={styles["user-card"]}>
              <img src={image} alt="User" className={styles["user-img"]} />
              <div>
                <h4 className={styles["user-name"]}>{name}</h4>
                <p className={styles["user-info"]}>{address}</p>
                <p className={styles["user-info"]}>{email}</p>
                <p className={styles["user-info"]}>{phone}</p>
              </div>
              <div className={styles["user-buttons"]}>
                <button className={styles["edit-btn"]}>Edit</button>
                <button className={styles["delete-btn"]}>Delete</button>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}

export default UsersList;
