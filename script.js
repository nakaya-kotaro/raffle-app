document.addEventListener("DOMContentLoaded", () => {
    const results = [
        { text: "大吉 🎉", probability: 10 }, 
        { text: "中吉 😊", probability: 20 }, 
        { text: "小吉 🙂", probability: 30 }, 
        { text: "末吉 😌", probability: 25 }, 
        { text: "凶 😱", probability: 15 }
    ];

    const button = document.getElementById("drawButton");
    const resultText = document.getElementById("result");

    // くじ引き処理（確率調整）
    const getRandomResult = () => {
        const total = results.reduce((sum, item) => sum + item.probability, 0);
        let random = Math.random() * total;
        for (const item of results) {
            if (random < item.probability) {
                return item.text;
            }
            random -= item.probability;
        }
    };

    button.addEventListener("click", () => {
        const result = getRandomResult();
        resultText.textContent = `結果: ${result}`;

        // ボタンを一時的に無効化
        button.disabled = true;
        let countdown = 5;
        button.textContent = `再挑戦まで ${countdown}秒...`;

        // 1秒ごとにカウントダウン
        const interval = setInterval(() => {
            countdown--;
            button.textContent = `再挑戦まで ${countdown}秒...`;

            if (countdown === 0) {
                clearInterval(interval);
                button.disabled = false;
                button.textContent = "くじを引く";
            }
        }, 1000);
    });
});
