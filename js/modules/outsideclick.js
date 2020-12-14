export default function outsideClick(elem, events, callback) {
  const html = document.documentElement;
  const outside = 'data-outside';

  function handleOutsideClick(event) {
    if (!elem.contains(event.target)) {
      elem.removeAttribute(outside);
      events.forEach((e) => {
        html.removeEventListener(e, handleOutsideClick);
      });
      callback();
    }
  }

  if (!elem.hasAttribute(outside)) {
    events.forEach((event) => {
      setTimeout(() => {
        html.addEventListener(event, handleOutsideClick);
      });
    });
    elem.setAttribute(outside, '');
  }
}
