const delay = ms => new Promise(res => setTimeout(res, ms));

const bubbleSort = async(arr) => {
    n = arr.length;
    draw(arr);
    speed = document.getElementById("speed").value;
    await delay(speed);
    for (i = 0; i < n; i++) {
        for (j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                draw(arr);
                await delay(speed);
            }
        }
    }
    //alert(arr);
    showResult(arr);
    return arr;
}

const selectionSort = async(arr) => {
    n = arr.length;
    draw(arr);
    speed = document.getElementById("speed").value;
    await delay(speed);
    for (i = n - 1; i >= 0; i--) {
        max = i;
        for (j = 0; j < i; j++) {
            if (arr[j] > arr[max]) {
                max = j;
            }
        }
        if (max != i) {
            swap(arr, max, i);
            draw(arr);
            await delay(speed);
        }
    }
    //alert(arr);
    showResult(arr);
    return arr;
}

function constructArr(inputString) {
    var temp = inputString.split(",");
    var result = [];
    temp.forEach(element => {
        result.push(parseInt(element))
    });
    return result;
}

function showResult(arr) {
    var result = document.getElementById("result");
    result.innerHTML = "Final Answer: " + arr;
}

function draw(arr) {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 500, 500);
    startPosition = 0;
    width = 50;
    arr.forEach(element => {
        ctx.beginPath();
        ctx.lineWidth = "6";
        ctx.strokeStyle = "red";
        ctx.rect(0, startPosition, element * 30, width);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.fillText(element, element * 30 + 20, startPosition + width / 2);
        startPosition += 75;
    });

}



function swap(arr, i, j) {
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}