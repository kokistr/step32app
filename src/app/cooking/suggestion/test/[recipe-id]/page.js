"use client";

import { useRouter } from 'next/navigation';
import { Header, CookingNavBar } from "../../../../components/index";
import { useState, useEffect } from "react";



export default function RecipeDetailPage({ params }) {
  
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
      } catch (error) {
        console.error("レシピデータの取得エラー:", error);
      }
    };

    fetchRecipes();
  }, []);
  
  // const recipeId = Number(params["recipe-id"]); // paramsからURLパラメータを取得し数値に変換
  // const recipe = recipes.find((r) => r.recipeId === recipeId);

  const recipeid = Number(params["recipe-id"]); // paramsからURLパラメータを取得し数値に変換
  const recipe = recipes.find((r) => r.recipeid === recipeid);


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
              src={recipe.img.replace("/public", "")}
              alt={recipe.title}
              className="w-full h-56 object-cover rounded-md mb-4"
            />
            <p className="text-gray-600">{recipe.description}</p>
          </div>

          {/* 材料 */}
          <h2 className="text-md font-semibold mb-2">【材料】</h2>
          <ul className="grid grid-cols-2 gap-2 mb-6">
            {(() => {
              let ingredientsList = [];
              try {
                // JSON文字列をパース
                ingredientsList = JSON.parse(recipe.ingredients);
              } catch (error) {
                console.error("ingredientsのパースに失敗しました:", error);
              }
              console.log(ingredientsList)
              return Array.isArray(ingredientsList) ? (
                ingredientsList.map((ingredient, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-orange-500" />
                    <span className="text-gray-700">
                      {ingredient.name} : {ingredient.quantity}
                    </span>
                  </li>
                ))
              ) : (
                <p>材料情報が正しくありません。</p>
              );
            })()}
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
          {/* <h2 className="text-md font-semibold mb-2">作り方</h2>
          <ol className="list-decimal list-inside space-y-2 mb-6 text-gray-700">
            {recipe.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol> */}

          {/* 作り方 */}
          <h2 className="text-md font-semibold mb-2">作り方</h2>
          <ol className="list-decimal list-inside space-y-2 mb-6 text-gray-700">
            {(() => {
              let stepsList = [];
              try {
                // JSON文字列または配列を判定しパース
                stepsList = Array.isArray(recipe.steps) ? recipe.steps : JSON.parse(recipe.steps);
              } catch (error) {
                console.error("stepsのパースに失敗しました:", error);
              }
              console.log(stepsList); // デバッグ用
              return Array.isArray(stepsList) ? (
                stepsList.map((step, index) => (
                  <li key={index}>{step}</li>
                ))
              ) : (
                <p>作り方の情報が正しくありません。</p>
              );
            })()}
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