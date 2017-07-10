import java.util.Scanner;

class FizzBuzzTest {
  public static void main(String[] args) {
    System.out.println("Enter an integer number:");
    Scanner input = new Scanner(System.in);
    int x = input.nextInt();
    FizzBuzz iD = new FizzBuzz();
    String resultFizzBuzz = iD.fizzBuzz(x);
    System.out.println(resultFizzBuzz);
  }
}