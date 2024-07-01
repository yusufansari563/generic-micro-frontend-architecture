// src/components/VirtualizedTable.tsx
import React, { useState, useEffect, useRef, memo, useCallback } from "react";
import { FixedSizeGrid as Grid, GridChildComponentProps } from "react-window";

const fetchData = (
  rowIndex: number,
  columnIndex: number,
  sheet: any
): string => {
  const key = `R${rowIndex}C${columnIndex}`;
  const data = sheet[key];
  return data || `R${rowIndex}C${columnIndex}`;
};

interface CellData {
  rowIndex: number;
  columnIndex: number;
  data: string;
}

interface CellProps extends GridChildComponentProps {
  setFocus: (row: number, col: number) => void;
  isFocused: boolean;
  setExcelData: (args: any) => void;
  excelData?: any;
}

const Cell: React.FC<CellProps> = memo(
  ({
    columnIndex,
    rowIndex,
    style,
    setFocus,
    isFocused,
    setExcelData,
    excelData,
  }) => {
    const [cellData, setCellData] = useState<string>(
      fetchData(rowIndex, columnIndex, excelData)
    );
    const inputRef = useRef<HTMLInputElement>(null);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newData = event.target.value;
      setCellData(newData);
      setExcelData({
        ...excelData,
        ["R" + rowIndex + "C" + columnIndex]: newData,
      });
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
      switch (event.key) {
        case "ArrowUp":
          setFocus(rowIndex - 1, columnIndex);
          break;
        case "ArrowDown":
          setFocus(rowIndex + 1, columnIndex);
          break;
        case "ArrowLeft":
          setFocus(rowIndex, columnIndex - 1);
          break;
        case "ArrowRight":
          setFocus(rowIndex, columnIndex + 1);
          break;
        default:
          break;
      }
    };

    useEffect(() => {
      if (isFocused && inputRef.current) {
        inputRef.current.focus();
      }
    }, [isFocused]);

    return (
      <div
        style={{
          ...style,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid #ccc",
        }}
      >
        <input
          ref={inputRef}
          type="text"
          value={cellData}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          style={{
            width: "100%",
            height: "100%",
            boxSizing: "border-box",
            textAlign: "center",
          }}
        />
      </div>
    );
  }
);

const VirtualizedTable: React.FC = () => {
  const [focus, setFocus] = useState<{ rowIndex: number; columnIndex: number }>(
    { rowIndex: 0, columnIndex: 0 }
  );

  const [excelData, setExcelData] = useState<any>({});

  const handleSetFocus = (rowIndex: number, columnIndex: number) => {
    setFocus({ rowIndex, columnIndex });
  };

  const cellRenderer = useCallback(
    (props: GridChildComponentProps) => {
      const { rowIndex, columnIndex } = props;
      const isFocused =
        rowIndex === focus.rowIndex && columnIndex === focus.columnIndex;

      return (
        <Cell
          {...props}
          setFocus={handleSetFocus}
          setExcelData={setExcelData}
          excelData={excelData}
          isFocused={isFocused}
        />
      );
    },
    [focus]
  );

  return (
    <Grid
      columnCount={1000}
      columnWidth={100}
      height={600}
      rowCount={100000}
      rowHeight={35}
      width={1000}
      initialScrollTop={focus.rowIndex * 35}
      initialScrollLeft={focus.columnIndex * 100}
    >
      {cellRenderer}
    </Grid>
  );
};

export default VirtualizedTable;
