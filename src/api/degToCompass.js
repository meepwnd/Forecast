export const windDirection = num => {
  var val = Math.floor(num / 22.5 + 0.5);
  var arr = [
    "North",
    "North/NorthEast",
    "NorthEast",
    "East/NorthEast",
    "East",
    "East/SouthEast",
    "SouthEast",
    "South/SouthEast",
    "South",
    "South/SouthWest",
    "SouthWest",
    "West/SouthWest",
    "West",
    "West/NorthWest",
    "NorthWest",
    "North/NorthWest"
  ];
  return arr[val % 16];
};
