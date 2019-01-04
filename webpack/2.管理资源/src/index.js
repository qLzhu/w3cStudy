import _ from "lodash";
import './style.css';
import icon from "./hammer.svg";
import data from "./data.json";

function component() {
	var element = document.createElement("div");

	// _.join()是 Lodash框架 的一种方法
	element.innerHTML = _.join(["hello", "webpack"], "");
	element.classList.add('hello');

	// 创建图片
	var img = document.createElement('img');
	img.setAttribute('src', icon);
	element.appendChild(img);

	console.log(data);

	return element;
}

document.body.appendChild(component());