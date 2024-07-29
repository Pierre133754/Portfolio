import * as React from "react";
import { ReactP5Wrapper } from "@p5-wrapper/react";

let framerate = 60;
let resolution = 10;
let width, height;
let cols, rows, grid;
let timer1 = 0, delay1 = 1000/10;
let timer2 = 0, delay2 = 1000/60;
let velocity = 0, gravity = 1;
let filler = 0, linger = 0, buffer = 0;
let img, num;

function make2DArray(cols, rows) {
    let arr = new Array(cols);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows);
    }
    
    return arr;
}

function countNeighbors(grid, x, y) {
    let sum = 0;
    for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
            let col = (x + i + cols) % cols;
            let row = (y + j + rows) % rows;
            sum += grid[col][row];
        }
    }
    sum -= grid[x][y];
    return sum;
}

function sketch(p5) {
    p5.setup = () => {
        p5.frameRate(framerate);
        width = window.innerWidth;
        height = window.innerHeight;
        p5.createCanvas(width, height);
        cols = Math.floor(width / resolution);
        rows = Math.floor(height / resolution);
        grid = make2DArray(cols, rows);
        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                grid[i][j] = 0;
            }
        }
        p5.fill(255);
        p5.stroke(255);
        p5.strokeWeight(0);
    }

    p5.windowResized = () => {
        p5.setup();
    }

    p5.draw = () => {

        if (p5.millis() > timer2) {

            if (localStorage.getItem("p") == 0) {
                velocity = 0;
            }

            if (localStorage.getItem("p") == 1) {
                buffer = 1;
                img = document.querySelector("#me");
                num = Number(img.style.top.replace("px",""));
                if (num < (window.innerHeight-305) || linger < 6) {
                    velocity = velocity + gravity;
                }
                num = num + velocity;
                if (num > (window.innerHeight-305)) {
                    num = (window.innerHeight-300);
                }
                img.style.top = num + "px";
                if (velocity < 20 && velocity > -20) {
                    if (linger < 20) {
                    linger = linger + 1;
                    }
                } else {
                    linger = 0;
                }
                if (filler > 0) {
                    filler = filler - 1;
                }
                if (num > (window.innerHeight-305) && filler == 0) {
                    if (linger < 6) {
                      velocity = -velocity;
                      velocity += 5;
                      filler = 2;
                    } else {
                      velocity = 0;
                    }
                }
            }

            timer2 += delay2;

        }

        if (p5.millis() > timer1) {

            if (p5.millis() > (timer1 + (3*delay1))) {
                timer1 = timer1 + (p5.millis() - timer1 - (2*delay1));
            }

            if (localStorage.getItem("f") == 1) {
                delay1 = 1000/(document.getElementById("framerate").value);
                localStorage.setItem("f", 0);
            }

            p5.background(0);

            if (p5.frameCount > Math.floor(framerate/2)) {
                for (let i = -1; i < 2; i++) {
                    for (let j = -1; j < 2; j++) {
                        let col = (Math.floor(p5.mouseX / resolution) + i + cols) % cols;
                        let row = (Math.floor(p5.mouseY / resolution) + j + rows) % rows;
                        grid[col][row] = Math.floor(p5.random(2));
                    }
                }
            }
            
            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    let x = i * resolution;
                    let y = j * resolution;
                    if (grid[i][j] == 1) {
                        p5.rect(x, y, resolution, resolution);
                    }
                }
            }

            let next = make2DArray(cols, rows);

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    let state = grid[i][j];
                    let neighbors = countNeighbors(grid, i, j);

                    if (state == 0 && neighbors == 3) {
                        next[i][j] = 1;
                    } else if (state == 1 && (neighbors < 2 || neighbors > 3)) {
                        next[i][j] = 0;
                    } else {
                        next[i][j] = state;
                    }
                }
            }

            grid = next;
            timer1 += delay1;
        }
    }
}

export function P5sketch() {
    return <ReactP5Wrapper sketch={sketch} />;
}