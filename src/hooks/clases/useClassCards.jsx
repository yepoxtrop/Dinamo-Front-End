import { useEffect, useState } from "react";

export function useClassCards(classAsig) {
  const [baseClass, setBaseClass] = useState("");

  useEffect(() => {
    if (!classAsig) {
      setBaseClass("card-normal-gray");
      return;
    }

    const arrayList = classAsig.split("-");

    if (arrayList.length < 2) {
      setBaseClass("card-normal-gray");
      return;
    }

    if (arrayList[arrayList.length - 3] === "uniform") {
      const sufijo = `${arrayList[arrayList.length - 2]}-${arrayList[arrayList.length - 1]}`;
      setBaseClass(sufijo);
    } else if (arrayList[arrayList.length - 3] === "circle") {
      const sufijo = `${arrayList[arrayList.length - 3]}-${arrayList[arrayList.length - 2]}-${arrayList[arrayList.length - 1]}`;
      setBaseClass(sufijo);
    }
  }, [classAsig]);

  return baseClass;
}
