import Link from 'next/link';
import React from 'react';

interface DetailProps {
  params: {
    id: number;
    title: string;
    description: string;
    type: string;
    votes: number;
  };
}

export const Detail = ({ params }: DetailProps) => {
  return (
    <li className="bg-[#fff] flex justify-between items-center pt-[28px] pr-[38px] pb-[28px] pl-[38px] rounded-[10px] mb-[20px]">
      <div className="flex gap-[40px]">
        <div className="w-[40px] h-[53px] pt-[14px] pb-[8px] bg-[#f2f4fe] rounded-[10px]">
          <div className="pl-[16px] pr-[16px]">
            {/* Placeholder for an image */}
          </div>
          <p className="text-[#3a4374] pl-[9px] pr-[9px] text-[13px] font-[700]">{params.id}</p>
        </div>
        <div>
          <Link href={`/info/${params.id}`}>
            <h2 className="font-bold text-[18px] text-[#3a4374] mb-[4px]">{params.title}</h2>
          </Link>
          <p className="font-normal text-[16px] text-[#647196] mb-[12px]">{params.description}</p>
          <p className="bg-[#f2f4ff] inline-block rounded-[10px] pt-[5px] pr-[16px] pb-[5px] pl-[16px] font-semibold text-[13px] text-[#4661e6]">
            {params.type}
          </p>
        </div>
      </div>
      <div className="flex gap-[8px] justify-center items-center">
        {/* Placeholder for an image */}
        <p className="font-bold text-[#3a4374] text-[16px]">{params.votes}</p>
      </div>
    </li>
  );
};
