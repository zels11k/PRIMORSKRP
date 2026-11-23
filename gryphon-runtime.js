(()=>{
const prefix='gryphon-app-local:v1:aac85c96-3dcf-40ab-9662-5baa8f176bd7:';
window.gryphon={storage:{
get:async key=>JSON.parse(localStorage.getItem(prefix+key)||'null'),
set:async(key,value)=>{localStorage.setItem(prefix+key,JSON.stringify(value));return value},
remove:async key=>{localStorage.removeItem(prefix+key)}}};
})();