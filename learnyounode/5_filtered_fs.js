var fs = require('fs');
fs.readdir(process.argv[2], function(err, list)
{
	var fileExtension = process.argv[3];
	for(var i; i < list.length; i++)
	{
		console.log(list[i].split('.'));
		if(list[i].split('.')[1] == fileExtension)
		{
			console.log(list[i]);
		}
	}
});