var module = require('./6_make_it_modular_module');
module(process.argv[2], process.argv[3], function(err, filteredList)
{
	if(err)
	{
		console.log(err);
	}
	else
	{
		filteredList.forEach(function(entry)
		{
			console.log(entry);
		})
	}
});