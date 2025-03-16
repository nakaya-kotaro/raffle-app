new Vue({
    el: "#app",
    data: {
        winCount: 10,
        loseCount: 20
    },
    methods: {
        saveSettings() {
            const total = this.winCount + this.loseCount;
            if (total === 0) {
                alert("本数を1以上に設定してください！");
                return;
            }
            localStorage.setItem("winCount", this.winCount);
            localStorage.setItem("loseCount", this.loseCount);
            window.location.href = "../exec-raffle-app/index.html";
        }
    }
});