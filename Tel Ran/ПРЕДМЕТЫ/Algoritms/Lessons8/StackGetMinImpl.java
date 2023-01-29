package com.telran.stacks;

import java.util.Arrays;

public class StackGetMinImpl {

    private int[] arr = new int[10];
    StackSecondImpl helper = new StackSecondImpl();
    private int currIdx = 0; // index of element next to top
    private void push(int elem) {
        arr[currIdx] = elem;
        currIdx++;
        // arr.push()
    }
    private int pop() {
        //arr = [5,7,6,8,9, _], currIdx = 5
        currIdx--;// if currIdx = 0 then arr[-1]
        if (currIdx < 0) {
            // throw Error("Stack is empty")
            return -1;
        }

        int res = arr[currIdx];
        arr[currIdx] = -1;
        return res;
    }

    boolean isEmpty() {
        return currIdx == 0;
    }

    int peek() {
        return arr[currIdx - 1];
    }

    void pushGetMin(int x) {
        if (!helper.isEmpty() && x <= helper.peek()) {
            helper.push(x);
        } else if (helper.isEmpty()) {
            helper.push(x);
        }
        push(x);
    }

    public Integer popGetMin() {
        // we don't clear under the top
        if (peek() == helper.peek()) {
            helper.pop();
        }
        return pop();
    }
    public int getMin() {
        return helper.peek();
    }

    @Override
    public String toString() {
        return Arrays.toString(arr) + "\nHelper " + helper.toString();
    }
}
