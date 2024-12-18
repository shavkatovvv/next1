import { Detail } from "@/components/detail";
import Image from "next/image";

export default function Info() {
  return (
    <div className="container flex gap-[30px]">
      <div className="w-[255px] pt-[94px]">
        <div
          className="bg-gradient-to-r mb-[24px] from-indigo-500 via-purple-500 to-pink-500 rounded-[10px] pt-[62px] pr-[69px] pb-[24px] pl-[24px]">
          <h1 className="font-bold text-[20px] text-[#fff]">Frontend Mentor</h1>
          <p className="font-medium text-[15px] text-[#fff]">Feedback Board</p>
        </div>
        <div className="bg-[#fff] mb-[24px] rounded-[10px] pt-[24px] pr-[35px] pb-[24px] pl-[24px]">
          <ul className="flex flex-wrap gap-[8px]">
            <li className="bg-[#4661e6] rounded-[10px] pt-[5px] pl-[16px] pr-[16px] pb-[5px]">
              <a className="font-semibold text-[13px] text-[#fff]" href="#">All</a>
            </li>
            <li className="bg-[#f2f4ff] rounded-[10px] pt-[5px] pl-[16px] pr-[16px] pb-[5px]">
              <a className="font-semibold text-[13px] text-[#4661e6]" href="#">UI</a>
            </li>
            <li className="bg-[#f2f4ff] rounded-[10px] pt-[5px] pl-[16px] pr-[16px] pb-[5px]">
              <a className="font-semibold text-[13px] text-[#4661e6]" href="#">UX</a>
            </li>
            <li className="bg-[#f2f4ff] rounded-[10px] pt-[5px] pl-[16px] pr-[16px] pb-[5px]">
              <a className="font-semibold text-[13px] text-[#4661e6]" href="#">Enhancement</a>
            </li>
            <li className="bg-[#f2f4ff] rounded-[10px] pt-[5px] pl-[16px] pr-[16px] pb-[5px]">
              <a className="font-semibold text-[13px] text-[#4661e6]" href="#">Bug</a>
            </li>
            <li className="bg-[#f2f4ff] rounded-[10px] pt-[5px] pl-[16px] pr-[16px] pb-[5px]">
              <a className="font-semibold text-[13px] text-[#4661e6]" href="#">Feature</a>
            </li>
          </ul>
        </div>
        <div className="bg-[#fff] mb-[24px] rounded-[10px] pt-[24px] pr-[24px] pb-[24px] pl-[24px]">
          <div className="flex justify-between items-center mb-[24px]">
            <h2 className="font-bold text-[18px] text-[#3a4374]">Roadmap</h2>
            <a className="font-semibold text-[13px] underline text-[#4661e6]" href="#">View</a>
          </div>
          <ul>
            <li className="flex justify-between mb-[8px]">
              <div className="flex gap-[16px] items-center">
                <p className="w-[8px] h-[8px] bg-[#f49f85] rounded-[100%] inline-block"></p>
                <p className="font-normal text-[16px] text-[#647196]">Planned</p>
              </div>
              <p className="font-bold text-[16px] text-[#647196]">2</p>
            </li>
            <li className="flex justify-between mb-[8px]">
              <div className="flex gap-[16px] items-center">
                <p className="w-[8px] h-[8px] bg-[#f49f85] rounded-[100%] inline-block"></p>
                <p className="font-normal text-[16px] text-[#647196]">Planned</p>
              </div>
              <p className="font-bold text-[16px] text-[#647196]">2</p>
            </li>
            <li className="flex justify-between mb-[8px]">
              <div className="flex gap-[16px] items-center">
                <p className="w-[8px] h-[8px] bg-[#f49f85] rounded-[100%] inline-block"></p>
                <p className="font-normal text-[16px] text-[#647196]">Planned</p>
              </div>
              <p className="font-bold text-[16px] text-[#647196]">2</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-[825px] pt-[94px]">
        <div
          className="mb-[24px] bg-[#373f68] rounded-[10px] pt-[14px] pr-[16px] pb-[14px] pl-[63px] flex justify-between items-center">
          <div className="flex gap-[38px] items-center">
            <p className="font-bold text-[18px] text-[#fff]">6 Suggestions</p>
            <a className="font-bold text-[14px] text-[#f2f4fe]" href="#"><span className="font-normal">Sort by:</span>
              Most Upvotes</a>
          </div>
          <div>
            <button
              className="font-bold text-[14px] text-[#f2f4fe] bg-[#ad1fea] rounded-[10px] pt-[12px] pr-[24px] pb-[12px] pl-[24px]"
              type="button">+ Add Feedback</button>
          </div>
        </div>
        <ul>
            <Detail params={{id: 112, title: "New feedback feature", description: "Allow users to add new feedback and ratings", type: "Feature", votes: 2}}/>
        </ul>
      </div>
    </div>
  );
}
