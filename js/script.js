let xmlns = "http://www.w3.org/2000/svg";
let svg = document.createElementNS(xmlns, "svg");
svg.setAttribute("width", 1000);
svg.setAttribute("height", 1000);
svg.setAttribute("viewbox", '0 0 1000 1000');

const arrayX = [50, 100, 150, 200, 250, 300, 350, 400, 450, 500];
const arrayY = [100, 200, 300, 400, 500, 600];

let count = 0;
let fill = 255 / (arrayX.length * arrayY.length);
for (j = 0; j < arrayY.length; j++) {
  for (i = 0; i < arrayX.length; i++) {
    if (i == 0) {

    let rect = document.createElementNS(xmlns, "rect");
    rect.setAttribute("x", arrayX[i] - 10);
    rect.setAttribute("y", arrayY[j] - 10);
    rect.setAttribute("width", 20);
    rect.setAttribute("height", 20);
    rect.setAttribute("fill", `rgb(${255 - (fill * count)},0,0)`);

    svg.appendChild(rect);

    } else {

        let circle= document.createElementNS(xmlns, "circle");
        circle.setAttribute("cx", arrayX[i]);
        circle.setAttribute("cy", arrayY[j]);
        circle.setAttribute("r", 10);
        circle.setAttribute("fill", `rgb(${255 - (fill * count)},0,0)`);

        svg.appendChild(circle);
    }

    count++;
  }
}

document.body.appendChild(svg);