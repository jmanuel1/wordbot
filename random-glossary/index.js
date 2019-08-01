import RandomGlossaryComponent from './components/random-glossary.js';
import wordbot from './util/wordbot.js';

window.onload = () => {
  const rootGlossaryElement = document.getElementsByTagName('random-glossary')[0];
  const randomGlossary = new RandomGlossaryComponent(rootGlossaryElement, wordbot);
}
