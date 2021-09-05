import Head from "next/head"
import Graph from "../../src/components/forecast/Graph"

const Forecast = () => {
    return (
        <div>
            <>
                <div className="w-screen h-screen flex items-center justify-center">
                    <Graph />
                </div>
            </>
        </div>
    )
}

export default Forecast
