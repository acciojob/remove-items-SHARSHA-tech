//your JS code here. If required.
button.addEventListener("click" , () =>{
	const select=document.getElementById('colorSelect');
	const selectedIndex = select.selectedIndex;
	if(selectedIndex !== -1){
		select.remove(selectedIndex);
	}
})