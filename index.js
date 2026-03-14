// Maximum number used in the pattern.
// The numbers decrease toward the center until reaching 1.
const N = 4;

// The matrix size is derived from the formula (2 * N - 1)
// For N = 4, the pattern becomes a 7 × 7 square.
const size = 2 * N - 1;

// Outer loop iterates through each row of the matrix
for (let i = 0; i < size; i++) {
  let row = ""; // Stores the values for the current row

  // Inner loop iterates through each column of the matrix
  for (let j = 0; j < size; j++) {

    // Calculate the distance of the current cell from each edge
    // These values help determine which "layer" of the pattern we are in
    const top = i;                  // Distance from the top edge
    const left = j;                 // Distance from the left edge
    const bottom = size - 1 - i;    // Distance from the bottom edge
    const right = size - 1 - j;     // Distance from the right edge

    // The smallest distance determines the layer of the square
    // Outer layer -> 4, next layer -> 3, then 2, then center -> 1
    const minDistance = Math.min(top, left, bottom, right);

    // Subtract the layer distance from N to get the correct number
    // This creates the decreasing pattern toward the center
    row += (N - minDistance) + " ";
  }

  // Print the completed row after trimming the extra trailing space
  console.log(row.trim());
}