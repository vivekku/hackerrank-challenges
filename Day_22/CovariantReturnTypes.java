class Flower {
     String whatsYourName(){
         return " I have many names and types";
     } 
}

class Jasmine extends Flower{
    String whatsYourName(){
         return "Jasmine";
     } 
}

class Lily extends Flower{
    String whatsYourName(){
         return "Lily";
     } 
}

class Region {

    Flower yourNationalFlower(){
        return new Flower();
    }
}

class WestBengal extends Region {
    Flower yourNationalFlower() {
        return new Jasmine();
    }
}

class AndhraPradesh extends Region {
    Flower yourNationalFlower() {
        return new Lily();
    }
}

public class CovariantReturnTypes {
  public static void main(String[] args) throws IOException {
      BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
      String s = reader.readLine().trim();
      Region region = null;
      switch (s) {
        case "WestBengal":
          region = new WestBengal();
          break;
        case "AndhraPradesh":
          region = new AndhraPradesh();
          break;
      }
      Flower flower = region.yourNationalFlower();
      System.out.println(flower.whatsYourName());
    }
}
