package advanced;

public class Main {
    public static void main(String[] args) {
        Person person1 = new Person("Bob", "Morley", 35);
        ITSpecialist itSpecialist1 = new ITSpecialist(
                "Justin",
                "Timberlake",
                35,
                "Meta",
                "compliance service",
                "backend engineer"
                );

        System.out.println(person1.toString());
        System.out.println(itSpecialist1.toString());


    }
}
