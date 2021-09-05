import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import app from "../../firebase";

import {
	Charts,
	ChartContainer,
	ChartRow,
	YAxis,
	Resizable,
	LineChart,
	Baseline,
} from "react-timeseries-charts";
import { TimeSeries, TimeRange } from "pondjs";
import Form from "./Form";

function Graph() {
	const [points, setPoints] = useState([]);
	const name = "Co2 Concenteration";
	const cols = ["time", "concenteration"];
	const data = { name, columns: cols, points };
	const [item, setItem] = useState([]);
	const db = getFirestore(app);

	const getData = async (dbInstance) => {
		const dataCollection = collection(dbInstance, "abu-zaria");
		const dataSnapshots = await getDocs(dataCollection);
		const dataList = dataSnapshots.docs.map((doc) => doc.data());
		return dataList;
	};

	useEffect(() => {
		getData(db).then((data) => {
			setItem(data);
		});
	}, [db]);

	useEffect(() => {
		function createPoints() {
			const p = [];
			item && item.map((i) => p.push([i.timestamp, i.co2_conc]));
			setPoints(p);
		}
		createPoints();
	}, [item]);

	// console.log(points);

	const series = points.length > 1 && new TimeSeries(data);
	// console.log(series.range());

	const lineStyle = {
		concenteration: {
			normal: { stroke: "steelblue", strokeWidth: 1, fill: "none" },
			highlighted: { stroke: "#5a98cb", fill: "none", strokeWidth: 1 },
			selected: { stroke: "steelblue", fill: "none", strokeWidth: 1 },
			muted: {
				stroke: "steelblue",
				fill: "none",
				opacity: 0.4,
				strokeWidth: 1,
			},
		},
	};

	const baselineStyle = {
		label: { fill: "#8B7E7E", fontWeight: 100, fontSize: 11 },
		line: { stroke: "blue", strokeDasharray: "5,2" },
	};

	const minTym = new Date().getTime();
	// console.log(minTym);

	// var timerange = new TimeRange([begin, end])
	return (
		<div className='w-screen h-3/4 flex flex-col justify-center items-center'>
			{points.length > 1 ? (
				<>
					<Form />
					<ChartContainer
						timeRange={series.range()}
						format='%I%p'
						utc={false}
						width={900}
						minTime={minTym}
						enablePanZoom={true}
						enableDragZoom={true}
						title='Co2 Emission'
						titleStyle={{ fontWeight: 5 }}
					>
						<ChartRow height='420'>
							<YAxis
								id='concenteration'
								label='Amount'
								min={series.min("concenteration")}
								max={series.max("concenteration")}
								width='60'
								format='.2f'
							/>

							<Charts>
								<LineChart
									axis='concenteration'
									series={series}
									columns={["concenteration"]}
									style={lineStyle}
								/>
								<Baseline
									axis='concenteration'
									value={series.max("concenteration")}
									label='Max'
									position='right'
									style={baselineStyle}
								/>
								<Baseline
									axis='concenteration'
									value={series.min("concenteration")}
									label='Min'
									position='right'
									style={baselineStyle}
								/>
								<Baseline
									axis='concenteration'
									value={
										series.avg("concenteration") -
										series.stdev("concenteration")
									}
								/>
								<Baseline
									axis='concenteration'
									value={
										series.avg("concenteration") +
										series.stdev("concenteration")
									}
								/>
								<Baseline
									axis='concenteration'
									value={series.avg("concenteration")}
									position='right'
									label='Avg'
									style={baselineStyle}
								/>
							</Charts>
						</ChartRow>
					</ChartContainer>
				</>
			) : (
				<div className='text-center text-3xl text-gray-500'>
					Loading data...{" "}
				</div>
			)}
		</div>
	);
}

export default Graph;
