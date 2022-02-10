let id = document.getElementById("");
let img = document.getElementById("img");
let link = document.getElementById("link");

let imgOutPut = document.getElementById("img-out-put");
let linkOutPut = document.getElementById("link-out-put");
const obj = new Object();
const buttonSubmit = document.getElementById("btn");
buttonSubmit.addEventListener("click", myFunction);

function createNewBanner(element_id, redirect_link, banner_img) {
	imgOutPut.src = banner_img;
	linkOutPut.href = redirect_link;
	obj.id = element_id++;
	obj.link = redirect_link;
	obj.img = banner_img;
	
	return obj;
}

function myFunction() {
	createNewBanner(1, link.value, img.value);
}

const saveLocalStorage = () => {
	localStorage.setItem("bannersData", JSON.stringify(obj));
	alert("Your data is stored");
};

const clearLocalStorage = () => {
	localStorage.clear();
	location.reload();
};

function ResultsLoad() {
	let list = document.getElementById("banners-list");
	for (let i = 0; i < localStorage.length; i++) {
		const obj = JSON.parse(localStorage.bannersData);
		const num = obj.id;
		const src = obj.img;
		const link = obj.link;
		const div = document.createElement("div");
		div.innerHTML = `</span id="${num}"> <a href="${link}"> <img src="${src}" alt="img"></img> </a>`;
		list.appendChild(div);
	}
}

document.onload = ResultsLoad()

