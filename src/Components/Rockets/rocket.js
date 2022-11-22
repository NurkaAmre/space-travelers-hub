const Rocket = ({title, image, description, id}) => {

    
    return (
        <div>
            <div>
                <img src={image} alt={title} />
                <div>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <button id={id}>Reserve Rocket</button>
                </div>
            </div>
        </div>
    )
}

export default Rocket;