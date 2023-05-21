const Cards = ({ list, setList }) => {
  const deleteElement = (e) => {
    const newData = list.filter((item, index) => {
      if (index !== e.index) {
        return item;
      }
    });
    setList(newData);
  };

  return (
    <div className="cards-container">
      <div className="holder">
        {list.map((item, index) => {
          return (
            <article key={index} className="cards">
              <h3>{item.name}</h3>
              <h4>{item.time}</h4>
              <button onClick={() => deleteElement({ index })}>Delete</button>
            </article>
          );
        })}
      </div>
    </div>
  );
};
export default Cards;
