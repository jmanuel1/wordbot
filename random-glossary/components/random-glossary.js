import { randInt } from '../util/random.js';
// import { removeAllChildren } from '../util/dom';

export default class RandomGlossaryComponent {
  constructor(rootElement, wordbot) {
    this._rootElement = rootElement;
    this._wordbot = wordbot;
    this._populate();
  }

  async _populate() {
    const numberOfTerms = randInt(10, 50);
    const terms = await this._wordbot({count: numberOfTerms});
    this._entries = await Promise.all(terms.map(async (term) => await this._define(term)));
  }

  async _define(term) {
    const numberOfWords = randInt(5, 30);
    const words = await this._wordbot({count: numberOfWords});
    const definition = words.join(' ');
    return {term, definition};
  }

  set _entries(entries) {
    this.__entries = entries;
    this._render();
  }

  get _entries() {
    return this.__entries;
  }

  _render() {
    // removeAllChildren(this._rootElement);
    const oldListElement = this._rootElement.getElementsByTagName('dl')[0];

    const listElement = document.createElement('dl');
    this._entries.forEach(({term, definition}) => {
      const termElement = document.createElement('dt');
      const descriptionElement = document.createElement('dd');
      termElement.innerText = term;
      descriptionElement.innerText = definition;
      listElement.appendChild(termElement);
      listElement.appendChild(descriptionElement);
    });

    if (oldListElement) {
      this._rootElement.replaceChild(oldListElement, listElement);
    } else {
      this._rootElement.appendChild(listElement);
    }
  }
}
