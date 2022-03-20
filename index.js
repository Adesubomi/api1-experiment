const app = require("express")();
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
    res.json([
        { id: 1, name: "Plantain"},
        { id: 2, name: "Viju milk"},
        { id: 3, name: "Bread"},
        { id: 4, name: "Semo"},
        { id: 4, name: "Rice and stew"},
        { id: 4, name: "Beans"},
        { id: 4, name: "........."},
    ]);
});

app.listen(4000, () => {
    console.log("Listening on port 4000");
});