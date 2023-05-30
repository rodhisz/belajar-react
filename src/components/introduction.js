function Introduction(props) {
    console.log("parameter kiriman", props);
    return (
        <div>
            <h1>Ini Introduction</h1>
            <p>Halo nama saya : {props.name}</p>
        </div>
    );
}

export default Introduction;
