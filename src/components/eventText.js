function EventText({ content }) {
  
  return (
      <div className="invitation-container">
      <h1>{content.title1}</h1>
      
      <p>{content.text1}</p>
      
      <p>{content.text2}</p>
      
      <div className="divider"></div>
      
      <h2>{content.title2}</h2>
      
      <p className="invitation-text">{content.text3}</p>
  </div>
  );
}

export default EventText;