// Enums - are set of Named Constants that we can use through out our program. Enums automatically assign numbered values to variable constants starting with "0" and so on depending upon the length of variable constants. And, we can also assign custom values to these variable constant.

enum OrderedStatus {
    PENDING,
    SHIPPED,
    DELIVERED,
    RETURNED,
}

const myStatus = OrderedStatus.DELIVERED;
function isDelivered(status: OrderedStatus){
    return status === OrderedStatus.DELIVERED;
}

isDelivered(OrderedStatus.RETURNED);

// Assigning values to Enum variable constants.

enum ArrowKey {
    UP = 'up',
    DOWN = 'down',
    LEFT = 'left',
    RIGHT = 'right',
    ERROR = 234,
}

// Adding const before "enum" keyword will hide enum code in Javascript File.
const enum OrderedStatusTwo {
    PENDING, 
    SHIPPED,
    DELIVERED,
    RETURNED,
}

const order = {
    orderNumber: 2093842,
    status: OrderedStatusTwo.PENDING,
}

const order2 = {
    orderNumber: 23721842384,
    status: OrderedStatusTwo.DELIVERED,
}