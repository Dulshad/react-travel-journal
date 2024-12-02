import Header from "./components/header/Header"
import Travel from "./components/travel/Travel"
import data from "./data.js"

function App() {
    return (
        <>
            <Header/>
            <div className="travel_container">
                {data.map(item => {
                    return (
                        <Travel
                            key={item.id}
                            {...item}
                        />
                    )
                })}
            </div>
        </>
    )
}

export default App
