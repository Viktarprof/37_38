package com.auto.berlin;

public class Cars {

    private String model;
    private int year;

    public Cars() {
        System.out.println("Hello from Berlin");
    }

    public Cars(String model) {
        this.model = model;
        System.out.println(this.model);
    }

    public Cars(int year, String model) {
        this(model);
        this.year = year;
        System.out.println(this.year);
    }

}
