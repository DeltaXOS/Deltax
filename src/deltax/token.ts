export class Token {
	public _type: TokenTypes;
	public _value: TokenValue;
	
	constructor(type: TokenTypes, value: TokenValue) {
		this._type = type;
		this._value = value;

		console.log(`TOKEN: ${type} : ${value}`)
	}
}

export enum TokenTypes {
	STRING,
	CORE_FUNCTION
}

export type TokenValue = string | number;