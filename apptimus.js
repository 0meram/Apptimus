let id = document.getElementById("");
let img = document.getElementById("img");
let link = document.getElementById("link");

let imgOutPut = document.getElementById("img-out-put");
let linkOutPut = document.getElementById("link-out-put");
let idOutPut = document.getElementById("id-out-put");

const storedInput = localStorage.getItem("banners-data");
const obj = new Object();

function createNewBanner(element_id, redirect_link, banner_img) {
	imgOutPut.src = img.value;
	linkOutPut.href = link.value;
	obj.id = id++;
	obj.link = link.value;
	obj.img = img.value;

	return obj;
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
		div.innerHTML = `Id  <span style="margin:0 10px"><b> ${num} </b></span> <a href="${link}"> <img src="${src}" alt="img"></img> </a>`;
		list.appendChild(div);
	}
}

document.onload = ResultsLoad()

