interface Product {
    name: string;
    price: number;
}

function calcTotalPrice(products: Product[]): number {
    if (!Array.isArray(products) || products.length === 0) {
        return 0;
    }

    return products.reduce((total, product) => total + product.price, 0);
}

const products: Product[] = [
    { name: "Apple", price: 1.5 },
    { name: "Banana", price: 1.2 },
    { name: "Orange", price: 2.0 },
];

const totalPrice = calcTotalPrice(products);
console.log(`Total Price: $${totalPrice}`); // Output: Total Price: $4.7


function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

const email1 = "test@example.com";
const email2 = "invalid-email";

console.log(`${email1} is valid: ${isValidEmail(email1)}`); // Output: test@example.com is valid: true
console.log(`${email2} is valid: ${isValidEmail(email2)}`); // Output: invalid-email is valid: false