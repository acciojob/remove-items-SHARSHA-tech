const select = document.getElementById("colorSelect");
const button = document.getElementById("removeBtn");

	button.addEventListener("click",() =>{
	const selectedIndex = select.selectedIndex;
	if(selectedIndex !== -1){
		select.options.remove(selectedIndex);
	}
});
		
