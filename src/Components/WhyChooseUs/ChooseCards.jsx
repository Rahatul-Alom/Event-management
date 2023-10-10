
const ChooseCards = ({chooseCards}) => {
   const {name, id, image, description} = chooseCards;
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src=""alt=""/></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ChooseCards;