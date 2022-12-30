// Buttons
const applyTopLeftBtn = document.getElementById('applyTopLeftBtn');
const applyTopRightBtn = document.getElementById('applyTopRightBtn');
const applyBottomLeftBtn = document.getElementById('applyBottomLeftBtn');
const applyBottomRightBtn = document.getElementById('applyBottomRightBtn');

const applyAllBtn = document.getElementById('applyAllBtn');

// The square
const square = document.getElementById('box');

// The TextBox
const textBox = document.getElementById('textBox');

applyTopLeftBtn.addEventListener('click', () =>
{
    const topLeftInput = document.getElementById('topLeftInput').value;
    square.style.removeProperty('border-radius');
    square.style.cssText = `border-radius: ${topLeftInput}px 0px 0px 0px`;
    console.log(topLeftInput);
    textBox.innerText = square.style.cssText;
    console.log("run the func");
});

applyTopRightBtn.addEventListener('click', () =>
{
    const topRightInput = document.getElementById('topRightInput').value;
    square.style.removeProperty('border-radius');
    square.style.cssText = `border-radius: 0px ${topRightInput}px 0px 0px`;
    textBox.innerText = square.style.cssText;
});

applyBottomLeftBtn.addEventListener('click', () =>
{
    const bottomLeftInput = document.getElementById('bottomLeftInput').value;
    square.style.removeProperty('border-radius');
    square.style.cssText = `border-radius: 0px 0px ${bottomLeftInput}px 0px`;
    textBox.innerText = square.style.cssText;
});

applyBottomRightBtn.addEventListener('click', () =>
{
    const bottomRightInput = document.getElementById('bottomRightInput').value;
    square.style.removeProperty('border-radius');
    square.style.cssText = `border-radius: 0px 0px 0px ${bottomRightInput}px`;
    textBox.innerText = square.style.cssText;
});

applyAllBtn.addEventListener('click', () =>
{
    const topLeftInput = document.getElementById('topLeftInput').value;
    const topRightInput = document.getElementById('topRightInput').value;
    const bottomLeftInput = document.getElementById('bottomLeftInput').value;
    const bottomRightInput = document.getElementById('bottomRightInput').value;

    square.style.removeProperty('border-radius');
    square.style.cssText = `border-radius: ${topLeftInput}px ${topRightInput}px ${bottomLeftInput}px ${bottomRightInput}px`;
    textBox.innerText = square.style.cssText;
})

