// Normal Function

function add(num1: number, num2: number = 10): number {
  return num1 + num2;
}

// Arrow function

const addArrow = (num1: number, num2: number): number => num1 + num2;

// method
const user = {
  name: "Rahat",
  balance: 0,
  addBalance(balance: number): string {
    return `My balance is now ${this.balance + balance}`;
  },
};

// array map

const arr: number[] = [1, 2, 3, 4, 5];

const squareArr: number[] = arr.map(
  (element: number): number => element * element
);
