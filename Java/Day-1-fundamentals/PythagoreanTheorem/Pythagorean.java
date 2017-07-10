import java.lang.Math;
class Pythagorean {
  public double calculateHypotenuse(int legA, int legB) {
    // the hypotenuse is the side across the right angle. 
    // calculate the value of c given legA and legB

    double legC = Math.sqrt((legA*legA) + (legB*legB));
    return legC;
  }
}