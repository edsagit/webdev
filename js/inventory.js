let inventoryModal = document.getElementById("inventoryModal");
let inventoryButton = document.getElementById("inventoryButton");
let closeInventoryButton = document.getElementById("closeModal");
// let rollStatsButton = document.getElementById("rollStatsButton");
let startingItemsButton = document.getElementById("startingItemsButton");

// startingItemsButton.onclick = function (){
//     addGold(5);
//     addItem("Backpack", 1, "backpackPlaceholder.png", "backpack");
//     addItem("Sword", 1, "swordPlaceholder.jpg", "sword");
// }

window.addEventListener('load', (event) => {
    addGold(2);
    addItem("Backpack", 1, "../assets/images/inventory/backpackPlaceholder.png", "backpack");
    addItem("Sword", 1, "../assets/images/inventory/swordPlaceholder.jpg", "sword");
    addItem("Provisions", 2, "../assets/images/inventory/provisionsPlaceholder.png", "provisions");

    //let initialSkill = randomInt(1, 6) + 6;
    //let initialStrength = randomInt(1, 6) + randomInt(1, 6) + 12;
    //let initialLuck = randomInt(1, 6) + 6;
    let initialSkill = 10;
    let initialStrength = 14;
    let initialLuck = 9;
    let initialVenom = 0;

    setStat("initialSkill", initialSkill);
    setStat("initialStrength", initialStrength);
    setStat("initialLuck", initialLuck);
    setStat("initialVenom", initialVenom);

    setStat("currentSkill", initialSkill);
    setStat("currentStrength", initialStrength);
    setStat("currentLuck", initialLuck);
    setStat("currentVenom", initialVenom);
  });

// rollStatsButton.onclick = function (){
//     let initialSkill = randomInt(1, 6) + 6;
//     let initialStrength = randomInt(1, 6) + randomInt(1, 6) + 12;
//     let initialLuck = randomInt(1, 6) + 6;
//     let initialVenom = 0;

//     setStat("initialSkill", initialSkill);
//     setStat("initialStrength", initialStrength);
//     setStat("initialLuck", initialLuck);
//     setStat("initialVenom", initialVenom);

//     setStat("currentSkill", initialSkill);
//     setStat("currentStrength", initialStrength);
//     setStat("currentLuck", initialLuck);
//     setStat("currentVenom", initialVenom);
// }

inventoryButton.onclick = function (){
    let arrowPosY = (inventoryButton.getBoundingClientRect().height / 2) + inventoryButton.getBoundingClientRect().y;
    let modalPosY = arrowPosY - 20;
    arrowPosY = arrowPosY + "px";
    modalPosY = modalPosY + "px";
    document.getElementById("modalArrow").style.top = arrowPosY;
    document.getElementById("inventoryModal").style.paddingTop = modalPosY;
    inventoryModal.style.display = "block";
}

closeInventoryButton.onclick = function (){
    inventoryModal.style.display = "none";
}

window.onclick = function (event){
    if(event.target == inventoryModal){
        inventoryModal.style.display = "none";
    }
}

function openTab(pageName, element, color){
    let tabContent, tabButtons;
    tabContent = document.getElementsByClassName("tabContent");
    for(let i = 0; i < tabContent.length; i++){
        tabContent[i].style.display = "none";
    }

    tabButtons = document.getElementsByClassName("tabButton");
    for(let i = 0; i < tabButtons.length; i++){
        tabButtons[i].style.backgroundColor = "";
    }

    if(pageName == "Inventory"){
        document.getElementById("InventoryTabButton").style.color = "#2C2C2C";
        document.getElementById("StatsTabButton").style.color = "#E5E5E5";
    } else if(pageName == "Stats"){
        document.getElementById("InventoryTabButton").style.color = "#E5E5E5";
        document.getElementById("StatsTabButton").style.color = "#2C2C2C";
    }

    document.getElementById(pageName).style.display = "block";
    element.style.backgroundColor = color;
}

function setStat(stat, value){
    let textValue = stat + "Value";
    document.getElementById(textValue).innerText = value;
    document.getElementById(stat).setAttribute("value", value);
}

function getStat(stat){
    return document.getElementById(stat).getAttribute("value");
}

function setGold(value){
    document.getElementById("goldValue").innerText = value;
}

function getGold(){
    return document.getElementById("goldValue").innerText;
}

function addGold(value){
    let currentGold = parseInt(document.getElementById("goldValue").innerText);
    document.getElementById("goldValue").innerText = currentGold + value;
}

function removeGold(value){
    let currentGold = parseInt(document.getElementById("goldValue").innerText);
    document.getElementById("goldValue").innerText = currentGold - value;
}

function addItem(name, quantity, image, ID){
    if(document.body.contains(document.getElementById(ID))){
        let itemQuantity = document.getElementById(ID + "Quantity").innerText;
        document.getElementById(ID + "Quantity").innerText = parseInt(itemQuantity) + quantity;
    } else {
        let inventoryTable = document.getElementById("InventoryContent");

        let itemCell = document.createElement("div");
        itemCell.setAttribute("class", "itemCell");
        itemCell.setAttribute("id", ID);
        itemCell.style.margin = "auto";
        inventoryTable.appendChild(itemCell);

        let itemImage = document.createElement("img");
        itemImage.setAttribute("src", image);
        itemImage.setAttribute("width", "100%");
        itemCell.appendChild(itemImage);

        let itemName = document.createElement("p");
        itemName.innerText = name;
        itemCell.appendChild(itemName);

        let itemQuantity = document.createElement("p");
        itemQuantity.setAttribute("id", ID + "Quantity");
        itemQuantity.innerText = quantity;
        itemCell.appendChild(itemQuantity);
    }
}

function removeItem(ID, quantity){
    let itemQuantity = document.getElementById(ID + "Quantity").innerText;
    if(quantity >= itemQuantity){
        document.getElementById(ID).remove();
    } else {
        document.getElementById(ID + "Quantity").innerText = parseInt(itemQuantity) - quantity;
    }
}

function randomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

document.getElementById("InventoryTabButton").click();
