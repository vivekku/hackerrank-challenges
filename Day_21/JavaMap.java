public class JavaMap {	
	public static void main(String []argh) {
        Scanner scanner = new Scanner(System.in);
        int count = scanner.nextInt();
        scanner.nextLine();
        Map<String, Integer> phoneBook = new HashMap<>(count);
        for(int i = 0; i < count; i++) {
            String name=scanner.nextLine();
            int phoneNumber = scanner.nextInt();
            scanner.nextLine();
            phoneBook.put(name, phoneNumber);
        }
        while(scanner.hasNext()) {
            String query = scanner.nextLine();
            if (phoneBook.containsKey(query)){
                System.out.println(query + "=" + phoneBook.get(query));
            }
            else{
                System.out.println("Not found");
            }
        }
    }
}

