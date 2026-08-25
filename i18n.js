(function(){
var D={
en:{nav_home:"Home",nav_support:"Support",nav_privacy:"Privacy",
 hero_h:"Defend the Tree Giant. Charge the Legion of Fear.",hero_p:"A new defense race by LOEND — easy to play, deep to master.",
 f1h:"Break the waves",f1p:"Throw skill cards at the right moment and wipe out the enemy lines.",
 f2h:"Build your party",f2p:"Combine Anima guardians and runes. Every build fights differently.",
 f3h:"Augments & relics",f3p:"Pick augments and relics mid-run and finish your build.",
 f4h:"Beat the boss",f4p:"Read the pattern, land the counter at the perfect time.",
 f5h:"Prove it on the ranking",f5p:"Same stage, fastest clear wins. Race the world.",
 soon_h:"Coming soon",soon_p:"iOS · Android — 2026.",
 sup_h:"Support",contact_h:"Contact",contact_p:"Questions, bug reports, or feedback:",btn_mail:"Email us",reply:"We usually reply within 2 business days.",
 faq_h:"FAQ",q1:"Do I need an account?",a1:"No. You can play as a guest right away.",q2:"Can I play offline?",a2:"Story mode works offline. Rankings require an internet connection.",q3:"I lost my progress.",a3:"Email us with your in-game player ID and we will help you recover it.",q4:"How do I request data deletion?",a4:"Email us with your player ID. See our Privacy Policy for details.",
 priv_h:"Privacy Policy",updated:"Last updated: August 25, 2026",
 foot_support:"Support",foot_privacy:"Privacy Policy"},
ko:{nav_home:"홈",nav_support:"고객지원",nav_privacy:"개인정보",
 hero_h:"나무거인을 지키고! 공포의 군단에게 돌격하라!",hero_p:"LOEND의 새로운 디펜스 레이스 — 조작은 쉽지만, 전략은 깊다.",
 f1h:"웨이브 돌파",f1p:"스킬카드를 정확한 타이밍에 던져 적진을 쓸어버려라.",
 f2h:"빌드 조합",f2p:"애니마 수호병과 룬을 조합하라. 조합마다 전투가 달라진다.",
 f3h:"증강 & 유물",f3p:"전투 중 증강과 유물을 골라 빌드를 완성하라.",
 f4h:"보스전",f4p:"패턴을 읽고, 정확한 순간에 카운터를 꽂아라.",
 f5h:"랭킹으로 증명",f5p:"같은 스테이지, 가장 빠른 클리어가 이긴다. 세계와 겨뤄라.",
 soon_h:"출시 예정",soon_p:"iOS · Android — 2026.",
 sup_h:"고객지원",contact_h:"문의",contact_p:"문의, 버그 제보, 피드백:",btn_mail:"메일 보내기",reply:"보통 영업일 기준 2일 안에 답변드립니다.",
 faq_h:"자주 묻는 질문",q1:"계정이 필요한가요?",a1:"아니요. 게스트로 바로 플레이할 수 있습니다.",q2:"오프라인에서도 되나요?",a2:"스토리 모드는 오프라인 가능. 랭킹은 인터넷 연결이 필요합니다.",q3:"진행 데이터가 사라졌어요.",a3:"게임 내 플레이어 ID와 함께 메일 주시면 복구를 도와드립니다.",q4:"데이터 삭제는 어떻게 요청하나요?",a4:"플레이어 ID와 함께 메일 주세요. 자세한 내용은 개인정보처리방침을 참고하세요.",
 priv_h:"개인정보처리방침",updated:"최종 수정: 2026년 8월 25일",
 foot_support:"고객지원",foot_privacy:"개인정보처리방침"},
ja:{nav_home:"ホーム",nav_support:"サポート",nav_privacy:"プライバシー",
 hero_h:"木の巨人を守れ！恐怖の軍団に突撃せよ！",hero_p:"LOENDの新しいディフェンスレース — 操作はかんたん、戦略は奥深い。",
 f1h:"ウェーブ突破",f1p:"スキルカードをベストなタイミングで投げ、敵陣を一掃せよ。",
 f2h:"ビルド編成",f2p:"アニマ守護兵とルーンを組み合わせよう。編成ごとに戦い方が変わる。",
 f3h:"強化＆遺物",f3p:"戦闘中に強化と遺物を選び、ビルドを完成させよう。",
 f4h:"ボス戦",f4p:"パターンを読み、最高の瞬間にカウンターを決めろ。",
 f5h:"ランキングで証明",f5p:"同じステージ、最速クリアが勝ち。世界と競え。",
 soon_h:"近日公開",soon_p:"iOS · Android — 2026.",
 sup_h:"サポート",contact_h:"お問い合わせ",contact_p:"ご質問・不具合報告・ご意見はこちら：",btn_mail:"メールを送る",reply:"通常2営業日以内にご返信します。",
 faq_h:"よくある質問",q1:"アカウントは必要ですか？",a1:"いいえ。ゲストですぐにプレイできます。",q2:"オフラインでも遊べますか？",a2:"ストーリーモードはオフラインで遊べます。ランキングにはインターネット接続が必要です。",q3:"データが消えました。",a3:"ゲーム内のプレイヤーIDを添えてメールしてください。復旧をお手伝いします。",q4:"データ削除はどう依頼しますか？",a4:"プレイヤーIDを添えてメールしてください。詳細はプライバシーポリシーをご覧ください。",
 priv_h:"プライバシーポリシー",updated:"最終更新：2026年8月25日",
 foot_support:"サポート",foot_privacy:"プライバシーポリシー"}
};
function pick(){var s=null;try{s=localStorage.getItem('dtt_lang')}catch(e){}
 if(s&&D[s])return s;var n=(navigator.language||'en').toLowerCase();return n.indexOf('ko')==0?'ko':n.indexOf('ja')==0?'ja':'en';}
function apply(l){var t=D[l];document.documentElement.lang=l;
 document.querySelectorAll('[data-i]').forEach(function(e){var k=e.getAttribute('data-i');if(t[k]!=null)e.textContent=t[k];});
 document.querySelectorAll('[data-lang-block]').forEach(function(e){e.style.display=e.getAttribute('data-lang-block')===l?'':'none';});
 document.querySelectorAll('.lang a').forEach(function(a){a.classList.toggle('on',a.getAttribute('data-set')===l);});}
window.setLang=function(l){try{localStorage.setItem('dtt_lang',l)}catch(e){}apply(l);};
document.addEventListener('DOMContentLoaded',function(){apply(pick());});
})();
