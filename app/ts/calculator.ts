class Calculator {
	public sum: number;
	constructor() {
		this.sum = 0;
	}
	public plus(value: number): Calculator {
		this.sum += value;
		return this;
	}
	public minus(value: number): Calculator {
		this.sum -= value;
		return this;
	}
	public divide(value: number): Calculator {
		this.sum /= value;
		return this;
	}
	public multiply(value: number): Calculator {
		this.sum *= value;
		return this;
	}
	public percent(value: number): Calculator {
		this.sum %= value;
		return this;
	}
	public reciproc(): Calculator {
		this.sum = 1 / this.sum;
		return this;
	}
	public sqrt(): Calculator {
		this.sum = Math.sqrt(this.sum);
		return this;
	}
	public sign(): Calculator {
		this.sum = -(this.sum);
		return this;
	}
}

export default Calculator;
