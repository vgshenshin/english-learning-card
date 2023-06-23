import { useState } from 'react';
import { useRef } from "react";
import { motion } from "framer-motion";

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
		if (deltaX > 120) {
			// Swipe right
			setCurrentCardIndex(currentCardIndex + 1);
		} else if (deltaX < -120) {
			// Swipe left
			setCurrentCardIndex(currentCardIndex + 1);
		}
	};

console.log(cards);
	return (
		<motion.div
			className="main h-full pb-2 pl-1 pr-1 flex justify-center items-center relative"
			ref={constraintsRef}>
			{
				cards.slice(currentCardIndex, currentCardIndex + 1).map((cardData, index) => {
					return (
						<motion.div
							drag 
							dragConstraints={constraintsRef}
							key={cardData.id}
							className={`card-wrapper h-full w-full ${index === 0 && isDragging ? 'dragging' : ''}`}
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

export default SwipeCard;