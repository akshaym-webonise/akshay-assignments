function dec2bin(num)
{
	var binary="", temp;	
	while(num>0)
    	{
		alert(num);
		temp=num%2;
		binary=binary+temp;
		num=Math.floor(num/2);
	}
	binary=reverse(binary);
	return (parseInt(binary));
}

function reverse(s) 
{
  	return (s === '') ? '' : reverse(s.substr(1)) + s.charAt(0);
}
