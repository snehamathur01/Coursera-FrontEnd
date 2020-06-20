
var colors=generate(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#ColorDisplay");
var h1 = document.querySelector("h1");
var reset=document.querySelector("#reset");
var messageDisplay=document.querySelector("#Message");
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");
var NumSq=6;
colorDisplay.textContent = pickedColor;


reset.addEventListener("click",function(){
 
 colors=generate(NumSq);
 pickedColor=pickColor();
 //changing the heading
 colorDisplay.textContent = pickedColor;
 //adding color to squares
 for (var i = 0; i <squares.length; i++) {
	squares[i].style.backgroundColor=colors[i];
}
h1.style.backgroundColor="steelblue";
messageDisplay.textContent="";
reset.textContent="NEW COLORS";
});


easybtn.addEventListener("click", function(){
	reset.textContent="NEW COLORS";
	hardbtn.classList.remove("selected");
	easybtn.classList.add("selected");
	h1.style.backgroundColor="steelblue";
	NumSq=3;
    colors=generate(NumSq);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for (var i = 0; i < squares.length; i++) {
    	if(colors[i]){
    		squares[i].style.backgroundColor=colors[i];
    	}
    	else{
    		squares[i].style.display="none"
    	}
    }

});
hardbtn.addEventListener("click", function(){
	reset.textContent="NEW COLORS";
	easybtn.classList.remove("selected");
	hardbtn.classList.add("selected");
    h1.style.backgroundColor="steelblue";
	NumSq=6;
	colors=generate(NumSq);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for (var i = 0; i < squares.length; i++) {
    	squares[i].style.backgroundColor=colors[i];
    	squares[i].style.display="block"
    	}
    	
    
	

});
for (var i = 0; i <squares.length; i++) {
	squares[i].style.backgroundColor=colors[i];
  
  squares[i].addEventListener("click",function(){
  	var clickedColor=this.style.backgroundColor ;
    if (clickedColor === pickedColor)
    {//alert("thats's right");
     messageDisplay.textContent="correct!!";
     reset.textContent="play again";
     changecolor(clickedColor);
     h1.style.backgroundColor=clickedColor;


    }
 	
   else
   {
	this.style.backgroundColor= "#232323";
	messageDisplay.textContent="try again";
	
   }

});
}
function pickColor(){
	var ran=Math.floor(Math.random() * colors.length);
	return colors[ran];
}

function changecolor(color){

for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor=color;
}
}

function generate(num){
	var arr=[];
	for (var i = 0; i < num; i++) {
      arr.push(rgbrandom());
	}
	return arr;
}
function rgbrandom(){
	var r=Math.floor(Math.random() * 256);
	var g=Math.floor(Math.random() * 256);
	var b=Math.floor(Math.random() * 256);
    return "rgb("+ r + ", "+ g + ", " + b + ")";
}