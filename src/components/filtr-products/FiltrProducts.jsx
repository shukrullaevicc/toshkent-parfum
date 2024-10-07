import { Menu } from "antd";
import { useState } from "react";

const FiltrProducts = () => {
  const [selectedKey, setSelectedKey] = useState("1");

  const handleMenuClick = (e) => {
    setSelectedKey(e.key);
  };

  return (
    <div className="max-w-[300px] bg-white p-4 rounded-xl shadow-md">
      <div className="text-center mb-4">
         <h2 className="text-lg font-bold text-[#f62559]">Filtr</h2>
      </div>

      <Menu
         theme="light"
         mode="inline"
         className="rounded-xl"
         defaultSelectedKeys={[selectedKey]}
         onClick={handleMenuClick}
         items={[
            {
               key: "1",
               label: ( <span className={`${selectedKey === "1" ? "text-[#f62559] font-bold" : ""}`}> Barcha mahsulotlar </span> ),
            },
            {
               key: "2",
               label: ( <span className={`${selectedKey.startsWith("2") ? "text-[#f62559] font-bold" : ""}`}>Go'zallik</span> ),
               children: [
               {
                  key: "2-1",
                  label: ( <span className={`${selectedKey === "2-1" ? "text-[#f62559] font-bold" : ""}`}>Yuz uchun</span>),
               },
               {
                  key: "2-2",
                  label: ( <span className={`${selectedKey === "2-2" ? "text-[#f62559] font-bold" : ""}`}>Ko'zlar uchun</span>),
               },
               {
                  key: "2-3",
                  label: (<span className={`${selectedKey === "2-3" ? "text-[#f62559] font-bold" : ""}`}>Lablar uchun</span>),
               },
               {
                  key: "2-4",
                  label: ( <span className={`${selectedKey === "2-4" ? "text-[#f62559] font-bold" : ""}`}>Qoshlar uchun</span> ),
               },
               {
                  key: "2-5",
                  label: ( <span className={`${selectedKey === "2-5" ? "text-[#f62559] font-bold" : ""}`}>Tirnoqlar uchun</span> ),
               },
               ],
            },
            {
               key: "3",
               label: ( <span className={`${selectedKey.startsWith("3") ? "text-[#f62559] font-bold" : ""}`}>Atirlar</span> ),
               children: [
               {
                  key: "3-1",
                  label: ( <span className={`${selectedKey === "3-1" ? "text-[#f62559] font-bold" : ""}`}>Erkak uchun</span> ),
               },
               {
                  key: "3-2",
                  label: ( <span className={`${selectedKey === "3-2" ? "text-[#f62559] font-bold" : ""}`}>Ayollar uchun</span> ),
               },
               ],
            },
            {
               key: "4",
               label: ( <span className={`${selectedKey === "4" ? "text-[#f62559] font-bold" : ""}`}>Bolalar bo'limi</span> ),
            },
            {
               key: "5",
               label: ( <span className={`${selectedKey === "5" ? "text-[#f62559] font-bold" : ""}`}>Dezodorantlar va antiperspirantlar</span> ),
            },
            {
               key: "6",
               label: ( <span className={`${selectedKey === "6" ? "text-[#f62559] font-bold" : ""}`}>Maishiy kimyoviy moddalar va gigiyena vositalari</span> ),
            },
            {
               key: "7",
               label: ( <span className={`${selectedKey === "7" ? "text-[#f62559] font-bold" : ""}`}>Sumkalar</span> ),
            },
            {
               key: "8",
               label: ( <span className={`${selectedKey === "8" ? "text-[#f62559] font-bold" : ""}`}>Ozdiruvchi mahsulotlar va kollagenlar</span> ),
            },
            {
               key: "9",
               label: ( <span className={`${selectedKey === "9" ? "text-[#f62559] font-bold" : ""}`}>Sovg'ali to'plamlar</span> ),
            },
         ]}
      />
    </div>
  );
};

export default FiltrProducts;