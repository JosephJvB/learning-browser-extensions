console.log('\n\n NZ-Herald unblocker script loaded \n\n');
try
{
  // https://stackoverflow.com/questions/39993676/code-inside-domcontentloaded-event-not-working/39993735
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
  console.error('Unblocker script error:\n', e);
}

/*
  elements hidden by
  style {display: none}
  class {
    display: none;
    color: white;
    opacity: 0;
  }

  set timeout is my superstitious "avoid redirect" tactic

  set interval is just to do a fancy reveal..
 */
function revealElement (e, i)
{
  e.style.opacity = 0;

  setTimeout(() => {
    e.style.color = 'black';
    e.className = '';
    if(e.style.display === 'none')
    {
      e.style.removeProperty('display');
    }

    setInterval(() => {
      if(e.style.opacity < 1) {
        e.style.opacity = (Number(e.style.opacity) + 0.1).toString();
      }
    }, 100);
  }, 1300 * i);

  return;
}