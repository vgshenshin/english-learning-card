import './card.scss';

const Card = ({ cardData }) => {

	console.log(cardData.id);
	return (
		<div
			className="card rounded-md h-full w-full bg-slate-100 shadow-xl shadow-slate-400"
			draggable={true}>
			<img className="object-cover w-full h-2/3 rounded-t-md" src={cardData.image} alt={cardData.name} />
			<h3 className='card__title'>{cardData.name}</h3>
			<p className="card__content">{cardData.description}</p>
		</div>
	)
}

export default Card;

// const Card = ({ cardData }) => {
//   return (
//     <div className="card">
//       <img src={cardData.image} alt={cardData.name} />
//       <h3>{cardData.name}</h3>
//       <p>{cardData.description}</p>
//     </div>
//   );
// };

// export default Card;