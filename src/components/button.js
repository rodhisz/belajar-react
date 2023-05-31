// contoh functional component
function Button(props) {
    return (
        <div>
            <button onClick={() => props.clicked()}>Click me</button>
        </div>
    )
}

export default Button;