let intputIn = document.querySelector('.input-in');

let button = document.querySelector("button");

button.onclick = function () {
    /*считывание в массив*/
    let countStr = 0;//счётчик
    let countN = 0;
    let str = intputIn.value;//значение строки
    let len = str.length;
    let arr = [];//массив для записи входной последовательности
    let a = "";

    while (countStr < len) {
        while ((str[countStr] == " ") && (countStr < len)) {
            countStr++;
            console.log(1);
        }

        while ((str[countStr] != " ") && (countStr < len)) {
            a += str[countStr];
            countStr++;
        }
        if (a != "") {
            arr[countN] = +a;
            a = "";
            countN++;
        }
    }
    bubbleSort(arr);
    document.getElementById("demo1").innerHTML = arr;
}

function bubbleSort(item) {
    let count = 0;
    let sw = 1;
    let len = item.length;
    while ((count < len - 1) && (sw != 0)) {
        sw = 0;
        for (i = 0; i < len - 1 - count; i++) {
            if (item[i] > item[i + 1]) {
                [item[i], item[i + 1]] = [item[i + 1], item[i]]//swap(item[i], item[i + 1]);
                sw++;
            }
        }
        count++;
    }
}



