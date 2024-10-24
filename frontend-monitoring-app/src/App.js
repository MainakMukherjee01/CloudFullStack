import React, { useState, useEffect } from "react";

function App() {
	const [message, setMessage] = useState("");

	useEffect(() => {
		fetch("http://localhost:3001/api/monitor")
			.then((response) => response.json())
			.then((data) => setMessage(data.message))
			.catch((error) => console.log("Error fetching data: ", error));
	}, []);

	return (
		<div className="App">
			<h1>{message}</h1>
		</div>
	);
}

export default App;
