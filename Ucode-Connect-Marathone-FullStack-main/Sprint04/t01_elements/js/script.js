let output_data_char = document.getElementById("characters").children;

for (let i = 0; i < output_data_char.length; i++) {
    let output_data = output_data_char[i].getAttribute("data-element");

    if (output_data_char[i].getAttribute("class") !== "good" && output_data_char[i].getAttribute("class") !== "evil" || !output_data_char[i].getAttribute("class"))
        output_data_char[i].className = "unknown";
    if (!output_data)
        output_data_char[i].setAttribute("data-element", "none");
    output_data_char[i].appendChild(document.createElement("br"));

    if (output_data_char[i].getAttribute("data-element") === "none") {
        let circle = document.createElement("div");
        let line = document.createElement("div");

        circle.setAttribute("class", `elem ${output_data}`);
        output_data_char[i].appendChild(circle);
        line.setAttribute("class", "line");
        circle.appendChild(line);
    }
    else {
        output_data = output_data_char[i].getAttribute("data-element").split(' ');
        for (let j = 0; j < output_data.length; j++) {
            let circle = document.createElement("div");

            circle.setAttribute("class", `elem ${output_data[j]}`);
            output_data_char[i].appendChild(circle);
        }
    }
}
