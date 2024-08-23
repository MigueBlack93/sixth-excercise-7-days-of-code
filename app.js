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
        category: "Frutas y Vegetales",
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
let categoryItem = -1;

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

function nextPage2(){
    clearScreen("final-section", "second-section");
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
    if(flag==0){
        alert("¡Todavía no se ha agregado ningún producto al carrito!");
    }else{
        clearScreen("first-section", "final-section");
        printProducts("results");
    }
}

function eliminate(){
    if(flag==0){
        alert("¡Todavía no se ha agregado ningún producto al carrito!");
    }
    else{
        clearScreen("first-section", "delete-section");
        printProducts("delete-list");
    }
}
function eliminate2(){
        clearScreen("final-section", "delete-section");
        printProducts("delete-list");
}

function deleteProduct(){
    let itemToDelete = selecValue("delete");
    let index = searchItem(itemToDelete);
    let deleted = 0;

    if(index != -1){
        if(prompt("¿Seguro desea eliminar este producto? Escriba si o no.") == "si"){
            deleted = categories[categoryItem].items.splice(index, 1);
            console.log(deleted);
            alert(`El producto ${deleted} ha sido eliminado exitosamente`);
            categoryItem = -1;
            selecElement("delete").value = "";
            clearScreen("delete-section", "first-section");
        }
    }else{
        alert("El producto a eliminar no se encuentra en el carrito");
    }
}

function searchItem(itemToDelete){    
    for(i = 0 ; i < categories.length ; i++){
        let indice = categories[i].items.indexOf(itemToDelete);

        if(indice != -1){
        categoryItem = i;
        return indice;
        }
    }
    if(categoryItem ==- 1){
        return -1;
    }
}

function printProducts(idSection){
    let fatherElement = selecElement(idSection);

    while (fatherElement.firstChild) {
        fatherElement.removeChild(fatherElement.firstChild);
    }

    let h2Title = document.createElement("h2");
    let h2Text = document.createTextNode("Lista de elementos hasta ahora:");

    fatherElement.appendChild(h2Title);
    h2Title.appendChild(h2Text);

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