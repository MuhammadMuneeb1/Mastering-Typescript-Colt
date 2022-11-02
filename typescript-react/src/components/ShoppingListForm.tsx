import React, {useRef} from 'react';

// Defining "type" of a function which we are receiving as a props;
interface ShoppingListFormProps {
    onAddItem: (item: string, quantity: number) => void;
}

// function ShoppingListForm(props: ShoppingListFormProps): JSX.Element { Here, we can use props directly.

// Or, we can De-Structure "onAddItem" from the "ShoppingListFormProps".
    function ShoppingListForm({onAddItem}: ShoppingListFormProps): JSX.Element {

    // Set up Reference for using "useRef()";
    // "useRef()" type is Generic. Specify the "type" of Element which we are going to manipulate inside Generic, "<>". Here, we are manipulating the "HTML Input Element", so we have specified "<HTMLInputElement>" as useRef's "type".
    const productInputRef = useRef<HTMLInputElement>(null);
    const quantityInputRef = useRef<HTMLInputElement>(null);

    // "e" or "event" parameter is of "type", "React.FormEvent".
    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        // To get current value stored in "productInputRef" variable.
        // "?" optional, is added because value may or may not be "null".
        // console.log(productInputRef.current?.value);

        // "!" Non-null assertion operator - expression operator may be used to assert that its operand or a value is non-null and non-undefined in contexts where the type checker is unable to conclude that fact. Here, we are specifying "productInputRef" has a value and that value should not be a, "null" or "undefined".
        // console.log(productInputRef.current!.value);

        const newProduct = productInputRef.current!.value;
        // parseInt() - To convert string value to number;
        const quantity = parseInt(quantityInputRef.current!.value);
        // Lifting State Up.
        onAddItem(newProduct, quantity);
        // Re-setting the productInputRef variable or Input element.
        productInputRef.current!.value = "";
        // Re-setting the quantityInputRef variable or Input element to 1.
        quantityInputRef.current!.value= "1";
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter the Product Name' ref={productInputRef} />
            <input type="number" min={0} ref={quantityInputRef} />
            <button type='submit'>Add Item</button>
        </form>
    )
}

export default ShoppingListForm;
