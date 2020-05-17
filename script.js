//assigning a variable to the class id
		var modal = document.querySelector(".modal-content");
		var trigger = document.querySelector(".trigger");
		var closeBtn = document.querySelector(".closeBtn");
		
		//creating a function to show the modal content
		function toggleModal(){
			modal.classList.toggle("show-modal");
		}
		
		//creating a function to close modal content whenever the content body is clicked.
		function windowOnClick(event){
			if (event.target == modal){
				toggleModal();
			}
		}
		
		trigger.addEventListener("click", toggleModal);
		closeBtn.addEventListener("click", toggleModal);
		window.addEventListener("click", windowOnClick);
