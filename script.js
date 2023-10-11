function showRandomText() {
    fetch('text.jsonl')
        .then(response => response.text())
        .then(data => {
            let lines = data.trim().split("\n");
            let selectedLines = [];
            for(let i = 0; i < 1; i++) {
                let randomIndex = Math.floor(Math.random() * lines.length);
                selectedLines.push(lines[randomIndex]);
                lines.splice(randomIndex, 1);  // remove the selected line to avoid duplicates
            }
            document.getElementById("output").textContent = selectedLines.join("\n");
        });
}
