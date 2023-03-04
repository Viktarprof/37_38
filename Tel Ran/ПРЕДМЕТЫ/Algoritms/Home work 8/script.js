// Завершить реализацию метода 
// removeAt(int index) - метода удаеньляет элемент по заданному индексу.

// Задача со звёздочкой.
// Заменить методы growSize shrinkSize одним методом adjust, который проверяет, что с момента последнего копирования прошло не меньше операций, чем четверть длины массива. 
// Если  с момента последнего копирования прошло не меньше операций, ,  чем четверть длины массива, то выполняется создание нового массива таким образом, чтобы он был заполнен на 75%
// Если  с момента последнего копирования прошло больше операций,  чем четверть длины массива, то выполняется создание нового массива таким образом, чтобы он был заполнен на 50%


// Операции можно хранить в отдельном счётчике в поле класса.





class MyArrayList {
    //...
    public int removeAt(int index) {
        if (index < 0 || index >= size) {
            throw new IndexOutOfBoundsException();
        }
        int oldValue = data[index];
        for (int i = index; i < size - 1; i++) {
            data[i] = data[i + 1];
        }
        data[--size] = 0;
        modCount++;
        return oldValue;
    }
}




class MyArrayList {
    //...
    private void adjust() {
        int threshold = data.length >> 2;
        if (modCount - lastCopyCount < threshold) {
            return;
        }
        int newSize = data.length >> 1;
        if (modCount - lastCopyCount > threshold) {
            newSize = (int) (data.length * 0.75);
        }
        int[] newArray = new int[newSize];
        System.arraycopy(data, 0, newArray, 0, size);
        data = newArray;
        lastCopyCount = modCount;
    }
}



// Здесь threshold - это порог количества операций, после которого нужно скопировать массив, 
// а lastCopyCount - количество операций с момента последнего копирования массива. 
// Если прошло меньше операций, чем threshold, то копирование не выполняется. 
// Если прошло больше, то размер нового массива вычисляется так, чтобы он был заполнен 
// на 75% (если прошло больше операций) или на 50% (если прошло ровно threshold операций), и выполняется копирование.