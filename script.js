let search = document.querySelector(".form__input-search");
let output = document.querySelector(".output");


let arr = [
	{id: 1, name: "Iphone", model: "X"},
	{id: 2, name: "Iphone", model: "11"},
	{id: 3, name: "Iphone", model: "12"},
	{id: 4, name: "Iphone", model: "13"},
	{id: 5, name: "Iphone", model: "14"},
	{id: 6, name: "Iphone", model: "15"},
	{id: 7, name: "Iphone", model: "XS"}
]

search.addEventListener("input", () => {
	let inputSearch = search.value.toLowerCase().split(" ");
	let searchName = inputSearch[0];
	let searchModel = inputSearch[1];

	if (search.value.trim() === '') {
        output.textContent = "";
        return;
    }

	let result = arr.filter(item =>
		item.name.toLowerCase().includes(searchName) &&
		item.model.toLowerCase().includes(searchModel)
	);

	if (result.length === 0) {
		output.textContent = "Такого телефону не має в базі!"
		output.style.color = "red";
	}else {
		output.textContent = "Такий телефон є в базі!"
		output.style.color = "#008000";
	}

	console.log(result);
})




