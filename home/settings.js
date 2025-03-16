new Vue({
    el: "#app",
    data: {
        totalCount: 30,
        winPercentage: 30
    },
    methods: {
        saveSettings() {
            if (this.totalCount < 1) {
                alert("くじの総数は1以上にしてください！");
                return;
            }
            if (this.winPercentage < 0 || this.winPercentage > 100) {
                alert("当選の割合は0〜100の間で設定してください！");
                return;
            }
            const winCount = Math.floor((this.winPercentage / 100) * this.totalCount);
            localStorage.setItem("totalCount", this.totalCount);
            localStorage.setItem("winCount", winCount);
            window.location.href = "../exec-raffle-app/index.html";
        }
    }
});