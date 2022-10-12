

public class LesOperator {

    public static void main(String[] args) {
        int one = 10;
        int two = 20;

        System.out.println("Arifmetic");
        System.out.println("one + two = " (one + two));
        System.out.println("one - two = " (one - two));
        System.out.println("one / two = " (one / two));
        System.out.println("one * two = " (one * two));
        System.out.println("one % two = " (one % two));


        System.out.println("Unary");
        System.out.println("U(-) operator =" + (-one));
        System.out.println("U(+) operator =" + (+one));
        System.out.println("U(~) operator =" + (~one));

        System.out.println("one in bynary =" + Integer.toBinaryString(one));




        int one_after_tilda = 0b111111111111111111111111111101101;
        System.out.println("one after tilda is " + one_after_tilda);

        System.out.println("Increment++(one) = " + one++);
        System.out.println("Result after Increment++(one) " + one);

        System.out.println("++Increment (two) =" + (++two));
        System.out.println("Result after ++Increment(two) = " + two);


        System.out.println("Increment--(one) = " + (one--));
        System.out.println("Result after Increment--(one) = " + one);


        System.out.println("--Increment(two) = " + (-- two));
        System.out.println("Result after --Increment(two) = " + two);


        System.out.println("Relations");
        System.out.println("Is equals (" + one +"," + two +")" + (one==two));
        System.out.println("Is equals (" + one +"," + two +")" + (one!=two));
        System.out.println("Is equals ("one > two" + (one > two));
        System.out.println("Is equals ("one < two" + (one < two));

                
    }
}