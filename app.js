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
let flag = 0;

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
    flag = 1;
    selecElement("product").value = "";
    clearScreen("second-section", "first-section");
}

function finish(){
    clearScreen("first-section", "final-section");
    printProducts("final-section");
    /*
    categories.forEach(category => {
        h3Title.textContent += `${category.category}:`;
        category.items.forEach(items => {
            pItems.textContent += `- ${category.items}`;
        });
    });

    fatherElement.appendChild(h3Title);
    fatherElement.appendChild(pItems);
    }*/
}

function eliminate(){
    if(flag==0){
        alert("¡Todavía no se ha agregado ningún producto al carrito!");
    }
    else{
    clearScreen("first-section", "delete-section");
    printProducts("delete-section");
    }
}

function deleteProduct(){
    if (prompt("¿Seguro desea eliminar este elemento? Escriba si o no.") == "si"){
        
    }
}

function printProducts(idSection){
    let fatherElement = selecElement(idSection);

    for(i = 0 ; i < categories.length ; i++){
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