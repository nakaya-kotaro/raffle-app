new Vue({
    el: "#app",
    data: {
        results: [
            { text: "当選", probability: 10 },
            { text: "落選", probability: 20 }
        ],
        result: "",
        isDisabled: false,
        buttonText: "くじを引く"
    },
    methods: {
        getRandomResult() {
            const total = this.results.reduce((sum, item) => sum + item.probability, 0);
            let random = Math.random() * total;
            for (const item of this.results) {
                if (random < item.probability) {
                    return item.text;
                }
                random -= item.probability;
            }
        },
        drawLottery() {
            this.result = this.getRandomResult();
            this.isDisabled = true;
            this.buttonText = "再挑戦まで 5秒...";
            
            let countdown = 5;
            const interval = setInterval(() => {
                countdown--;
                this.buttonText = `再挑戦まで ${countdown}秒...`;

                if (countdown === 0) {
                    clearInterval(interval);
                    this.isDisabled = false;
                    this.buttonText = "くじを引く";
                }
            }, 1000);
        }
    }
});
