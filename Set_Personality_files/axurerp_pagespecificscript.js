﻿
var PageName = 'Set Personality';
var PageId = 'f492935c986149479c6c83a582fb762d'
var PageUrl = 'Set_Personality.html'
document.title = 'Set Personality';
var PageNotes = 
{
"pageName":"Set Personality",
"showNotesNames":"False"}
var $OnLoadVariable = '';

var $CSUM;

var hasQuery = false;
var query = window.location.hash.substring(1);
if (query.length > 0) hasQuery = true;
var vars = query.split("&");
for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0].length > 0) eval("$" + pair[0] + " = decodeURIComponent(pair[1]);");
} 

if (hasQuery && $CSUM != 1) {
alert('Prototype Warning: The variable values were too long to pass to this page.\nIf you are using IE, using Firefox will support more data.');
}

function GetQuerystring() {
    return '#OnLoadVariable=' + encodeURIComponent($OnLoadVariable) + '&CSUM=1';
}

function PopulateVariables(value) {
    var d = new Date();
  value = value.replace(/\[\[OnLoadVariable\]\]/g, $OnLoadVariable);
  value = value.replace(/\[\[PageName\]\]/g, PageName);
  value = value.replace(/\[\[GenDay\]\]/g, '3');
  value = value.replace(/\[\[GenMonth\]\]/g, '5');
  value = value.replace(/\[\[GenMonthName\]\]/g, 'May');
  value = value.replace(/\[\[GenDayOfWeek\]\]/g, 'Thursday');
  value = value.replace(/\[\[GenYear\]\]/g, '2012');
  value = value.replace(/\[\[Day\]\]/g, d.getDate());
  value = value.replace(/\[\[Month\]\]/g, d.getMonth() + 1);
  value = value.replace(/\[\[MonthName\]\]/g, GetMonthString(d.getMonth()));
  value = value.replace(/\[\[DayOfWeek\]\]/g, GetDayString(d.getDay()));
  value = value.replace(/\[\[Year\]\]/g, d.getFullYear());
  return value;
}

function OnLoad(e) {

}

var u80 = document.getElementById('u80');

var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'center';
var u82 = document.getElementById('u82');

var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'center';
var u84 = document.getElementById('u84');

var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'center';
var u86 = document.getElementById('u86');

var u87 = document.getElementById('u87');

var u88 = document.getElementById('u88');

var u89 = document.getElementById('u89');

var u90 = document.getElementById('u90');

var u91 = document.getElementById('u91');

var u92 = document.getElementById('u92');
gv_vAlignTable['u92'] = 'center';
var u10 = document.getElementById('u10');

u10.style.cursor = 'pointer';
if (bIE) u10.attachEvent("onclick", Clicku10);
else u10.addEventListener("click", Clicku10, true);
function Clicku10(e)
{
windowEvent = e;


if (true) {

	self.location.href="Home___Login.html" + GetQuerystring();

}

}
gv_vAlignTable['u10'] = 'top';
var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'top';
var u12 = document.getElementById('u12');

u12.style.cursor = 'pointer';
if (bIE) u12.attachEvent("onclick", Clicku12);
else u12.addEventListener("click", Clicku12, true);
function Clicku12(e)
{
windowEvent = e;


if (true) {

	self.location.href="Profile_1.html" + GetQuerystring();

}

}

var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'center';
var u14 = document.getElementById('u14');

var u15 = document.getElementById('u15');

var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'center';
var u17 = document.getElementById('u17');

var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'center';
var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'top';
var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'top';
var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'top';
var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'top';
var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'top';
var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'top';
var u25 = document.getElementById('u25');

var u26 = document.getElementById('u26');

var u27 = document.getElementById('u27');

var u28 = document.getElementById('u28');

var u29 = document.getElementById('u29');

var u100 = document.getElementById('u100');

var u101 = document.getElementById('u101');

var u102 = document.getElementById('u102');
gv_vAlignTable['u102'] = 'top';
var u103 = document.getElementById('u103');

var u104 = document.getElementById('u104');

var u30 = document.getElementById('u30');

var u31 = document.getElementById('u31');

u31.style.cursor = 'pointer';
if (bIE) u31.attachEvent("onclick", Clicku31);
else u31.addEventListener("click", Clicku31, true);
function Clicku31(e)
{
windowEvent = e;


if (true) {

	self.location.href="#" + GetQuerystring();

	self.location.href="Company_Dashboard.html" + GetQuerystring();

}

}
gv_vAlignTable['u31'] = 'top';
var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'top';
var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'top';
var u34 = document.getElementById('u34');

var u35 = document.getElementById('u35');

var u36 = document.getElementById('u36');

var u37 = document.getElementById('u37');

u37.style.cursor = 'pointer';
if (bIE) u37.attachEvent("onclick", Clicku37);
else u37.addEventListener("click", Clicku37, true);
function Clicku37(e)
{
windowEvent = e;


if (true) {

	self.location.href="Add_a_Job.html" + GetQuerystring();

}

}
gv_vAlignTable['u37'] = 'top';
var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'top';
var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'top';
var u93 = document.getElementById('u93');

var u94 = document.getElementById('u94');
gv_vAlignTable['u94'] = 'center';
var u95 = document.getElementById('u95');

var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'center';
var u97 = document.getElementById('u97');

var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'center';
var u99 = document.getElementById('u99');

var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'top';
var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'top';
var u42 = document.getElementById('u42');

u42.style.cursor = 'pointer';
if (bIE) u42.attachEvent("onclick", Clicku42);
else u42.addEventListener("click", Clicku42, true);
function Clicku42(e)
{
windowEvent = e;


if (true) {

	self.location.href="Set_Culture.html" + GetQuerystring();

}

}
gv_vAlignTable['u42'] = 'top';
var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'top';
var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'top';
var u45 = document.getElementById('u45');

u45.style.cursor = 'pointer';
if (bIE) u45.attachEvent("onclick", Clicku45);
else u45.addEventListener("click", Clicku45, true);
function Clicku45(e)
{
windowEvent = e;


if (true) {

	self.location.href="Set_Skill_Set.html" + GetQuerystring();

}

}
gv_vAlignTable['u45'] = 'top';
var u46 = document.getElementById('u46');

var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'center';
var u48 = document.getElementById('u48');

var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'center';
var u0 = document.getElementById('u0');

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u2 = document.getElementById('u2');

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u4 = document.getElementById('u4');

u4.style.cursor = 'pointer';
if (bIE) u4.attachEvent("onclick", Clicku4);
else u4.addEventListener("click", Clicku4, true);
function Clicku4(e)
{
windowEvent = e;


if (true) {

	self.location.href="Company_Dashboard.html" + GetQuerystring();

}

}

var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'center';
var u6 = document.getElementById('u6');

u6.style.cursor = 'pointer';
if (bIE) u6.attachEvent("onclick", Clicku6);
else u6.addEventListener("click", Clicku6, true);
function Clicku6(e)
{
windowEvent = e;


if (true) {

	self.location.href="Job_Postings.html" + GetQuerystring();

}

}

var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'center';
var u8 = document.getElementById('u8');

u8.style.cursor = 'pointer';
if (bIE) u8.attachEvent("onclick", Clicku8);
else u8.addEventListener("click", Clicku8, true);
function Clicku8(e)
{
windowEvent = e;


if (true) {

	self.location.href="Add_a_Job.html" + GetQuerystring();

}

}

var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'center';
var u50 = document.getElementById('u50');

var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'center';
var u52 = document.getElementById('u52');

var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'center';
var u54 = document.getElementById('u54');

var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'center';
var u56 = document.getElementById('u56');

var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'center';
var u58 = document.getElementById('u58');

var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'center';
var u60 = document.getElementById('u60');

var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'center';
var u62 = document.getElementById('u62');

var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'center';
var u64 = document.getElementById('u64');

var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'center';
var u66 = document.getElementById('u66');

var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'center';
var u68 = document.getElementById('u68');

var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'center';
var u70 = document.getElementById('u70');

var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'center';
var u72 = document.getElementById('u72');

var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'center';
var u74 = document.getElementById('u74');

var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'center';
var u76 = document.getElementById('u76');

var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'center';
var u78 = document.getElementById('u78');

var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'center';
if (window.OnLoad) OnLoad();