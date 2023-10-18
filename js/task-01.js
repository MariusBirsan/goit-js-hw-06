console.log(
  `Number of categories: ${
    document.getElementById("categories").childElementCount
  }`
);

console.log("\n");

const itemsList = document.getElementsByClassName("item");

for (let i = 0; i < itemsList.length; ++i) {
  console.log(`Category: ${itemsList[i].querySelector("h2").innerHTML}`);
  console.log(
    `Elements: ${itemsList[i].querySelector("ul").childElementCount} \n`
  );
  console.log("\n");
}
