/*
** Blacklister for replacing unwanted words with astricks
** Author: Daniel Skelton
** @justtdan
*/

var Blacklister = (function(){

	var blacklisted = ['ass', 'shit', 'bitch'],

	Blacklister = function(opts){

		opts = (opts || {});

		this.replacement = opts.replacement || '*****';
		this.blacklisted = (opts.blacklisted ? blacklisted.concat(opts.blacklisted) : blacklisted);
	};

	var blacklist = function(txt){

		var txtMap = txt.split(' '),
		self = this;
		tmp = [];

		txtMap.forEach(function(word){

			var newWord = word.replace(/[^\w\s]/gi, '');

			if(self.blacklisted.indexOf(newWord.toLowerCase()) > -1) tmp.push(newWord);

		});

		var rgx = new RegExp(tmp.join('|'), 'gi');

		return txt.replace(rgx, this.replacement);
	};

	Blacklister.prototype.blacklist = blacklist;

	return Blacklister;

})();