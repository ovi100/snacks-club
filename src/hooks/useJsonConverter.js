import { useEffect, useState } from "react";
import * as XLSX from "xlsx/xlsx.mjs";

export const useJsonConverter = (file) => {
  const [jsonResult, setJsonResult] = useState([]);

  useEffect(() => {
    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const data = event.target.result;
        const workbook = XLSX.read(data, { type: "binary" });
        const sheet_name_list = workbook.SheetNames;
        const sheetData = XLSX.utils.sheet_to_json(
          workbook.Sheets[sheet_name_list[0]]
        );

        setJsonResult(sheetData);
      };

      reader.readAsBinaryString(file);
    }

    return () => {
      setJsonResult(null);
    };
  }, [file]);

  return jsonResult;
};
