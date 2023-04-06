
function triangleLink() {
    // links
    const triangleLink = document.getElementById('triangleLink');
    const parallelogramLink = document.getElementById('parallelogramLink');
    
    triangleLink.classList.add('active');
    parallelogramLink.classList.remove('active');

    // sections
    const triangleSection = document.getElementById('segitiga');
    const parallelogramSection = document.getElementById('jajargenjang');

    triangleSection.classList.remove('hide');
    parallelogramSection.classList.add('hide');
}

function parallelogramLink() {
    // links
    const triangleLink = document.getElementById('triangleLink');
    const parallelogramLink = document.getElementById('parallelogramLink');
    
    parallelogramLink.classList.add('active');
    triangleLink.classList.remove('active');

    // sections
    const triangleSection = document.getElementById('segitiga');
    const parallelogramSection = document.getElementById('jajargenjang');

    triangleSection.classList.add('hide');
    parallelogramSection.classList.remove('hide');
}

// clear input fields and the result
function reset(formId, resultId) {
    // get ids from the form and the result
    const form = document.getElementById(formId)
    const parent = document.getElementById(resultId);
    
    // reset the form
    form.reset();
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function triangleArea() {
    // get values
    const base = document.getElementById('base').value;
    const height = document.getElementById('height').value;

    // calculate area
    const area = 1/2 * base * height;

    // print the result
    const result = `L = 1/2 x a x t <br>
                L = 1/2 x ${base} x ${height} <br>
                L = ${area}`;

    const parent = document.getElementById('triangleAreaRes');
    const child = document.createElement('p');
    child.innerHTML = result;
    parent.appendChild(child);
}

function trianglePerimeter() {
    // get the values
    const side1  = document.getElementById('side1').value;
    const side2  = document.getElementById('side2').value;
    const side3  = document.getElementById('side3').value;

    // count
    const perimeter = parseInt(side1) + parseInt(side2) + parseInt(side3);

    // assign the result
    const result = `K = a + b + c <br>
                K = ${side1} + ${side2} + ${side3} <br>
                K = ${perimeter}`;

    const parent = document.getElementById('trianglePerimeterRes');
    const child = document.createElement('p');
    child.innerHTML = result;
    parent.appendChild(child);
}

function parallelogramArea() {
    // get the values
    const base = document.getElementById('parallelogramBase').value;
    const height = document.getElementById('parallelogramHeight').value;

    // count
    const area = base * height;

    // print the result
    const result = ` L = A x T <br>
                    L = ${base} x ${height} <br>
                    L = ${area}`;

    const parent = document.getElementById('parallelogramAreaRes');
    const child = document.createElement('p');
    child.innerHTML = result;
    parent.appendChild(child);
}

function parallelogramPerimeter() {
    // get the values
    const s2n3 = document.getElementById('ab-side').value;
    const s2n4 = document.getElementById('bc-side').value;

    const perimeter = 2 * (parseInt(s2n3) + parseInt(s2n4));

    // assign result
    const result = `K = 2 x (a + b) <br>
                    K = 2 x (${s2n3} + ${s2n4}) <br>
                    K = ${perimeter}`;

    const parent = document.getElementById('parallelogramPerimeterRes');
    const child = document.createElement('p');
    child.innerHTML = result;
    parent.appendChild(child);
}
