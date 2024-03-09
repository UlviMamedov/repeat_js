let orders = [];

function addOrder(orders, order) {
    orders.push(order);
}

function getTotalAmount(orders, tableNumber) {
    const order = orders.find(order => order.table === tableNumber);
    if (!order) return 0;

    return order.dishes.reduce((total, dish) => total + dish.price, 0);
}

function changeOrderStatus(orders, tableNumber, status) {
    const order = orders.find(order => order.table === tableNumber);
    if (order) order.status = status;
}

function cancelOrder(orders, tableNumber) {
    orders = orders.filter(order => order.table !== tableNumber);
}

let order1 = {
    table: 1,
    dishes: [
        { name: "Кава", price: 30 },
        { name: "Чізкейк", price: 50 }
    ],
    status: "в обробці"
};

let order2 = {
    table: 2,
    dishes: [
        { name: "Лате", price: 40 },
        { name: "Тірамісу", price: 60 }
    ],
    status: "готується"
};

addOrder(orders, order1);
addOrder(orders, order2);

console.log(getTotalAmount(orders, 1));
changeOrderStatus(orders, 1, "готово");
cancelOrder(orders, 2);