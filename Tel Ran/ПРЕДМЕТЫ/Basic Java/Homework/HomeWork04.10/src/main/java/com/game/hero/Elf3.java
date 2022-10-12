package com.game.hero;

public class Elf3 {
// конструктор без параметров.  я не понял только кому создать конструктор . сделал классу
    public Elf3() {
    }


//----------- гет и сет для di;
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
// конструктор для параметра id
    public Elf3(int id) {
        this.id = id;
    }

    private int id;
//---------- гет и сет для nickname;
    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }
    // конструктор для параметра nickname;
    public Elf3(String nickname) {
        this.nickname = nickname;
    }
    //для обоих параметров вместе
    public Elf3(int id, String nickname) {
        this.id = id;
        this.nickname = nickname;
    }

    private String nickname;

}
