import { Lexer } from "./lexer";

export class DeltaxJS {
	public _code?: string;

	constructor() {

	}

	get code(): string | undefined {
		return this._code;
	}

	set code(code: string | undefined) {
		this._code = code;
	}

	run(options?: RunOptions) {
		if (this.code) {
			var lexer = new Lexer(this.code);
			lexer.parse();
		} else {
			throw new Error("No code found");
		}
	}
}

export interface RunOptions {
	env?: DeltaxEnviroment;
}

export interface DeltaxEnviroment {
	variables: ENVVariable[];
}

export interface ENVVariable {
	key: string;
	value: string;
}