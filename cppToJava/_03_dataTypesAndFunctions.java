import java.util.Scanner;
/*
 Data types
8 Inbuilt data types
for numbers
        bytes
Byte       1
short      2
int        4
long       8

char       2
float      4
double     8
boolean    true/false

in java we dont wave pointers or way to pass by reference
 */

//swap two number (we cant use reference pointers like c++)

/* 
public class _03_dataTypesAndFunctions {
    public static void func(int a, int b){
        int temp = a;
        a = b;
        b = temp;
    }
    public static void main(String[] args){
        Scanner scn = new Scanner(System.in);
        System.out.println("Enter the value of a : ");
        int a = scn.nextInt();

        System.out.println("Enter the vlaue of b : ");
        int b = scn.nextInt();

        func(a, b);                            //reverse function call
        System.out.println("Swapped value of a and b : " + a + " and " + b);
    }
}
*/
/*
output (not swapped because no reference pointer available in java)
Enter the value of a : 
2
Enter the vlaue of b : 
3
Swapped value of a and b : 2 and 3
 */


public class _03_dataTypesAndFunctions {
    static int a = 10;
    static int b = 20;

    public static void swapNum(){
        int temp = a;
        a = b;
        b = temp;
    }
    public static void main(String[] args){
        swapNum();                            //reverse function call
        System.out.println("Swapped value of a and b : " + a + " and " + b);
    }
}
//Swapped value of a and b : 20 and 10