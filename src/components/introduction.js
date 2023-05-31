// contoh functional component
function Introduction(props) {
    console.log("parameter kiriman", props);
    return (
        <div>
            <h1>{!props.introValue ? "Introduction" : props.introValue}</h1>
            <p>Halo nama saya {props.name}</p>
            <p>saya seorang {props.job}</p>
        </div>
    );
}

export default Introduction;
