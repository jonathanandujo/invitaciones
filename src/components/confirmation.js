function Confirmation({ confirmation }) {
    const { confirmation: confDetails, person1, person2 } = confirmation;
  
    return (
      <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif", padding: "20px" }}>
        <h1>{confDetails.title}</h1>
        {confDetails.text1}
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
        <h3>{confDetails.text2}</h3>
      </div>
    );
  }
  
  export default Confirmation;
  