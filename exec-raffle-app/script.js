new Vue({
    el: "#app",
    data: {
        results: [],
        result: "",
        isDisabled: false,
        buttonText: "くじを引く"
    },
    created() {
        const totalCount = parseInt(localStorage.getItem("totalCount")) || 30;
        const winCount = parseInt(localStorage.getItem("winCount")) || 10;
        const loseCount = totalCount - winCount;

        if (totalCount === 0) {
            alert("くじの設定がされていません。設定ページに戻ります。");
            window.location.href = "../home/index.html";
            return;
        }
        this.results = [
            { text: "🎉 当選", probability: winCount },
            { text: "😢 落選", probability: loseCount }
        ];
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