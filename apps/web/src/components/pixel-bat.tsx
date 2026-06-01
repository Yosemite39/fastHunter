"use client";

const batPixels = [
  "000000000O000000000",
  "0O000000OOO000000O0",
  "OOO0000OOOOO0000OOO",
  "OOOOO00OOOOO00OOOOO",
  "OOOOOOOOOOOOOOOOOOO",
  "0OOOOOOOOOOOOOOOOO0",
  "00OOOOOOO0OOOOOOO00",
  "000OOOO00000OOOO000",
  "0000OO0000000OO0000",
];

export function PixelBat() {
  return (
    <div className="pixel-bat-container" aria-hidden="true">
      <div className="pixel-bat">
        <span className="pixel-bat-grid">
          {batPixels.flatMap((row, rowIndex) =>
            [...row].map((pixel, columnIndex) => (
              <i
                className={`pixel-bat-pixel pixel-bat-${pixel}`}
                key={`${rowIndex}-${columnIndex}`}
              />
            )),
          )}
        </span>
      </div>
    </div>
  );
}
