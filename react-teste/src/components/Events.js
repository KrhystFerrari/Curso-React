const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e)
        console.log("Evento ativo. ")
    };

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui!</button>
            </div>
            <div>
                <button onClick={() => console.log("Clicou!")}>Clique aqui também!</button>
            </div>
        </div>
    );
};

export default Events;