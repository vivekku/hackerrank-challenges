function chiefHopper(arr) {
	var startEnergy=0, done= false;
    while(!done){
        var energy=startEnergy;
        for(var i=0;i<arr.length&&energy>=0;i++){
            if(arr[i]>energy)energy-=arr[i]-energy;
            else if(arr[i]<energy) energy+=energy-arr[i];
        }
        if(i==arr.length&&energy>=0){
            done=true;
        }else{
            startEnergy++;
        }
    }
    return startEnergy;
}