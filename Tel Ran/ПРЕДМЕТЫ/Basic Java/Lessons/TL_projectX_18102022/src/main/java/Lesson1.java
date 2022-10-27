import com.auto.berlin.Cars;

import java.util.Arrays;
import java.util.Scanner;

public class Lesson1 {


    public static void main(String[] args) {

        int count = 0;
        for (int i = 0, j = 0 ; i++, count++) {

            System.out.println(i + "" + j);


        }

        System.out.println( "Count =" + count);

//        int[] a = {92, 23, 11,7, 111};
//        String b ="Hello";
//        int maxAction =5;
//        for (int i = 0; i < maxAction; i++) {
//            int c = i +5;
//            if (c > 7)
//                System.out.println("c = " +c);
//            System.out.println("Mark was added");
//        }
// iteration 0: i = 0; c = i +5 =5; Mark was added
// iteration 1: i = 1; c = i +5 =6; Mark was added
// iteration 2: i = 2; c = i +5 =7; Mark was added
// iteration 3: i = 3; c = i +5 =8; "c = 8" Mark was added
// iteration 4: i = 4; c = i +5 =9; "c = 9" Mark was added



//        int[] a = {92, 23, 11,7, 111};
//        String b ="Hello";
//
//        int maxAction =3;
//        for (int i = 0; i < maxAction; i++) {
//            System.out.println("Mark was added");
//        }





//        boolean a = 3 <4;
//        System.out.println(a);




//     int[] a = {92, 23, 11,7, 111};
//        System.out.println("Length of string a:" + a.length);
//
//        String b ="Hello";
//        System.out.println("LEngth of string var:" + a.length);
//        for (int i = 0; i < b.length(); i++) {
//           System.out.println(b.charAt(i));



//        int[] a = {92, 23, 11,7, 111};
//        System.out.println("Длинна массива a:" + a.length);
//        for (int i = 0; i < a.length; i++) {
//            System.out.println(a[i]);



//        int[] a = {92, 23, 11,7,111};
//      for (int i = 0; i < 4; i++) {
//          System.out.println(a[i]);

    }




    static void exampe_KOLBA_TEMPERATURA() {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Температура первой колбы: ");
        double firstColba = scanner.nextDouble();
        System.out.print("Температура второй колбы: ");
        double secondColba = scanner.nextDouble();

        System.out.print("Прибор работает? ");
        System.out.println(checkColba(firstColba, secondColba));
    }
    static void example_SWICH() {
        // [1;12]
        int month = 4;

        String result = switch (month) {
            case 12,1,2 -> "winter";
            case 3,4,5 -> "spring";
            case 6,7,8 -> "summer";
            case 9,10,11 -> "autumn";
            default -> "error";
        };

        System.out.println(result);

        String result2;
        if (month >= 3 && month < 6) result2 = "spring";
        else if (month >= 6 && month < 9) result2 = "summer";
        else if (month >= 9 && month < 12) result2 = "autumn";
        else if (month == 12 && month <= 2 && month >= 1) result2 = "winter";
        else result2 = "error";

        System.out.println(result2);

        /*
        Представим, что у нас есть устройство, в котором две колбы. Прибор работает корректно,
        если температура первой колбы выше 100 градусов, а температура второй колбы меньше 100
        градусов. Вы должны написать метод, который проверяет это устройство. В результате алгоритм
        выводит сообщение true или false.
        Ваша программа должна иметь переменные Temperature1 и Temperature2, их можно получить
        из командной строки.
         */
    }
    static boolean checkColba(double one, double two) {
        return (one > 100 && two < 100) ? true : false;
    }

    static void getExampleOfNetedSwitch() {
        String activation = "MSE";
        String loss = "entropy";

        switch (activation) {
            case "mae":
            case "MAE":
                System.out.println("activation is MAE");
                break;

            case "mse":
            case "MSE":
                switch (loss) {
                    case "entropy":
                        System.out.println("activation is MSE and loss is Entropy");
                        break;

                    case "b_entropy":
                        System.out.println("activation is MSE and loss is B_Entropy");
                        break;

                    default:
                        System.out.println("activation is MSE and loss in undefined");
                }
                break;
            default:
                System.out.println("activation is undefined");
        }
    }

    static void ttt() {
        int day = 15;
        String dayStr;

        switch (day) {
            case 3:
            case 10:
            case 17:
            case 24:
            case 31:
                dayStr = "понедельник";
                break;

            case 4:
            case 11:
            case 18:
            case 25:
                dayStr = "вторник";
                break;

            case 5:
            case 12:
            case 19:
            case 26:
                dayStr = "среда";
                break;

            case 6:
            case 13:
            case 20:
            case 27:
                dayStr = "четверг";
                break;

            case 7:
            case 14:
            case 21:
            case 28:
                dayStr = "пятница";
                break;

            case 22:
                dayStr = "суббота";
                break;
            case 23:
                dayStr = "воскресенье";
                break;
            default:
                dayStr = "ошибка";
        }
    }

    static void getHomeWork_181022() {
        Scanner scanner = new Scanner(System.in);

        System.out.print("is weekend? ");
        boolean isWeekend = scanner.nextBoolean();
        System.out.print("rain? ");
        boolean isRain = scanner.nextBoolean();

        boolean result;

        if (isWeekend && isRain == false)
            result = true;
        else
            result = false;

        System.out.println(result);

        scanner.close();
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
