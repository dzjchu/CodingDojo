class PythagoreanTest {
  public static void main(String[] args) {
    Pythagorean iD = new Pythagorean();
    int legA = 4;
    int legB = 5;
    double resultHypotenuse = iD.calculateHypotenuse(legA, legB);
    System.out.println("The C is: " + resultHypotenuse);
  }
}