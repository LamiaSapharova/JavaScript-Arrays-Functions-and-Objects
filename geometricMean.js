function  geometricMean (){
    geometric=1;
    for(let i=0 ; i<arguments.length; i++){
        geometric*=arguments[i];
    }
        return Math.pow(geometric, 1/arguments.length)
}
