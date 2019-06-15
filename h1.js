
const container = document.querySelector(".bar-container");


//Swapping function
function swap(i, min_idx, bars) {
    var temp1 = bars[min_idx].style.height;
    var temp2 = bars[min_idx].childNodes[0].innerText;

    bars[min_idx].style.height = bars[i].style.height;
    bars[i].style.height = temp1;
    bars[min_idx].childNodes[0].innerText = bars[i].childNodes[0].innerText;
    bars[i].childNodes[0].innerText = temp2;
    bars[min_idx].style.backgroundColor = "  rgb(24, 190, 255)";
    // Provide lightgreen color to the ith bar
    bars[i].style.backgroundColor = " rgb(49, 226, 13)";
}

async function SelectionSort(delay = 300) {
    let bars = document.querySelectorAll(".bar");
    // console.log(bars.length);
    var min_idx = 0;
    for (var i = 0; i < bars.length - 1; i += 1) {
        min_idx = i;
        bars[i].style.backgroundColor = "darkblue";

        for (var j = i + 1; j < bars.length; j += 1) {
            bars[j].style.backgroundColor = "red";
            //pause execution
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, delay)
            );

            var val1 = parseInt(bars[j].childNodes[0].innerHTML);
            var val2 = parseInt(bars[min_idx].childNodes[0].innerHTML);

            if (val1 < val2) {
                if (min_idx !== 1) {
                    bars[min_idx].style.backgroundColor = "rgb(24, 190, 255)";
                }
                min_idx = j;
            } else {
                bars[j].style.backgroundColor = "rgb(24, 190, 255)";
            }
        }

        //swap ith and min_idx bars
        swap(i, min_idx, bars);
    }

}

//Bubble Sort
async function BubbleSort(delay = 200) {
    var bars = document.querySelectorAll(".bar");
    let size = bars.length;

    for (let i = 0; i < size - 1; i++) {
        bars[i].style.backgroundColor = "darkblue";

        for (let j = i + 1; j < size; j++) {

            bars[j].style.backgroundColor = "red";

            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, delay)
            );
            var val1 = parseInt(bars[i].childNodes[0].innerHTML);
            var val2 = parseInt(bars[j].childNodes[0].innerHTML);

            if (val1 < val2) {
                //bars[i].style.backgroundColor = "rgb(24, 190, 255)";
                bars[j].style.backgroundColor = "  rgb(24, 190, 255)"; //skyblue
            } else {
                bars[j].style.backgroundColor = "rgb(24, 190, 255)";
                swap(i, j, bars);
                bars[j].style.backgroundColor = "  rgb(24, 190, 255)"; //skyblue
            }

        }
        bars[i].style.backgroundColor = "rgb(24, 190, 255)";
    }
}

//Insertion Sort
async function InsertionSort(delay = 300) {
    console.log("inside Insertion osrt");
    var bars = document.querySelectorAll(".bar");

    var i, j, key;
    let size = bars.length;
    console.log(size);
    for (i = 1; i < size; i += 1) {
        bars[i].style.backgroundColor = "darkblue";

        j = i - 1;

        key = parseInt(bars[i].childNodes[0].innerHTML);
        let key_height = bars[i].style.height;

        while (j >= 0 && key < parseInt(bars[j].childNodes[0].innerHTML)) {
            //shift towards left
            //arr[j + 1] = arr[j]; 
            bars[j + 1].style.backgroundColor = " rgb(49, 226, 13)"; // green
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, delay)
            );

            bars[j + 1].childNodes[0].innerHTML = bars[j].childNodes[0].innerHTML;
            bars[j + 1].style.height = bars[j].style.height;
            bars[j + 1].style.backgroundColor = "  rgb(24, 190, 255)"; //skyblue
            j -= 1;
        }
        // update the current bar with the swapped value
        bars[j + 1].childNodes[0].innerHTML = key;
        bars[j + 1].style.height = key_height;
        //bars[i].style.backgroundColor = " rgb(49, 226, 13)";
    }
}

function run() {
    let algo = document.getElementById("algo-selector").value;
    if (algo === "insertion") {
        InsertionSort();
    }
    else if (algo === "selection") {
        SelectionSort();
    } else if (algo === "bubble") {
        BubbleSort();
    }
}

generateBars();
function generate() {
    window.location.reload();
}


function generateBars(num = 20) {
    console.log("reaching");
    //var arr = getdata(num);
    for (let i = 0; i < num; i += 1) {
        //let val = i+1;
        let val = Math.floor(Math.random() * 100);
        val = val + 1;
        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = `${val * 4}px`;
        bar.style.transform = `translateX(${i * 10}px)`;
        const barLabel = document.createElement("label");
        barLabel.classList.add("bar_id");
        barLabel.innerHTML = val;
        bar.appendChild(barLabel);
        container.appendChild(bar);
    }
}