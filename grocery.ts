// Class used to generate grocery items; includes a method to help display items
class Grocery {
    constructor(public item_name: string, 
                public quantity: number, 
                public price: number, 
                public category: string){  
                }
    display_item(item: Grocery){
        return item.item_name + " x" + String(item.quantity) + " (" + "$" + String(item.price) + ") " + item.category + "<br/>";
    }
}

// Variable to hold a grocery list
var GroceryList = [new Grocery("Milk", 1, 3.48, "Dairy"), 
                   new Grocery("Ham", 2, 2.38, "Pork"), 
                   new Grocery("Pineapple", 1, 2.75, "Fruit")]

// Loop used to add items to the display printout
var display = "";
var i: number;
for (i = 0; i < GroceryList.length; i++){
    display += GroceryList[i].display_item(GroceryList[i])
}

document.body.innerHTML = "Grocery List:" + "<br/><br/>" + display