import React, {useState} from "react";
import Nav from "./Nav";
import Tiles from "./Tiles";

import hogs from "../porkers_data";

function App() {
	const [showOnlyGreased, setShowOnlyGreased] = useState(false);
	const [pigsToDisplay, setPigsToDisplay] = useState(hogs);
	const [sortValue, setSortValue] = useState("none");

	let newPigsToDisplay = [...hogs];

	function handleShowOnlyGreased(){
		const newShowOnlyGreased = !showOnlyGreased
		setShowOnlyGreased(newShowOnlyGreased);

		if(newShowOnlyGreased === false) {
			newPigsToDisplay = [...hogs];
		}
		else {
			newPigsToDisplay = (hogs.filter(hog => hog.greased === true))
		}

	setPigsToDisplay(newPigsToDisplay);
	}

	function handleSort(event) {
		if(event.target.value !== "none") {
			newPigsToDisplay.sort((value1, value2) => {
				if(value1[event.target.value] < value2[event.target.value]) {
					return -1;
				}
				else {
					return 1;
				}
			})
		}

	setSortValue(event.target.value);
	setPigsToDisplay(newPigsToDisplay);
	}


	return (
		<div className="App">
			<Nav />
			<form>
				<label>Show only greased?</label>
				<input type = "checkbox" onChange = {handleShowOnlyGreased} checked = {showOnlyGreased === true ? "checked" : "" } />
				<br />
				<label>Sort by</label>
				<select id = "sort" onChange = {handleSort} value = {sortValue}>
					<option value = "none">(none)</option>
					<option value = "name">Name</option>
					<option value = "weight">Weight</option>
				</select>
			</form>
			<Tiles pigs = {pigsToDisplay} />
		</div>
	);
}

export default App;
