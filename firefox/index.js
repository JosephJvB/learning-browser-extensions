const articleEl = 'article-content';

console.log('\n\n joe script loaded \n\n')

// https://stackoverflow.com/questions/39993676/code-inside-domcontentloaded-event-not-working/39993735
if (document.readyState !== 'loading')
{
  if (document.getElementById(articleEl))
  {
    const hiddenTextEls = [...document.getElementById(articleEl).children]
      .filter(c => c.nodeName === 'P' && c.style.display === 'none');


    console.log(document.getElementById('joe-wuz-here'))
    if (hiddenTextEls.length > 0 && !document.getElementById('joe-wuz-here'))
    {
      try
      {
        const headEl = document.head || document.getElementsByTagName('head')[0];
        const newStyleEl = document.createElement('style');
        newStyleEl.type = 'text/css';
        newStyleEl.id = 'joe-wuz-here';
        const newClass = `.chur-cuz {
          display: inline !important;
          opacity: 100 !important;
          color: black !important;
        }`;
        newStyleEl.appendChild(document.createTextNode(newClass));
        headEl.appendChild(newStyleEl);
  
        hiddenTextEls.forEach(e => {
          e.className = 'chur-cuz';
        });
      }
      catch (e)
      {
        console.error(e)
      }
    }

    // hiddenTextEls.forEach(e => {
    //   e.style.display = 'inline';
    //   e.style.opacity = '70';
    //   e.style.color = 'magenta';
    // });
  }
}