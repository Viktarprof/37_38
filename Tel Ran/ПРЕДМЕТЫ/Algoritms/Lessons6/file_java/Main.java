package com.telran;

public class Main {

    public static void main(String[] args) {
        DynamicArray array = new DynamicArray();

        array.add(2);
        array.add(3);
        array.add(4);
        array.remove(1);
        array.remove();
        array.printContent();
    }
}
