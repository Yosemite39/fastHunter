const rocketPixels = [
  "000W000",
  "00WWW00",
  "00WOW00",
  "00WWW00",
  "00WWW00",
  "0WWWWW0",
  "0WWWWW0",
  "WWWOWWW",
  "W0WWW0W",
  "00WWW00",
  "00A0A00",
  "00AAA00",
  "0A0A0A0",
];

export function PixelRocket() {
  return (
    <div className="pixel-rocket" aria-hidden="true">
      <span className="pixel-rocket-label">:: BOOST_READY</span>
      <span className="pixel-rocket-trace" />
      <span className="pixel-rocket-grid">
        {rocketPixels.flatMap((row, rowIndex) =>
          [...row].map((pixel, columnIndex) => (
            <i
              className={`pixel-rocket-pixel pixel-rocket-${pixel}`}
              key={`${rowIndex}-${columnIndex}`}
            />
          )),
        )}
      </span>
    </div>
  );
}
