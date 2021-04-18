class btnpair {
    constructor(on, off, hd) {
        this.api = {"on": on, "off": off}
        this.onbtn  = $(".on");
        this.offbtn = $(".off")
        this.headline = $("h1")
        this.onbtn.on("click" () => {
            this.on()
        })
        this.offbtn.on("click" () => {
            this.off()
        })
        this.headline.html(hd)
    }
    on() {
        this.headline.css("color", "#EEE")
        return fetch(this.api.on).then(() => {
            this.headline.css("color", "#FFF")
        })
    }
    off() {
        this.headline.css("color", "#EEE")
        return fetch(this.api.off).then(() => {
            this.headline.css("color", "#FFF")
        })
    }
}
