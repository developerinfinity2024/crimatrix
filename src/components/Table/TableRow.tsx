import React from "react";

interface Props {
  Data: string[];
}

const TableRow: React.FC<Props> = ({ Data }) => {
  const columnsNumber = Data.length;

  return (
    <tr
      className={`grid grid-cols-${columnsNumber} gap-4 justify-between bg-white rounded-md my-4 w-full py-4 px-4 items-center border border-[textDark]`}
    >
      {Data.map((item, index) => {
        const isFirstElement = index === 0;
        const isLastElement = index === columnsNumber - 1;
        const textAlignClass = isFirstElement
          ? "text-left"
          : isLastElement
          ? "text-center"
          : "text-center";

        return (
          <td className={`font-medium ${textAlignClass}`} key={item}>
            {item}
          </td>
        );
      })}
    </tr>
  );
};

export default TableRow;
