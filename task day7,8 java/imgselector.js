// task 1 a - Find all images in page 

// furst:document.images (default collection)
 img1 = document.images;
console.log("Images using document.images:", img1);

// second:document.getElementsByTagName()
 img2 = document.getElementsByTagName("img");
console.log("Images using getElementsByTagName:", img2);


// b - Find all options for City drop down list
 citySelect = document.getElementById("city");
 cityOptions = citySelect.options;
console.log("City options:", cityOptions);


// c - Find all rows for second table in page
 allTables = document.getElementsByTagName("table");
 secondTable = allTables[1];
 rowsInSecondTable = secondTable.getElementsByTagName("tr");
console.log("Rows in second table:", rowsInSecondTable);


// d - Find all elements that contain class name fontBlue
 blueElements = document.getElementsByClassName("fontBlue");
console.log("Elements with class fontBlue:", blueElements);
