import MyComponent from "./MyComponent";

const FirstComponent = () => {
    //essa função faz adiciona um componente para exportação
    return (
        <div>
            {/* componente de teste */}
            <h1>Meu primeiro componente</h1>
            <MyComponent />
        </div>
    );
};

export default FirstComponent;