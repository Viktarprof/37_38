package advanced;

public class ITSpecialist extends Person {

    private String company, department, position;

    public ITSpecialist(
            String name,
            String surname,
            int age,
            String company,
            String department,
            String position
    ) {
        super(name, surname, age);

        this.company = company;
        this.department = department;
        this.position = position;
    }

    public String getCompany() {
        return company;
    }

    public String getDepartment() {
        return department;
    }

    public String getPosition() {
        return position;
    }

    @Override
    public String toString() {
        String result = super.toString() + ", company: " + company + ", dept.: "
                + department + ", position: " + position;
        return result;
    }
}
