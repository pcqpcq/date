/*
author: 斯人
QQ: 103024979
Email: leecade@163.com
update:

2013.01.07

1. 修正农历近几天的错误
================
月/日 出错
* 2013.1.1   11.20
2013-1-1 星期二 农历 12.19 壬辰年(龙) 壬子月 丁卯日   元旦节

2013-1-11 11.30
2013-1-11 星期五 农历 腊月廿九 壬辰年(龙) 癸丑月 丁丑日  除夕  index.html:413

月 出错
2013-1-12  12.1
2013-1-12 星期六 农历 十三月初一 壬辰年(龙) 癸丑月 戊寅日 

* 2013-2-9 12.29
2013-2-9 星期六 农历 13.29 癸巳年(龙) 甲寅月 丙午日
=================

2. 允许对任意日期或日期段的算法结果进行人工干预(埃及日历是人定的, 随时可能改1天)
=======
比如:

1) 修正 2013-1-1 农历 月份 -1
conf.date.fixDate: ["2013-1-1=0|-1|0"]

2) 多组修正和日期范围(用 ~ 分隔)
conf.date.fixDate: ["2013-1-1~2013-1-11=0|-1|1", "2013-1-12~2013-2-9=0|-1|0"]
=======


2012.9.7

1. Fixed: mac + firefox13 下农历日期显示为 Undefined

原因：对数组索引的浮点数时处理 有差异 [2.0001] ==> [2]

2011.9.26:
1. 按jsdoc规范更新注释
2. 扩展G.date.format方法
3. 调整接口，参数省略策略统一为 G.date.format/G.date.lunarTpl/G.date.islTpl 允许省略
4. 获取生肖名拆分为独立接口 G.date.toSx()
*/(function(e,t){String.prototype.parseToArray=function(e,t){var n=this.split(t||"|");return e?function(t,r){for(;t--;)n[t]=parseInt(n[t],e);return n}(n.length):n},String.trim||(String.prototype.trim=function(){var e=this,e=e.replace(/^\s\s*/,""),t=/\s/,n=e.length;while(t.test(e.charAt(--n)));return e.slice(0,n+1)}),String.replaceTpl||(String.prototype.replaceTpl=function(e){return this.replace(/#\{([^}]*)\}/mg,function(t,n){return t=e[n.trim()]})}),e.conf||(e.conf={}),e.G||(e.G={});var n=conf.date={days:[31,28,31,30,31,30,31,31,30,31,30,31],feast:{"1-1":"\u5143\u65e6\u8282","2-14":"\u60c5\u4eba\u8282","3-5":"\u96f7\u950b\u65e5","3-8":"\u5987\u5973\u8282","3-12":"\u690d\u6811\u8282","3-15":"\u6d88\u8d39\u65e5","4-1":"\u611a\u4eba\u8282","5-1":"\u52b3\u52a8\u8282","5-4":"\u9752\u5e74\u8282","6-1":"\u513f\u7ae5\u8282","7-1":"\u5efa\u515a\u8282","8-1":"\u5efa\u519b\u8282","9-10":"\u6559\u5e08\u8282","10-1":"\u56fd\u5e86\u8282","12-24":"\u5e73\u5b89\u591c","12-25":"\u5723\u8bde\u8282"},lunar:{tpl:"#{y}-#{m}-#{d} \u661f\u671f#{W} \u519c\u5386 #{CM}#{CD} #{gy}(#{sx}) #{gm} #{gd} #{so} #{cf} #{gf}",leap:"ezc|esg|wog|gr9|15k0|16xc|1yl0|h40|ukw|gya|esg|wqe|wk0|15jk|2k45|zsw|16e8|yaq|tkg|1t2v|ei8|wj4|zp1|l00|lkw|2ces|8kg|tio|gdu|ei8|k12|1600|1aa8|lud|hxs|8kg|257n|t0g|2i8n|13rk|1600|2ld2|ztc|h40|2bas|7gw|t00|15ma|xg0|ztj|lgg|ztc|1v11|fc0|wr4|1sab|gcw|xig|1a34|l28|yhy|xu8|ew0|xr8|wog|g9s|1bvn|16xc|i1j|h40|tsg|fdh|es0|wk0|161g|15jk|1654|zsw|zvk|284m|tkg|ek0|xh0|wj4|z96|l00|lkw|yme|xuo|tio|et1|ei8|jw0|n1f|1aa8|l7c|gxs|xuo|tsl|t0g|13s0|16xg|1600|174g|n6a|h40|xx3|7gw|t00|141h|xg0|zog|10v8|y8g|gyh|exs|wq8|1unq|gc0|xf4|nys|l28|y8g|i1e|ew0|wyu|wkg|15k0|1aat|1640|hwg|nfn|tsg|ezb|es0|wk0|2jsm|15jk|163k|17ph|zvk|h5c|gxe|ek0|won|wj4|xn4|2dsl|lk0|yao".parseToArray(36),jqmap:"0|gd4|wrn|1d98|1tuh|2akm|2rfn|38g9|3plp|46vz|4o9k|55px|5n73|64o5|6m37|73fd|7kna|81qe|8io7|8zgq|9g4b|9wnk|ad3g|ath2|".parseToArray(36),jqnames:"\u5c0f\u5bd2|\u5927\u5bd2|\u7acb\u6625|\u96e8\u6c34|\u60ca\u86f0|\u6625\u5206|\u6e05\u660e|\u8c37\u96e8|\u7acb\u590f|\u5c0f\u6ee1|\u8292\u79cd|\u590f\u81f3|\u5c0f\u6691|\u5927\u6691|\u7acb\u79cb|\u5904\u6691|\u767d\u9732|\u79cb\u5206|\u5bd2\u9732|\u971c\u964d|\u7acb\u51ac|\u5c0f\u96ea|\u5927\u96ea|\u51ac\u81f3".parseToArray(),c1:"|\u4e00|\u4e8c|\u4e09|\u56db|\u4e94|\u516d|\u4e03|\u516b|\u4e5d|\u5341".parseToArray(),c2:"\u521d|\u5341|\u5eff|\u5345|".parseToArray(),wk:"\u65e5\u4e00\u4e8c\u4e09\u56db\u4e94\u516d",tg:"\u7532\u4e59\u4e19\u4e01\u620a\u5df1\u5e9a\u8f9b\u58ec\u7678",dz:"\u5b50\u4e11\u5bc5\u536f\u8fb0\u5df3\u5348\u672a\u7533\u9149\u620c\u4ea5",sx:"\u9f20\u725b\u864e\u5154\u9f99\u86c7\u9a6c\u7f8a\u7334\u9e21\u72d7\u732a",feast:{"1-1":"\u6625\u8282","1-15":"\u5143\u5bb5\u8282","5-5":"\u7aef\u5348\u8282","8-15":"\u4e2d\u79cb\u8282","9-9":"\u91cd\u9633\u8282","12-8":"\u814a\u516b\u8282"},fixDate:["2013-1-1~2013-1-11=0|-1|1","2013-1-12~2013-2-9=0|-1|0"]},isl:{tpl:"#{IW} - #{d} \u0645\u0646 #{M} #{y} - #{id} #{IM} #{iy}",weekNames:["\u0627\u0644\u0623\u062d\u062f","\u0627\u0644\u0627\u062b\u0646\u064a\u0646","\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621","\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621","\u0627\u0644\u062e\u0645\u064a\u0633","\u0627\u0644\u062c\u0645\u0639\u0629","\u0627\u0644\u0633\u0628\u062a"],weekNames_Malay:["Ahad","Ithnin","Thulatha","Arbaa","Khams","Jumuah","Sabt"],gMonthNames:["\u064a\u0646\u0627\u0646\u0631","\u0641\u0628\u0631\u0627\u064a\u0631","\u0645\u0627\u0631\u0633","\u0627\u0628\u0631\u064a\u0644","\u0645\u0627\u064a\u0648","\u064a\u0648\u0646\u064a\u0648","\u064a\u0648\u0644\u064a\u0648","\u0623\u063a\u0633\u0637\u0633","\u0633\u0628\u062a\u0645\u0628\u0631","\u0623\u0643\u062a\u0648\u0628\u0631","\u0646\u0648\u0641\u0645\u062a\u0631","\u062f\u064a\u0633\u0645\u0628\u0631"],monthNames:["\u0645\u062d\u0631\u0645","\u0635\u0641\u0631","\u0631\u0628\u064a\u0639 \u0627\u0644\u0623\u0648\u0644","\u0631\u0628\u064a\u0639 \u0627\u0644\u0622\u062e\u0631","\u062c\u0645\u0627\u062f\u0649 \u0627\u0644\u0623\u0648\u0644","\u062c\u0645\u0627\u062f\u0649 \u0627\u0644\u0622\u062e\u0631","\u0631\u062c\u0628","\u0634\u0639\u0628\u0627\u0646","\u0631\u0645\u0636\u0627\u0646","\u0634\u0648\u0627\u0644","\u0630\u064a \u0627\u0644\u0642\u0639\u062f\u0629","\u0630\u064a \u0627\u0644\u062d\u062c\u0629"],monthNames_Malay:["Muharram","Safar","Rabi'ul Awwal","Rabi'ul Akhir","Jumadal Ula","Jumadal Akhira","Rajab","Sha'ban","Ramadan","Shawwal","Dhul Qa'ada","Dhul Hijja"],fixDate:[]}},r={isDate:function(e){return e instanceof Date&&!isNaN(e)},getDate:function(e){return!r.isDate(e)&&(e=new Date),{y:e.getFullYear(),m:e.getMonth()+1,d:e.getDate()}},format:function(e,t){t=t||new Date,e=e||"yyyy-MM-dd";var n=r.getDate(t),i={M:n.m,d:n.d,h:t.getHours(),m:t.getMinutes(),s:t.getSeconds()},s;for(var o in i)s=i[o],e=e.replace(new RegExp("("+o+"+)","g"),function(e,t){return s<10&&t.length>1?"0"+s:s});return e.replace(/(y+)/ig,function(e,t){return(n.y+"").substr(4-Math.min(4,t.length))})},getDaysByLunarMonth:function(e,t){return n.lunar.leap[e-1900]&65536>>t?30:29},getLeapMonth:function(e){return n.lunar.leap[e-1900]&15},getLeapDays:function(e){return r.getLeapMonth(e)?n.lunar.leap[e-1900]&65536?30:29:0},getDaysByMonth:function(e,t){return t==2?e%4==0&&e%100!=0||e%400==0?29:28:n.days[t-1]},getDaysByYear:function(e){for(var t=32768,i=348;t>8;t>>=1)i+=n.lunar.leap[e-1900]&t?1:0;return i+r.getLeapDays(e)},getDateBySolar:function(e,t){var r=new Date(31556925974.7*(e-1900)+n.lunar.jqmap[t]*6e4+Date.UTC(1900,0,6,2,5));return{m:r.getUTCMonth()+1,d:r.getUTCDate()}},getFeast:function(e,t,i,s){var o=(i?n.lunar.feast:n.feast)[e+"-"+t]||"";return i&&s&&e==12&&r.getDaysByLunarMonth(s,12)==t&&(o="\u9664\u5915"),o},getSolar:function(e,t,i){var s=n.lunar.jqnames,o=s.length,u;while(o--){u=r.getDateBySolar(e,o);if(u.m==t&&u.d==i)return s[o]}return""},cyclical:function(e){return n.lunar.tg.charAt(e%10)+n.lunar.dz.charAt(e%12)},fixResult:function(e,t,n,r,i,s,o){if(e&&e.length){var u=e.length,a=function(e,t,n,r,i,s){return r=r.split("~"),r[1]=r[1]||r[0],i=r[0].split("-"),s=r[1].split("-"),new Date(e,t,n)>=new Date(i[0],i[1],i[2])&&new Date(e,t,n)<=new Date(s[0],s[1],s[2])},f,l;while(u--)l=e[u].split("="),f=l[1].split("|"),a(t,n,r,l[0])&&(i+=~~f[0],s+=~~f[1],o+=~~f[2])}return{y:~~i,m:~~s,d:~~o}},toLunar:function(e,t,i){var s=1900,o=0,u=(new Date(e,t-1,i)-new Date(1900,0,31))/864e5,a=r.getLeapMonth(e),f=!1,l;for(;s<2050&&u>0;s++)o=r.getDaysByYear(s),u-=o;u<0&&(u+=o,s--),l=s;for(s=1;s<13&&u>0;s++)a>0&&s==a+1&&f===!1?(--s,f=!0,o=r.getLeapDays(l)):o=r.getDaysByLunarMonth(l,s),f==1&&s==a+1&&(f=!1),u-=o;u==0&&a>0&&s==a+1&&!f&&--s,u<0&&(u+=o,--s),u==0&&(f=s==a),u+=1;var c=r.fixResult(n.lunar.fixDate,e,t,i,e-(t<s?1:0),s,u);return{cy:c.y,cm:c.m,cd:c.d,CM:(f?"\u95f0":"")+((c.m>9?"\u5341":"")+n.lunar.c1[c.m%10]).replace("\u5341\u4e8c","\u814a").replace(/^\u4e00/,"\u6b63")+"\u6708",CD:{10:"\u521d\u5341",20:"\u4e8c\u5341",30:"\u4e09\u5341"}[c.d]||n.lunar.c2[Math.floor(c.d/10)]+n.lunar.c1[~~c.d%10],isleap:f}},toGz:function(e,t,n){var i=r.getDateBySolar,s=r.cyclical;return t-=1,{gy:t>=2||t==1&&n>=i(e,2).d?s(e-1864):s(e-1865),gm:n>=i(e,t*2).d?s((e-1900)*12+t+13):s((e-1900)*12+t+12),gd:s(Date.UTC(e,t,1,0,0,0,0)/864e5+25576+n)}},toSx:function(e,t,i){return n.lunar.sx.charAt((r.toLunar(e,t,i).cy-4)%12)},formatLunar:function(e,t,i){var s=r.toGz(e,t,i),o=r.toLunar(e,t,i),u=(new Date(e,t-1,i)).getDay();return{y:e,m:t,d:i,w:u,W:n.lunar.wk.charAt(u),cm:o.cm,cd:o.cd,CM:o.CM,CD:o.CD,gy:s.gy+"\u5e74",gm:s.gm+"\u6708",gd:s.gd+"\u65e5",so:r.getSolar(e,t,i),cf:r.getFeast(o.cm,o.cd,1,o.cy),gf:r.getFeast(t,i),sx:n.lunar.sx.charAt((o.cy-4)%12),isleap:o.isleap}},lunarTpl:function(e,t,i,s){if(arguments.length<4&&typeof i!="number"){var o=r.isDate(e),u=o?r.getDate(e):r.getDate();o&&(s=t),typeof e=="string"&&(s=e),e=u.y,t=u.m,i=u.d}return(s||n.lunar.tpl).replaceTpl(r.formatLunar(e,t,i))},toIsl:function(e,t,i){var s=e,o=t,u=i;o<3&&(s-=1,o+=12);var a=Math.floor(s/100),f=2-a+Math.floor(a/4),l,c,h,p,d;s<1583&&(f=0),s==1582&&(o>10&&(f=-10),o==10&&(f=0,u>4&&(f=-10))),l=Math.floor(365.25*(s+4716))+Math.floor(30.6001*(o+1))+u+f-1524,f=0,l>2299160&&(a=Math.floor((l-1867216.25)/36524.25),f=1+a-Math.floor(a/4)),c=l+f+1524,h=Math.floor((c-122.1)/365.25),p=Math.floor(365.25*h),d=Math.floor((c-p)/30.6001),u=c-p-Math.floor(30.6001*d),o=d-1,d>13&&(h+=1,o=d-13),s=h-4716;var v=((l+1)%7+7)%7+1,m=10631/30,g=1948084,y=1948085,b=.1335,w=l-g,E=Math.floor(w/10631),S,x,T,N;w-=10631*E,S=Math.floor((w-b)/m),x=30*E+S,w-=Math.floor(S*m+b),T=Math.floor((w+28.5001)/29.5),T==13&&(T=12),N=w-Math.floor(29.5001*T-29);var C=r.fixResult(n.isl.fixDate,e,t,i,x,T,N);return{iy:C.y,im:C.m,id:C.d,iw:v,jd:l-1}},formatIsl:function(e,t,i){var s=r.toIsl(e,t,i),o=n.isl,u=s.iw,a=s.im;return{y:e,m:t,d:i,iy:s.iy,im:a,id:s.id,iw:u,jd:s.jd,M:o.gMonthNames[t-1],IW:o.weekNames[u-1],MW:o.weekNames_Malay[u-1],IM:o.monthNames[a-1],MM:o.monthNames_Malay[a-1]}},islTpl:function(e,t,i,s){if(arguments.length<4&&typeof i!="number"){var o=r.isDate(e),u=o?r.getDate(e):r.getDate();o&&(s=t),typeof e=="string"&&(s=e),e=u.y,t=u.m,i=u.d}return(s||n.isl.tpl).replaceTpl(r.formatIsl(e,t,i))},debug:function(e,t){var n=0,r=G.date.getDaysByMonth(e,t);for(;n<r;n++)console.log(G.date.lunarTpl(e,t,n+1))}};G.date=r})(window);