public class StringsDemo {
  public static void main(String[] args) {
    String ninja = "Coding Dojo is Awesome!";
    int length = ninja.length();
    System.out.println( "String Length is : " + length );

    // will output My name is Michael
    String string1 = "My name is ";
    String string2 = "Michael";
    String string3 = string1.concat(string2);
    System.out.println(string3);
    
    // will output Welcome, ninja!
    System.out.println("Welcome," + "ninja" + "!");

    // Will print out Hi Jack, you owe me $25.00 !
    // Where %s is expecting a string
    // And %.2f is expecting a float data type. The value 2 will just place two values to right of the decimal point.
    String ninja2 = String.format("Hi %s, you owe me $%.2f !", "Jack", 25.);
    System.out.println(ninja2);
    
    String ninja3 = "Welcome to Coding Dojo!";
    int a = ninja3.indexOf("Coding"); // a is 11
    int b = ninja3.indexOf("co"); // b is 3
    int c = ninja3.indexOf("pizza"); // c is -1, "pizza" is not found
   }
}
