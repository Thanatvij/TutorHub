/* TU240 · ข้อมูลหลัก: ข้อมูลสอบ ข้อจำกัดความรับผิดชอบ ตีแผ่โจทย์ แหล่งอ้างอิง
   "ข้อ" ในเว็บนี้ = โจทย์ข้อสอบปลายภาค 1 ข้อ ซึ่งรวมเนื้อหาจากหลายบท (หลายไฟล์สไลด์) ไว้ด้วยกัน
   "บท" = สไลด์ของอาจารย์แต่ละไฟล์ (SI 1–SI 11 และสไลด์บรรยายพิเศษ) */
window.TU240 = {
code: "TU240",
name: "เศรษฐกิจภูมิรัฐศาสตร์โลก (World Geopolitical Economy)",
teacher: "รศ.ดร.พิทยา สุวคันธ์",
site: "https://thanatvij.github.io/TutorHub/tu240/",

/* ---------- ไฟล์สไลด์ของรายวิชา (ชื่อไฟล์ตามที่ได้รับ) ---------- */
files: {
  SI1: {file:"SI 1 Geopolitics.pdf", title:"Geopolitics (ภูมิรัฐศาสตร์)", pages:19, by:"รศ.ดร.พิทยา สุวคันธ์", week:"ครั้งที่ 1 · 4 ส.ค. 2569"},
  SI2: {file:"SI 2 Geoeconomics.pdf", title:"Geo-economics (ภูมิเศรษฐศาสตร์)", pages:25, by:"รศ.ดร.พิทยา สุวคันธ์", week:"ครั้งที่ 2 · 11 ส.ค. 2569"},
  SI3: {file:"SI 3 National states and political economy.pdf", title:"Nation-state and political economy (รัฐชาติและเศรษฐศาสตร์การเมือง)", pages:19, by:"รศ.ดร.พิทยา สุวคันธ์", week:"ครั้งที่ 3 · 18 ส.ค. 2569"},
  SI4: {file:"SI 4 Market economy.pdf", title:"Market Economy (เศรษฐกิจแบบตลาด)", pages:23, by:"รศ.ดร.พิทยา สุวคันธ์", week:"ครั้งที่ 4 · 25 ส.ค. 2569"},
  SI5: {file:"SI 5 World economic order after WWII (1).pdf", title:"Post–World War II economic expansion (ระเบียบเศรษฐกิจโลกหลังสงครามโลกครั้งที่ 2)", pages:28, by:"รศ.ดร.พิทยา สุวคันธ์", week:"ครั้งที่ 5 · 1 ก.ย. 2569"},
  SI6: {file:"SI 6 Reginal Area .pdf", title:"Regional Economics (เศรษฐกิจระดับภูมิภาค)", pages:57, by:"รศ.ดร.พิทยา สุวคันธ์", week:"ครั้งที่ 6 · 8 ก.ย. 2569"},
  SI7: {file:"SI 7 Free trade area.pdf", title:"Free Trade Area: FTA (เขตการค้าเสรี)", pages:25, by:"รศ.ดร.พิทยา สุวคันธ์", week:"ครั้งที่ 7 · 15 ก.ย. 2569"},
  SI8: {file:"SI 8 New World Order.pdf", title:"New world order based on geoeconomics (ระเบียบโลกใหม่บนฐานภูมิเศรษฐศาสตร์)", pages:40, by:"รศ.ดร.พิทยา สุวคันธ์", week:"ครั้งที่ 8 · 29 ก.ย. 2569"},
  SI9: {file:"SI 9 globalization.pdf", title:"Globalization (โลกาภิวัตน์)", pages:40, by:"รศ.ดร.พิทยา สุวคันธ์", week:"อัปโหลดใน Teams 29 ก.ย. 2569"},
  SI10:{file:"SI 10 Global Future’s Topics.pdf", title:"Geopolitics and Global Future's Topics (ภูมิรัฐศาสตร์และหัวข้อแห่งอนาคตของโลก) · ตรงกับคาบ 13 ที่เค้าโครงระบุว่าประเมินด้วยการสอบปลายภาค", pages:44, by:"รศ.ดร.พิทยา สุวคันธ์", week:"อัปโหลดใน Teams 6 ต.ค. 2569"},
  SI11:{file:"SI 11 Political Economy in GMS.pdf", title:"Political Economy in the Greater Mekong Sub-Region (เศรษฐศาสตร์การเมืองในอนุภูมิภาคลุ่มแม่น้ำโขง)", pages:36, by:"รศ.ดร.พิทยา สุวคันธ์", week:"อัปโหลดใน Teams 3 พ.ย. 2569"},
  MM:  {file:"Superpower Geopolitics & Myanmar’s Civil War.pdf", title:"Superpower Geopolitics & Myanmar's Civil War (บรรยายพิเศษ)", pages:15, by:"รศ.ดร.ฐิติวุฒิ บุญยวงศ์วิวัชร", week:"ครั้งที่ 11 · 20 ต.ค. 2569"},
  GMS: {file:"Narut's Presentation.pdf", title:"Geo-economics in GMS (บรรยายพิเศษ)", pages:119, by:"รศ.ดร.นรุตม์ เจริญศรี", week:"ครั้งที่ 12 · 27 ต.ค. 2569"},
  LP:  {file:"มธ.240 WORLD GEOPOLITICAL ECO TU LP 2026.pdf", title:"เค้าโครงรายวิชา (CLOs/LLOs และเกณฑ์ประเมิน)", pages:null, by:"วิทยาลัยสหวิทยาการ", week:"ภาค 1/2569"}
},
missingFiles: [],

exam: {
  when: "ยังไม่มีประกาศวันเวลาสอบในเอกสารที่ได้รับ",
  format: "ข้อเขียน 3 ข้อ เลือกทำ 2 ข้อ · ข้อละ 15 คะแนน (สอบปลายภาครวม 30 คะแนน = 30% ของวิชา)",
  length: "ข้อละไม่เกินประมาณ 3 หน้ากระดาษ · อาจารย์บอกว่าไม่ใช่เขียนครึ่งหน้าหรือ 3 บรรทัด",
  style: "ข้อสอบกว้าง ปลายเปิด ไม่มีถูกผิด ต้องการเห็นมุมมองและวิธีคิดของนักศึกษา ใช้สิ่งที่เรียนมาเป็นส่วนเสริม เสนอจุดยืนของตัวเอง แต่ละคนคิดไม่เหมือนกันได้",
  rubric: [
    ["ดีเยี่ยม (25–30)", "เขียนตอบได้ตรงประเด็น ใช้ความรู้ที่เรียนมาอธิบายได้อย่างชัดเจน · มีการยกตัวอย่างประกอบได้น่าสนใจ · รูปแบบและภาษาถูกต้องสละสลวย"],
    ["ดีมาก (19–24)", "เขียนตอบได้ตรงประเด็น ใช้ความรู้ที่เรียนมาอธิบายได้ · มีการยกตัวอย่างประกอบ · รูปแบบและภาษาถูกต้องเหมาะสม"],
    ["ดี (13–18)", "เขียนตอบได้ตรงประเด็น ใช้ความรู้ที่เรียนมาประกอบได้บางส่วน · มีการยกตัวอย่างประกอบ · รูปแบบและภาษาถูกต้อง"],
    ["พอใช้ (7–12)", "เขียนตอบตรงประเด็น · รูปแบบและภาษาถูกต้อง"],
    ["ต้องปรับปรุง (1–6)", "เขียนตอบไม่ตรงประเด็น · รูปแบบและภาษามีข้อบกพร่อง"],
    ["ไม่ผ่าน (0)", "ขาดสอบและไม่ได้สอบซ่อม"]
  ],
  rubricNote: "จากเค้าโครงรายวิชา มธ.240 ภาค 1/2569 หัวข้อ \"สอบปลายภาคเรียน 30 คะแนน · เนื้อหาครอบคลุมเรื่อง Geo-Politics and Geo-economics\"",
  source: "โจทย์ถอดจากเสียงบรรยายวันที่ 17 พ.ย. 2569 (โปรแกรมถอดเสียงอัตโนมัติ) เทียบกับโน้ตของผู้จัดทำและเพื่อน อาจารย์บอกในห้องว่าจะปรับถ้อยคำให้กระชับขึ้น ข้อสอบจริงจึงอาจใช้คำต่างจากนี้"
},

/* ---------- ข้อจำกัดความรับผิดชอบ (แสดงในแท็บเนื้อหาสอบ) ---------- */
disclaimer: `
<p><b>เว็บนี้ไม่รับประกันคะแนนหรือผลสอบใด ๆ ทั้งสิ้น</b> ผู้จัดทำเป็นนักศึกษาที่ลงเรียนวิชานี้ ไม่ใช่ผู้สอน และไม่ได้รับรองจากอาจารย์ผู้สอนหรือมหาวิทยาลัย ผู้ใช้รับผิดชอบการเตรียมสอบและคะแนนของตนเอง</p>
<ul>
<li><b>โจทย์</b> ถอดจากเสียงบรรยายด้วยโปรแกรมอัตโนมัติ อาจมีคำผิดหรือตกหล่น และอาจารย์อาจปรับถ้อยคำในข้อสอบจริง</li>
<li><b>เนื้อหาส่วนใหญ่</b> เรียบเรียงจากสไลด์ของอาจารย์ SI 1–SI 11 และสไลด์บรรยายพิเศษ 2 ชุด หัวข้อย่อยที่มาจากสไลด์มีป้ายบอกไฟล์และหน้า ย่อหน้าที่ไม่มีป้ายคือคำอธิบายเชื่อมโยงที่ผู้จัดทำเขียนเพื่อโยงเนื้อหาเข้ากับโจทย์</li>
<li><b>เนื้อหาที่ไม่ได้มาจากสไลด์</b> ติดป้าย <span class="src out">นอกสไลด์</span> ไว้ทุกจุด ส่วนใหญ่คือ <b>เหตุการณ์ความขัดแย้งตะวันออกกลาง</b> (ประวัติศาสตร์และสงครามปี 2023–2026) <b>สงครามไซเบอร์และสงครามชิป/AI สหรัฐฯ–จีน</b> (ตัวอย่างจริงปี 2019–2026) และ<b>ข้อมูลอุตสาหกรรมเซมิคอนดักเตอร์</b> (บริษัท ส่วนแบ่งตลาด นโยบายของแต่ละประเทศ) แหล่งที่มาทั้งหมดอยู่ในแท็บ <b>อ้างอิง</b></li>
<li><b>มุมมองและจุดยืน</b> ที่รวบรวมไว้เป็นตัวเลือกให้ผู้อ่านเลือกเอง ไม่ใช่คำตอบที่ถูกต้อง อาจารย์บอกว่าข้อสอบไม่มีถูกผิด</li>
<li><b>แบบฝึกหัด เกณฑ์ใน prompt ตรวจคำตอบ และแนวตอบตัวอย่าง</b> ผู้จัดทำแต่งขึ้นเอง ไม่ใช่ข้อสอบหรือเกณฑ์จริงของอาจารย์ คะแนนที่ AI ให้เป็นเพียงแนวทาง</li>
<li><b>ใช้เฉพาะเอกสารของรายวิชา</b> (สไลด์ที่อาจารย์ส่งใน Teams และเค้าโครงรายวิชา) ไม่ใช้สรุปหรือรายงานที่นักศึกษาเขียนเป็นแหล่งอ้างอิง · สไลด์บรรยาย Myanmar ใช้เฉพาะตารางทฤษฎี (หน้า 5) ไม่ได้นำข้อสรุปเรื่องเมียนมามาใช้กับตะวันออกกลาง</li>
<li>ข้อมูลเหตุการณ์ปัจจุบัน<b>อ้างอิง ณ วันที่ 21 พ.ย. 2569</b></li>
</ul>`,

/* ---------- ตีแผ่โจทย์ ---------- */
breakdown: {
q1: {
  full: "พิจารณามูลเหตุของปัญหาสงครามในตะวันออกกลางว่ามีอะไรบ้าง และปัญหาดังกล่าวส่งผลกระทบต่อการเปลี่ยนแปลงในตัวของภูมิรัฐศาสตร์ (geopolitics) ทั้งอเมริกาและตะวันออกกลาง เหมือนกันหรือแตกต่างกันอย่างไร",
  heard: [
    "\"ข้อแรกก็คือให้เราพิจารณาถึงมูลเหตุของปัญหาในเรื่องสงครามในตะวันออกกลาง ว่ามีอะไรบ้าง\"",
    "\"ส่งผลกระทบต่อการเปลี่ยนแปลงในตัวของ geopolitics ทั้งอเมริกา ตะวันออกกลาง เหมือนกันหรือว่าแตกต่างกันอย่างไร\"",
    "\"ข้อแรก politics ข้อ 2 นี้ economics\" · \"เป็นคำถามที่กว้าง เดี๋ยวผมจะทำให้มันกระชับ\""
  ],
  phrases: [
    {p:"มูลเหตุของปัญหาสงครามในตะวันออกกลาง ว่ามีอะไรบ้าง",
     mean:"ให้บอก<b>สาเหตุ</b>ที่ทำให้เกิดสงคราม/ความขัดแย้งในภูมิภาคตะวันออกกลาง คำว่า \"มีอะไรบ้าง\" แปลว่าคาดหวังให้ตอบ<b>มากกว่าหนึ่งสาเหตุ</b> โจทย์ไม่ได้ระบุว่าต้องเป็นสงครามครั้งไหน จึงใช้ได้ทั้งภาพรวมและยกสงครามเฉพาะเป็นตัวอย่าง",
     slides:[
       ["SI1","หน้า 10","สาเหตุหลักของความขัดแย้งทางภูมิรัฐศาสตร์ 3 ข้อ: ทรัพยากร · เส้นทางยุทธศาสตร์ · เทคโนโลยีและอำนาจ"],
       ["SI1","หน้า 18","The Geopolitics of Oil — แผนที่ประเทศผู้ผลิตน้ำมัน กระจุกในตะวันออกกลาง"],
       ["SI1","หน้า 12","Geopolitical Risks 9 แบบ เช่น ความไม่มั่นคงทางการเมือง การเปลี่ยนระบอบ การคว่ำบาตร สงคราม"],
       ["SI3","หน้า 2, 5–6","รัฐ vs ชาติ · รัฐชาติ · สิ่งที่ผูกคนเป็นชาติ (ศาสนา ภาษา ดินแดน ฯลฯ)"],
       ["SI2","หน้า 13","Geopolitical discourse: Huntington \"Clash of civilizations\" · Klare \"Rogue-state doctrine\""],
       ["SI5","หน้า 10","แผนที่ยุคสงครามเย็นระบุว่าอิหร่านที่มีน้ำมัน \"เป็นรางวัลที่ยั่วยวนและประตูสู่แหล่งน้ำมันของอังกฤษ-สหรัฐฯ ในตะวันออกกลาง\""],
       ["SI6","หน้า 53","จุดคอขวดทางทะเล (choke points): คลองสุเอซ ช่องแคบฮอร์มุซ บับเอลมันเดบ"],
       ["SI6","หน้า 26, 30","ทฤษฎีดุลแห่งอำนาจ (Balance of Power) · การครองความเป็นเจ้า (Hegemony)"],
       ["MM","หน้า 5 (ตารางทฤษฎี)","Regional Security Complex · Principal-Agent · Resource Conflict · Coercive Diplomacy"]
     ],
     outside:"ตัวเหตุการณ์ (ประวัติศาสตร์ตะวันออกกลาง ข้อตกลงหลังสงครามโลกครั้งที่ 1 สงครามอิสราเอล–ปาเลสไตน์ สงครามกับอิหร่าน) <b>ไม่มีในสไลด์</b> สไลด์ให้กรอบแนวคิดสำหรับวิเคราะห์"},
    {p:"ปัญหาดังกล่าวส่งผลกระทบต่อการเปลี่ยนแปลงในตัวของ geopolitics",
     mean:"ให้อธิบายว่าสงคราม/ปัญหาที่ตอบในส่วนแรก <b>ทำให้ภูมิรัฐศาสตร์เปลี่ยนไปอย่างไร</b> คือเปลี่ยนความสัมพันธ์เชิงอำนาจ พันธมิตร การควบคุมพื้นที่ ทรัพยากร และเส้นทาง ตามนิยามภูมิรัฐศาสตร์ในสไลด์ ไม่ได้ถามผลกระทบทางเศรษฐกิจโดยตรง (เศรษฐกิจเอ่ยถึงได้ในฐานะส่วนหนึ่งของอำนาจ)",
     slides:[
       ["SI1","หน้า 3–5","นิยามภูมิรัฐศาสตร์ · Power–Politics–Geography · Geography–Strategy–History"],
       ["SI2","หน้า 3","What is Geopolitics? (ความสัมพันธ์เชิงอำนาจ อดีต ปัจจุบัน อนาคต)"],
       ["SI8","หน้า 21","กระแสเปลี่ยนแปลงโลกด้านการเมือง: สองขั้ว → หลายขั้ว · 9/11 · อัฟกานิสถาน · อิรัก · ยูเครน"],
       ["SI2","หน้า 22","The international order in transition: 5 ฉากทัศน์ระเบียบโลก"],
       ["SI2","หน้า 7","Ray Dalio: วัฏจักรขึ้น–ลงของมหาอำนาจ 6 ขั้น"],
       ["GMS","หน้า 4–5","Liberal democratic world order · Unipolarity → Interregnum → Multipolarity · middle powers และ BRICS มีบทบาทมากขึ้น"]
     ]},
    {p:"ทั้งอเมริกาและตะวันออกกลาง",
     mean:"ต้องพูดถึงผลกระทบ<b>สองฝั่ง</b> คือต่อสหรัฐอเมริกา และต่อประเทศ/ภูมิภาคตะวันออกกลาง ถ้าพูดฝั่งเดียวถือว่าตอบไม่ครบ",
     slides:[
       ["SI5","หน้า 4","US as a World Power: สหรัฐฯ จะเกี่ยวพันกับเศรษฐกิจโลกตลอดไป"],
       ["SI6","หน้า 30","Hegemony: สหรัฐฯ ต้องเข้าไปยุ่งกับทุกประเทศเพื่อครองความเป็นใหญ่"],
       ["SI2","หน้า 15–16","Indo-Pacific Strategy ของสหรัฐฯ (บริบทว่าสหรัฐฯ อยากหันไปเน้นเอเชีย)"],
       ["SI2","หน้า 20","GCC (คณะมนตรีความร่วมมือรัฐอ่าว) ในแผนที่กลุ่มการค้าใหญ่"],
       ["SI1","หน้า 9","ตัวเลขเศรษฐกิจตะวันออกกลางและแอฟริกาเหนือ ซาอุฯ อิหร่าน 2022–2025"],
       ["SI8","หน้า 37","BRICS Summit 2024 ที่คาซาน (อิหร่าน UAE เข้าร่วม BRICS)"]
     ]},
    {p:"เหมือนกันหรือว่าแตกต่างกันอย่างไร",
     mean:"เป็นคำสั่ง<b>เปรียบเทียบ</b> ต้องบอกทั้งจุดที่เหมือนและจุดที่ต่างระหว่างผลกระทบต่อสหรัฐฯ กับต่อตะวันออกกลาง การเขียนแยกสองฝั่งโดยไม่เทียบกันยังไม่ตอบส่วนนี้",
     slides:[["SI1","หน้า 5","ใช้แกน Geography · Strategy · History เป็นหัวข้อเทียบได้"]]}
  ],
  lens:"อาจารย์บอกว่าข้อ 1 เป็นข้อ \"politics\" กรอบหลักจึงเป็นภูมิรัฐศาสตร์ (SI 1) ส่วนเศรษฐกิจใช้เสริมได้",
  notAsked:[
    "โจทย์ไม่ได้ถามวิธีแก้ปัญหาหรือข้อเสนอให้สงครามยุติ (ใส่ในบทสรุปเป็นความเห็นได้ แต่ไม่ใช่ส่วนที่ถูกสั่ง)",
    "โจทย์ไม่ได้ถามผลกระทบต่อไทยหรืออาเซียน",
    "โจทย์ไม่ได้ระบุว่าต้องเป็นสงครามครั้งใดครั้งหนึ่ง"
  ],
  checklist:["บอกมูลเหตุมากกว่าหนึ่งข้อ","ผลต่อภูมิรัฐศาสตร์ของสหรัฐฯ","ผลต่อภูมิรัฐศาสตร์ของตะวันออกกลาง","เทียบว่าเหมือนกันตรงไหน","เทียบว่าต่างกันตรงไหน","ใช้แนวคิดภูมิรัฐศาสตร์จากสไลด์","มีจุดยืนของตัวเอง"]
},
q2: {
  full: "สงครามไซเบอร์ รวมไปถึง AI ซึ่งเป็นสงครามในปัจจุบันระหว่างสหรัฐอเมริกากับจีน ได้ส่งผลกระทบต่อความเปลี่ยนแปลงทางภูมิเศรษฐศาสตร์ (geoeconomic) ภายใต้แนวคิดเสรีนิยม (liberalism) ต่อสหรัฐอเมริกา จีน อาเซียน และไทยอย่างไร",
  heard: [
    "\"ข้อ 2 ก็คือในตัวของสงครามไซเบอร์ รวมไปถึง AI นะ เป็นสงครามในปัจจุบัน ก็คือระหว่างสหรัฐอเมริกากับจีน\"",
    "\"ส่งผลกระทบต่อความเปลี่ยนแปลงทาง geoeconomic อันนี้เน้น geoeconomic ไปใต้แนวคิดเสรีนิยม liberalism ต่อสหรัฐอเมริกา จีน อาเซียน และไทยอย่างไร\"",
    "\"ข้อ 2 มีความพิเศษอยู่ ไปใต้แนวคิด liberalism เสรีนิยม\" · \"ข้อแรก politics ข้อ 2 economics\""
  ],
  phrases: [
    {p:"สงครามไซเบอร์ รวมไปถึง AI … ระหว่างสหรัฐอเมริกากับจีน",
     mean:"หัวเรื่องคือการแข่งขัน/ขัดแย้งระหว่างสหรัฐฯ กับจีนใน<b>สองเรื่อง</b> คือไซเบอร์ (การโจมตีและสอดแนมระบบดิจิทัล) และ AI อาจารย์เรียกว่า \"สงครามในปัจจุบัน\" จึงคาดหวังตัวอย่างร่วมสมัย",
     slides:[
       ["SI1","หน้า 10","สาเหตุความขัดแย้งข้อ \"เทคโนโลยีและอำนาจ: การแข่งขันเทคโนโลยีขั้นสูง เช่น เซมิคอนดักเตอร์และปัญญาประดิษฐ์ (AI)\""],
       ["SI1","หน้า 11","รูปแบบความขัดแย้ง \"สงครามไซเบอร์: การโจมตีระบบข้อมูลและโครงสร้างพื้นฐานสำคัญทางดิจิทัล\""],
       ["SI2","หน้า 5","A Framework for Geoeconomics: สหรัฐฯ (รัฐบาล+บริษัท) กดดันประเทศอื่น เรื่อง Huawei ของจีน"],
       ["SI8","หน้า 3","Geopolitics → Geo-economics → the new era of Geo-technology"],
       ["SI8","หน้า 24–25","กระแสเปลี่ยนแปลงโลกด้านเทคโนโลยี · แผนที่สายเคเบิลอินเทอร์เน็ตใต้ทะเล"],
       ["SI2","หน้า 16","สายเคเบิลใต้ทะเลที่บริษัทจีนวาง (ในแผนที่ BRI vs Indo-Pacific)"]
     ],
     outside:"กรณีตัวอย่างจริง (กลุ่มแฮกเกอร์ Volt/Salt Typhoon การคุมส่งออกชิป Nvidia แร่หายาก DeepSeek) <b>ไม่มีในสไลด์</b>"},
    {p:"ส่งผลกระทบต่อความเปลี่ยนแปลงทาง geoeconomic",
     mean:"ให้อธิบายผลในมุม<b>ภูมิเศรษฐศาสตร์</b> คือการใช้การค้า การลงทุน ห่วงโซ่อุปทาน การคว่ำบาตร เป็นเครื่องมือของอำนาจ อาจารย์ย้ำ \"อันนี้เน้น geoeconomic\" สองครั้ง จึงไม่ควรตอบเป็นเรื่องการทหารหรือความมั่นคงล้วน",
     slides:[
       ["SI2","หน้า 2–4","นิยามภูมิเศรษฐศาสตร์ · ต่างจากภูมิรัฐศาสตร์"],
       ["SI2","หน้า 24","พลังของภูมิเศรษฐศาสตร์: ภาษี/คว่ำบาตร · คุมห่วงโซ่อุปทาน (ชิป แร่หายาก) · ลงทุนเชิงยุทธศาสตร์ · การแบ่งขั้ว · ความเปราะบางของประเทศเล็ก"],
       ["SI2","หน้า 6, 8","CACA · Geo-economy issues → Geostrategy"],
       ["SI2","หน้า 22","International order in transition: decoupling ↔ integration"],
       ["SI8","หน้า 23","กระแสเปลี่ยนแปลงโลกด้านเศรษฐกิจ: liberalization · protectionism · regional integration"]
     ]},
    {p:"ภายใต้แนวคิดเสรีนิยม (liberalism)",
     mean:"ต้อง<b>ใช้เสรีนิยมเป็นเลนส์</b>ในการวิเคราะห์ คืออธิบายว่าสถานการณ์นี้สอดคล้อง/ขัดแย้งกับหลักเสรีนิยม (การค้าเสรี ตลาด การพึ่งพากัน สถาบันระหว่างประเทศ) อย่างไร อาจารย์บอกว่าตรงนี้คือ \"ความพิเศษ\" ของข้อนี้",
     slides:[
       ["SI8","หน้า 15–18","สำนักคิด IPE: พาณิชยนิยม · เศรษฐกิจเสรีนิยม (Adam Smith, David Ricardo) · มาร์กซ์นิยม"],
       ["SI3","หน้า 11–14","IPE · ประเภทเศรษฐกิจการเมือง · Liberal / Marxist / Realist perspective"],
       ["SI6","หน้า 24, 29","Interdependence Theory · Mercantilism/New Protectionism"],
       ["SI6","หน้า 9","สหรัฐฯ เผยแพร่เสรีนิยม แต่ออกกฎหมายฝ่ายเดียวเพื่อกีดกัน"],
       ["SI4","ทั้งไฟล์","เศรษฐกิจแบบตลาด vs แบบสั่งการ vs แบบผสม"],
       ["SI1","หน้า 13","Globalisation: liberalized capital flows, liberalized trade"],
       ["SI5","หน้า 26","สี จิ้นผิง ปาฐกถา WEF 2017 · ทรัมป์ WEF 2018"]
     ]},
    {p:"ต่อสหรัฐอเมริกา จีน อาเซียน และไทย",
     mean:"ต้องพูดถึงผลกระทบต่อ<b>ครบ 4 ฝ่าย</b> แยกให้เห็นทีละฝ่าย (โน้ตของบางคนตกจีนไป แต่ในเสียงบรรยายมีจีน)",
     slides:[
       ["SI4","หน้า 19–21","ASEAN advantages · GDP เอเชีย · IMF outlook เอเชีย"],
       ["SI6","หน้า 46, 56–57","RCEP กลุ่มการค้าใหญ่ที่สุดในโลก"],
       ["SI7","หน้า 25","การเจรจา FTA ของไทย"],
       ["GMS","หน้า 2, 16–17","ไทยในระเบียบโลก · AI และความมั่นคงไซเบอร์ · แผนพัฒนาฯ ฉบับที่ 13 · OECD (12 ก.พ. 2024) + BRICS partner (1 ม.ค. 2025)"]
     ],
     outside:"ข้อมูลผลกระทบจริงต่ออาเซียนและไทย (ศูนย์ข้อมูล การย้ายฐานผลิต ข้อกล่าวหาเรื่องชิป) <b>ไม่มีในสไลด์</b>"}
  ],
  lens:"อาจารย์บอกว่าข้อ 2 เป็นข้อ \"economics\" และเน้นภูมิเศรษฐศาสตร์ภายใต้แนวคิดเสรีนิยม",
  notAsked:[
    "โจทย์ไม่ได้ถามให้ทำนายว่าใครจะชนะสงครามเทคโนโลยี",
    "โจทย์ไม่ได้ให้ใช้ทฤษฎีอื่นเป็นหลัก (พาณิชยนิยม/มาร์กซ์นิยมใช้เทียบได้ แต่เลนส์ที่สั่งคือเสรีนิยม)",
    "โจทย์ไม่ได้ถามรายละเอียดทางเทคนิคของ AI หรือการแฮก"
  ],
  checklist:["อธิบายสงครามไซเบอร์สหรัฐฯ–จีน","อธิบายการแข่งขัน AI สหรัฐฯ–จีน","โยงเป็นผลทางภูมิเศรษฐศาสตร์","วิเคราะห์ด้วยแนวคิดเสรีนิยม","ผลต่อสหรัฐฯ","ผลต่อจีน","ผลต่ออาเซียน","ผลต่อไทย","มีจุดยืนของตัวเอง"]
},
q3: {
  full: "การค้าเสรี กับการแข่งขันอุตสาหกรรมเซมิคอนดักเตอร์ (อุตสาหกรรมชิป) ในส่วนของประเทศในเอเชีย ได้แก่ ไต้หวัน เกาหลีใต้ จีน และญี่ปุ่น เหมือนกันหรือแตกต่างกันอย่างไร และส่งผลกระทบต่อการเปลี่ยนแปลงนวัตกรรม อุตสาหกรรม (AI) และการพัฒนาเศรษฐกิจของเอเชียอย่างไร",
  heard: [
    "\"ข้อ 3 ก็คือคล้าย ๆ ข้อ 2 … การค้าเสรี อันนี้ก็คือสิ่งที่เราเรียนมา … กับการแข่งขันอุตสาหกรรม semiconductor อุตสาหกรรมชิป\"",
    "\"เอเชียก็คือไต้หวัน เกาหลีใต้ จีน และญี่ปุ่น … เหมือนกันหรือว่าแตกต่างกันยังไง และส่งผลกระทบต่อการเปลี่ยนแปลง นวัตกรรมและอุตสาหกรรม AI ของเอเชียอย่างไร ของการพัฒนาเศรษฐกิจ\"",
    "รอบที่ 2: \"ส่งผลกระทบต่อการเปลี่ยนแปลงนวัตกรรม อุตสาหกรรม การพัฒนาเศรษฐกิจของเอเชียอย่างไร อันนี้เน้นเอเชีย\""
  ],
  phrases: [
    {p:"การค้าเสรี",
     mean:"ตัวแปรแรกของโจทย์ อาจารย์บอกว่า \"เป็นสิ่งที่เราเรียนมา\" หมายถึงเนื้อหาเขตการค้าเสรีและการรวมกลุ่มทางเศรษฐกิจในสไลด์ ต้องโยงการค้าเสรีเข้ากับอุตสาหกรรมชิป",
     slides:[
       ["SI7","หน้า 3, 8","นิยาม วัตถุประสงค์ ข้อดี/ข้อเสียของ FTA"],
       ["SI7","หน้า 5, 9–12","ประเภทเขตการค้าเสรี · Free vs Fair trade · RCEP/CPTPP · เครือข่าย FTA เอเชีย-แปซิฟิก"],
       ["SI6","หน้า 3, 12–16","Old vs New regionalism · การรวมกลุ่มทางเศรษฐกิจหลายระดับ · comparative advantage · economy of scale"],
       ["SI1","หน้า 7","Levels of integration"],
       ["SI2","หน้า 11","ข้อดีของเขตเศรษฐกิจพิเศษ (SEZ)"]
     ]},
    {p:"การแข่งขันอุตสาหกรรมเซมิคอนดักเตอร์ … ไต้หวัน เกาหลีใต้ จีน และญี่ปุ่น",
     mean:"ตัวแปรที่สองคือการแข่งขันในอุตสาหกรรมชิปของ<b>4 ประเทศ</b> ต้องพูดถึงครบทั้ง 4 (โน้ตของบางคนตกจีนไป แต่ในเสียงบรรยายมีจีน)",
     slides:[
       ["SI1","หน้า 10","การแข่งขันเทคโนโลยีขั้นสูง เช่น เซมิคอนดักเตอร์และ AI"],
       ["SI2","หน้า 24","การควบคุมห่วงโซ่อุปทาน: ผูกขาดสินค้าสำคัญ เช่น ชิปคอมพิวเตอร์"],
       ["SI4","หน้า 9–12","ระบบเศรษฐกิจ: ตลาด สั่งการ ผสม (ใช้เทียบโมเดลของแต่ละประเทศ)"],
       ["SI6","หน้า 27–28","ทฤษฎีระบบโลก: ญี่ปุ่นและ NICs (เกาหลีใต้ ไต้หวัน) เป็นกึ่งปริมณฑล"],
       ["SI5","หน้า 7","Japan in the World Economy"]
     ],
     outside:"ข้อมูลอุตสาหกรรมชิปของแต่ละประเทศ (TSMC, Samsung, SK Hynix, SMIC, Rapidus นโยบายรัฐ ส่วนแบ่งตลาด) <b>ไม่มีในสไลด์เลย</b>"},
    {p:"เหมือนกันหรือว่าแตกต่างกันอย่างไร",
     mean:"คำสั่ง<b>เปรียบเทียบ</b> 4 ประเทศ ต้องมีทั้งจุดเหมือนและจุดต่าง",
     slides:[["SI4","หน้า 10","Comparing mixed economies (จีนอยู่ฝั่งวางแผนจากส่วนกลาง ญี่ปุ่น/สหรัฐฯ ฝั่งตลาด)"],["SI3","หน้า 13","Capitalism / Socialism / Communism"]]},
    {p:"ส่งผลกระทบต่อการเปลี่ยนแปลงนวัตกรรม อุตสาหกรรม (AI) และการพัฒนาเศรษฐกิจของเอเชีย",
     mean:"ส่วนที่สองของโจทย์ ให้บอกผลต่อ<b>นวัตกรรม</b> <b>อุตสาหกรรม</b> (อาจารย์เอ่ยถึง AI ในรอบแรก) และ<b>การพัฒนาเศรษฐกิจ</b> โดย<b>เน้นภาพของเอเชีย</b> ไม่ใช่แค่ 4 ประเทศ",
     slides:[
       ["SI4","หน้า 15–22","Emerging markets · ASEAN advantages · GDP เอเชีย 2021 และคาดการณ์ 2041"],
       ["SI6","หน้า 44, 49","ปัจจัยต่อการพัฒนาเศรษฐกิจภูมิภาค (นวัตกรรม เทคโนโลยี) · ประโยชน์ของการรวมกลุ่ม"],
       ["SI8","หน้า 38–40","Continental shift: เศรษฐกิจใหญ่ของโลกย้ายมาเอเชีย · มหาอำนาจถัดไป"],
       ["SI5","หน้า 24","Geopolitical trends: การผงาดของจีน · ผลกระทบของเทคโนโลยี"]
     ]}
  ],
  lens:"อาจารย์บอกว่า \"อันนี้เน้นเอเชีย\" และข้อนี้ \"คล้ายข้อ 2\" (มุมเศรษฐกิจ)",
  notAsked:[
    "โจทย์ไม่ได้ถามถึงสหรัฐฯ โดยตรง (สหรัฐฯ เอ่ยได้ในฐานะปัจจัยภายนอกที่กระทบการแข่งขัน)",
    "โจทย์ไม่ได้ถามรายละเอียดทางวิศวกรรมของการผลิตชิป",
    "โจทย์ไม่ได้ถามผลต่อไทยโดยตรง (ไทยและอาเซียนเป็นส่วนหนึ่งของ \"เอเชีย\" จึงยกเป็นตัวอย่างได้)"
  ],
  checklist:["โยงการค้าเสรีกับอุตสาหกรรมชิป","ไต้หวัน","เกาหลีใต้","จีน","ญี่ปุ่น","จุดเหมือน","จุดต่าง","ผลต่อนวัตกรรม/อุตสาหกรรม AI","ผลต่อการพัฒนาเศรษฐกิจของเอเชีย","มีจุดยืนของตัวเอง"]
}
},

/* ---------- แหล่งอ้างอิงนอกสไลด์ ---------- */
references: {
  q1: [
    ["Britannica — Sykes-Picot Agreement","https://www.britannica.com/event/Sykes-Picot-Agreement","ข้อตกลงลับอังกฤษ–ฝรั่งเศส พ.ค. 1916 แบ่งดินแดนจักรวรรดิออตโตมัน"],
    ["Britannica — Shiʿi (ต้นกำเนิดซุนนี–ชีอะห์)","https://www.britannica.com/topic/Shii","การแยกนิกายหลังศาสดามุฮัมมัดสิ้นพระชนม์ ค.ศ. 632"],
    ["History.com — Islam's Sunni-Shia Divide, Explained","https://www.history.com/articles/sunni-shia-divide-islam-muslim","ทั้งสองนิกายอยู่ร่วมกันอย่างสงบเกือบตลอดประวัติศาสตร์ · ความแตกแยกรุนแรงขึ้นปลายศตวรรษที่ 20"],
    ["Office of the Historian (US State Dept.) — Oil Embargo 1973–1974","https://history.state.gov/milestones/1969-1976/oil-embargo","กลุ่มประเทศอาหรับคว่ำบาตรน้ำมันต่อสหรัฐฯ"],
    ["National Security Archive — CIA documents acknowledge its role in Iran's 1953 coup","https://nsarchive.gwu.edu/media/cia-documents-acknowledge-its-role-irans-1953-coup","รัฐประหารโมสซาเดกหลังโอนกิจการน้ำมันเป็นของรัฐ"],
    ["CFR — The 1953 Overthrow of Iranian Prime Minister Mohammad Mosaddeq","https://www.cfr.org/articles/the-1953-overthrow-of-iranian-prime-minister-mohammad-mosaddeq","บริษัทน้ำมันแองโกล-อิหร่าน และการปิดล้อมการส่งออกน้ำมันอิหร่าน"],
    ["IEA — Strait of Hormuz factsheet","https://www.iea.org/about/strait-of-hormuz","ปี 2025 น้ำมันผ่านช่องแคบ ~20 ล้านบาร์เรล/วัน ≈ 25% ของการค้าน้ำมันทางทะเล ส่วนใหญ่ไปเอเชีย"],
    ["EIA — The Strait of Hormuz is the world's most important oil transit chokepoint","https://www.eia.gov/todayinenergy/detail.php?id=61002","ความสำคัญของช่องแคบฮอร์มุซ"],
    ["Bloomberg — BRICS now includes Saudi Arabia, Iran, UAE, Ethiopia, Egypt (4 ม.ค. 2024)","https://www.bloomberg.com/news/articles/2024-01-04/brics-now-includes-saudi-arabia-iran-uae-ethiopia-egypt","การขยายสมาชิก BRICS · ซาอุฯ ยังศึกษาคำเชิญ"],
    ["Arms Control Association — Israel and U.S. Strike Iran's Nuclear Program (2025)","https://armscontrol.org/act/2025-07/news/israel-and-us-strike-irans-nuclear-program","สงคราม 12 วัน มิ.ย. 2025 · สหรัฐฯ โจมตี Fordow, Natanz, Isfahan"],
    ["Dawn — Timeline of events leading up to the ceasefire between US and Iran (8 เม.ย. 2026)","https://www.dawn.com/news/1989782","สหรัฐฯ–อิสราเอลโจมตีอิหร่าน 28 ก.พ. 2026 · หยุดยิงโดยปากีสถานเป็นตัวกลาง"],
    ["Tribune — How the US-Israel war with Iran unfolded over 108 days","https://tribune.com.pk/story/2613315/timeline-how-the-us-israel-war-with-iran-unfolded-over-108-days","ลำดับเหตุการณ์ · การปิดช่องแคบฮอร์มุซ"],
    ["Geo TV — Timeline: How US-Israel war on Iran unfolded","https://www.geo.tv/latest/669239-timeline-how-us-israel-war-on-iran-unfolded","ผู้นำสูงสุดคาเมเนอีเสียชีวิต · สงครามขยายไปเลบานอน อ่าว เยเมน"],
    ["War on the Rocks — What's Going On In Iran?","https://warontherocks.com/whats-going-on-in-iran/","10 ก.ค. 2026 ทรัมป์ประกาศหยุดยิงสิ้นสุด สหรัฐฯ กลับมาปิดล้อมทางทะเล"],
    ["Al Jazeera live — Houthis target Saudi Arabia as CENTCOM chief meets MBS (19 พ.ย. 2026)","https://www.aljazeera.com/amp/news/liveblog/2026/11/19/iran-war-live-saudi-led-coalition-strikes-yemen-ships-on-fire-in-hormuz","IEA เรียกวิกฤตนี้ว่าวิกฤตอุปทานพลังงานใหญ่ที่สุดในประวัติศาสตร์"],
    ["Al Jazeera live — Iran war updates (3 พ.ย. 2026)","https://www.aljazeera.com/amp/news/liveblog/2026/11/3/iran-war-live-vance-sees-progress-in-talks-tehran-says-ball-in-us-court","ฮูตีเพิ่มการโจมตีซาอุฯ · ซาอุฯ ตุรกี ปากีสถานเจรจากับอิหร่าน · จีนเพิ่มบทบาททางการทูต"],
    ["Al Jazeera live — USS Theodore Roosevelt arrives (16 พ.ย. 2026)","https://aljazeera.com/amp/news/liveblog/2026/11/16/iran-war-live-tehran-warns-it-may-strike-first-before-another-us-attack","เรือบรรทุกเครื่องบินลำที่ 3 เข้าพื้นที่"],
    ["Local10/AP — Israeli strikes kill 5 in Gaza… (28 ส.ค. 2026)","https://www.local10.com/news/2026/08/28/israeli-strikes-kill-5-in-gaza-and-3-in-west-bank-and-other-news-in-the-middle-east/","การโจมตีต่อเนื่องหลังข้อตกลงหยุดยิงกาซา ต.ค. 2025"]
  ],
  q2: [
    ["NPR — U.S. move to isolate Huawei (16 พ.ค. 2019)","https://www.npr.org/2019/05/16/723983055/u-s-move-to-isolate-huawei-sends-ripples-through-global-supply-chain","กระทรวงพาณิชย์สหรัฐฯ ขึ้นบัญชี Huawei ใน Entity List"],
    ["KPBS/NPR — Allies and Huawei 5G","https://www.kpbs.org/news/2019/05/16/us-move-to-isolate-huawei-sends-ripples-through","สหรัฐฯ กดดันพันธมิตรห้ามอุปกรณ์ Huawei ใน 5G"],
    ["Euronews — Trump again eases restrictions on H200 chip exports to China (14 ม.ค. 2026)","https://euronews.com/2026/01/14/president-trump-again-eases-restrictions-on-h200-chip-exports-to-china","พิจารณาใบอนุญาตส่งออกชิป H200 เป็นรายกรณี"],
    ["BNN Bloomberg/AP — Trump administration moves to block China from indirect access to American AI technology (16 พ.ย. 2026)","https://www.bnnbloomberg.ca/business/artificial-intelligence/2026/11/16/trump-administration-moves-to-block-china-from-indirect-access-to-american-ai-technology/","กฎห้ามเข้าถึงชิปผ่านศูนย์ข้อมูลในประเทศที่สาม"],
    ["Khaleej Times/Reuters — US takes step to halt Nvidia AI chip shipments to Chinese firms outside China","https://www.khaleejtimes.com/tech/us-takes-step-to-halt-nvidia-ai-chip-shipments-to-chinese-firms-outside-china-2","ช่องโหว่บริษัทลูกของจีนในมาเลเซีย"],
    ["CSIS — One Year After Busan: Has China Kept Its Rare Earth Promises?","https://www.csis.org/index%2Ephp/analysis/one-year-after-busan-has-china-kept-its-rare-earth-promises","ข้อตกลงปูซาน 30 ต.ค. 2025 · หมดอายุ 10 ม.ค. 2027"],
    ["The National — China extends pause on rare earth export curbs for two months (9 พ.ย. 2026)","https://www.thenationalnews.com/news/us/2026/11/09/china-extends-pause-on-rare-earth-export-curbs-for-two-months/","จีนต่อการพักมาตรการแร่หายาก"],
    ["S&P Global — US says China agreed to address rare earth supply concerns (18 พ.ค. 2026)","https://www.spglobal.com/energy/en/news-research/latest-news/metals/051826-us-claims-china-agreed-to-address-rare-earth-supply-concerns","มาตรการแร่หายากของจีน เม.ย. 2025"],
    ["The Register — China remains embedded in US energy networks (ก.พ. 2026)","https://www.theregister.com/2026/02/17/volt_typhoon_dragos/","Volt Typhoon ในระบบไฟฟ้า น้ำมัน ก๊าซ"],
    ["CyberScoop — FBI: Salt Typhoon ongoing threat (2026)","https://cyberscoop.com/fbi-salt-typhoon-ongoing-threat-cybertalks-2026/","Salt Typhoon เจาะโทรคมนาคมสหรัฐฯ"],
    ["SecurityWeek — China's Salt Typhoon hacked critical infrastructure globally for years","https://www.securityweek.com/chinas-salt-typhoon-hacked-critical-infrastructure-globally-for-years/amp/","ขอบเขตการเจาะระบบทั่วโลก"],
    ["Eco-Business — The US-China AI chip war: Southeast Asia's compliance dilemma","https://www.eco-business.com/ms/opinion/the-us-china-ai-chip-war-southeast-asias-compliance-dilemma/","บริษัทในกรุงเทพฯ ถูกกล่าวหาเรื่องส่งเซิร์ฟเวอร์ Nvidia · สหรัฐฯ เตรียมใบอนุญาตส่งออกชิปไปมาเลเซียและไทย"],
    ["TechNode Global/OCBC — New US AI chip restrictions and SEA data centers","https://technode.global/?p=998257","ผู้ประกอบการที่โยงกับจีนคิดเป็น 38.4% ของกำลังศูนย์ข้อมูลที่อนุมัติในไทย"],
    ["ASEAN Exchanges — AI & Compute Infrastructure (มี.ค. 2026)","https://www.aseanexchanges.org/content/ai-compute-infrastructure-building-aseans-digital-backbone/","คำขอ BOI ไทยปี 2025 เพิ่ม 67% มูลค่าราว 24,000 ล้านดอลลาร์"],
    ["BCG — AI Infrastructure: A Strategic Opportunity for Thailand (ก.ค. 2026)","https://web-assets.bcg.com/f8/cb/60c2e31c488e9156edd695f2fe1d/ai-infrastructure-a-strategic-opportunity-for-thailand.pdf","ความเป็นกลางทางภูมิรัฐศาสตร์ของไทย · คำขอ BOI ศูนย์ข้อมูล 23,000 ล้านดอลลาร์ (2025)"],
    ["Nation Thailand — Thailand gains ground in regional AI supply-chain race (ก.ค. 2026)","https://www.nationthailand.com/business/40069169","ไทยผลิตอุปกรณ์ไฟฟ้า ระบบระบายความร้อน เซิร์ฟเวอร์ แต่ยังไม่ผลิตชิป"],
    ["Farrell & Newman — Weaponized Interdependence (International Security, 2019)","https://muse.jhu.edu/article/730804","เครือข่ายเศรษฐกิจโลกมีศูนย์กลาง ประเทศที่คุมศูนย์กลางใช้กดดันผู้อื่นได้ · บทคัดย่อเริ่มจากการแย้งข้อเสนอของฝ่ายเสรีนิยม"],
    ["SCMP — Southeast Asia starts to rethink its AI data centre boom (ต.ค. 2026)","https://www.scmp.com/week-asia/economics/article/3369788/southeast-asia-starts-rethink-its-ai-data-centre-boom-what-cost","ไทยชะลอบางโครงการ · มาเลเซียเจอแรงกดดันด้านไฟฟ้า"]
  ],
  q3: [
    ["TrendForce — Global foundry revenue 2Q26 (9 ก.ย. 2026)","https://www.trendforce.com/presscenter/news/20260909-13225.html","TSMC 72.5% · Samsung 5.9% · SMIC 5.4%"],
    ["Evertiq — SMIC narrows gap with Samsung (ก.ย. 2026)","https://evertiq.com/design/2026-09-10-smic-narrows-gap-with-samsung-as-global-foundry-revenue-hits-record-5349-billion","ตารางรายได้ foundry Q2/2026"],
    ["International Business Times (via inkl) — Samsung, SK Hynix and TSMC battle for AI chip supremacy","https://www.inkl.com/news/samsung-sk-hynix-and-tsmc-battle-for-ai-chip-supremacy-in-asia-as-2026-race-intensifies","SK Hynix ครองตลาด HBM ราว 50–62%"],
    ["Britannica Money — Taiwan Semiconductor Manufacturing Co.","https://britannica.com/topic/Taiwan-Semiconductor-Manufacturing-Co","TSMC ก่อตั้ง 1987 ร่วมทุนรัฐบาลไต้หวันกับ Philips ริเริ่มโมเดล pure-play foundry"],
    ["Cadence blog — TSMC 30 years ago","https://community.cadence.com/cadence_blogs_8/b/breakfast-bytes/posts/tsmc-30-years-ago","สัดส่วนผู้ถือหุ้นเริ่มต้น: รัฐบาลไต้หวัน 48% Philips 28%"],
    ["CSIS — Japan's Semiconductor Industrial Policy from the 1970s to Today","https://www.csis.org/blogs/perspectives-innovation/japans-semiconductor-industrial-policy-1970s-today","บริษัทญี่ปุ่นครองยอดขายโลก 51% ในปี 1988 · ข้อตกลงกับสหรัฐฯ"],
    ["Taipei Times — Japan's share 50% (1988) → 10% (2019)","https://taipeitimes.com/News/biz/archives/2021/06/13/2003759058","ตัวเลขจาก METI/Omdia"],
    ["DIGITIMES — What happened to Japan's chip dominance","https://apps.digitimes.com/news/a20251215PR201.html?chid=9","ข้อตกลง 1986 ราคาขั้นต่ำและเปิดตลาด 10%→20% · ญี่ปุ่นยังแข็งด้านวัสดุ"],
    ["RIETI — Evidence from the Japan–Korea trade dispute in the semiconductor industry","https://www.rieti.go.jp/jp/publications/dp/23e017.pdf","ญี่ปุ่นคุมส่งออกสารเคมี 3 ชนิดไปเกาหลีใต้ ก.ค. 2019"],
    ["AP via Washington Times — Japan export curbs take effect (4 ก.ค. 2019)","https://m.washingtontimes.com/news/2019/jul/4/japan-export-curbs-take-effect-as-skorean-official/","เกาหลีใต้นำเข้าโฟโตรีซิสต์จากญี่ปุ่น 92%"],
    ["Fortune — Big Fund III 344 billion yuan (พ.ค. 2024)","https://fortune.com/asia/2024/05/28/more-confident-china-doubling-down-big-fund-iii-semiconductors-development-us-controls/","กองทุนชิปของรัฐจีนเฟส 3 · เทียบ CHIPS Act ~53,000 ล้านดอลลาร์"],
    ["Bloomberg — Huawei Mate 60 Pro teardown (ก.ย. 2023)","https://www.bloomberg.com/news/features/2023-09-04/look-inside-huawei-mate-60-pro-phone-powered-by-made-in-china-chip","ชิป 7 นาโนเมตรของ SMIC"],
    ["Bank Negara Malaysia — Economic & Monetary Review 2024, Box 1","https://www.bnm.gov.my/publications/emr2024/box1","มาเลเซียมีส่วนแบ่ง 13% ของงานประกอบ ทดสอบ บรรจุชิปโลก"],
    ["MIDA — Malaysia's semiconductor value proposition","https://www.mida.gov.my/?p=223021","มาเลเซีย ~7% ของการค้าชิปโลก"],
    ["Fab Tracker (เม.ย. 2026)","https://s29.q4cdn.com/619069826/files/doc_downloads/2026/04/Fab-Tracker-April-2026.pdf","Rapidus ตั้งเป้าผลิต 2nm ปี 2027 · SK Hynix โรงงาน HBM ในสหรัฐฯ"],
    ["WTO — Information Technology Agreement","https://www.wto.org/english/tratop_e/inftec_e/inftec_e.htm","ITA สรุปเมื่อ ธ.ค. 1996 ยกเลิกภาษีสินค้าไอทีรวมถึงชิป ครอบคลุมราว 97% ของการค้าสินค้าไอทีโลก"],
    ["Radio Free Asia — Taiwan applies to join CPTPP, days after China (22 ก.ย. 2021)","https://www.rfa.org/english/news/china/trade-09222021133158.html","ไต้หวันยื่นสมัคร CPTPP หลังจีนไม่ถึงสัปดาห์"],
    ["Malay Mail/Reuters — Taiwan flags China risk to CPTPP bid","https://www.malaymail.com/news/money/2021/09/23/taiwan-flags-china-risk-to-trans-pacific-trade-pact-bid/2007854","ไต้หวันใช้ชื่อเดียวกับใน WTO · จีนขัดขวางการมีส่วนร่วมระหว่างประเทศของไต้หวัน"],
    ["GOV.UK — UK joins CPTPP (15 ธ.ค. 2024)","https://www.gov.uk/government/news/2-billion-boost-to-growth-as-uk-joins-major-trade-group","สหราชอาณาจักรเป็นสมาชิก CPTPP"],
    ["Counterpoint Research — Global pure foundry market share","https://www.counterpointresearch.com/en/insights/global-semiconductor-foundry-market-share","TSMC ~73% ของตลาด pure foundry"]
  ]
},

/* แผนผังสไลด์ (ใช้ใน prompt ให้ AI แนะนำว่าควรอ่านอะไรเพิ่ม · แยกต่อข้อ) */
slideMap: {
  q1: [
    ["SI 1 Geopolitics","นิยามภูมิรัฐศาสตร์ 3 ปัจจัย · สาเหตุและรูปแบบความขัดแย้ง · Geopolitical Risks · The Geopolitics of Oil"],
    ["SI 3 National states and political economy","รัฐ vs ชาติ · รัฐชาติ · สนธิสัญญาเวสต์ฟาเลีย · สิ่งที่ผูกคนเป็นชาติ"],
    ["SI 6 Regional Area","Hegemony · Balance of Power · จุดคอขวดทางทะเล (Sri Lanka slide)"],
    ["SI 8 New World Order","กระแสเปลี่ยนแปลงโลกด้านการเมือง: Bi-polar → Multi-polar · Key ideas (Cold War, decolonization, globalization) · New bipolar world"],
    ["SI 5 World economic order after WWII","สงครามเย็น · แผนที่ที่ระบุว่าอิหร่านคือประตูสู่น้ำมันตะวันออกกลาง · Yalta · NATO"],
    ["SI 2 Geoeconomics","Geopolitical discourse (Huntington, Klare) · Ray Dalio · International order in transition"],
    ["SI 9 globalization","หน้า 22, 27–28, 31, 35: ปัจจัยโลกาภิวัตน์ · ปืน–เงินตรา–ความรู้ · ผลต่อรัฐ 4 ข้อ (บทบาทรัฐลด อธิปไตยไม่ยั่งยืน รัฐชาติไม่ชัด มหาอำนาจครอบงำ) · การเมืองโลกในอนาคต (หลายขั้ว ความมั่นคงรูปแบบใหม่ การก่อการร้าย)"],
    ["SI 10 Global Future's Topics (คาบ 13)","หน้า 2, 9–13, 19–25, 44: แนวโน้มภูมิรัฐศาสตร์ 5 ข้อ · บรรษัทข้ามชาติ (บรรษัทน้ำมัน หุ้นส่วนรัฐ–เอกชน) · การแทรกแซงโดยตรง/โดยอ้อม · เสถียรภาพการเมืองกับ FDI · Trump's return"],
    ["บรรยายพิเศษ Superpower Geopolitics & Myanmar's Civil War","หน้า 5 (เฉพาะตารางทฤษฎี): Regional Security Complex · Principal-Agent · Two-Level Games · Resource Conflict · Hedging · Coercive Diplomacy"]
  ],
  q2: [
    ["SI 2 Geoeconomics","นิยาม · Framework for geoeconomics (Huawei) · CACA · พลังของภูมิเศรษฐศาสตร์ · International order in transition"],
    ["SI 8 New World Order","สำนักคิด IPE: Mercantilism · Economic Liberalism (Smith, Ricardo) · Marxism · Geo-technology"],
    ["SI 3 National states and political economy","IPE · Liberal/Marxist/Realist perspectives · Types of political economy"],
    ["SI 6 Regional Area","Interdependence Theory · New Protectionism · สหรัฐฯ พูดเสรีแต่กีดกันฝ่ายเดียว · ทฤษฎีพึ่งพิงและระบบโลก"],
    ["SI 4 Market economy","เศรษฐกิจแบบตลาด/สั่งการ/ผสม · ASEAN advantages"],
    ["SI 1 Geopolitics","เทคโนโลยีและอำนาจ · สงครามไซเบอร์ · Globalisation"],
    ["SI 9 globalization","หน้า 2, 5, 11–12, 19–31, 37–39: นิยาม · 5 มิติ · 4 ช่องทางสู่การเติบโต · ทฤษฎีโลกาภิวัตน์ 5 สาย · Toffler · Wallerstein · สังคมข้อมูลข่าวสาร · ผลบวก/ลบ · Thailand 4.0 · Industry 4.0"],
    ["SI 10 Global Future's Topics (คาบ 13)","หน้า 2, 4–5, 7, 9–36: AI · Supply chain disruptions · โลกาภิวัตน์ของตลาด/การผลิต · บรรษัทข้ามชาติ: อธิปไตย การแทรกแซง พึ่งพากับมหาอำนาจ ศูนย์กลาง–บริวาร ผลบวก/ลบ"],
    ["SI 11 Political Economy in GMS","หน้า 5–20, 30–35: ภูมิรัฐศาสตร์/ภูมิเศรษฐศาสตร์ GMS · ADB 1992 · 3Cs · ระเบียงเศรษฐกิจ · บทบาทญี่ปุ่น สหรัฐฯ จีน · LMC–BRI · ไทยภายใต้ ACMECS · ปัญหา SEZ"],
    ["บรรยายพิเศษ Geo-economics in GMS (Narut's Presentation)","หน้า 2, 4–5, 16–17: ไทยในระเบียบโลก · Interregnum · AI/Cybersecurity · OECD + BRICS"]
  ],
  q3: [
    ["SI 7 Free trade area","นิยาม FTA · ข้อดีข้อเสีย · ประเภทเขตการค้าเสรี · RCEP/CPTPP · FTA ของไทย"],
    ["SI 6 Regional Area","การรวมกลุ่ม 5 ระดับ · Old vs New regionalism · comparative advantage · economy of scale · ทฤษฎีระบบโลก"],
    ["SI 4 Market economy","เศรษฐกิจแบบตลาด vs สั่งการ vs ผสม · emerging markets · GDP เอเชีย"],
    ["SI 2 Geoeconomics","การควบคุมห่วงโซ่อุปทาน · SEZ · Indo-Pacific"],
    ["SI 5 World economic order after WWII","Japan in the world economy · Economic Cold War"],
    ["SI 8 New World Order","Continental shift · Rise of global capital · มหาอำนาจถัดไป"],
    ["SI 9 globalization","หน้า 3, 6, 11, 26, 37: GILT · Glocalization · 4 ช่องทางสู่การเติบโต · เทคโนโลยีชั้นสูง · Industry 4.0"],
    ["SI 10 Global Future's Topics (คาบ 13)","หน้า 4–5, 7, 14, 17, 26–28: AI · Supply chain disruptions · โลกาภิวัตน์ของการผลิต · บรรษัทญี่ปุ่นใน SEA · IBM ผลิตชิ้นส่วน 3/4 ในสาขา · การถ่ายทอดเทคโนโลยี"],
    ["SI 11 Political Economy in GMS","หน้า 13, 18, 20: ญี่ปุ่นลดบทบาทหลัง 1997 จีนขึ้นมา · มหาอำนาจใช้อำนาจเทคโนโลยี"]
  ]
},

/* ข้อเท็จจริงอ้างอิงสำหรับ prompt (กัน AI ตัดสินเหตุการณ์ใหม่ว่าผิด) */
facts: {
  q1: [
    "13–24 มิ.ย. 2025 สงคราม 12 วันระหว่างอิสราเอล–อิหร่าน สหรัฐฯ โจมตีโรงงานนิวเคลียร์ Fordow, Natanz, Isfahan",
    "28 ก.พ. 2026 สหรัฐฯ และอิสราเอลโจมตีอิหร่าน ผู้นำสูงสุดคาเมเนอีเสียชีวิต อิหร่านปิดช่องแคบฮอร์มุซ",
    "8 เม.ย. 2026 หยุดยิงครั้งแรกโดยปากีสถานเป็นตัวกลาง · 10 ก.ค. 2026 สหรัฐฯ ประกาศหยุดยิงสิ้นสุด",
    "พ.ย. 2026 สงครามยังไม่จบ ฮูตีโจมตีซาอุฯ สหรัฐฯ ส่งเรือบรรทุกเครื่องบินเพิ่ม IEA เรียกวิกฤตอุปทานพลังงานใหญ่ที่สุดในประวัติศาสตร์",
    "สงครามกาซาเริ่มหลัง 7 ต.ค. 2023 มีข้อตกลงหยุดยิง ต.ค. 2025 แต่การโจมตียังเกิดเป็นระยะ",
    "มี.ค. 2023 จีนไกล่เกลี่ยให้ซาอุฯ–อิหร่านฟื้นความสัมพันธ์ · 1 ม.ค. 2024 อิหร่าน UAE อียิปต์ เอธิโอเปีย เข้าร่วม BRICS"
  ],
  q2: [
    "16 พ.ค. 2019 สหรัฐฯ ขึ้นบัญชี Huawei ใน Entity List · ต.ค. 2022 คุมส่งออกชิป AI และเครื่องผลิตชิปไปจีนครั้งใหญ่",
    "ม.ค. 2025 DeepSeek เปิดตัวโมเดล AI ต้นทุนต่ำ · เม.ย./ต.ค. 2025 จีนคุมส่งออกแร่หายาก",
    "30 ต.ค. 2025 ข้อตกลงพักรบการค้าที่ปูซาน (หมดอายุ ม.ค. 2027) · 9 พ.ย. 2026 จีนต่อการพักมาตรการแร่หายากอีก 2 เดือน",
    "ม.ค. 2026 สหรัฐฯ ผ่อนให้ขอส่งออกชิป Nvidia H200 เป็นรายกรณี · 16 พ.ย. 2026 กฎห้ามจีนเข้าถึงชิปผ่านศูนย์ข้อมูลในประเทศที่สาม",
    "Volt Typhoon และ Salt Typhoon คือกลุ่มแฮกเกอร์ที่หน่วยงานสหรัฐฯ ระบุว่าโยงกับรัฐจีน",
    "คำขอ BOI ด้านศูนย์ข้อมูลของไทยปี 2025 ราว 23,000–24,000 ล้านดอลลาร์ · ปี 2026 สหรัฐฯ กล่าวหาบริษัทในกรุงเทพฯ ว่ามีส่วนส่งเซิร์ฟเวอร์ชิป Nvidia ให้จีน",
    "ไทยยื่นขอเข้า OECD 12 ก.พ. 2024 · เป็นประเทศหุ้นส่วน BRICS 1 ม.ค. 2025"
  ],
  q3: [
    "TrendForce Q2/2026: ส่วนแบ่งรายได้รับจ้างผลิตชิป TSMC 72.5% · Samsung 5.9% · SMIC 5.4%",
    "SK Hynix ครองตลาด HBM ราวครึ่งหนึ่ง · Rapidus ตั้งเป้าผลิตชิป 2 นาโนเมตรปี 2027",
    "บริษัทญี่ปุ่นครองยอดขายชิปโลกราว 50% ในปี 1988 · ข้อตกลงเซมิคอนดักเตอร์สหรัฐฯ–ญี่ปุ่น 1986",
    "TSMC ก่อตั้ง 1987 ร่วมทุนรัฐบาลไต้หวันกับ Philips · ก.ค. 2019 ญี่ปุ่นคุมส่งออกสารเคมีผลิตชิป 3 ชนิดไปเกาหลีใต้",
    "พ.ค. 2024 จีนตั้งกองทุน Big Fund III 344,000 ล้านหยวน · ส.ค. 2023 Huawei Mate 60 Pro ใช้ชิป 7nm ของ SMIC",
    "RCEP มีผลบังคับ ม.ค. 2022 ไม่มีไต้หวัน · มาเลเซียมีส่วนแบ่ง ~13% ของงานประกอบ/ทดสอบชิปโลก"
  ]
},

topics: []
};
