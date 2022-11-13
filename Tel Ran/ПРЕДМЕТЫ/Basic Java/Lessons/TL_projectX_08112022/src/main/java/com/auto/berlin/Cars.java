package com.auto.berlin;

import java.sql.SQLOutput;

public class Cars {

    private String model;
    private int year;
    private String one;
    private String two;

    public Cars() {
        System.out.println("Hello from Berlin");
    }

    public Cars(String arg) {
        model = arg;
        System.out.println(this.model);
    }

    public Cars(String two, String one) {
        this.one = one;
        this.two = two;
    }

    public Cars(int year, String model) {
        this(model);
        this.year = year;
        System.out.println(this.year);
    }

    public void registration(int year) {
        System.out.println("Registerd from " + year);
    }

    public void registration(int year, String model) {
        System.out.println("Registered " + model + " from " + year);
    }

    public void registration(String model, int year) {
        System.out.println("Registered " + model + " from " + year);
    }

}
