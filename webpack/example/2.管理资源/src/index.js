import _ from "lodash";
import './style.css';
import icon from "./hammer.svg";

function component() {
	var element = document.createElement("div");

	// _.join()是 Lodash框架 的一种方法
	element.innerHTML = _.join(["hello", "webpack"], "");
	element.classList.add('hello');

	var myicon = new Image();
	myIcon.src = icon;
	element.appendChild(myIcon);

	return element;
}

document.body.appendChild(component());