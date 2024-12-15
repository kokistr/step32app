"use client";

import { useState, useEffect } from "react";
import Link from "next/link"; 
import { Header, CookingNavBar } from "../../components/index";
import { FaHeart } from "react-icons/fa"; // ハートアイコンをインポート

export default function SuggestPage() {
  const [activeTab, setActiveTab] = useState("和食"); // 現在選択されているタブ
  const [recipes, setRecipes] = useState([]); // レシピデータの状態管理

  // レシピデータをAPIから取得するuseEffect
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch("https://tech0-gen-8-step3-app-py-14.azurewebsites.net/api/recipes");
        
        if (!response.ok) {
          throw new Error(`HTTPエラー！ステータス: ${response.status}`);
        }
  
        const data = await response.json();
        console.log(data);  // 取得したデータを確認
        setRecipes(data);
        console.log(recipes)
      } catch (error) {
        console.error("レシピデータの取得エラー:", error);
      }
    };

    fetchRecipes();
  }, []);



  // 現在選択されているタブに基づいてレシピをフィルタリング
  const filteredRecipes = recipes?.filter((recipe) => recipe.genre === activeTab) || [];

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
              key={recipe.recipeid}
              className="border rounded-lg p-2 shadow-sm hover:shadow-md transition bg-white"
            >
              {console.log(recipe.recipeid)}


              <Link href={`/cooking/suggestion/${recipe.recipeid}`}>
                <img
                  src={recipe.img.replace("public/","")}
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
