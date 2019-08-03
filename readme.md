# bye bye paywall

I still sometimes get redirected

### What is causing the redirect

Even showing one hidden text element can trigger a redirect

It seems like if I have been redirected to premium-sub page once, then 'go back' I am likely to get redirected again.

Opening in a new tab, new browser, new article is more likely to avoid redirect.

have tried:
- simple loop and change:
```js
hiddenTextEls.forEach(e => {
  e.style.display = 'inline';
  e.style.opacity = '100';
  e.style.color = 'black';
});
```
- loop with timeout:
```js
hiddenTextEls.forEach((e, i) => {
  setTimeout(() => {
    e.style.display = 'inline';
    e.style.opacity = '100';
    e.style.color = 'black';
  }, i * 700)
});
```
- add a style tag to head and change classname
```js
const newStyleEl = document.createElement('style');
newStyleEl.type = 'text/css';
const newClass = `.joe-wuz-here {
  display: inline !important;
  opacity: 100 !important;
  color: black !important;
}`;
newStyleEl.appendChild(document.createTextNode(newClass));
document.head.appendChild(newStyleEl);

hiddenTextEls.forEach(e => {
  e.className = 'joe-wuz-here';
});
```