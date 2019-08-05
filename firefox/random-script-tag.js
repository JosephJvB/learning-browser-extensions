// I dont think this is the one.
// cos I get this message
// Loading failed for the <script> with source
// “https://static.chartbeat.com/js/chartbeat.js”.
var _sf_async_config={};_sf_async_config.uid=51893;_sf_async_config.domain="nzherald.co.nz";_sf_async_config.useCanonical=true;_sf_async_config.sections="Business";_sf_async_config.authors="";var _cbq=window._cbq=window._cbq||[];
if(window.myAccount)
{
  if(window.myAccount.isSignedIn()&&window.myAccount.isPremium())
  {
    _cbq.push(["_acct","subscriber"]);
  }
  else if(window.myAccount.isSignedIn()&&window.myAccount.isPremium()===false)
  {
    _cbq.push(["_acct","lgdin"]);
  } else {
    _cbq.push(["_acct","anon"]);
  }
}
else
{
  _cbq.push(["_acct","anon"]);
(function(){function loadChartbeat(){
    window._sf_endpt=(new Date).getTime();var e=document.createElement("script");e.setAttribute("language","javascript");
    e.setAttribute("type","text/javascript");
    e.setAttribute("src","//static.chartbeat.com/js/chartbeat.js");document.body.appendChild(e)
  }
  var oldonload=window.onload;
  window.onload=typeof window.onload!="function"
    ?loadChartbeat
    :function(){oldonload();loadChartbeat()}})();
}