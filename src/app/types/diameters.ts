export type diameters =
80 |
160 |
200 |
250 |
315 |
355 |
400 |
450 |
500 |
560 |
630 |
710 |
800 |
900 |
1120 |
1250

export const diametersList = [
  80,
  160,
  200,
  250,
  315,
  355,
  400,
  450,
  500,
  560,
  630,
  710,
  800,
  900,
  1120,
  1250
] as const;

export type Diameter = typeof diametersList[number];
