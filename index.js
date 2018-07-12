var count=0;
var add;
for(count=1;count<100;count++)
{
  add=count;
  if(count%3==0){
    add=add+'fizz';
  }
  if(count%5==0){
    add=add+'buzz';
  }



  console.log(`${add}`);

}
