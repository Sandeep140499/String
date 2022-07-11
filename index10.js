var Palin_Check = (str) =>
{
    let check = str.split("").reverse().join("");
	if(check === str){
	   return "True";
	}
	else
	{
	   return "False";
	}
};
console.log(Palin_Check("naman"));