export function escapeSpecialCharts(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 *  HTML文字列からHTML要素を作成して返す
 * @param {string} html
 */
export function htmlToElement(html) {
  const template = document.createElement("template");
  template.innerHTML = html;
  return template.content.firstElementChild;
}

/**
 *
 * @param {*} strings
 * @param  {...any} values
 * @return {element}
 */
export function element(strings, ...values) {
  const htmlString = strings.reduce((result, str, i) => {
    const value = values[i - 1];
    if (typeof value === "string") {
      return result + escapeSpecialCharts(value) + str;
    } else {
      return result + String(value) + str;
    }
  });
  console.log(htmlString);
  return htmlToElement(htmlString);
}
/**
 * コンテナ要素の中身をbodyElementで上書きする
 * @param {Element} bodyElement コンテナ要素の中身となる要素
 * @param {Element} containerElement コンテナ要素
 */
export function render(bodyElement, containerElement) {
  // containerElementの中身を空にする
  containerElement.innerHTML = "";
  // containerElementの直下にbodyElementを追加する
  containerElement.appendChild(bodyElement);
}
