public class Lesson1 {

//    прописали mane и sout
//    public static void main(String[] args) {
//        System.out.println("Hello world");
//        System.out.println("Hello class room");
//        System.out.println(123);
//        System.out.println("c");
//        System.out.println(3.14);

//    _____________________________
//    сделали приветствие из классов берлин и финляндия
//    public static void main(String[] args) {
//        new com.auto.berlin.Cars();
//        new com.auto.finland.Cars();
//___________________________
//    public static void main(String[] args) {
//        !!!!схема type name = value;!!!!!
//        !!!!!схема выведения значений!!!!!
//        boolean one = false;
//        System.out.println(one);
//
//        byte two = 1;
//        System.out.println(two);
//
//        short three = 1000;
//        System.out.println(three);
//
//        int four = 1000000;
//        System.out.println(four);
//
//        long five = 1000000000;
//        System.out.println(five);

        // !!!!! у float нужно добавить букву F, всегда!!!!!
//        float six = 3.14f;
//        System.out.println(six);
//
//        double seven = 2.71;
//        System.out.println(seven);
//
//        char eight = 'w';
//        System.out.println(eight);

//    }
//______________________________
//    делаем формулы к примерам сложения. вычитания. умножения и деления
//    public static void main() {
//        int на получение целого числа
     //   int a =9;
     //   int b = 2;
//        int result = a + b; точно также с умножением
//        int result = a - b;
//        тут деление на получение целого числа
      //  int result = a / b;
       // System.out.println(result);
//        тут деление на получение остатка %
// doble деление с плавующей точкой т.е получаем и целое число и остаток
//        double a =9;
//        double b =2;
//        double result = a /b;
//        System.out.println(result);
//
//        int c =9;
//        int d = 2;
//        int result2 = c % d;
//        System.out.println(result2);
//    }
//    _______________________________
//         получаем десятки;

//    public static void main(String[] args) {
//        int w =43; // в нем есть четыре десятка 4*10+3
//        System.out.println(w/10);
//        System.out.println(w - (w/10)*10); // тут мы получили формулу для вывода количества десятков и едениц в цифре 43
//    }
//______________________________
//        public static void main(String[] args) {
//         String name = "Bob Bob Bob";
//            System.out.println(name);

//            String value = "123";
//            int result = Integer.parseInt(value);
//            System.out.println(value);
//            System.out.println(result +1);

//____________________________
//            вместо бвйт может быть и инт и шорт и все что угодно
//            byte[] array_byte = new byte[3];
//            array_byte[0]= 0;
//            array_byte[1]= 10;
//            array_byte[2]=20;
//            System.out.println(array_byte[0]);
//            System.out.println(array_byte[1]);
//            System.out.println(array_byte[2]);
//}
//    _______
//        public static void main(String[] args) {
//                int[]array_int = {100,200,300,400};
//            System.out.println(array_int[0]);
//            System.out.println(array_int[1]);
//            System.out.println(array_int[2]);
//            System.out.println(array_int[3]);
//
//
//            String[] array_string = new String[2];
//            array_string[0]="Alice";
//            array_string[1]="Kira";
//            System.out.println(array_string[0]);
//            System.out.println(array_string[1]);
//
//
//
//
//            int[][]array_2d = new int [2][2];
//            array_2d [0][0]=1000;
//            array_2d [0][1]=2000;
//            array_2d [1][0]=3000;
//            array_2d [1][1]=4000;
//
//            System.out.println(array_2d[0][0]);
//            System.out.println(array_2d[0][1]);
//            System.out.println(array_2d[1][0]);
//            System.out.println(array_2d[1][1]);
//        }

//    ______________________
//    восьмиричная система;
//        public static void main(String[] args) {
//
//            int test = 219;
//            System.out.println(219 / 8); //27
//            System.out.println(219 % 8); //3
//            System.out.println();
//            System.out.println(27 / 8); //3
//            System.out.println(27 % 8); //3
//            System.out.println();
//            System.out.println(3 / 8); //0
//            System.out.println(3 % 8); //3

    //______________ двоичная система
//    public static void main(String[] args) {
//        int test = 0b101101; //двоичная система прописывается с 0b
//        System.out.println(test);
//// math.pow (первая цифра это число с коротым работаем. второе число это степень возведения)
//        double result = 1*Math.pow(2,5) + 0*Math.pow(2,4) + 1*Math.pow(2,3) + 1*Math.pow(2,2) + 0*Math.pow(2,1) + 1*Math.pow(2,0);
//        System.out.println((int)result); // есть написать без int то результат будет 45.0

//}
//public static void main(String[] args) {
//    int test = 763;
//    int test1 = 0763; //двоичная система
//    //int test2 = 0b763; //8-и ричная система
//    int test3 = 0x763; // 16-и ричная система
//    System.out.println(test);
//    System.out.println(test1);
//    //System.out.println(test2);
//    System.out.println(test3);
//}


//_______________________
    //public static void main(String[] args) {
       // int test = 17;
       // System.out.println(Integer.toBinaryString(test));// 10001 формат бинарного вида
        //System.out.println(Integer.toOctalString(test));// 21  формат 8-й системы
        //System.out.println(Integer.toHexString(test)); // 11 формат 16-и ричной системы
    //}


    //_________ перевод в 16-и ричную систему
public static void main(String[] args) {
    int test = 1128;
    System.out.println(Integer.toHexString(test)); // 468 формат 16-и ричной системы


    System.out.println(1128 / 16);//70
    System.out.println(1128 % 16);      //8

    System.out.println();

    System.out.println(70 /16); //4
    System.out.println(70 % 16);        //6

    System.out.println();

    System.out.println(4 /16);  //0
    System.out.println(4 % 16);         //4


    System.out.println("Resultat (10 ->16): " + 468);

}
}

