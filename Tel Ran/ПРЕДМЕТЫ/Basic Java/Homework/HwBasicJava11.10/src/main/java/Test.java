import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.Calendar;
import java.util.Date;
import java.util.Scanner;

public class Test {

    public static void main(String args[]) {
        // Инициализация объекта date
        Date date = new Date();
        // Вывод текущей даты и времени с использованием toString()
        System.out.println("Текущее время:" + date.toString());

        int hour = date.getHours();
        int minute = date.getMinutes();
        int second = date.getSeconds();
        System.out.println("Часы: " + hour);
        System.out.println("Минуты:" + minute);
        System.out.println("Секунды:" + second);
        // задал время конца дня
        int stopHour = 23;
        int stopMin = 59;
        int stopSec = 59;

        System.out.println(stopHour - hour);
        System.out.println(stopMin - minute);
        System.out.println(stopSec -second);


//пытался вывести часы минуты секунды в общих суммах
        var seconds = Math.floor((stopSec - second) * 3600);
        System.out.println(seconds);
        var minutes = Math.floor((stopMin - minute) * second);
        System.out.println(minutes);
        var hours = Math.floor((stopHour - hour) * minute/60);
        System.out.println(hours);


       // hours = hours-(days*24);
        //minutes = minutes-(days*24*60)-(hours*60);
        //seconds = seconds-(days*24*60*60)-(hours*60*60)-(minutes*60);


// сканер
        System.out.println("Введите текущее время ЧАСЫ:");
        Scanner scanner = new Scanner(System.in);
        String name = scanner.nextLine();
       

        System.out.println("Введите текущее время МИНУТЫ:");
        Scanner scanner1 = new Scanner(System.in);
        String name1 = scanner1.nextLine();
    }
}