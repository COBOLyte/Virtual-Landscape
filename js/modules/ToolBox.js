class ToolBox {

	constructor() {
	}

	randomColor() {
		let backColor = ['#'];
		for (let i=1; i<7; i++) {
			const colorCodeRepl = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
			let code = Math.random()*15;
			code = Math.round(code);
			backColor.push(colorCodeRepl[code]);
		}
		backColor = backColor.join('');
		return backColor;
	}

}

export {ToolBox};