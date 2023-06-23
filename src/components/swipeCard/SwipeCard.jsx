import { useState } from 'react';
import { useRef } from "react";
import { motion } from "framer-motion";
import PropTypes from 'prop-types';

import Card from '../card/Card';

const SwipeCard = ({ cards }) => {
	const [currentCardIndex, setCurrentCardIndex] = useState(0);
	const [isDragging, setIsDragging] = useState(false);
	const [startX, setStartX] = useState(null);

	const constraintsRef = useRef(null);

	const handleDragStart = (e) => {
		setIsDragging(true);
		setStartX(e.clientX);
	};

	const handleDragEnd = (e) => {
		setIsDragging(false);
		const deltaX = e.clientX - startX;
		if (deltaX > 180) {
			// Swipe right
			setCurrentCardIndex(currentCardIndex + 1);
		} else if (deltaX < -180) {
			// Swipe left
			setCurrentCardIndex(currentCardIndex + 1);
		} else {
			console.log(deltaX);
		}
	};

	return (
		<motion.div
			className="main h-full flex justify-center items-center relative"
			ref={constraintsRef}
			>
			{
				cards.slice(currentCardIndex, currentCardIndex + 2).map((cardData, index) => {
					return (
						<motion.div
							drag 
							dragConstraints={constraintsRef}
							key={cardData.id}
							className={`card-wrapper pb-3 pl-2 pr-2 h-full w-full absolute z-10 ${index === 0 && isDragging ? '' : ''}${index === 0 ? 'z-20' : ''}`}
							onDragStart={handleDragStart}
							onDragEnd={handleDragEnd}
						>
							<Card cardData={cardData} />
						</motion.div>
					)
				})
			}
		</motion.div>
	);
};

SwipeCard.propTypes = {
	cards: PropTypes.array
}

export default SwipeCard;