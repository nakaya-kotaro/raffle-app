new Vue({
    el: "#app",
    data: {
        totalCount: 30,
        winCount: 10
    },
    methods: {
        saveSettings() {
            if (this.totalCount < 1) {
                alert("くじの総数は1以上にしてください！");
                return;
            }
            if (this.winCount > this.totalCount) {
                alert("当選本数は総数以下にしてください！");
                return;
            }
            localStorage.setItem("totalCount", this.totalCount);
            localStorage.setItem("winCount", this.winCount);
            window.location.href = "../exec-raffle-app/index.html";
        }
    }
});