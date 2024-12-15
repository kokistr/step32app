"use client";

import { Header } from '../../components/index';
import { CookingNavBar } from '../../components/index';
import { DraggableImage } from '../../components/index';
import { useState, useEffect } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { FaTrashAlt } from "react-icons/fa"; // ゴミ箱アイコンをインポート
import { useRouter } from 'next/navigation'; // useRouter をインポート
import { FaHeart } from "react-icons/fa"; // ハートアイコンをインポート
import axios from 'axios'; // axios をインポートしてAPIリクエストを送る

// ドラッグ＆ドロップ用のアイテムタイプを定義
const ItemTypes = {
  IMAGE: "image",
};

export default function CalendarPage() {
  const router = useRouter();

  const [recipeData, setRecipeData] = useState([]);
  const [calendarData, setCalendarData] = useState({});

  useEffect(() => {
    // APIからレシピデータを取得
    axios.get("https://tech0-gen-8-step3-app-py-14.azurewebsites.net/api/recipes")
      .then((response) => {
        const fetchedRecipes = response.data.map((item) => ({
          ...item,
          src: item.img.replace("/public", ""), // 画像URLを修正
         }));
        console.log(response)
        console.log(fetchedRecipes)
        setRecipeData(fetchedRecipes);
        console.log(recipeData)


        // カレンダーに表示するデータを初期化
        const initialCalendarData = fetchedRecipes
          .filter(item => item.onCalendar)
          .reduce((acc, item) => {
            acc[item.calendarDate] = item.src;
            return acc;
          }, {});
        setCalendarData(initialCalendarData);
      })
      .catch((error) => {
        console.error("API request failed:", error);
      });
  }, []); // 初回レンダリング時にAPIリクエストを送る

  const candidates = recipeData.filter(item => item.onCandidate).map(item => ({
    id: item.id,
    src: item.src,
    onFavorite: item.onFavorite,
    isFavorite: item.onFavorite
  }));

  const favorites = recipeData.filter(item => item.onFavorite).map(item => ({
    id: item.id,
    src: item.src,
    onFavorite: item.onFavorite,
    isFavorite: item.onFavorite
  }));

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const CalendarCell = ({ date, imageSrc, onDropImage, onDeleteImage, isSunday, isSaturday }) => {
    const [, drop] = useDrop(() => ({
      accept: ItemTypes.IMAGE,
      drop: (item) => onDropImage(date, item.src),
    }));

    const handleDoubleClick = (id) => {
      router.push(`/cooking/suggestion/${id}`);
    };

    return (
      <div
        ref={drop}
        className={`border rounded-lg h-24 flex flex-col items-center justify-center relative ${date === "18" ? "bg-orange-100" : ""}`}
      >
        <div
          className={`absolute top-1 left-1 text-xs ${isSunday ? "text-red-500" : isSaturday ? "text-blue-500" : "text-black"}`}
        >
          {date}
        </div>
        {imageSrc ? (
          <div className="relative mt-2">
            <img
              src={imageSrc}
              alt={`Dish for ${date}`}
              className="w-16 h-16 rounded-lg"
              onDoubleClick={() => handleDoubleClick(recipeData.find(item => item.src === imageSrc)?.id)}
            />

            <button
              onClick={() => onDeleteImage(date, imageSrc)}
              className="absolute bottom-0 right-0 text-gray-300 p-1"
            >
              <FaTrashAlt />
            </button>

            <button
              onClick={() => toggleFavorite(imageSrc)}
              className="absolute top-0 right-0 text-red-500 p-1"
            >
              <FaHeart
                className={
                  recipeData.find((item) => item.src === imageSrc)?.onFavorite
                    ? "text-red-500"
                    : "text-gray-400"
                }
              />
            </button>
          </div>
        ) : (
          <div className="w-16 h-16 flex items-center justify-center text-xs text-gray-400">
            -
          </div>
        )}
      </div>
    );
  };

  const handleDropImage = (date, src) => {
    setCalendarData((prev) => ({
      ...prev,
      [date]: src,
    }));

    setRecipeData((prevData) =>
      prevData.map((item) => {
        if (item.src === src) {
          return {
            ...item,
            onCalendar: true,
            calendarDate: date,
          };
        }
        return item;
      })
    );
  };

  // ハートマークを切り替える関数
  const toggleFavorite = (src) => {
    setRecipeData((prevData) =>
      prevData.map((item) => {
        if (item.src === src) {
          return { ...item, onFavorite: !item.onFavorite };
        }
        return item;
      })
    );
  };

  const handleDeleteImage = (date, imageSrc) => {
    setCalendarData((prev) => {
      const newData = { ...prev };
      delete newData[date];
      return newData;
    });

    setRecipeData((prevData) =>
      prevData.map((item) => {
        if (item.src === imageSrc) {
          return {
            ...item,
            onCalendar: false,
            onCandidate: true,
          };
        }
        return item;
      })
    );
  };

  const handleDeleteFromCandidate = (src) => {
    setRecipeData((prevData) =>
      prevData.map((item) => {
        if (item.src === src) {
          return { ...item, onCandidate: false };
        }
        return item;
      })
    );
  };

  const handleDeleteFromFavorite = (src) => {
    setRecipeData((prevData) =>
      prevData.map((item) => {
        if (item.src === src) {
          return { ...item, onFavorite: false };
        }
        return item;
      })
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <CookingNavBar />

        <section className="white-container">
          <h2 className="text-lg font-bold mb-4">2024 December</h2>
          <div className="grid grid-cols-7 gap-2 text-center text-sm">
            {daysOfWeek.map((day, index) => (
              <div
                key={index}
                className={`py-2 font-bold text-white ${index === 0 ? "bg-red-500" : index === 6 ? "bg-blue-500" : "bg-gray-500"}`}
              >
                {day}
              </div>
            ))}
            {Array.from({ length: 31 + new Date(2024, 11, 1).getDay() }, (_, i) => {
              if (i < new Date(2024, 11, 1).getDay()) {
                return <div key={i}></div>;
              }
              const date = (i - new Date(2024, 11, 1).getDay() + 1).toString();
              const dayOfWeek = (i % 7);
              return (
                <CalendarCell
                  key={date}
                  date={date}
                  imageSrc={calendarData[date]}
                  onDropImage={handleDropImage}
                  onDeleteImage={handleDeleteImage}
                  isSunday={dayOfWeek === 0}
                  isSaturday={dayOfWeek === 6}
                />
              );
            })}
          </div>
        </section>

        <section className="white-container mt-6">
          <h2 className="text-lg font-bold mb-4">Candidate</h2>
          <div className="flex space-x-4">
            {candidates.map((candidate) => (
              <div key={candidate.id} className="flex items-center justify-center">
                <DraggableImage
                  id={candidate.id}
                  src={candidate.src}
                  onDelete={() => handleDeleteFromCandidate(candidate.src)}
                  onFavorite={() => toggleFavorite(candidate.src)}
                  isFavorite={candidate.isFavorite}
                />
              </div>
            ))}
          </div>
        </section>

        <section className="white-container mt-6">
          <h2 className="text-lg font-bold mb-4">Favorite</h2>
          <div className="flex space-x-4">
            {favorites.map((favorite) => (
              <div key={favorite.id} className="flex items-center justify-center">
                <DraggableImage
                  id={favorite.id}
                  src={favorite.src}
                  onDelete={() => handleDeleteFromFavorite(favorite.src)}
                  onFavorite={() => toggleFavorite(favorite.src)}
                  isFavorite={favorite.isFavorite}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </DndProvider>
  );
}
