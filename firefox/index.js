console.log('\n\n joe script loaded \n\n')
// https://stackoverflow.com/questions/39993676/code-inside-domcontentloaded-event-not-working/39993735
try
{
  if (document.readyState !== 'loading')
  {
    const articleId = 'article-content';
    const articleEl = document.getElementById(articleId);
    if (articleEl)
    {
      const hideClass = articleEl
      .querySelector('[style*="display:none"]').className;
      const hiddenEls = [...articleEl.querySelectorAll(`.${hideClass}`)];
      
      if (hiddenEls.length > 0)
      {
        hiddenEls.forEach(revealElement);
      }
    }
  }
}
catch (e)
{
  console.error('Joe caught an error\n', e);
}

/*
  elements hidden by
  1. style {display: none}
  2. class {display: none}
  3. class {color: white}
  4. class {opacity: 0}
  5. class {opacity: 0}

  set interval is just to do a fancy reveal..
 */
function revealElement (e, i) {
  setTimeout(() => {
    e.style.opacity = 0;
    e.style.color = 'black';
    if(e.style.display === 'none')
    {
      e.style.removeProperty('display');
    }

    setInterval(() => {
      if(e.style.opacity < 1) {
        e.style.opacity = (Number(e.style.opacity) + 0.1).toString();
      }
    }, 100);
  }, 2000 * i);

  return;
}