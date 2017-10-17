const TAX_RATE = 0.08;

const PHONE_PRICE = 99.99;

const ACCESSORIES_PRICE = 9.99;

var total = ((PHONE_PRICE+ACCESSORIES_PRICE)*(1+TAX_RATE)).toFixed(2);

function can_buy(){
	alert("Hi, the total price of the phone and accessories, including tax is $"+total);
	var bal = Number(prompt("How much money do you have in your wallet now?"));
	if(bal >= total){
		while(bal >= total){
			bal-=total;
		alert("Your total purchase is $"+total);
		var buy_again = prompt("Thank you for your purchase. You still have $"+bal.toFixed(2)+" in your wallet. Do you still want to buy(y/n)?");
		if(buy_again == "n"){
			alert("Thank you for your purchase. See you again!");
			break;
			}
		}
		alert("You exhausted all your available funds or have decided to stop buying. Thank you for your purchase!");
	}
	else{
			alert("Sorry, you don't have enough money. Thank you and come again!");
		}
}      

can_buy();                                                                                                                                                                              