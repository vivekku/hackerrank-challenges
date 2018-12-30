 public static void insertionSort(int[] A){
	for(int i = 1; i < A.length; i++){
		int value = A[i];
		int j = i;
		while(j > 0 && A[j-1] > value){
			A[j] = A[j-1];
			j = j - 1;
		}
		A[j] = value;
	}
	printArray(A);
}