"use strict";
// Enums - are set of Named Constants that we can use through out our program. Enums automatically assign numbered values to variable constants starting with "0" and so on depending upon the length of variable constants. And, we can also assign custom values to these variable constant.
var OrderedStatus;
(function (OrderedStatus) {
    OrderedStatus[OrderedStatus["PENDING"] = 0] = "PENDING";
    OrderedStatus[OrderedStatus["SHIPPED"] = 1] = "SHIPPED";
    OrderedStatus[OrderedStatus["DELIVERED"] = 2] = "DELIVERED";
    OrderedStatus[OrderedStatus["RETURNED"] = 3] = "RETURNED";
})(OrderedStatus || (OrderedStatus = {}));
const myStatus = OrderedStatus.DELIVERED;
function isDelivered(status) {
    return status === OrderedStatus.DELIVERED;
}
isDelivered(OrderedStatus.RETURNED);
// Assigning values to Enum variable constants.
var ArrowKey;
(function (ArrowKey) {
    ArrowKey["UP"] = "up";
    ArrowKey["DOWN"] = "down";
    ArrowKey["LEFT"] = "left";
    ArrowKey["RIGHT"] = "right";
    ArrowKey[ArrowKey["ERROR"] = 234] = "ERROR";
})(ArrowKey || (ArrowKey = {}));
const order = {
    orderNumber: 2093842,
    status: 0 /* OrderedStatusTwo.PENDING */,
};
const order2 = {
    orderNumber: 23721842384,
    status: 2 /* OrderedStatusTwo.DELIVERED */,
};
