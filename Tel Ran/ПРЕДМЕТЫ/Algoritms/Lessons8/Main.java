package com.telran.stacks;

public class Main {
    public static void main(String[] args) {
        StackSecondImpl stack = new StackSecondImpl();
        stack.push(45);
        stack.push(46);
        stack.push(23);

        System.out.println((stack.pop()));
        System.out.println((stack.pop()));
        System.out.println((stack.pop()));

        System.out.println("Get min demo");
        StackGetMinImpl stackGetMin = new StackGetMinImpl();
        stackGetMin.pushGetMin(45);
        stackGetMin.pushGetMin(46);
        stackGetMin.pushGetMin(23);
//        stackGetMin.pushGetMin(60);
//        stackGetMin.pushGetMin(50);
//        stackGetMin.pushGetMin(40);
//
//        stackGetMin.popGetMin();
//        stackGetMin.popGetMin();
//        stackGetMin.popGetMin();

        System.out.println("Stack" + stackGetMin);
        System.out.println("Min " + stackGetMin.getMin());
        System.out.println("Stack" + stackGetMin);
        System.out.println("Popped " + stackGetMin.popGetMin());
        System.out.println("Stack" + stackGetMin);
        System.out.println("Min " + stackGetMin.getMin());
        System.out.println("Stack" + stackGetMin);
        System.out.println("Popped " + stackGetMin.popGetMin());
        System.out.println("Stack" + stackGetMin);
    }
}
