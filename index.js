import Blacklister from './src/blacklister';

const sample = 'Hello Daniel Skelton';

const blacklister = new Blacklister({
	replacement: '*****',
	blacklisted : ['daniel', 'skelton']
});


document.getElementById('sample').innerHTML = blacklister.run(sample);

