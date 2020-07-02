var Grocery = /** @class */ (function () {
    function Grocery(item_name, quantity, price, category) {
        this.item_name = item_name;
        this.quantity = quantity;
        this.price = price;
        this.category = category;
    }
    Grocery.prototype.display_item = function (item) {
        return item.item_name + " x" + String(item.quantity) + " (" + "$" + String(item.price) + ") " + item.category + "<br/>";
    };
    return Grocery;
}());
var GroceryList = [new Grocery("Milk", 1, 3.48, "Dairy"),
    new Grocery("Ham", 2, 2.38, "Pork"),
    new Grocery("Pineapple", 1, 2.75, "Fruit")];
var display = "";
var i;
for (i = 0; i < GroceryList.length; i++) {
    display += GroceryList[i].display_item(GroceryList[i]);
}
document.body.innerHTML = "Grocery List:" + "<br/><br/>" + display;
