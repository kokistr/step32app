"use client";

import { useRouter } from 'next/navigation';
import { Header, CookingNavBar } from "../../../components/index";


// レシピデータ
const recipes = [
  {
    recipeId: 1,
    title: "ふわっととろける！牛肉と玉ねぎのオムレツ炒め",
    img: "/images/dishes/dish1.jpg",
    description: "とろり卵が牛肉とたまねぎを包み込み、まるでオムレツのような満足感。仕上げに醤油をひとたらしで香ばしさアップ！",
    ingredients: [
      "キャベツ: 1/4玉",
      "牛肉 (薄切り): 200g",
      "玉ねぎ: 1/2個",
      "ピーマン: 2個",
      "卵: 2個",
      "醤油: 大さじ2",
      "サラダ油: 大さじ1",
      "塩: 適量",
      "胡椒: 適量"
    ],
    steps: [
      "キャベツはざく切り、玉ねぎは薄切りにする。",
      "フライパンにサラダ油を熱し、牛肉を炒める。",
      "野菜を加え、調味料で味付けする。",
      "卵を溶いて加え、炒め合わせる。",
      "仕上げにごま油を少量加える。"
    ],
    points: "卵を入れることで、オムレツのような触感が楽しめます。醤油ベースの味付けが、野菜と牛肉のうまみを引き出します。"
  },
  {
    recipeId: 2,
    title: "シャキシャキ食感！香ばしいきんぴらごぼう",
    img: "/images/dishes/dish2.jpg",
    description: "シャキシャキしたごぼうと甘辛い味付けが絶品！お弁当や副菜にもぴったりです。",
    ingredients: [
      "ごぼう: 1本",
      "にんじん: 1/2本",
      "醤油: 大さじ2",
      "みりん: 大さじ1",
      "砂糖: 大さじ1",
      "ごま油: 大さじ1",
      "いりごま: 適量"
    ],
    steps: [
      "ごぼうとにんじんを千切りにする。",
      "フライパンにごま油を熱し、ごぼうとにんじんを炒める。",
      "醤油、みりん、砂糖を加え、汁気がなくなるまで炒める。",
      "仕上げにいりごまを振る。"
    ],
    points: "ごぼうのアクを抜くため、切ったらすぐに水にさらしましょう。"
  },
  {
    recipeId: 3,
    title: "ほっこり幸せ！おふくろの味・肉じゃが",
    img: "/images/dishes/dish3.jpg",
    description: "ほっこり甘辛い味付けで、ごはんが進む家庭の定番料理。",
    ingredients: [
      "牛肉: 200g",
      "じゃがいも: 3個",
      "にんじん: 1本",
      "玉ねぎ: 1個",
      "醤油: 大さじ3",
      "みりん: 大さじ2",
      "砂糖: 大さじ2",
      "だし汁: 300ml"
    ],
    steps: [
      "材料を一口大に切る。",
      "鍋で牛肉と玉ねぎを炒める。",
      "じゃがいもとにんじんを加え、だし汁を入れて煮る。",
      "醤油、みりん、砂糖で味付けし、煮汁が少なくなるまで煮る。"
    ],
    points: "煮る際に落し蓋をすると、味が均一に染み込みます。"
  },
  {
    recipeId: 4,
    title: "とろふわ卵がたまらない！絶品親子丼",
    img: "/images/dishes/dish4.jpg",
    description: "ふわふわの卵と鶏肉の組み合わせが絶妙な丼ぶり。",
    ingredients: [
      "鶏肉: 150g",
      "卵: 2個",
      "玉ねぎ: 1/2個",
      "醤油: 大さじ2",
      "みりん: 大さじ2",
      "砂糖: 大さじ1",
      "だし汁: 100ml",
      "ごはん: 2膳"
    ],
    steps: [
      "鶏肉と玉ねぎを一口大に切る。",
      "鍋にだし汁、醤油、みりん、砂糖を入れて煮立てる。",
      "鶏肉と玉ねぎを煮て、卵でとじる。",
      "ごはんに乗せて完成。"
    ],
    points: "卵を2回に分けて入れると、ふんわり仕上がります。"
  },
  {
    recipeId: 5,
    title: "寒い12月でも体ポカポカビーフシチュー",
    img: "/images/dishes/dish5.jpg",
    description: "牛肉がほろほろになるまで煮込んだ、濃厚なデミグラスソースのビーフシチュー。",
    ingredients: [
      "牛肉 (シチュー用): 300g",
      "じゃがいも: 2個",
      "にんじん: 1本",
      "玉ねぎ: 1個",
      "デミグラスソース: 300ml",
      "赤ワイン: 100ml",
      "バター: 大さじ2",
      "小麦粉: 大さじ1",
      "塩: 適量",
      "胡椒: 適量"
    ],
    steps: [
      "牛肉に塩・胡椒をし、小麦粉をまぶす。",
      "鍋でバターを溶かし、牛肉を焼き色がつくまで焼く。",
      "玉ねぎ、にんじん、じゃがいもを加えて炒める。",
      "赤ワインを加え、アルコールを飛ばしたらデミグラスソースを加え、弱火で煮込む。",
      "牛肉が柔らかくなったら完成。"
    ],
    points: "赤ワインで煮込むことで、コクが深まります。"
  },
  {
    recipeId: 6,
    title: "ふわとろ卵の魔法！絶品オムライス",
    img: "/images/dishes/dish6.jpg",
    description: "ふわふわ卵で包んだケチャップライスが絶品！大人も子供も大好きな一品。",
    ingredients: [
      "ごはん: 2膳分",
      "鶏肉: 100g",
      "玉ねぎ: 1/2個",
      "ケチャップ: 大さじ4",
      "卵: 2個",
      "バター: 大さじ1",
      "塩: 適量",
      "胡椒: 適量"
    ],
    steps: [
      "鶏肉と玉ねぎを一口大に切る。",
      "フライパンでバターを溶かし、鶏肉と玉ねぎを炒める。",
      "ごはんとケチャップを加え、炒め合わせる。",
      "別のフライパンで卵を焼き、ごはんを包む。",
      "お好みでケチャップをかける。"
    ],
    points: "卵は半熟に仕上げるとふんわり感がアップします。"
  },
  {
    recipeId: 7,
    title: "ジュワッと肉汁あふれる！王道ハンバーグ",
    img: "/images/dishes/dish7.jpg",
    description: "ジューシーでふっくらとした定番ハンバーグ。特製ソースでさらに美味しく！",
    ingredients: [
      "合い挽き肉: 300g",
      "玉ねぎ: 1個",
      "卵: 1個",
      "パン粉: 大さじ4",
      "牛乳: 大さじ2",
      "塩: 適量",
      "胡椒: 適量",
      "ナツメグ: 少々",
      "サラダ油: 大さじ1"
    ],
    steps: [
      "玉ねぎをみじん切りにし、炒めて冷ます。",
      "合い挽き肉、玉ねぎ、卵、パン粉、牛乳、調味料を混ぜる。",
      "小判型に成形し、真ん中をくぼませる。",
      "フライパンで両面を焼き、中まで火を通す。",
      "お好みのソースで仕上げる。"
    ],
    points: "肉ダネは冷蔵庫で少し寝かせると、味が馴染みます。"
  },
  {
    recipeId: 8,
    title: "濃厚クリーミー！本格カルボナーラ",
    img: "/images/dishes/dish8.jpg",
    description: "濃厚なチーズとベーコンの旨味が絡む、クリーミーなパスタ。",
    ingredients: [
      "パスタ: 200g",
      "ベーコン: 100g",
      "卵: 2個",
      "生クリーム: 100ml",
      "粉チーズ: 大さじ4",
      "塩: 適量",
      "胡椒: 適量",
      "オリーブオイル: 大さじ1"
    ],
    steps: [
      "ベーコンを細切りにし、オリーブオイルで炒める。",
      "パスタを茹でる。",
      "ボウルで卵、生クリーム、粉チーズ、塩・胡椒を混ぜる。",
      "茹で上がったパスタをベーコンと和え、卵液を加える。",
      "手早く混ぜ、余熱でとろりと仕上げる。"
    ],
    points: "余熱で卵液を固めることで、クリーミーに仕上がります。"
  },
  {
    recipeId: 9,
    title: "しびれる辛さ！本格四川麻婆豆腐",
    img: "/images/dishes/dish9.jpg",
    description: "ピリッと辛くてごはんが進む定番中華料理。豆腐とひき肉の旨味がたっぷり！",
    ingredients: [
      "木綿豆腐: 1丁",
      "豚ひき肉: 150g",
      "長ねぎ: 1/2本",
      "豆板醤: 大さじ1",
      "甜麺醤: 大さじ1",
      "しょうゆ: 大さじ2",
      "酒: 大さじ1",
      "水: 150ml",
      "鶏がらスープの素: 小さじ1",
      "片栗粉: 大さじ1",
      "ごま油: 大さじ1",
      "花椒: 適量"
    ],
    steps: [
      "豆腐を一口大に切り、熱湯で軽く茹でて水気を切る。",
      "フライパンにごま油を熱し、豚ひき肉を炒める。",
      "豆板醤と甜麺醤を加えてさらに炒める。",
      "水、しょうゆ、酒、鶏がらスープの素を加え、豆腐を入れる。",
      "水溶き片栗粉でとろみをつけ、花椒を振る。"
    ],
    points: "花椒を加えることで本格的な痺れる辛さが楽しめます。"
  },
  {
    recipeId: 10,
    title: "シャキッと旨い！ピーマンたっぷり青椒肉絲",
    img: "/images/dishes/dish10.jpg",
    description: "シャキシャキのピーマンと細切り豚肉の絶妙な組み合わせ。ごはんにぴったりの炒め物。",
    ingredients: [
      "豚肉 (細切り): 200g",
      "ピーマン: 3個",
      "たけのこ (細切り): 100g",
      "しょうゆ: 大さじ2",
      "酒: 大さじ1",
      "オイスターソース: 大さじ1",
      "片栗粉: 大さじ1",
      "サラダ油: 大さじ2",
      "塩: 少々",
      "胡椒: 少々"
    ],
    steps: [
      "豚肉に塩、胡椒、片栗粉をまぶす。",
      "ピーマンとたけのこを細切りにする。",
      "フライパンにサラダ油を熱し、豚肉を炒める。",
      "ピーマンとたけのこを加え、しょうゆ、酒、オイスターソースで味付けする。",
      "全体に味がなじんだら完成。"
    ],
    points: "具材は手早く炒めてシャキシャキ感を残しましょう。"
  },
  {
    recipeId: 11,
    title: "甘酸っぱさがやみつき！彩り酢豚",
    img: "/images/dishes/dish11.jpg",
    description: "甘酸っぱいタレが絡む、ジューシーな豚肉と野菜の炒め物。",
    ingredients: [
      "豚肩ロース肉: 200g",
      "玉ねぎ: 1/2個",
      "ピーマン: 2個",
      "にんじん: 1/2本",
      "パイナップル: 50g",
      "片栗粉: 大さじ2",
      "酢: 大さじ2",
      "しょうゆ: 大さじ2",
      "砂糖: 大さじ3",
      "ケチャップ: 大さじ2",
      "サラダ油: 大さじ2"
    ],
    steps: [
      "豚肉を一口大に切り、片栗粉をまぶす。",
      "野菜とパイナップルを食べやすい大きさに切る。",
      "フライパンで豚肉を揚げ焼きにする。",
      "野菜を加えて炒め、酢、しょうゆ、砂糖、ケチャップを混ぜたタレを加える。",
      "全体を炒め合わせて完成。"
    ],
    points: "パイナップルを入れると甘みと酸味が引き立ちます。"
  },
  {
    recipeId: 12,
    title: "コク旨ピリ辛！クセになる担々麺",
    img: "/images/dishes/dish12.jpg",
    description: "ピリ辛ごまスープが癖になる本格的な担々麺。",
    ingredients: [
      "中華麺: 1玉",
      "豚ひき肉: 100g",
      "長ねぎ: 1/2本",
      "にんにく: 1片",
      "しょうが: 1片",
      "豆板醤: 小さじ1",
      "練りごま: 大さじ2",
      "しょうゆ: 大さじ2",
      "鶏がらスープ: 300ml",
      "ラー油: 適量",
      "ごま油: 大さじ1"
    ],
    steps: [
      "にんにく、しょうが、長ねぎをみじん切りにする。",
      "フライパンでごま油を熱し、豚ひき肉、にんにく、しょうがを炒める。",
      "豆板醤、しょうゆ、練りごまを加えて炒める。",
      "鶏がらスープを加え、ひと煮立ちさせる。",
      "茹でた中華麺にスープを注ぎ、長ねぎとラー油を加える。"
    ],
    points: "仕上げにラー油をたっぷり加えると、辛さと香りが際立ちます。"
  },
  {
    recipeId: 13,
    title: "新鮮な海の幸！海鮮丼",
    img: "/images/dishes/dish13.jpg",
    description: "新鮮な魚介をたっぷり使った贅沢な海鮮丼。",
    ingredients: [
      "ごはん: 2膳",
      "刺身用マグロ: 100g",
      "刺身用サーモン: 100g",
      "いくら: 適量",
      "海苔: 適量",
      "わさび: 適量",
      "醤油: 適量"
    ],
    steps: [
      "ごはんを丼に盛り、海苔を敷く。",
      "刺身を美しく盛り付ける。",
      "いくらをトッピングし、わさびと醤油を添える。"
    ],
    points: "新鮮な魚介を使うことで、より美味しく仕上がります。"
  },
  {
    recipeId: 14,
    title: "香ばしい香り！焼き魚定食",
    img: "/images/dishes/dish14.jpg",
    description: "焼きたての魚とごはん、味噌汁の定食。",
    ingredients: [
      "魚 (鯖など): 1切れ",
      "ごはん: 1膳",
      "味噌汁: 1杯",
      "漬物: 適量"
    ],
    steps: [
      "魚を焼き、香ばしい香りを出す。",
      "ごはんと味噌汁を用意し、盛り付ける。",
      "漬物を添えて完成。"
    ],
    points: "焼きたての魚は、香りが格別です。"
  },
  {
    recipeId: 15,
    title: "さっぱり美味しい！冷やし中華",
    img: "/images/dishes/dish15.jpg",
    description: "夏にぴったりのさっぱり冷やし中華。",
    ingredients: [
      "中華麺: 1玉",
      "きゅうり: 1本",
      "ハム: 2枚",
      "卵: 1個",
      "ごまドレッシング: 適量"
    ],
    steps: [
      "中華麺を茹でて冷水でしめる。",
      "きゅうりとハムを細切りにする。",
      "卵を焼いて薄焼き卵を作り、細切りにする。",
      "全ての具材を盛り付け、ごまドレッシングをかける。"
    ],
    points: "具材はお好みでアレンジしても美味しいです。"
  },
  {
    recipeId: 16,
    title: "濃厚な味わい！チーズフォンデュ",
    img: "/images/dishes/dish16.jpg",
    description: "とろけるチーズを楽しむ、パーティーにぴったりの一品。",
    ingredients: [
      "チーズ: 200g",
      "白ワイン: 100ml",
      "にんにく: 1片",
      "バゲット: 適量",
      "野菜: 適量"
    ],
    steps: [
      "鍋ににんにくを入れ、白ワインを加えて温める。",
      "チーズを加え、溶かしながら混ぜる。",
      "バゲットや野菜をディップして楽しむ。"
    ],
    points: "チーズはお好みの種類を使ってアレンジ可能です。"
  },
  {
    recipeId: 17,
    title: "甘さと酸味のバランス！フルーツタルト",
    img: "/images/dishes/dish17.jpg",
    description: "色とりどりのフルーツを使った華やかなタルト。",
    ingredients: [
      "タルト生地: 1枚",
      "カスタードクリーム: 適量",
      "フルーツ: 適量"
    ],
    steps: [
      "タルト生地にカスタードクリームを塗る。",
      "フルーツを美しく盛り付ける。",
      "冷やしてから切り分けて完成。"
    ],
    points: "フルーツは季節のものを使うとより美味しいです。"
  },
  {
    recipeId: 18,
    title: "スパイシーな味わい！カレーライス",
    img: "/images/dishes/dish18.jpg",
    description: "家庭の味、スパイシーなカレーライス。",
    ingredients: [
      "ごはん: 2膳",
      "カレールー: 1箱",
      "野菜 (じゃがいも、にんじん、玉ねぎ): 適量",
      "肉 (鶏肉、豚肉など): 適量"
    ],
    steps: [
      "野菜と肉を切り、鍋で炒める。",
      "水を加えて煮込み、カレールーを加える。",
      "ごはんにかけて完成。"
    ],
    points: "スパイスを調整して、自分好みの味に仕上げましょう。"
  },
  {
    recipeId: 19,
    title: "さっぱりとした味わい！冷製パスタ",
    img: "/images/dishes/dish19.jpg",
    description: "夏にぴったりの冷製パスタ。",
    ingredients: [
      "パスタ: 200g",
      "トマト: 1個",
      "バジル: 適量",
      "オリーブオイル: 適量",
      "塩: 適量"
    ],
    steps: [
      "パスタを茹でて冷水でしめる。",
      "トマトを切り、バジルと混ぜる。",
      "オリーブオイルと塩で味付けし、パスタと和える。"
    ],
    points: "バジルは新鮮なものを使うと香りが良いです。"
  },
  {
    recipeId: 20,
    title: "ボリューム満点！ハンバーガー",
    img: "/images/dishes/dish20.jpg",
    description: "自家製のハンバーガー、ボリューム満点。",
    ingredients: [
      "バンズ: 2個",
      "ハンバーグパティ: 2枚",
      "レタス: 適量",
      "トマト: 1個",
      "チーズ: 2枚",
      "ケチャップ: 適量"
    ],
    steps: [
      "ハンバーグパティを焼く。",
      "バンズにレタス、トマト、ハンバーグ、チーズを挟む。",
      "ケチャップをかけて完成。"
    ],
    points: "具材はお好みでアレンジして楽しんでください。"
  },
  {
    recipeId: 21,
    title: "クリーミーな味わい！シーザーサラダ",
    img: "/images/dishes/dish21.jpg",
    description: "クリーミーなドレッシングが美味しいシーザーサラダ。",
    ingredients: [
      "レタス: 適量",
      "クルトン: 適量",
      "パルメザンチーズ: 適量",
      "シーザードレッシング: 適量"
    ],
    steps: [
      "レタスをちぎり、皿に盛る。",
      "クルトンとパルメザンチーズをトッピングする。",
      "シーザードレッシングをかけて完成。"
    ],
    points: "ドレッシングは手作りするとより美味しいです。"
  },
  {
    recipeId: 22,
    title: "甘さと香ばしさ！焼き芋",
    img: "/images/dishes/dish22.jpg",
    description: "ホクホクの焼き芋、甘さと香ばしさが楽しめる。",
    ingredients: [
      "さつまいも: 1本"
    ],
    steps: [
      "さつまいもを洗い、アルミホイルで包む。",
      "オーブンで焼き、ホクホクになるまで加熱する。"
    ],
    points: "焼きたてを食べると、甘さが引き立ちます。"
  },
  {
    recipeId: 23,
    title: "さっぱりとした味わい！トマトサラダ",
    img: "/images/dishes/dish23.jpg",
    description: "新鮮なトマトを使ったさっぱりサラダ。",
    ingredients: [
      "トマト: 2個",
      "オリーブオイル: 適量",
      "塩: 適量",
      "バジル: 適量"
    ],
    steps: [
      "トマトを切り、皿に盛る。",
      "オリーブオイルと塩をかけ、バジルをトッピングする。"
    ],
    points: "新鮮なトマトを使うことで、より美味しくなります。"
  },
  {
    recipeId: 24,
    title: "濃厚な味わい！チョコレートケーキ",
    img: "/images/dishes/dish24.jpg",
    description: "濃厚なチョコレートケーキ、贅沢なデザート。",
    ingredients: [
      "チョコレート: 200g",
      "バター: 100g",
      "砂糖: 100g",
      "卵: 3個",
      "小麦粉: 100g"
    ],
    steps: [
      "チョコレートとバターを湯煎で溶かす。",
      "卵と砂糖を混ぜ、溶かしたチョコレートを加える。",
      "小麦粉をふるい入れ、混ぜる。",
      "型に流し込み、焼く。"
    ],
    points: "焼きたては特に美味しいです。"
  },
  {
    recipeId: 25,
    title: "さっぱりとした味わい！レモンシャーベット",
    img: "/images/dishes/dish25.jpg",
    description: "さっぱりとしたレモンのシャーベット、夏にぴったり。",
    ingredients: [
      "レモン: 2個",
      "砂糖: 100g",
      "水: 200ml"
    ],
    steps: [
      "レモンを絞り、果汁を取る。",
      "砂糖と水を加え、混ぜる。",
      "冷凍庫で凍らせ、かき混ぜながらシャーベット状にする。"
    ],
    points: "冷たくてさっぱりした味わいが楽しめます。"
  },
  {
    recipeId: 26,
    title: "ボリューム満点！オムレツ",
    img: "/images/dishes/dish26.jpg",
    description: "ふわふわのオムレツ、ボリューム満点。",
    ingredients: [
      "卵: 3個",
      "牛乳: 大さじ2",
      "塩: 適量",
      "胡椒: 適量"
    ],
    steps: [
      "卵を溶き、牛乳と調味料を加える。",
      "フライパンで焼き、ふわっと仕上げる。"
    ],
    points: "焼き加減に注意して、ふわふわに仕上げましょう。"
  },
  {
    recipeId: 27,
    title: "甘さと香ばしさ！クッキー",
    img: "/images/dishes/dish27.jpg",
    description: "香ばしいクッキー、手作りの楽しさ。",
    ingredients: [
      "小麦粉: 200g",
      "バター: 100g",
      "砂糖: 100g",
      "卵: 1個"
    ],
    steps: [
      "バターと砂糖を混ぜ、卵を加える。",
      "小麦粉をふるい入れ、混ぜる。",
      "型に流し込み、焼く。"
    ],
    points: "焼きたては特に美味しいです。"
  },
  {
    recipeId: 28,
    title: "さっぱりとした味わい！フルーツポンチ",
    img: "/images/dishes/dish28.jpg",
    description: "色とりどりのフルーツを使ったフルーツポンチ。",
    ingredients: [
      "フルーツ: 適量",
      "ジュース: 適量"
    ],
    steps: [
      "フルーツを切り、器に盛る。",
      "ジュースをかけて完成。"
    ],
    points: "フルーツは季節のものを使うとより美味しいです。"
  },
  {
    recipeId: 29,
    title: "濃厚な味わい！クリームシチュー",
    img: "/images/dishes/dish29.jpg",
    description: "クリーミーなシチュー、心温まる一品。",
    ingredients: [
      "鶏肉: 200g",
      "じゃがいも: 2個",
      "にんじん: 1本",
      "玉ねぎ: 1個",
      "生クリーム: 200ml"
    ],
    steps: [
      "鶏肉と野菜を切り、鍋で炒める。",
      "水を加えて煮込み、生クリームを加える。",
      "とろみが出るまで煮込んで完成。"
    ],
    points: "クリームは最後に加えると、より濃厚になります。"
  },
  {
    recipeId: 30,
    title: "さっぱりとした味わい！冷製スープ",
    img: "/images/dishes/dish30.jpg",
    description: "夏にぴったりの冷製スープ。",
    ingredients: [
      "トマト: 2個",
      "きゅうり: 1本",
      "玉ねぎ: 1/2個",
      "オリーブオイル: 適量",
      "塩: 適量"
    ],
    steps: [
      "トマト、きゅうり、玉ねぎを切り、ミキサーで混ぜる。",
      "オリーブオイルと塩で味付けし、冷やして完成。"
    ],
    points: "冷やして飲むと、さっぱりとした味わいが楽しめます。"
  }
];

export default function RecipeDetailPage({ params }) {
  const recipeId = Number(params["recipe-id"]); // paramsからURLパラメータを取得し数値に変換
  const recipe = recipes.find((r) => r.recipeId === recipeId);

  const router = useRouter();

  if (!recipe) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <CookingNavBar />
        <main className="main-container">
          <p>指定されたレシピが見つかりませんでした。</p>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <CookingNavBar />

      {/* Main Content */}
      <main className="main-container">
        <div className="white-container">
          {/* タイトル */}
          <h1 className="text-lg font-bold mb-4">{recipe.title}</h1>

          {/* 画像と説明 */}
          <div className="mb-6 grid grid-cols-2 gap-8">
            <img
              src={recipe.img}
              alt={recipe.title}
              className="w-full h-56 object-cover rounded-md mb-4"
            />
            <p className="text-gray-600">{recipe.description}</p>
          </div>

          {/* 材料 */}
          <h2 className="text-md font-semibold mb-2">【材料】</h2>
          <ul className="grid grid-cols-2 gap-2 mb-6">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-orange-500" />
                <span className="text-gray-700">{ingredient}</span>
              </li>
            ))}
          </ul>

          {/* 発注ボタン */}
          <div className="flex justify-center items-center w-full mb-12">
            <button 
              className="orange-btn w-1/3"
              onClick={() => router.push('/under-construction')}
            >
              発注
            </button>
          </div>

          {/* 作り方 */}
          <h2 className="text-md font-semibold mb-2">作り方</h2>
          <ol className="list-decimal list-inside space-y-2 mb-6 text-gray-700">
            {recipe.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>

          {/* ポイント */}
          <h2 className="text-md font-semibold mb-2">ポイント</h2>
          <p className="text-gray-700 mb-12">{recipe.points}</p>

          {/* ボタン */}
          <div className="flex flex-col space-y-3">
            <button
              className="orange-btn"
              onClick={() => router.push('/cooking/suggestion')}
            >
              候補に追加して戻る
            </button>
            <button
              className="orange-btn"
              onClick={() => router.push('/cooking/calendar')}
            >
              候補に追加してカレンダーへ
            </button>
            <button
              className="gray-btn"
              onClick={() => router.push('/cooking/suggestion')}
            >
              戻る
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}