/* 확률 정보 데이터 — 수치·항목은 여기만 고치면 됩니다.
   updated: 최종 갱신일(YYYY-MM-DD) / pools: 소환 종류별 표 / rows: [항목 키, 확률(%), 비고]
   항목 키는 아래 ITEMS에 이름·등급(3개 언어)이 있어야 합니다. */
var ODDS = {
  updated: "2026-10-21",
  pools: [
    { name: {ko:"일반 소환", en:"Standard Summon", ja:"通常召喚"}, rows: [
      ["treant", 5.00, ""],
      ["guardian", 30.00, ""],
      ["rune_common", 50.90, ""],
      ["rune_uncommon", 10.00, ""],
      ["rune_rare", 3.00, ""],
      ["rune_epic", 1.00, ""],
      ["rune_unique", 0.10, ""]
    ]},
    { name: {ko:"나무거인 소환", en:"Treant Summon", ja:"トレント召喚"}, rows: [
      ["treant", 100.00, ""]
    ]},
    { name: {ko:"수호병 소환", en:"Guardian Summon", ja:"守護兵召喚"}, rows: [
      ["guardian", 100.00, ""]
    ]},
    { name: {ko:"룬 소환", en:"Rune Summon", ja:"ルーン召喚"}, rows: [
      ["rune_common", 51.50, ""],
      ["rune_uncommon", 35.00, ""],
      ["rune_rare", 10.00, ""],
      ["rune_epic", 3.00, ""],
      ["rune_unique", 0.50, ""]
    ]},
    { name: {ko:"일반 룬 x 5", en:"Common Rune x5", ja:"コモンルーン x5"}, rows: [
      ["rune_common", 100.00, ""]
    ]}
  ]
};
var ITEMS = {
  treant:        {ko:["나무거인","나무거인"], en:["Treant","Treant"], ja:["トレント","トレント"]},
  guardian:      {ko:["수호병","수호병"], en:["Guardian","Guardian"], ja:["守護兵","守護兵"]},
  rune_common:   {ko:["일반 룬","일반"], en:["Common Rune","Common"], ja:["コモンルーン","コモン"]},
  rune_uncommon: {ko:["고급 룬","고급"], en:["Uncommon Rune","Uncommon"], ja:["アンコモンルーン","アンコモン"]},
  rune_rare:     {ko:["희귀 룬","희귀"], en:["Rare Rune","Rare"], ja:["レアルーン","レア"]},
  rune_epic:     {ko:["영웅 룬","영웅"], en:["Epic Rune","Epic"], ja:["エピックルーン","エピック"]},
  rune_unique:   {ko:["유니크 룬","유니크"], en:["Unique Rune","Unique"], ja:["ユニークルーン","ユニーク"]}
};
(function(){
  var L = {
    ko:{th:["항목","등급","확률","비고"], total:"합계", upd:function(y,m,d){return "최종 갱신: "+y+"년 "+m+"월 "+d+"일";}},
    en:{th:["Item","Tier","Rate","Notes"], total:"Total", upd:function(y,m,d){return "Last updated: "+["January","February","March","April","May","June","July","August","September","October","November","December"][m-1]+" "+d+", "+y;}},
    ja:{th:["項目","ティア","確率","備考"], total:"合計", upd:function(y,m,d){return "最終更新："+y+"年"+m+"月"+d+"日";}}
  };
  function fmt(n){return (Math.round(n*100)/100)+"%";}
  function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c];});}
  var p = ODDS.updated.split("-").map(Number), out = "";
  ["en","ko","ja"].forEach(function(l){
    var t = L[l], h = '<div data-lang-block="'+l+'"><p class="small upd">'+t.upd(p[0],p[1],p[2])+'</p>';
    ODDS.pools.forEach(function(pool){
      var sum = 0;
      h += '<h2>'+esc(pool.name[l])+'</h2><div class="tbl"><table class="odds"><thead><tr>'+t.th.map(function(x){return '<th>'+x+'</th>';}).join("")+'</tr></thead><tbody>';
      pool.rows.forEach(function(r){
        var it = ITEMS[r[0]] ? ITEMS[r[0]][l] : [r[0], ""]; sum += r[1];
        h += '<tr><td>'+esc(it[0])+'</td><td>'+esc(it[1])+'</td><td class="num">'+fmt(r[1])+'</td><td>'+esc(r[2]||"")+'</td></tr>';
      });
      h += '</tbody><tfoot><tr><td colspan="4" class="num">'+t.total+' '+fmt(sum)+'</td></tr></tfoot></table></div>';
    });
    out += h + '</div>';
  });
  document.getElementById("odds").innerHTML = out;
})();
