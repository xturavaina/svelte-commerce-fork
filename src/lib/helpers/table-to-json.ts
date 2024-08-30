import { JSDOM } from "jsdom";

function tableToJSON<
  T extends boolean,
  R = T extends true ? Record<string, string> : string[][],
>(tableStr: string, namedExtraction: T): R {
  const domItem = new JSDOM(tableStr);
  const table = domItem.window.document.querySelector("table");
  if (table === null) {
    throw new Error("No table available");
  }

  const rows = table.rows;

  const jsonArr: string[][] = [];

  for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
    jsonArr[rowIndex] = [];
    const row = rows.item(rowIndex);
    if (row === null) {
      continue;
    }

    const cells = row.cells;

    for (let cellIndex = 0; cellIndex < cells.length; cellIndex++) {
      const cell = cells.item(cellIndex);
      if (cell === null) {
        continue;
      }

      let data = cell.textContent ?? "";

      if (data.trim().length === 0) {
        const img = cell.querySelector("img");
        if (img !== null) {
          data = img.src;
        }
      }

      jsonArr[rowIndex].push(data);
    }
  }

  if (!namedExtraction) {
    return jsonArr as R;
  }

  const headers = jsonArr.shift();

  const namedJSONData: Record<string, string>[] = [];

  if (headers) {
    for (
      let dataSetCounter = 0;
      dataSetCounter < jsonArr.length;
      dataSetCounter++
    ) {
      const textArrData = jsonArr[dataSetCounter];
      namedJSONData[dataSetCounter] = {};

      for (
        let cellCounter = 0;
        cellCounter < textArrData.length;
        cellCounter++
      ) {
        namedJSONData[dataSetCounter][headers[cellCounter]] =
          textArrData[cellCounter];
      }
    }
    return namedJSONData as R;
  }

  return [] as R;
}

export default tableToJSON;
