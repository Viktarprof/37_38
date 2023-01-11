package com.telran;

import java.util.Arrays;

public class DynamicArray {
    private Integer[] arr;
    private int count; // pointer to lhe last available index
    private int size; // size of current array

    public DynamicArray() {
        arr = new Integer[1];
        count = 0;
        size = arr.length;
    }

    // add an element to the end of array
    public void add(int element) {
        if (count == size) {
            increaseSizeOfArray();
        }
        arr[count] = element;
        count++;
    }

    public void add(int element, int index) {
        if (count == size) {
            increaseSizeOfArray();
        }
        for (int i = count - 1; i >= index; i--) {
            // shift element to the right
            arr[i + 1] = arr[i];
        }
        arr[index] = element;
        count++;
    }

    public void addToTheBeginning(int element) {
        add(element, 0);
    }

    // removes last element from array
    public void remove() {
        if (count > 0) {
            arr[count - 1] = null;
            count--;
        }
    }

    public void remove(int index) {
        if (count > 0) {
            // shift all elements right from index to the left by 1
            for (int i = index; i < count - 1; i++) {
                arr[i] = arr[i + 1];
            }
            // remove last element
            arr[count - 1] = null;
            // decrease count
            count--;
        }
    }


    // [_], count = 0, size =1
    // [2], count = 1, size = 1
    // [2,3], count = 2, size = 2
    // [2,3,4,5], count = 4, size = 4
    private void increaseSizeOfArray() {
        // create new array
        Integer[] newArr = new Integer[size * 2];
        // copy all existing elements to new array
        for (int i = 0; i < size; i++) {
            newArr[i] = arr[i];
        }
        // use new array as storage
        arr = newArr;
        size = newArr.length;
    }

    private void shrinkSize() {
        if (count > 0) {
            Integer[] newArr = new Integer[count];
            for (int i = 0; i < count; i++) {
                newArr[i] = arr[i];
            }
            arr = newArr;
            size = count;
        }
    }

    public void printContent() {
        System.out.println(Arrays.toString(arr));
    }
}


