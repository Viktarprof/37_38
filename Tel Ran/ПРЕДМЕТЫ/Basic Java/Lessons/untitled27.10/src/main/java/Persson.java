public class Persson {
    private long id;
    private String fullname;
    private int age;

    Persson(String fullname){
        this.fullname = fullname;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getFullname() {
        return fullname;
    }


    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }
}
