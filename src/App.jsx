import Header from "./components/header/Header"
import Travel from "./components/travel/Travel"
import data from "./data.js"

function App() {
    const travelItems = data.map(item => {
            return (
                <Travel
                    key={item.id}
                    {...item}
                />
            )
        }
    )

    return (
        <>
            <Header/>
            <div className="travel-container">
                {travelItems}
            </div>
        </>
    )
}

export default App
