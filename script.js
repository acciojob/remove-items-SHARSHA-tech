function delete_item(){
	button.addEventListener("click" , () =>{
	const select=document.getElementById('colorSelect');
	const selectedIndex = select.selectedIndex;
	if(selectedIndex !== -1){
		select.remove(selectedIndex);
	
});
};		
}