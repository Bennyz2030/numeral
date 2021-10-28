// Business Logic

function numberFinder (number) {
  if (number <= 9) {
    return 1;
  } else if (number <= 99) {
    return 2;
  } else if (number <= 499) {
    return 3;
  } else if (number <= 999) {
    return 4;
  } else if (number >= 1000) {
    return 5;
  }
  return null;
}
