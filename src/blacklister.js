export default class Blacklister {

	constructor(opts = {
		replacement = '*****'} = {}){

		this.defaults = ['ass', 'shit', 'bitch'];
		this.replacement = opts.replacement;
		this.blacklisted = (opts.blacklisted ? this.defaults.concat(opts.blacklisted) : this.defaults);
	}
	
	run(sample){
		let txt = sample.split(' '), tmp = [];

		txt
		.forEach(word => 
			this.analyse(word, tmp) 
		);

		if(!tmp.length) return tmp;
		return sample.replace(new RegExp(tmp.join('|'), 'gi'), this.replacement);

	}

	analyse(word, tmp){
		let cleanedWord = word
			.replace(/[^\w\s]/gi, '')
			.toLowerCase();

		if(this.blacklisted.indexOf(cleanedWord) > -1) tmp.push(cleanedWord);

	}
}