import React from "react";

const FormTwo = () => {
  return (
    <div
      className="w-[297mm] h-[210mm] bg-white p-2 mx-auto font-sans text-sm relative"
      dir="rtl"
    >
      {/* Header */}
      <div className="flex mb-1 p-4">
        <div className="text-sm text-right leading-tight absolute right-2">
          <h6 className="text-base">
            استناد الى.....................المرقم......................والمؤرخ
          </h6>
          <h6 className="text-base">
            جهزت
            الى.....................................................................
          </h6>
          <h6 className="text-base">
            وارسلت
            بواسطة.........................................................
          </h6>
        </div>

        <div className="w-24 h-24 mx-2 flex-grow flex flex-col items-center justify-center font-bold">
          <h6 className="text-base">أمانة بغداد </h6>
          <h6 className="text-base">مديرية المخازن</h6>
          <h6 className="text-base">استمارة تجهيز المواد المخزنية</h6>
        </div>

        <div className="text-sm absolute left-2">
          <div>
            <div className="">نموذج رقم(79)</div>
            <div className="">استمارة ب/101</div>
            <div className="">ط 2</div>
            <div className="">No: 0479101</div>
            <div className="">التاريخ 01/01/2023</div>
          </div>
        </div>
      </div>

      {/* table */}
      <div className="mb-1">
        <table className="w-full border-collapse">
          <thead>
            <tr className="grid grid-cols-10">
              <th className="border border-black p-1 text-xs bg-gray-300">
                رقم المصطلح
              </th>
              <th className="border border-black p-1 text-xs col-span-2 bg-gray-300">
                الكمية
                <div className="flex justify-between px-4">
                  <span>رقما</span>
                  <span>كتابة</span>
                </div>
              </th>
              <th className="border border-black p-1 text-xs bg-gray-300">
                الوحدة القياسية
              </th>
              <th className="border border-black p-1 text-xs col-span-2 bg-gray-300">
                اسم المادة
              </th>

              <th className="border border-black p-1 text-xs col-span-2 bg-gray-300">
                السعر
                <div className="flex justify-between px-4">
                  <span>فلس</span>
                  <span>دينار</span>
                </div>
              </th>
              <th className="border border-black p-1 text-xs col-span-2 bg-gray-300">
                الثمن
                <div className="flex justify-between px-4">
                  <span>فلس</span>
                  <span>دينار</span>
                </div>
              </th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {Array(10)
              .fill(0)
              .map((_, index) => (
                <tr key={index} className="grid grid-cols-10">
                  <td className="border border-black p-1 text-xs text-center break-words h-10"></td>
                  <td className="border border-black p-1 text-xs text-center break-words h-10"></td>
                  <td className="border border-black p-1 text-xs text-center break-words h-10"></td>
                  <td className="border border-black p-1 text-xs text-center break-words h-10"></td>
                  <td className="border border-black p-1 text-xs text-center break-words col-span-2 h-10"></td>
                  <td className="border border-black p-1 text-xs text-center break-words h-10"></td>
                  <td className="border border-black p-1 text-xs text-center break-words h-10"></td>
                  <td className="border border-black p-1 text-xs text-center break-words h-10"></td>
                  <td className="border border-black p-1 text-xs text-center break-words h-10"></td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* footer */}
      <div className="flex mb-1 p-4">
        <div className="text-sm text-right leading-tight absolute right-2">
          <h6 className="text-base">
            جهزت من قبل .......................................................
          </h6>
          <h6 className="text-base">
            بأشراف ملاحظ المخزن.........................................
          </h6>
        </div>

        <div className="w-24 h-24 mx-2 flex-grow flex flex-col items-center justify-center ">
          <h6 className="text-base">
            توقيع المستلم...................................
          </h6>
          <h6 className="text-base">
            اسم المستلم........................................
          </h6>
          <h6 className="text-base">
            عنوان وظيفته.......................................
          </h6>
          <h6 className="text-base">
            التاريخ....................................................
          </h6>
        </div>

        <div className="text-sm absolute left-2">
          <div className="">
            صدرت في الكارتات من
            قبل......................................................................
          </div>
          <div className="">
            صدرت في سجلات شعبة حسابات المخازن من
            قبل...............................
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormTwo;
