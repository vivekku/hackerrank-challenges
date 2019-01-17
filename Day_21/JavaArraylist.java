public class JavaArraylist {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int n = scan.nextInt();
		ArrayList [] myList = new ArrayList[n];
		for(int i=0;i<n;i++) {
			int d = scan.nextInt();
			myList[i]=new ArrayList();
			for(int j=0;j<d;j++) {
				myList[i].add(scan.nextInt());
			}
		}
		int temp = scan.nextInt();
		while(temp-- > 0) {
			int x = scan.nextInt();
			int y = scan.nextInt();
			try{
				System.out.println(myList[x - 1].get(y - 1));
			}
			catch(Exception e) {
				System.out.println("ERROR!");
			}
		}
    }
}

