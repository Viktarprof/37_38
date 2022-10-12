package com.game.hero;
// смотреть class Elf3
public class Elf4 {
    private int id;

    public Elf4(int id) {
        this.id = id;
    }
//____________________________

    public Elf4(String nickname) {
        this.nickname = nickname;
    }

    private String nickname;


    public Elf4() {

    }
}
//private String name_game;
//
//    public String getName_game() {
//        return name_game;
//    }
//
//    private String game;
//
//
//    public Elf4(String name_game) {
//        name_game = name_game;
//        System.out.println(name_game);
//   }

//    Ваше решение верное до момента создания полей. Поле - это переменная экземпляра класса,
//    необходимо было создать private int id; private String nickname; переменные и
//    к ним уже создать getter, setter, constructor