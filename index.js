const Twitter = require("twitter");

var client = new Twitter({
  consumer_key: "",
  consumer_secret: "",
  access_token_key: "",
  access_token_secret: "",
});

var params = {
  q: ":Battle ID\n I need backup!",
  count: 5,
};

function rep(_params) {
  client.get("search/tweets", _params, (err, datas, res) => {
    if (err) throw error;
    let arrDatas = [];
    datas.statuses.map((data) => {
      let q = "";
    //   q = data.text;
      // console.log(data.text);
      // console.log('\n');
      let re = new RegExp("\\w{8} :");
    //   console.log(re.exec(data.text)[0].slice(0, -2));
    console.log(data.text)
    });
    console.log("\n");
  });
}
kek();
async function kek() {
  await rep({
    q: ":Battle ID\n I need backup!",
    count: 2,
  });

  await rep({
    q: ":Battle ID\n I need backup!",
    count: 5,
  });


  await rep({
    q: ":Battle ID\n I need backup!",
    count: 4,
  });


  await rep({
    q: "hamburger",
    count: 5,
  });
}
