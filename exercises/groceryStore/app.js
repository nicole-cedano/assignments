var shopper = {
    groceryCart: ["mangos", "kiwi", "oranges", "chocolates"],
    totalAmount: 13,
    paymentStatus: true,
    totalItemsAndCost: function () {
        return this.groceryCart + " $" + this.totalAmount + " Payment Status " + this.paymentStatus;
    }
}
console.log(shopper.totalItemsAndCost());


