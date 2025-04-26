function EventText({ confirmation }) {
    const { confirmation: confDetails, person1, person2 } = confirmation;
  
    return (
      <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif", padding: "20px" }}>
        <h2 style={{ color: "#2c3e50" }}>Esta es la confirmacion</h2>
        <h3 style={{ background: "#f4f4f4", padding: "10px", borderRadius: "5px" }}>
          {confDetails.text}
        </h3>
        <div style={{ marginTop: "20px" }}>
          <button
            style={{
              backgroundColor: confDetails.color1,
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginRight: "10px",
            }}
            onClick={() => window.open(`https://wa.me/${confDetails.person1}?text=${confDetails.text}`, "_blank")}
          >
            {person1}
          </button>
          <button
            style={{
              backgroundColor: confDetails.color2,
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={() => window.open(`https://wa.me/${confDetails.person2}?text=${confDetails.text}`, "_blank")}
          >
            {person2}
          </button>
        </div>
      </div>
    );
  }
  
  export default EventText;