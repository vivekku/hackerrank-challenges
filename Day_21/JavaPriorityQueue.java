import java.util.*;

class Student {
     private String name;
     private int id;
     private double cgpa;
     public Student(int id, String name, double cgpa){
         this.id = id;
         this.name = name;
         this.cgpa = cgpa;
     }
     public String getName(){
         return this.name;
     }
     public int getID(){
         return this.id;
     }
     public double getCGPA(){
         return this.cgpa;
     }
 }

class Priorities{
    PriorityQueue queue;
	public List<Student> getStudents(List<String> events) {
		queue = new PriorityQueue(Comparator.comparing(Student::getCGPA).reversed()
			 .thenComparing(Student::getName)
			 .thenComparing(Student::getID));
		for(String event : events) {
			if(event.contains("SERVED")) {
				queue.poll();
			}
			else if(event.contains("ENTER")) {
				String[] details = event.split("\\s+");
				Student student = new Student (Integer.valueOf(details[3].trim()),details[1].trim(),Double.valueOf(details[2].trim()));
				queue.add(student);
			}
		}
		List<Student> studentsList = new ArrayList<Student>();
		int max = queue.size();
		for (int i=0;i<max;i++) {
			studentsList.add((Student)queue.poll());
		}
		return studentsList;
	}
}

public class JavaPriorityQueue {
    private final static Scanner scan = new Scanner(System.in);
    private final static Priorities priorities = new Priorities();    
    public static void main(String[] args) {
        int totalEvents = Integer.parseInt(scan.nextLine());    
        List<String> events = new ArrayList<>();        
        while (totalEvents-- != 0) {
            String event = scan.nextLine();
            events.add(event);
        }        
        List<Student> students = priorities.getStudents(events);        
        if (students.isEmpty()) {
            System.out.println("EMPTY");
        } else {
            for (Student st: students) {
                System.out.println(st.getName());
            }
        }
    }
}