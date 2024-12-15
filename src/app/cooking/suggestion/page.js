"use client";

import { useState } from "react";
import Link from "next/link"; 
import { Header, CookingNavBar } from "../../components/index";
import { FaHeart } from "react-icons/fa"; // ハートアイコンをインポート

// レシピデータ
const recipeData = [
  { recipeId: 1, genre: "和食", title: "ふわっととろける！牛肉と玉ねぎのオムレツ炒め", onFavorite: true, onCandidate: false, onCalendar: false, onSuggestion: true, img: "/images/dishes/dish1.jpg" },
  { recipeId: 2, genre: "和食", title: "シャキシャキ食感！香ばしいきんぴらごぼう", onFavorite: false, onCandidate: false, onCalendar: false, onSuggestion: true, img: "/images/dishes/dish2.jpg" },
  { recipeId: 3, genre: "和食", title: "ほっこり幸せ！おふくろの味・肉じゃが", onFavorite: false, onCandidate: false, onCalendar: false, onSuggestion: true, img: "/images/dishes/dish3.jpg" },
  { recipeId: 4, genre: "和食", title: "とろふわ卵がたまらない！絶品親子丼", onFavorite: false, onCandidate: false, onCalendar: false, onSuggestion: true, img: "/images/dishes/dish4.jpg" },
  { recipeId: 5, genre: "洋食", title: "寒い12月でも体ポカポカビーフシチュー", onFavorite: false, onCandidate: false, onCalendar: false, onSuggestion: true, img: "/images/dishes/dish5.jpg" },
  { recipeId: 6, genre: "洋食", title: "ふわとろ卵の魔法！絶品オムライス", onFavorite: false, onCandidate: false, onCalendar: false, onSuggestion: true, img: "/images/dishes/dish6.jpg" },
  { recipeId: 7, genre: "洋食", title: "ジュワッと肉汁あふれる！王道ハンバーグ", onFavorite: false, onCandidate: false, onCalendar: false, onSuggestion: true, img: "/images/dishes/dish7.jpg" },
  { recipeId: 8, genre: "洋食", title: "濃厚クリーミー！本格カルボナーラ", onFavorite: false, onCandidate: false, onCalendar: false, onSuggestion: true, img: "/images/dishes/dish8.jpg" },
  { recipeId: 9, genre: "中華", title: "しびれる辛さ！本格四川麻婆豆腐", onFavorite: false, onCandidate: false, onCalendar: false, onSuggestion: true, img: "/images/dishes/dish9.jpg" },
  { recipeId: 10, genre: "中華", title: "シャキッと旨い！ピーマンたっぷり青椒肉絲", onFavorite: false, onCandidate: false, onCalendar: false, onSuggestion: true, img: "/images/dishes/dish10.jpg" },
  { recipeId: 11, genre: "中華", title: "甘酸っぱさがやみつき！彩り酢豚", onFavorite: false, onCandidate: false, onCalendar: false, onSuggestion: true, img: "/images/dishes/dish11.jpg" },
  { recipeId: 12, genre: "中華", title: "コク旨ピリ辛！クセになる担々麺", onFavorite: false, onCandidate: false, onCalendar: false, onSuggestion: true, img: "/images/dishes/dish12.jpg" },
  { recipeId: 13, genre: "その他", title: "香り立つバジル！本格ガパオライス", onFavorite: false, onCandidate: false, onCalendar: false, onSuggestion: true, img: "/images/dishes/dish13.jpg" },
  { recipeId: 14, genre: "その他", title: "スパイス香る！ジューシータンドリーチキン", onFavorite: false, onCandidate: false, onCalendar: false, onSuggestion: true, img: "/images/dishes/dish14.jpg" },
  { recipeId: 15, genre: "その他", title: "香り豊か！あっさり鶏だしフォー", onFavorite: false, onCandidate: false, onCalendar: false, onSuggestion: true, img: "/images/dishes/dish15.jpg" },
  { recipeId: 16, genre: "その他", title: "カリッとあなたも包み込む！?メキシカン風タコス", onFavorite: false, onCandidate: false, onCalendar: false, onSuggestion: true, img: "/images/dishes/dish16.jpg" },
  { recipeId: 17, genre: "和食", title: "ごはんが進む！サバ味噌煮", onFavorite: false, onCandidate: false, onCalendar: false, onSuggestion: true, img: "/images/dishes/dish17.jpg" },
  { recipeId: 18, genre: "和食", title: "香り豊か！きのこの炊き込みご飯", onFavorite: false, onCandidate: false, onCalendar: false, onSuggestion: true, img: "/images/dishes/dish18.jpg" },
  { recipeId: 19, genre: "和食", title: "だしが決め手！コク旨肉うどん", onFavorite: false, onCandidate: false, onCalendar: false, onSuggestion: true, img: "/images/dishes/dish19.jpg" },
  { recipeId: 20, genre: "和食", title: "なめらか食感！定番茶碗蒸し", onFavorite: false, onCandidate: false, onCalendar: false, onSuggestion: true, img: "/images/dishes/dish20.jpg" },
  { recipeId: 21, genre: "洋食", title: "懐かしの味！喫茶店風ナポリタン", onFavorite: false, onCandidate: false, onCalendar: false, onSuggestion: true, img: "/images/dishes/dish21.jpg" },
  { recipeId: 22, genre: "洋食", title: "とろけるチーズ！ジューシーハンバーグ", onFavorite: false, onCandidate: false, onCalendar: false, onSuggestion: true, img: "/images/dishes/dish22.jpg" },
  { recipeId: 23, genre: "洋食", title: "おうちで簡単！ミートソースパスタ", onFavorite: false, onCandidate: false, onCalendar: false, onSuggestion: true, img: "/images/dishes/dish23.jpg" },
  { recipeId: 24, genre: "中華", title: "プリプリ海老のエビチリ", onFavorite: false, onCandidate: false, onCalendar: false, onSuggestion: true, img: "/images/dishes/dish24.jpg" },
  { recipeId: 25, genre: "中華", title: "ふわとろ卵の天津飯", onFavorite: false, onCandidate: false, onCalendar: false, onSuggestion: true, img: "/images/dishes/dish25.jpg" },
  { recipeId: 26, genre: "中華", title: "香ばしさ満点！鶏肉とカシューナッツ炒め", onFavorite: false, onCandidate: false, onCalendar: false, onSuggestion: true, img: "/images/dishes/dish26.jpg" },
  { recipeId: 27, genre: "中華", title: "パリッとジューシー！春巻き", onFavorite: false, onCandidate: false, onCalendar: false, onSuggestion: true, img: "/images/dishes/dish27.jpg" },
  { recipeId: 28, genre: "その他", title: "スパイス香る！簡単キーマカレー", onFavorite: false, onCandidate: false, onCalendar: false, onSuggestion: true, img: "/images/dishes/dish28.jpg" },
  { recipeId: 29, genre: "その他", title: "ココナッツ香る！タイ風グリーンカレー", onFavorite: false, onCandidate: false, onCalendar: false, onSuggestion: true, img: "/images/dishes/dish29.jpg" },
  { recipeId: 30, genre: "その他", title: "野菜たっぷり！彩りビビンバ", onFavorite: false, onCandidate: false, onCalendar: false, onSuggestion: true, img: "/images/dishes/dish30.jpg" }
];

export default function SuggestPage() {
  const [activeTab, setActiveTab] = useState("和食"); // 現在選択されているタブ
  const [recipes, setRecipes] = useState(recipeData); // レシピデータの状態管理

  // 現在のタブに応じたレシピをフィルタリング
  const filteredRecipes = recipes.filter((recipe) => recipe.genre === activeTab);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <CookingNavBar />

      {/* Suggest Section */}
      <section className="white-container">
        <div className="mb-4">
          <h2 className="text-lg font-bold text-orange-500 mb-2">Suggestion</h2>
          <div className="flex space-x-2 border-b border-gray-200">
            {["和食", "洋食", "中華", "その他"].map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-4 py-2 text-sm font-bold ${
                  activeTab === category
                    ? "text-orange-500 border-b-2 border-orange-500"
                    : "text-gray-600 hover:text-orange-500"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {filteredRecipes.map((recipe) => (
            <div
              key={recipe.recipeId}
              className="border rounded-lg p-2 shadow-sm hover:shadow-md transition bg-white"
            >
              <Link href={`/cooking/suggestion/${recipe.recipeId}`}>
                <img
                  src={recipe.img}
                  alt={recipe.title}
                  className="w-full h-36 object-cover rounded-lg cursor-pointer"
                />
              </Link>
              
              <div className="mt-2">
                <h3 className="text-sm font-bold text-gray-700">
                  {recipe.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
