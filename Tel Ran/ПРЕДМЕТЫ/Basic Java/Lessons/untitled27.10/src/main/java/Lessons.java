import java.util.Arrays;
import java.util.Random;
import java.util.Scanner;

public class Lessons {
    public static void main(String[] args) {

                int words = 0;  								//моих слов на начальном этапе задачи ноль
                Scanner scanner = new Scanner(System.in);  		//выводим сканер
                System.out.println("Напиши свой текст"); 		//просим ввести слова в сканере
                String input = scanner.nextLine(); 				//считываем след стокой введенный текст
                if (input.length() != 0) {					// условие . 	тут мне было трудно как и дома
                    words++;
                    for (int i = 0; i < input.length(); i++) {
                        if (input.charAt(i) == ' ') {
                            words++;
                        }

                    } System.out.println("Вы ввели " + words + "слов");
                }
            }
        }
//static void les_27_10 (){
    //        int[] intArray0;
//        intArray0 = new int[3];
//
//        int[] intArray1 = new int[3];
//
//        int[] intArray2 = {1,2,3};
//
//        int [] intArray3 = new int[]{1,2,3,4};
//
//        for (int i = 0; i < intArray3.length -1; i++) {
//            System.out.println(intArray3[i] + " ");



    //Persson[] people = new Persson[4];
    // Persson[] people = {

    //1 people[0] = new Persson("Bob Marley");
    // 2
    //   Persson Bob = new Persson("Bob Marley");

    //1 people[1] = new Persson("Lady GAGA");
    // 2
    //  Persson Lady = new Persson("Lady GAGA");

    //1 people[2] = new Persson("Justin Biber");
    // 2
    //   Persson Justin = new Persson("Justin Biber");

    //1 people[3] = new Persson("Justin Timberlake");
    // 2
    //   Persson Timberlake = new Persson("Justin Timberlake");

    //1 people[4] = new Persson("Joe Biden");
    // 2
    //   Persson Joe = new Persson("Joe Biden");

    //for (int i = 0; i < people.length; i++) {
    // if (i == 0)
    // System.out.println(people[i].getFullname());
    // else
    // System.out.println(people[i]); // people[i] ссылается на ечейку в памяти
    // }
    // System.out.println(people[4].getFullname());
//}
//}
