import _ from "lodash";

function component() {
	var element = document.createElement("div");

	// _.join()是 Lodash框架 的一种方法
	element.innerHTML = _.join(["hello", "webpack"], "");

	return element;
}

document.body.appendChild(component());