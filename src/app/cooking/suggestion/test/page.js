"use client";

import { useRouter } from 'next/navigation';
import { Header, CookingNavBar } from "../../../components/index";


// レシピデータ
const recipes = [
  {
    recipeId: 1,
    title: "牛肉とたまねぎのオムレツ風炒め",
    img: "/images/dishes/dish1.jpg",
    description: "とろり卵が牛肉とたまねぎを包み込み、まるでオムレツのような満足感。仕上げに醤油をひとたらしで香ばしさアップ！",
    ingredients: [
      "キャベツ: 1/4玉",
      "牛肉 (薄切り): 200g",
      "玉ねぎ: 1/2個",
      "ピーマン: 2個",
      "卵: 2個",
      "醤油: 大匙2",
      "サラダ油: 大匙1",
      "塩: 適量",
      "胡椒: 適量",
    ],
    steps: [
      "キャベツはざく切り、玉ねぎは薄切りにする。",
      "フライパンにサラダ油を熱し、牛肉を炒める。",
      "野菜を加え、調味料で味付けする。",
      "卵を溶いて加え、炒め合わせる。",
      "仕上げにごま油を少量加える。",
    ],
    points: "卵を入れることで、オムレツのような触感が楽しめます。醤油ベースの味付けが、野菜と牛肉のうまみを引き出します。",
  },
  {
    recipeId: 2,
    title: "世界で一番おいしい納豆ご飯",
    img: "/images/dishes/dish2.jpg",
    description: "シンプルながら絶品！納豆と卵黄の組み合わせが、ご飯のおいしさを引き立てます。",
    ingredients: [
      "納豆: 1パック",
      "ご飯: 1膳分",
      "卵黄: 1個",
      "醤油: 小匙1",
      "刻みねぎ: 適量",
      "海苔: 適量",
    ],
    steps: [
      "納豆を混ぜ、付属のタレを加える。",
      "ご飯に納豆をのせる。",
      "卵黄を中心にのせる。",
      "醤油を垂らし、刻みねぎと海苔を散らす。",
      "お好みで混ぜていただく。",
    ],
    points: "卵黄と納豆のまろやかさが絶妙です。ねぎと海苔の風味がアクセント。",
  },
  {
    recipeId: 3,
    title: "シンプル豚汁",
    img: "/images/dishes/dish3.jpg",
    description: "家庭の味の定番、具だくさんでほっこりする豚汁。寒い日にぴったりの一品です。",
    ingredients: [
      "豚肉 (薄切り): 100g",
      "大根: 5cm",
      "人参: 1/2本",
      "こんにゃく: 1枚",
      "ごぼう: 1/3本",
      "味噌: 大匙3",
      "だし汁: 3カップ",
      "サラダ油: 適量",
      "刻みねぎ: 適量",
    ],
    steps: [
      "野菜は食べやすい大きさに切る。",
      "鍋にサラダ油を熱し、豚肉を炒める。",
      "野菜とこんにゃくを加え、さらに炒める。",
      "だし汁を加え、柔らかくなるまで煮る。",
      "味噌を溶き入れ、仕上げに刻みねぎを散らす。",
    ],
    points: "豚肉のうまみがスープに溶け込み、体が温まる味わいに。",
  },
  {
    recipeId: 4,
    title: "肉じゃが風肉じゃが",
    img: "/images/dishes/dish4.jpg",
    description: "やさしい味わいの家庭料理。ジャガイモとお肉の組み合わせが絶妙です。",
    ingredients: [
      "牛肉 (薄切り): 150g",
      "じゃがいも: 3個",
      "玉ねぎ: 1個",
      "人参: 1本",
      "醤油: 大匙2",
      "砂糖: 大匙1",
      "みりん: 大匙2",
      "だし汁: 2カップ",
    ],
    steps: [
      "じゃがいもは皮をむき、一口大に切る。",
      "鍋にだし汁、調味料を加え煮立てる。",
      "野菜と肉を入れ、柔らかくなるまで煮る。",
      "煮汁が少なくなるまで火を通す。",
    ],
    points: "煮汁をしっかり絡ませることで、味がしみ込みます。",
  },
  {
    recipeId: 5,
    title: "チキンカツレツ",
    img: "/images/dishes/dish5.jpg",
    description: "サクサクの衣とジューシーな鶏肉がたまらない、洋風カツ。",
    ingredients: [
      "鶏むね肉: 2枚",
      "パン粉: 1カップ",
      "卵: 1個",
      "小麦粉: 適量",
      "塩: 適量",
      "胡椒: 適量",
      "サラダ油: 適量",
    ],
    steps: [
      "鶏肉を薄く開き、塩胡椒で下味をつける。",
      "小麦粉、卵、パン粉の順に衣をつける。",
      "フライパンに油を熱し、きつね色になるまで揚げる。",
      "油を切り、食べやすい大きさに切る。",
    ],
    points: "衣をしっかりつけることで、カリッとした仕上がりに。",
  },
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