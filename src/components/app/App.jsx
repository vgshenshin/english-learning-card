import SwipeCard from "../swipeCard/SwipeCard";
import NewCard from "../newCard/newCard";

import logo from "./../../assets/react.svg";



const App = () => {

	const cards = [
		{ 
			id: 0, 
			image: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg',
			name: 'card 1',
			description: 'Description Card 1'
		},
		{ 
			id: 1, 
			image: 'https://yourtechdiet.com/wp-content/uploads/2022/01/Best-AI-tools-for-Image-Processing-696x368.jpg',
			name: 'card 2',
			description: 'Description Card 2'
		},
		{ 
			id: 2, 
			image: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg',
			name: 'card 3',
			description: 'Description Card 3'
		},
		{ 
			id: 3, 
			image: 'https://yourtechdiet.com/wp-content/uploads/2022/01/Best-AI-tools-for-Image-Processing-696x368.jpg',
			name: 'card 4',
			description: 'Description Card 4'
		}
	];

	return (
		<div className="app h-screen max-w-xl mx-auto flex flex-col bg-slate-100">
			<header className="header flex items-center pl-1 pr-1 h-20 bg-slate-100 z-10">
				<div className="logo">
					<img src={logo} alt="logo" />
				</div>
				<div className="logo_name">ENGLISH CARDS</div>
			</header>
			{/* <NewCard /> */}
			{/* <main className="main h-full pb-2 pl-1 pr-1"> */}
				<SwipeCard cards={cards}/>
			{/* </main> */}
			<footer className="footer h-20 bg-slate-100 border-t-1 border-t-slate-600 z-10">footer</footer>
		</div>
	)
}

export default App;