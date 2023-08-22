const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const tableBody = document.getElementById("inventors-table-body");

inventors.forEach((inventor) => {
  const row = document.createElement("tr");
  row.innerHTML = `
      <td>${inventor.first}</td>
      <td>${inventor.last}</td>
      <td>${inventor.year}</td>
      <td>${inventor.passed}</td>
    `;
  tableBody.appendChild(row);
});

const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];

const tableBody1 = document.getElementById("people-table-body");

people.forEach((person) => {
  const [lastName, firstName] = person.split(", ");
  const row = document.createElement("tr");
  row.innerHTML = `
      <td>${lastName}</td>
      <td>${firstName}</td>
    `;
  tableBody1.appendChild(row);
});

//born in 1500s

const inventorsBornIn1500s = inventors.filter(
  (inventor) => inventor.year >= 1500 && inventor.year < 1600
);

const inventorsList = document.getElementById("inventors-list");

inventorsBornIn1500s.forEach((inventor) => {
  const listItem = document.createElement("li");
  listItem.textContent = `${inventor.first} ${inventor.last} (${inventor.year}-${inventor.passed})`;
  inventorsList.appendChild(listItem);
});

//inventors name list

const inventorNames = inventors.map(
  (inventor) => `${inventor.first} ${inventor.last}`
);

const inventorNamesList = document.getElementById("inventors-names-list");

inventorNames.forEach((name) => {
  const listItem = document.createElement("li");
  listItem.textContent = name;
  inventorNamesList.appendChild(listItem);
});

//inventorsSortedByBirthdate
const inventorsSortedByBirthdate = inventors.sort((a, b) => a.year - b.year);

const sortedInventorsList = document.getElementById("inventors-sorted-list");

inventorsSortedByBirthdate.forEach((inventor) => {
  const listItem = document.createElement("li");
  listItem.textContent = `${inventor.first} ${inventor.last} (${inventor.year}-${inventor.passed})`;
  sortedInventorsList.appendChild(listItem);
});

//Total Years
const totalYearsLived = inventors.reduce(
  (total, inventor) => total + (inventor.passed - inventor.year),
  0
);

const totalYearsLivedElement = document.getElementById("total-years-lived");
totalYearsLivedElement.textContent = `Total Years Lived by Inventors: ${totalYearsLived}`;


//Years Lived by Inventors

  const inventorsSortedByYearsLived = inventors.sort((a, b) => (a.passed - a.year) - (b.passed - b.year));

  const sortedByYearsLivedList = document.getElementById("inventors-sorted-by-years-lived");

  inventorsSortedByYearsLived.forEach(inventor => {
    const listItem = document.createElement("li");
    listItem.textContent = `${inventor.first} ${inventor.last} (Years Lived: ${inventor.passed - inventor.year})`;
    sortedByYearsLivedList.appendChild(listItem);});

// InstancesCount

 const data = [
    "car",
    "car",
    "truck",
    "truck",
    "bike",
    "walk",
    "car",
    "van",
    "bike",
    "walk",
    "car",
    "van",
    "car",
    "truck",
  ];

  const instancesCount = data.reduce((count, item) => {
    if (!count[item]) {
      count[item] = 1;
    } else {
      count[item]++;
    }
    return count;
  }, {});

  const instancesCountList = document.getElementById("instances-count-list");

  for (const item in instancesCount) {
    const listItem = document.createElement("li");
    listItem.textContent = `${item}: ${instancesCount[item]} instances`;
    instancesCountList.appendChild(listItem);
  }

  
  //sort people by Last Name

  const sortedPeopleByLastName = people.sort((a, b) => {
    const [lastA, firstA] = a.split(', ');
    const [lastB, firstB] = b.split(', ');
    return lastA.localeCompare(lastB);
  });

  const sortedPeopleList = document.getElementById("people-sorted-list");

  sortedPeopleByLastName.forEach(person => {
    const listItem = document.createElement("li");
    listItem.textContent = person;
    sortedPeopleList.appendChild(listItem);
  });