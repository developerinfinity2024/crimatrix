import React from "react";

interface TableHeaderProps {
  columns: string[];
}

const TableHeader: React.FC<TableHeaderProps> = ({ columns }) => {
  const columnsNumber = columns.length;
  return (
    <article className="bg-white rounded-md my-4 w-full py-2 px-4">
      <tr className={`grid grid-cols-${columnsNumber}`}>
        {columns.map((column, index) => {
          const isFirstElement = index === 0;
          const isLastElement = index === columnsNumber - 1;
          const textAlignClass = isFirstElement
            ? "text-left"
            : isLastElement
            ? "text-center"
            : "";

          return (
            <th className={`font-medium ${textAlignClass}`} key={column}>
              {column}
            </th>
          );
        })}
      </tr>
    </article>
  );
};

export default TableHeader;
