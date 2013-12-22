var sum = 0;
var index = 2;
for(; index < process.argv.length; index++)
{
	sum += Number(process.argv[index]);
}
console.log(sum);


