import "./../scss/style.scss";

import * as $ from "jquery";

import Calculator from "./calculator.ts";

(() => {
	$(document).ready(() => {

		const $firstValue = $("#firstValue");
		const $secondValue = $("#secondValue");
		const calculator: Calculator = new Calculator();

		let value: any = "";
		let op: any = {
			name: "",
			sign: "",
		};

		$secondValue.hide();

		$(".cypher").click((e: any) => {
			if (!op.name && calculator.sum !== 0) {
				calculator.sum = 0;
				value = "";
				$secondValue.hide();
			}
			if (value === "0") {
				value = "";
			}
			value += $(e.currentTarget).text();
			$firstValue.text(value);
		});
		$("#backspace").click(() => {
			value = value.substr(0, value.length - 1);
			$firstValue.text(value);
		});
		$("#ce").click(() => {
			value = "";
			$firstValue.text("");
		});
		$("#c").click(() => {
			calculator.sum = 0;
			value = "";
			op = {
				name: "",
				sign: "",
			};
			$("#op").text(op.sign);
			$firstValue.text(value);
			$secondValue.text(calculator.sum).hide();
		});
		$("#dot").click(() => {
			if (!op.name && calculator.sum !== 0) {
				calculator.sum = 0;
				$secondValue.hide();
			}
			if (value.indexOf(".") === -1) {
				value += ".";
				$firstValue.text(value);
			}
		});
		$(".button").click((e: any) => {
			const id: string = $(e.currentTarget).attr("id");
			if (id === "equal" || (calculator[id] && (value !== "" || calculator.sum !== 0))) {
				if (value.indexOf(".") !== -1) {
					value = parseFloat(value);
				} else {
					value = parseInt(value, 10);
				}
				if (id !== "equal") {
					op.sign = $(`#${id}`).text();
					op.name = id;
					if (calculator.sum === 0) {
						calculator.sum = value;
					}
					value = "";
				} else if ((calculator[op.name].length === 0 && value === "")
							|| value !== "") {
					calculator[op.name](value);
					value = "";
					op = {
						name: "",
						sign: "",
					};
				}
				$("#op").text(op.sign);
				$firstValue.text(value);
				$secondValue.text(calculator.sum);
				$secondValue.show();
			}
		});
	});
})();
