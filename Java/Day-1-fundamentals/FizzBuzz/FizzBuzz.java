public class FizzBuzz {
  public String fizzBuzz(int number) {
    
    String fizz = "Fizz";
    String buzz = "Buzz";
    int isDiviseByThree = number%3;
    int isDiviseByFive = number%5;

    if (isDiviseByFive == 0 && isDiviseByThree == 0) {
      return fizz + buzz;
    } else if (isDiviseByThree == 0) {
      return fizz;
    } else if (isDiviseByFive == 0) {
      return buzz;
    } else {
      return Integer.toString(number);
    }

  }
}