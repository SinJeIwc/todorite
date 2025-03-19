function Seacher({ setSearchTerm }) {
  return (
    <div className="search_header">
      <i
        className="fa fa-search"
        style={{
          position: "absolute",
          top: "50%",
          left: "8px",
          transform: "translateY(-50%)",
        }}
      />
      <input
        type="text"
        className="js-input"
        placeholder="Search people"
        onChange={(e) => setSearchTerm(e.target.value)} // Обновляем searchTerm
      />
    </div>
  );
}

export default Seacher;
