let categories = [
    {
        category: "Aceites y Grasas",
        items: []
    },
    {
        category: "Carnes",
        items: []
    },
    {
        category: "Cereales y Granos",
        items: []
    },
    {
        category: "Condimentos y Especias",
        items: []
    },
    {
        category: "Conservas y Enlatados",
        items: []
    },
    {
        category: "Dulces y Repostería",
        items: []
    },
    {
        category: "Vegetales",
        items: []
    },
    {
        category: "Harinas y Panificados",
        items: []
    },
    {
        category: "Lácteos",
        items: []
    },
    {
        category: "Legumbres",
        items: []
    },
    {
        category: "Limpieza e Higiene",
        items: []
    },
    {
        category: "Mascotas",
        items: []
    },
    {
        category: "Pastas",
        items: []
    },
    {
        category: "Perfumería",
        items: []
    },
    {
        category: "Pescados y Mariscos",
        items: []
    }
];

function selecElement(id){
    return document.getElementById(id);
}

function selecValue(id){
    return document.getElementById(id).value;
}

function clearScreen(hidden, show){
    selecElement(hidden).setAttribute("hidden", "");
    selecElement(show).removeAttribute("hidden");
}

function nextPage(){
    clearScreen("first-section", "second-section");
}

function addProduct(){
    let selectedCategory = selecValue("categor-selected");
    let item = selecValue("product");
    
    for(i = 0 ; i < categories.length ; i++){
        if(categories[i].category == selectedCategory){
            categories[i].items.push(item);
        }

    }
    selecElement("product").value = "";
    clearScreen("second-section", "first-section");
}

function finish(){
    clearScreen("first-section", "final-section");

    for(i = 0 ; i < categories.length ; i++){

        let fatherElement = selecElement("final-section");

        let h3Title = document.createElement("h3");
        let h3Text = document.createTextNode(`${categories[i].category}:`);

        fatherElement.appendChild(h3Title);
        h3Title.appendChild(h3Text);

        let pItems = document.createElement("p");

        for(a = 0 ; a < categories[i].items.length ; a++){
            pItems.textContent += `${categories[i].items[a]}, `;
            fatherElement.appendChild(pItems);
        }
    
    }
}