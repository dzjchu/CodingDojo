class StringManipulatorTest {
  public static void main(String[] args) {
    StringManipulator stringManipulator = new StringManipulator();

    String newTrimAndConcat = stringManipulator.trimAndConcat("love is love is love is love", " is love.");
    System.out.println(newTrimAndConcat);

    String trueGetIndexOrNullCh = stringManipulator.getIndexOrNullCh("Take me home", 'a');
    String falseGetIndexOrNullCh = stringManipulator.getIndexOrNullCh("Take me home", 'z');
    System.out.println(trueGetIndexOrNullCh);
    System.out.println(falseGetIndexOrNullCh);

    String trueGetIndexOrNull = stringManipulator.getIndexOrNull("Take me home", "a");
    String falseGetIndexOrNull = stringManipulator.getIndexOrNull("Take me home", "z");
    System.out.println(trueGetIndexOrNull);
    System.out.println(falseGetIndexOrNull);
    
    String newConcatSubstring = stringManipulator.concatSubstring("Love", 0, 2, "ve.");

    System.out.println(newConcatSubstring);
  }
}