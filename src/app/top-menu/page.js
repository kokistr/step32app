import {Header} from '../components/index'
import {CookingNavBar} from '../components/index'

export default function TopMenu() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-white">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 container mx-auto p-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="flex flex-col items-center">
          <a href="/cooking" className="w-full">
            <h2 className="text-lg font-bold text-orange-500 mb-4 text-center">
              Cooking
            </h2>
            <img
              src="/images/HappyCooking.jpg"
              alt="Cooking"
              className="rounded-lg shadow-md hover:shadow-lg transition w-full"
            />
          </a>
        </div>
        <div className="flex flex-col items-center">
          {/* <a href="/health" className="w-full"> */}    {/* 未実装 */}
          <a href="/under-construction" className="w-full">   {/* 未実装 */}
            <h2 className="text-lg font-bold text-orange-500 mb-4 text-center">
              Health
            </h2>
            <img
              src="/images/FamilyHealth.jpg"
              alt="Health"
              className="rounded-lg shadow-md hover:shadow-lg transition w-full"
            />
          </a>
        </div>
        <div className="flex flex-col items-center">
          {/* <a href="/shopping" className="w-full"> */}    {/* 未実装 */}
          <a href="/under-construction" className="w-full">    {/* 未実装 */}
            <h2 className="text-lg font-bold text-orange-500 mb-4 text-center">
              Shopping
            </h2>
            <img
              src="/images/FamilyShopping.jpg"
              alt="Shopping"
              className="rounded-lg shadow-md hover:shadow-lg transition w-full"
            />
          </a>
        </div>
      </main>
    </div>
  );
}

