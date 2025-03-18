function mergeTwoLists(list1, list2, n) {
  const resualt = Array(n);
  let indexOfList1 = list1.length - 1;
  let indexOfList2 = list2.length - 1;
  let ineration = 0;
  let countOfAddedElemFromList1 = 1;
  let countOfAddedElemFromList2 = 1;

  while (resualt[0] === undefined) {
    ineration++;

    if (list1[indexOfList1].id > list2[indexOfList2].id) {
      resualt[n - ineration] = list1[indexOfList1];
      indexOfList1 = list1.length - 1 - countOfAddedElemFromList1;
      countOfAddedElemFromList1++;
    } else {
      resualt[n - ineration] = list2[indexOfList2];
      indexOfList2 = list2.length - 1 - countOfAddedElemFromList2;
      countOfAddedElemFromList2++;
    }
  }
  return resualt;
}

const list1 = [
  { id: 2, value: "A" },
  { id: 4, value: "B" },
  { id: 14, value: "C" },
  { id: 16, value: "D" },
  { id: 23, value: "E" },
  { id: 32, value: "F" },
];

const list2 = [
  { id: 1, value: "X" },
  { id: 3, value: "Y" },
  { id: 15, value: "Z" },
  { id: 20, value: "W" },
  { id: 26, value: "V" },
  { id: 30, value: "U" },
];

mergeTwoLists(list1, list2, 5);
