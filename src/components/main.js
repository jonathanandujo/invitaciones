import styles from "./styles/main.module.css";
function Main({ content }) {
    const date = new Date(content.date);

    const day = date.toLocaleString("es-ES", { day: "2-digit" });
    const month = date.toLocaleString("es-ES", { month: "long" }).toUpperCase();
    const year = date.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;

    return (
        <div style={{ backgroundColor: content.backgroundColor }} className={styles.main}>
            <br />
            <h1>{content.title}</h1>
            <h1>{content.people.person1} & {content.people.person2}</h1>
            <h1 className={styles.bottom}>{formattedDate}</h1>
        </div>
    );
}

export default Main;