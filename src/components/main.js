function Main({ content }) {
    const date = new Date(content.date);

    const day = date.toLocaleString("es-ES", { day: "2-digit" });
    const month = date.toLocaleString("es-ES", { month: "long" }).toUpperCase();
    const year = date.getFullYear();

    const formattedDate = `${day}/${month}/${year}`;

    console.log(formattedDate); // Output: "08/enero/2025"


    return (
        <div style={{ backgroundColor: content.backgroundColor }} className="chida">
            <br />
            <h1>{content.title}</h1>
            <h1>{content.people.person1} & {content.people.person2}</h1>
            <h1>{formattedDate}</h1>
        </div>
    );
}

export default Main;