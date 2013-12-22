var fs = require('fs');
module.exports = function (directory, filter, callback)
{
	var fileExtension = filter;
	fs.readdir(directory, function(err, list)
	{
		if(err)
			return callback(err);

		var index = 0;
		var returnedList = new Array();
		for(var i = 0; i < list.length; i++)
		{
			var splittedList = list[i].split('.');
			
			if(splittedList[1] === fileExtension)
			{
				returnedList[index] = list[i];
				index++;
			}
		}

		callback(null, returnedList);
	});
}