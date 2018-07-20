class Calculator {
	public sum: number;
	constructor() {
		this.sum = 0;
	}
	public plus(value: number): void {
		this.sum += value;
	}
	public minus(value: number): void {
		this.sum -= value;
	}
	public divide(value: number): void {
		this.sum /= value;
	}
	public multiply(value: number): void {
		this.sum *= value;
	}
	public percent(value: number): void {
		this.sum %= value;
	}
	public reciproc(): void {
		this.sum = 1 / this.sum;
	}
	public sqrt(): void {
		this.sum = Math.sqrt(this.sum);
	}
	public sign(): void {
		this.sum = -(this.sum);
	}
}

export default Calculator;
