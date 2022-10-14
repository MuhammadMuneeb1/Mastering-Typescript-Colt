// Tuples - are an Array of fixed length and ordered with specific dataTypes, where the order matters;

// Here in this Tuples Array we have assigned 3-Number dataTypes to rgb variable and 3-values in an Array.
const rgb: [number, number, number] = [255, 255, 255];

// Custom Tuples Type.
type HTTPResponse = [number, string];

// Order Matters in Tuples.
const goodRes: HTTPResponse = [200, "OK"];

// Multi-Dimensional Tuples Array of Custom Tuples Type;
const response: HTTPResponse[] = [[404, "Not Found"], [200, "OK"]];