public class JavaList {	
	public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int n = scan.nextInt();
        List<Integer> list = new ArrayList<>();
        for (int i = 0; i < n; i++){
            list.add(scan.nextInt());
        }
        int countCommands = scan.nextInt();
        for (int i = 0; i < countCommands; i++){
            String command = scan.next();
            int index = scan.nextInt();
            if (command.equals("Insert")){
                int value = scan.nextInt();
                list.add(index, value);
            } else {
                list.remove(index);
            }
        }
        for (int i = 0; i < list.size(); i++) {
            System.out.print(list.get(i) + " ");
        }
    }
}

