import React from "react";
// Importing Prop "types";
import Item from '../models/items';

// Defining props "types";
// interface Item {
//     id: number;
//     product: string;
//     quantity: number;
// }
interface ShoppingListProps {
    // Props(items) which we are receiving are an Array of Objects.
    items: Item[];
}

// By default the "return type" of this function is "JSX.Element". The reason we are specifying it because sometimes developers by mistake return something else. So it is a good practice to specify "return type".

// export default function ShoppingList(props: ShoppingListProps): JSX.Element {

// We can also Destructure "items" from the props. Destructuring is mostly used in React.
export default function ShoppingList({items}: ShoppingListProps): JSX.Element {
    
    return (
        <div>
            <h1>Shopping List</h1>
            <ul>
                {
                    // props.items.map((item) => (
                    items.map((item) => (
                        <li key={item.id}>
                            {item.product} - {item.quantity}
                        </li>
                    )
                    )
                }
            </ul>
        </div>
    );
}