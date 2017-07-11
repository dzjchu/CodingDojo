import java.util.ArrayList;
import java.util.Arrays;

class BasicJava {
  public static void main(String[] args) {

    //print 1 - 255
    // int i = 1;
    // while (i < 256){
    //   System.out.println(i);
    //   i++;
    // }

    //print odd numbers between 1 - 255
    // int i = 1;
    // while (i < 256){
    //   if (i%2 == 0 ){
    //     i++;
    //   } else {
    //     System.out.println(i);
    //     i++;
    //   }
    // }

    //print Sum
    // int i = 0;
    // int j = 0;
    // while (i < 256){
    //   System.out.println("New number is: " + i);
    //   j = j + i;
    //   System.out.println("Sum: " + j);
    //   i++;
    // }

    //interating through an array
    // int[] myArr = {1,3,5,7,9,13};
    // for (int num: myArr){
    //   System.out.println(num);
    // }

    //find Max
    // int[] myArr = {-7,-5,-3,-1,0,1,3,5,7,9,13};
    // int max = Integer.MIN_VALUE;
    // for (int num : myArr){
    //   if (num > max){
    //     max = num;
    //   } 
    // }
    // System.out.println(max);

    //get average
    // int[] myArr = {2,10,3};
    // int sum = 0;
    // for (int i = 0; i < myArr.length; i++){
    //   sum += myArr[i];
    // }
    // int ave = sum/myArr.length;
    // System.out.println(sum);
    // System.out.println(ave);
    
    //Array with Odd Numbers
    // ArrayList<Integer> myArray = new ArrayList<>();
    // int i = 1;
    // while (i < 256){
    //   if (i%2 == 0 ){
    //     i++;
    //   } else {
    //     myArray.add(i);
    //     i++;
    //   }
    // }
    // System.out.println(myArray);

    //grater than Y
    // int[] myArr = {1,2,3,4,5,6,7,8,10};
    // int y = 3;
    // int count = 0;
    // for (int num : myArr){
    //   if (num >= 3){
    //     count ++;
    //   }
    // }
    // System.out.println(count);

    //sqaure the values
    // int[] myArr = {1,5,10,-2};
    // for (int i = 0; i < myArr.length; i++){
    //   myArr[i] = myArr[i] * myArr[i];
    // }
    // System.out.println(Arrays.toString(myArr));

    //eliminate negative numbers
    // int[] myArr = {1,5,10,-2};
    // for (int i = 0; i < myArr.length; i++){
    //   if (myArr[i] < 0){
    //     myArr[i] = 0;
    //   }
    // }
    // System.out.println(Arrays.toString(myArr));

    //max,min,ave
    // int[] myArr = {1,5,10,-2};
    // ArrayList<Integer> newArr = new ArrayList<>();
    // int min = Integer.MAX_VALUE;
    // int max = Integer.MIN_VALUE;
    // int ave = 0;

    // for (int num : myArr){
    //   if (num > max){
    //     max = num;
    //   } 
    // }
    // newArr.add(max);

    // for (int num : myArr){
    //   if (num < min){
    //     min = num;
    //   } 
    // }
    // newArr.add(min);

    // int sum = 0;
    // for (int i = 0; i < myArr.length; i++){
    //   sum += myArr[i];
    // }
    // ave = sum/myArr.length;
    // newArr.add(ave);
    // System.out.println(newArr);

    //shifting the values in the array
    // int[] myArr = {1,5,10,7,-2};
    // for (int i = 0; i < myArr.length; i++){
    //   if (i < myArr.length - 1){
    //     myArr[i] = myArr[i+1];
    //   } else {
    //     myArr[i] = 0;
    //   }
    // }
    // System.out.println(Arrays.toString(myArr));

  }

}
