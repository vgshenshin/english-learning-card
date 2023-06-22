import RenderCard from "../renderCard/RenderCard";

const App = () => {

    return (
        <div className="app h-screen mx-auto flex flex-col">
            <header className="header flex-auto">header</header>
            <main className="main flex-auto">
                <RenderCard />
            </main>
            <footer className="footer flex-auto bg-cyan-400">footer</footer>
        </div>
    )
}

export default App;