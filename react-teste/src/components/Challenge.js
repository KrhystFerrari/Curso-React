const challenge = () => {
    const a = 1;
    const b = 5;

  return (
    <div>
        <p>A: {a}</p>
        <p>B: {b}</p>
        <button onClick={() => console.log(a + b)}>Clique para somar!</button>
    </div>
  );
};

export default challenge;