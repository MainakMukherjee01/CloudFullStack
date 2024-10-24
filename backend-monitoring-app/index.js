const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Sample API endpoint to monitor requests
app.get("/api/monitor", (req, res) => {
	console.log("Request received at /api/monitor");
	res.status(200).json({ message: "Monitoring API is live!" });
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
