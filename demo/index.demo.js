const $ = require('jquery');
const lang = require('zero-lang');

const Color = require('../lib');

function getColorTr(color, name) {
  color = new Color(color);
  const greyColor = color.toGrey();
  const fontColor = greyColor.r >= 128 ? 'black' : 'white';
  return `
    <tr>
      <td>${name}</td>
      <td style="color: ${fontColor}; background-color: ${color.toString()};">${color.toHex()}</td>
      <td style="color: ${fontColor}; background-color: ${greyColor.toString()};">${greyColor.toHex()}</td>
      <td>${color.toCss(true)}</td>
      <td>${color.toHsla()}</td>
    </tr>
  `;
}

const $colorsTable = $('#colors');

lang.forIn(Color.named, (color, name) => {
  $colorsTable.append(getColorTr(color, name));
});

