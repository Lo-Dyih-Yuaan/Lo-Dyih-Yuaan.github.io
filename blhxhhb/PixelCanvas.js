function PixelCanvas(canvas, width, height, pixelColors, defaultColor, defaultPattern = defaultColor,
                     borderColor = 'gray', pixelSize = 15, borderSize = 1) {
	this.canvas = canvas;
	this.width = width;
	this.height = height;
	this.pixelColors = Object.assign({}, pixelColors);
	this.defaultColor = defaultColor;
	this.data = JSON.parse(JSON.stringify(new Array(this.height).fill([])));
	this.borderColor = borderColor;
	this.pixelSize = pixelSize;
	this.borderSize = borderSize;
	this.initalize();
	this.paint(defaultPattern);
	return this;
}
PixelCanvas.prototype = {
	constructor: PixelCanvas,
	initalize: function () {
		let ctx = this.canvas.getContext("2d");
		let elementSize = this.pixelSize + this.borderSize;
		this.canvas.width = this.width*elementSize+this.borderSize;
		this.canvas.height = this.height*elementSize+this.borderSize;
		ctx.fillStyle = this.borderColor;
		ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
		this.fillColor = this.defaultColor;
	},
	daub: function (i, j) {
		let ctx = this.canvas.getContext("2d");
		let elementSize = this.pixelSize + this.borderSize;
		ctx.fillRect(j*elementSize+this.borderSize,
		             i*elementSize+this.borderSize,
		             this.pixelSize, this.pixelSize);
		this.data[i][j] = this.fillColorName;
	},
	paint: function (patternStr) {
		let temp = this.fillColor;
		let pattern = patternStr.split(/(?=[A-Z_])/);
		if (pattern.length == 1) {
			this.fillColor = pattern[0];
			for (let i = 0; i < this.height; ++i)
				for (let j = 0; j < this.width; ++j)
					this.daub(i, j);
		} else if (pattern.length == this.width*this.height) {
			for (let i = 0; i < this.height; ++i)
				for (let j = 0; j < this.width; ++j) {
					this.fillColor = pattern[i*this.width+j];
					this.daub(i, j);
				}
		} else {
			for (let i = 0; i < this.height; ++i)
				for (let j = 0; j < this.width; ++j) {
					this.fillColor = pattern[(i*this.width+j)%pattern.length];
					this.daub(i, j);
				}
		}
		this.fillColor = temp;
	},
	save: function () {
		let imgDataURI = this.canvas.toDataURL("image/png");
		let image = imgDataURI.replace("image/png", "image/octet-stream");
		window.location.href = image;
	},
	set fillColor(fillColor) {
		this.fillColorName = fillColor;
		let ctx = this.canvas.getContext("2d");
		ctx.fillStyle = this.pixelColors[fillColor];
	},
	get fillColor() {
		return this.fillColorName;
	},
	get pattern() {
		return this.data.map(arr => arr.join("")).join("");
	}
};
