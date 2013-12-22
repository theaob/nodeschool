var fs = require('fs');
var fileExtension = process.argv[3];
fs.readdir(process.argv[2], function(err, list)
{
	for(var i = 0; i < list.length; i++)
	{
		var splittedList = list[i].split('.');
		if(splittedList[1] === fileExtension)
		{
			console.log(list[i]);
		}
	}
});