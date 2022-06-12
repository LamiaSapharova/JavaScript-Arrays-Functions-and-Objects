function random (lower , upper){
	const a = Math.floor(Math.random()*(upper-lower+1))+lower;
	return a;
}