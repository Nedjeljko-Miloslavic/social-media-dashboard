const input = document.querySelector("input");
var toggle = input.checked;
var first_background = document.querySelector("#first_background");
var body = document.body;
var box = document.querySelectorAll(".box, .box_2");
var number = document.querySelectorAll(".box_number, .box_2_number");
var h2 = document.querySelector("h2");
var followers_count = document.querySelector("#followers_count");
var h1 = document.querySelector("h1");
change_bg();

for(let i=0; i<box.length; i++){
	box[i].addEventListener("mouseover", ()=>{
		box[i].style.cursor = "pointer";
		if(toggle){
			box[i].style.backgroundColor = "hsl(227, 47%, 90%)";
		}else{
			box[i].style.backgroundColor = "hsl(228, 28%, 29%)";
		}
	});
}

for(let i=0; i<box.length; i++){
	box[i].addEventListener("mouseout", ()=>{
		if(toggle){
			box[i].style.backgroundColor = "var(--light_card)";
		}else{
			box[i].style.backgroundColor = "var(--dark_card)";
		}
	});
}

input.oninput = ()=>{
	change_bg();
};

function change_bg(){
	toggle = input.checked;
	if(toggle){
		first_background.style.backgroundColor = "var(--light_bg_first)";
		body.style.backgroundColor = "white";
		for(let i=0; i<box.length; i++){
			box[i].style.backgroundColor = "var(--light_card)";
		}
		
		for(let i=0; i<number.length; i++){
			number[i].style.color = "black";
		}
		
		h2.style.color = "var(--light_text_gray)";
		followers_count.style.color = "var(--light_text_gray)";
		h1.style.color = "black";
	}else{
		first_background.style.backgroundColor = "var(--dark_bg_first)";
		body.style.backgroundColor = "var(--dark_bg_second)";
		for(let i=0; i<box.length; i++){
			box[i].style.backgroundColor = "var(--dark_card)";
		}
		for(let i=0; i<number.length; i++){
			number[i].style.color = "white";
		}
		
		h2.style.color = "white";
		followers_count.style.color = "var(--dark_text)";
		h1.style.color = "white";
		
	}
}