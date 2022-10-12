import com.auto.berlin.Cars;

import java.util.Arrays;

public class Lesson1 {

    public static void main(String[] args) {
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
