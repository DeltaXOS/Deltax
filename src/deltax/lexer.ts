import { Token } from "./token";

export class Lexer {
	// Extends: CodeManipulator
	public _code;
	
	constructor(code: string) {
		this._code = code;
	}

	get code(): string {
		return this._code;
	}

	set code(code: string) {
		this._code = code;
	}

	parse() {
		console.log(this.code);

		const length = this.code.length;

		let pos = 0;
		let tokens: Token[] = [];

		const CORE_FUNCTIONS = [
			"print"
		];

		const varChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_';
		
		while (pos < length) {
			let currentChar = this.code[pos];

			if (currentChar in [" ", "\n"]) {
				pos++;
				continue;
			} else if ()
		}
	}
}