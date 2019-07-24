Page({
  data: {
    name: "高灿",
    age: 18,
    counts: 0,
    sutdents: [{
        id: 110,
        name: "zs"
      },
      {
        id: 111,
        name: "ls"
      }
    ]
  },
  CountsNum() {
    this.setData({
      counts: this.data.counts + 1
    })
  },
  hand1() {
    console.log("111")
  }
})