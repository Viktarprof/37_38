public class MathOperations2 {

    private double der(int a, double b) {
        double derived = a / b;
        return derived;
    }

    private double sum(int a, double b) {
        double summed = a + b;
        return summed;
    }

    private double pow(float x) {
        double powered = Math.exp(-x);
        return powered;
    }

    public double sigmoidViaReturns(float x) {
//        double powered = pow(x);
//        double summed = sum(1, powered);
//        double derived = der(1, summed);
//        return derived;
        return der(1, sum(1, pow(x)));
    }

    public double sigmoid(float x) {
        double result = 1 / (1 + Math.exp(-x));
        return result;
    }

}
