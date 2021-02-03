function gridconstructor() {
    for (let index = 0; index < 10; index++) {
        for (let index2 = 0; index2 < 10; index2++) {
            var node = document.createElement("div");
            var textnode;
            if (index === 0) {
                index2 === 0 ? textnode = document.createTextNode(``) : textnode = document.createTextNode(`${index2}`);
            } else {
                var textnode = document.createTextNode(`${index}${index2}`);
            }
            node.className = "text-2xl bg-gray-200 border-2 border-gray-700";

            if (index === 0) {
                 node.id = index2;
            } else {
                node.id = `${index}${index2}`;
            }
            


            node.appendChild(textnode);
            document.getElementById("table").appendChild(node);
        }

    }
    var node = document.createElement("div");
    var textnode = document.createTextNode(`</div>`);
    node.appendChild(textnode);
}


gridconstructor();