import Calculator from "../../app/ts/calculator.ts";

function randint(min, max) {
	let rand = min - 0.5 + Math.random() * (max - min + 1)
	rand = Math.round(rand);
	return rand;
}

describe("Calculator.ts", () => {
	let calculator: Calculator;
	beforeEach(() => {
		calculator = new Calculator();
	});
	describe("Plus", () => {
		for (let i = 0; i < 3; i++) {
			let calculator: Calculator = new Calculator();
			let vars = [];
			let sum = 0;
			for (let j = 0; j < randint(2, 9); j++) {
				vars.push(randint(1, 100000));
			}
			vars.forEach((value) => {
				calculator.plus(value);
			});
			sum = vars.reduce((acc, cur) => {
				return acc += cur;
			}, 0);
			test(`${vars.join(" + ")} = ${sum}`, () => {
				expect(calculator.sum).toBe(sum);
			});
		}
		test(`Should throw a type error`, () => {
			expect(calculator.plus).toThrow(TypeError);
		});
	});
	describe("Minus", () => {
		for (let i = 0; i < 3; i++) {
			let calculator: Calculator = new Calculator();
			let vars = [];
			let sum = 0;
			for (let j = 0; j < randint(2, 9); j++) {
				vars.push(randint(1, 100000));
			}
			vars.forEach((value) => {
				calculator.minus(value);
			});
			sum = vars.reduce((acc, cur) => {
				return acc -= cur;
			}, 0);
			test(`${vars.join(" - ")} = ${sum}`, () => {
				expect(calculator.sum).toBe(sum);
			});
		}
		test(`Should throw a type error`, () => {
			expect(calculator.minus).toThrow(TypeError);
		});
	});
	describe("Multiply", () => {
		for (let i = 0; i < 3; i++) {
			let calculator: Calculator = new Calculator();
			let vars = [];
			let sum = 0;
			for (let j = 0; j < randint(2, 5); j++) {
				vars.push(randint(1, 100));
			}
			vars.forEach((value, i) => {
				if (i === 0) {
					sum += value;
					calculator.plus(value);
				} else {
					sum *= value;
					calculator.multiply(value);
				}
			});
			test(`${vars.join(" * ")} = ${sum}`, () => {
				expect(calculator.sum).toBe(sum);
			});
		}
		test(`Should throw a type error`, () => {
			expect(calculator.multiply).toThrow(TypeError);
		});
	});
	describe("Divide", () => {
		for (let i = 0; i < 3; i++) {
			let calculator: Calculator = new Calculator();
			let vars = [];
			let sum = 0;
			for (let j = 0; j < randint(2, 5); j++) {
				vars.push(randint(1, 100));
			}
			vars.forEach((value, i) => {
				if (i === 0) {
					sum += value;
					calculator.plus(value);
				} else {
					sum /= value;
					calculator.divide(value);
				}
			});
			test(`${vars.join(" / ")} = ${sum}`, () => {
				expect(calculator.sum).toBeCloseTo(sum);
			});
		}
		test(`Should throw a type error`, () => {
			expect(calculator.divide).toThrow(TypeError);
		});
	});
	describe("Percentage", () => {
		for (let i = 0; i < 3; i++) {
			let calculator: Calculator = new Calculator();
			let vars = [];
			let sum = 0;
			for (let j = 0; j < 2; j++) {
				vars.push(randint(1, 100));
			}
			calculator.plus(vars[0]).percent(vars[1]);
			sum = vars[0] % vars[1];
			test(`${vars.join(" % ")} = ${sum}`, () => {
				expect(calculator.sum).toBe(sum);
			});
		}
		test(`Should throw a type error`, () => {
			expect(calculator.percent).toThrow(TypeError);
		});
	});
	describe("Part (1 / x)", () => {
		for (let i = 0; i < 3; i++) {
			let calculator: Calculator = new Calculator();
			let vars = [];
			let sum = 0;
			for (let j = 0; j < randint(2, 5); j++) {
				vars.push(randint(1, 100));
			}
			vars.forEach((value) => {
				calculator.plus(value).reciproc();
				sum = 1 / value;
				test(`1 / ${value} = ${sum}`, () => {
					expect(calculator.sum).toBeCloseTo(sum);
				});
			});
		}
	});
	describe("Sqrt", () => {
		for (let i = 0; i < 3; i++) {
			let vars = [];
			for (let j = 0; j < randint(2, 5); j++) {
				vars.push(randint(1, 100));
			}
			vars.forEach((value) => {
				let calculator: Calculator = new Calculator();
				calculator.plus(value).sqrt();
				let sum = Math.sqrt(value);
				test(`Math.sqrt(${value}) = ${sum}`, () => {
					expect(calculator.sum).toBeCloseTo(sum);
				});
			});
		}
	});
	describe("Sign changer", () => {
		for (let i = 0; i < 3; i++) {
			let vars = [];
			for (let j = 0; j < randint(2, 5); j++) {
				vars.push(randint(1, 100));
			}
			vars.forEach((value) => {
				let calculator: Calculator = new Calculator();
				calculator.plus(value).sign();
				let sum = -(value);
				test(`Calculator.sign(${value}) = ${sum}`, () => {
					expect(calculator.sum).toBe(sum);
				});
			});
		}
	});
});
