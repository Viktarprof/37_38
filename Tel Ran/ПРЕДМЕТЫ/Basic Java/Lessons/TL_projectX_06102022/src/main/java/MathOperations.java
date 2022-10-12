public class MathOperations {

    private double result;
    private double powered;
    private double summed;
    private double derived;

    private void sum(int a, double b) {
        summed = a + b;
    }

    private void pow(float x) {
        powered = Math.exp(-x);
    }

    private void der(int a, double b) {
        derived = a / b;
    }

    public void sigmoidSecond(float x) {
        pow(x);
        sum(1, powered);
        der(1, summed);
    }

    public void sigmoid(float x) {
        result = 1 / (1 + Math.exp(-x));
    }

    public double getResult() {
        return result;
    }

    public double getDerived() {
        return derived;
    }
}
