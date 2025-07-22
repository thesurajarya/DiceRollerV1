function roll(){
    const diceCount = document.getElementById("textBox").value;
    const numCount = document.getElementById("diceNumber");
    const imageCount = document.getElementById("diceImage");
    const dices = [];
    const images = [];

    for(let i = 1;i<=diceCount;i++){
        const randomDiceNum = Math.floor(Math.random() * 6)+1;
        dices.push(randomDiceNum);
        images.push(`<img src="diceImages/${randomDiceNum}.png">`);
    }

    numCount.textContent = `You got: ${dices.join(", ")}`;
    imageCount.innerHTML = `${images.join("")}`;
}