import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ items = [] }) => {
  if (!items || items.length === 0) return null;

  return (
    <nav className="flex items-center flex-wrap gap-x-2 text-[13px] font-medium tracking-wide mb-4 select-none bg-transparent">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div key={index} className="flex items-center gap-x-2">
            {isLast ? (
              // Mục hiện tại: Chữ mềm mại, màu sắc sẫm tinh tế
              <span className="text-[#073F6E] font-semibold">
                {item.label}
              </span>
            ) : (
              // Mục cấp cha: Màu mờ nhẹ thanh lịch, hover đổi màu xanh green mượt mà
              <Link
                to={item.path}
                className="text-slate-400 hover:text-[#3ea54a] transition-colors duration-200"
              >
                {item.label}
              </Link>
            )}

            {/* Dấu phân cách dùng ký tự mảnh hoặc thanh lịch, có màu mờ tinh tế */}
            {!isLast && (
              <span className="text-slate-300 font-light text-xs shrink-0 px-0.5">
                /
              </span>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
