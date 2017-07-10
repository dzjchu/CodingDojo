public class StringManipulator {
  public String trimAndConcat(String str1, String str2){
    //trim and concast two strings into one
    //return new string
    String newString = str1.concat(str2);
    return newString;
  }
  public String getIndexOrNullCh(String str, char ch){
    //find a character in a string
    int newIndex = str.indexOf(ch);
    if (newIndex > -1 ){
      return Integer.toString(newIndex);
    } else{
      return null;
    }
  }
  public String getIndexOrNull(String str1, String str2){
    //find second string in the first string
    int newIndex = str1.indexOf(str2);
    if (newIndex > -1){
      return Integer.toString(newIndex);
    } else{
      return null;
    }
  }
  public String concatSubstring(String str1, int num1, int num2, String str2){
    String newString = str1.substring(num1, num2);
    return newString.concat(str2);

  }
} 