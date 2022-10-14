import com.auto.berlin.Cars;

import java.sql.SQLOutput;
import java.util.Arrays;
import java.util.Scanner;

public class Lesson1 {

    public static void main(String[] args) {

        int x = 45;

        //                   true
        //    true       true     true
        if (x > 30 && (x < 50 || x != 41))
            System.out.println("say something");

        if (x > 30) {
            if (x < 50) {
                System.out.println("say somthing from 2 way | < 50");
            }
        }




    }

    static void getExampleWithVelocity() {
        System.out.print("Enter velocity: ");
        Scanner scanner = new Scanner(System.in);

        // velocity < 50 - city
        // velocity < 90 && velocity 50 - highway
        // velocity > 90 - autobahn

        double velocity = scanner.nextDouble();
        if (velocity > 0) {
            if (velocity >= 90) {
                System.out.println("Autobahn");
            } else if (velocity < 90) {
                System.out.println("not Autobahn");

                if (velocity > 50) {
                    System.out.println("highway");
                } else {
                    System.out.println("city");
                }
            } else {
                System.out.println("wrong scenario");
            }
        } else {
            System.out.println("Enter pls positive value");
        }

        scanner.close();
    }

    static void lastExample111022() {
        int one = 10;
        int two = 20;

        System.out.println("Ariphmentic");
        System.out.println("one + two = " + (one + two));
        System.out.println("one - two = " + (one - two));
        System.out.println("one * two = " + (one * two));
        System.out.println("one / two = " + (one / two));
        System.out.println("one % two = " + (one % two));

        System.out.println();

        System.out.println("U");
        System.out.println("U(-) operator = " + (-one));
        System.out.println("U(+) operator = " + (+one));
        System.out.println("U(~) operator = " + (~one));

        System.out.println("one in binary = " + Integer.toBinaryString(one));

        // 00000000 00000000 00000000 00001010 <- one variable in binary string
        // 11111111 11111111 11111111 11110101 <- inverse one variable in binary string

        int one_after_tilda = 0b11111111111111111111111111110101;
        System.out.println("one after tilda is " + one_after_tilda);

        System.out.println();
        System.out.println("Increment++(one) = " + (one++));
        System.out.println("Result after Increment++(one) " + one);

        System.out.println("++Increment(two) = " + (++two));
        System.out.println("Result after ++Increment(two) = " + two);

        System.out.println("Increment--(one) = " + (one--));
        System.out.println("Result after Increment--(one) = " + one);

        System.out.println("--Increment(two) = " + (--two));
        System.out.println("Result after --Increment(two) = " + two);

        System.out.println("Relational operators");
        System.out.println("Is equals (" + one + ", " + two + ") " + (one == two));
        System.out.println("Not equals (" + one + ", " + two + ") " + (one != two));
        System.out.println("one > two " + (one > two));
        System.out.println("one < two " + (one < two));
        System.out.println("one >= two " + (one >= two));
        System.out.println("one <= two " + (one <= two));

        System.out.println("Logic operators");
        System.out.println("Logic Operator AND (&&) " + (one < two && one < 100 && two < 100));
        System.out.println("Logic Operator OR (||) " + (one < two || one > 100 || two > 100));
        System.out.println("Logic Operator NOT(!) " + !(one < two));

        System.out.println("Mix of logic operators " + (one < two && two < 1000 && !(two < one)));

        boolean a = true;
        boolean b = false;
        boolean c = true;

        System.out.println((a && b) && (c || a));

        System.out.println("Bits operators");
        int three = 17;
        int four = 21;

        // & Равно 1, если соответствующие биты в операндах также равны 1. Во всех остальных
        // случаях значение результирующего бита равно 0

        // 10001 <- 17
        // 10101 <- 21
        // 17 & 21 =
        // 10001

        // 11100 0010 <- 450
        // 110000110 <- 390
        // 450 & 390 =
        // 110000010

        // 11111111 11111111 11111111 11111111 <- 1
        // 00000000 00000000 00000001 10000110 <- 390
        // result:
        // 00000000 00000000 00000001 10000110 <- 390

        System.out.println("Operator & " + (three & four));
        System.out.println("three in binary " + Integer.toBinaryString(three));
        System.out.println("four in binary " + Integer.toBinaryString(four));

        // | Равно 1, если соответствующий бит в любом из операндов равен 1
        // 10001 <- 17
        // 10101 <- 21
        // 17 | 21 =
        // 10101 <- 21

        System.out.println("Operator | " + (three | four));

        // ^ Равно 1, если соответствующий бит только в одном из операндов равен 1.
        // Во всех других случаях результирующий бит равен 0.

        // 10001 <- 17
        // 10101 <- 21
        // 17 ^ 21 =
        // 00100 <- 4

        System.out.println("Operator ^ " + (three ^ four));

        System.out.println("Bit shift");

        // Left bit shift (three = 17, shift=2)
        // 10001 <- 17
        // 00000000 00000000 0000000 00010001 <- 17
        // 00000000 00000000 0000000 01000100 <- 68

        // Right bit shift (three = 17, shift=2)
        // 10001 <- 17
        // 00000000 00000000 0000000 00010001 <- 17
        // 00000000 00000000 0000000 00000100 <- 4

        System.out.println("Left bit shift " + (three << 2));
        System.out.println("Right bit shift " + (three >> 2));
        System.out.println("Right sign bit shift " + (three >>> 2));
    }

    static void exampleForEURUSDConverter() {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter EUR value: ");
        double eur_value = scanner.nextDouble();
        System.out.println("Value in EUR " + eur_value + " is in USD " + convertToUsd(eur_value));
        scanner.close();
    }

    static double convertToUsd(double eur_value) {
        double coeff = 0.97;
        double result = coeff * eur_value;

        return result;
    }

    static void lastExample0610() {
        Cars cars = new Cars();
        cars.registration(1960, "bmw");
    }

    static void lastExample0610Sigmoid() {
        MathOperations m = new MathOperations();

        m.sigmoid(2f);
        System.out.println("Sigmoid is " + m.getResult());

        m.sigmoidSecond(2f);
        System.out.println("Sigmoid second way is " + m.getDerived());

        MathOperations2 mm = new MathOperations2();
        System.out.println("Sigmoid new approach : " + mm.sigmoid(2f));
        System.out.println("Sigmoid new approach second way " + mm.sigmoidViaReturns(2f));
    }

    static void lastExample0410() {
        Cars cars_berlin = new Cars();
        Cars cars_berlin2 = new Cars("audi");
        Cars cars_berlin3 = new Cars(1980, "bmw");
        Cars cars_berlin4 = new Cars("aaa", "bbb");

        System.out.println(cars_berlin3.toString());
        System.out.println(cars_berlin.toString());
        System.out.println(cars_berlin3.equals(cars_berlin));
    }

    static void lastExample2909() {
        String one = "Hello";

        int length = one.length();
        char element = one.charAt(2);
        String one_sub = one.substring(1,3);

        String lower = one.toLowerCase();
        String upper = one.toUpperCase();
        String one_replaced = one.replace('l', '*');
        String one_sub_replaced = one.toUpperCase().substring(1,4).replace('E', 'Q');
        boolean qq = one.contains("ll");
        char[] chars = one.toCharArray();
        chars[0] = 'h';


        System.out.println(chars);
        System.out.println(length);
        System.out.println(element);
        System.out.println(one_sub);
        System.out.println(lower);
        System.out.println(upper);
        System.out.println(one_replaced);
        System.out.println(one_sub_replaced);
        System.out.println(qq);
    }

    static void exampleString() {
        String one = new String("hello world");
        String two = one;

        System.out.println("String one " + one);
        System.out.println("String two " + two);

        two = new String("hello");

        System.out.println("String one " + one);
        System.out.println("String two " + two);
    }

    static void exampleReferenceTypes() {
        int x = 10;
        int y = x;
        System.out.println("x : " + x);
        System.out.println("y : " + y);
        y = 30;
        System.out.println("x : " + x);
        System.out.println("y : " + y);

        int[] c = {10, 20, 30, 40};
        int[] d = c;

        System.out.println("C array: " + Arrays.toString(c));
        System.out.println("D array: " + Arrays.toString(d));

        d[1] = 50;

        System.out.println("C array: " + Arrays.toString(c));
        System.out.println("D array: " + Arrays.toString(d));
    }

}
