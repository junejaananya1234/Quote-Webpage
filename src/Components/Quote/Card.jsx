function Card(props) {
    return (
        <div className="border border-gray-300 shadow-md p-4 m-4 rounded-md">
            <p className="text-lg font-semibold">{props.quote}</p>
            <span className="block mt-2 text-sm text-gray-600">{props.author}</span>
        </div>
    );
}

export default Card;