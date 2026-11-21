#!/usr/bin/env python3
"""สร้างภาพประกอบ SVG ของหน้า TU240 (โทนสีเดียวกับ TutorHub)"""
import os, html
OUT = os.path.join(os.path.dirname(__file__), "img")
INK, GR, LINE, SOFT, FOCUS, GOOD, WARN, HI, RED = "#1B2A4A", "#5A6270", "#C9D3E0", "#F3F7FC", "#2F6FEB", "#34A56F", "#C2410C", "#FFD84D", "#C8323C"
FONT = "Plex,'IBM Plex Sans Thai','Noto Sans Thai','Sukhumvit Set',Thonburi,Tahoma,sans-serif"

def esc(s): return html.escape(str(s), quote=True)

def svg(name, w, h, body, title):
    s = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" width="{w}" height="{h}" role="img" aria-label="{esc(title)}" font-family="{FONT}">
<title>{esc(title)}</title>
<defs>
<marker id="ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="{INK}"/></marker>
<marker id="arb" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="{FOCUS}"/></marker>
<marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="{RED}"/></marker>
<marker id="arg" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="{GOOD}"/></marker>
</defs>
<rect width="{w}" height="{h}" fill="#fff"/>
{body}
</svg>'''
    with open(os.path.join(OUT, name), "w", encoding="utf-8") as f: f.write(s)

def T(x, y, s, size=15, fill=INK, w=400, anchor="middle", lh=None):
    lines = s.split("\n") if isinstance(s, str) else s
    lh = lh or size * 1.35
    y0 = y - (len(lines) - 1) * lh / 2
    out = []
    for i, ln in enumerate(lines):
        out.append(f'<text x="{x}" y="{y0 + i*lh:.1f}" font-size="{size}" font-weight="{w}" fill="{fill}" text-anchor="{anchor}" dominant-baseline="central">{esc(ln)}</text>')
    return "\n".join(out)

def R(x, y, w, h, fill=SOFT, stroke=LINE, r=10, sw=1.5):
    return f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{r}" fill="{fill}" stroke="{stroke}" stroke-width="{sw}"/>'

def L(x1, y1, x2, y2, c=INK, sw=2, m="ar", dash=None):
    d = f' stroke-dasharray="{dash}"' if dash else ""
    mk = f' marker-end="url(#{m})"' if m else ""
    return f'<line x1="{x1}" y1="{y1}" x2="{x2}" y2="{y2}" stroke="{c}" stroke-width="{sw}"{d}{mk}/>'

def C(cx, cy, r, fill, stroke=None, op=1, sw=1.5):
    st = f' stroke="{stroke}" stroke-width="{sw}"' if stroke else ""
    return f'<circle cx="{cx}" cy="{cy}" r="{r}" fill="{fill}" fill-opacity="{op}"{st}/>'

# ---------------------------------------------------------------- q1-geo-frames
b = []
b.append(T(200, 26, "ภูมิรัฐศาสตร์เชิงวิพากษ์", 15, GR, 600))
b.append(C(200, 140, 82, FOCUS, FOCUS, .14)); b.append(C(140, 240, 82, GOOD, GOOD, .14)); b.append(C(260, 240, 82, WARN, WARN, .14))
b.append(T(200, 100, "อำนาจ\nPower", 15, INK, 600)); b.append(T(108, 270, "การเมือง\nPolitics", 15, INK, 600)); b.append(T(292, 270, "ภูมิศาสตร์\nGeography", 15, INK, 600))
b.append(R(140, 190, 120, 36, "#fff", INK, 18)); b.append(T(200, 208, "ภูมิรัฐศาสตร์", 15, INK, 700))
ox = 420
b.append(T(ox + 190, 26, "ภูมิศาสตร์ ยุทธศาสตร์ ประวัติศาสตร์", 15, GR, 600))
A, Bp, Cp = (ox + 190, 70), (ox + 50, 300), (ox + 330, 300)
b.append(f'<polygon points="{A[0]},{A[1]} {Bp[0]},{Bp[1]} {Cp[0]},{Cp[1]}" fill="{SOFT}" stroke="{INK}" stroke-width="2"/>')
for (x, y), t in [(A, "ภูมิศาสตร์\nGeography"), (Bp, "ยุทธศาสตร์\nStrategy"), (Cp, "ประวัติศาสตร์\nHistory")]:
    b.append(R(x - 58, y - 24, 116, 48, "#fff", INK, 10)); b.append(T(x, y, t, 14, INK, 700))
b.append(T(ox + 66, 170, "ภูมิยุทธศาสตร์\nGeo-strategy", 13, FOCUS, 600))
b.append(T(ox + 318, 170, "ภูมิศาสตร์\nประวัติศาสตร์\nHistorical\nGeography", 13, FOCUS, 600))
b.append(T(ox + 190, 352, "ประวัติศาสตร์การทูต · Diplomatic History", 13, FOCUS, 600))
b.append(R(ox + 130, 212, 120, 34, HI, INK, 17)); b.append(T(ox + 190, 229, "ภูมิรัฐศาสตร์", 15, INK, 700))
svg("q1-geo-frames.svg", 820, 375, "\n".join(b), "แผนภาพภูมิรัฐศาสตร์สองชุด")

# ---------------------------------------------------------------- q1-dalio
b = []
path = "M40,300 C170,295 250,95 410,85 C570,95 650,295 780,300"
b.append(f'<path d="{path}" fill="none" stroke="{FOCUS}" stroke-width="4"/>')
labels = ["ระเบียบภายในใหม่\nผู้นำใหม่", "สร้างระบบจัดสรร\nทรัพยากร\nระบบราชการ", "สันติภาพ\nและความรุ่งเรือง", "ความฟุ่มเฟือย\nช่องว่าง\nความมั่งคั่ง", "การเงินแย่\nความขัดแย้ง\nรุนแรง", "สงครามกลางเมือง\nและการปฏิวัติ"]
xs = [118, 228, 340, 480, 592, 702]
ys = [282, 196, 104, 104, 196, 282]
for i, (x, y) in enumerate(zip(xs, ys)):
    col = GOOD if i < 2 else (FOCUS if i < 4 else WARN)
    b.append(C(x, y, 17, col)); b.append(T(x, y, str(i + 1), 15, "#fff", 700))
    bx = 15 + i * 133
    b.append(L(x, y + 18, bx + 62, 336, LINE, 1.2, None, "3 3"))
    b.append(R(bx, 338, 124, 78, "#fff", col, 10)); b.append(T(bx + 62, 377, f"{i+1}. " + labels[i], 12.5, INK, 500, lh=17))
b.append(T(170, 40, "ขาขึ้น · THE RISE", 15, GOOD, 700)); b.append(T(410, 40, "จุดสูงสุด · THE TOP", 15, FOCUS, 700)); b.append(T(650, 40, "ขาลง · THE DECLINE", 15, WARN, 700))
svg("q1-dalio.svg", 820, 430, "\n".join(b), "วัฏจักรมหาอำนาจ 6 ขั้นของ Ray Dalio")

# ---------------------------------------------------------------- q1-timeline (vertical)
ev = [
 ("632", "ซุนนี–ชีอะห์แยกกันหลังศาสดามุฮัมมัดสิ้นพระชนม์", 0),
 ("1096–1291", "สงครามครูเสด แย่งเยรูซาเล็ม", 0),
 ("1516–1918", "ดินแดนอาหรับอยู่ใต้จักรวรรดิออตโตมัน", 0),
 ("1916", "ข้อตกลงลับไซค์ส–ปีโก แบ่งดินแดนออตโตมัน", 1),
 ("1917", "คำประกาศบัลโฟร์", 1),
 ("1948", "ก่อตั้งอิสราเอล · สงครามอาหรับ–อิสราเอล", 1),
 ("1953", "รัฐประหารอิหร่านหลังโอนกิจการน้ำมัน", 2),
 ("1973–74", "ประเทศอาหรับคว่ำบาตรน้ำมันต่อสหรัฐฯ", 2),
 ("1979", "การปฏิวัติอิสลามในอิหร่าน", 2),
 ("1980–88", "สงครามอิรัก–อิหร่าน", 2),
 ("1990–91", "อิรักบุกคูเวต · สงครามอ่าวเปอร์เซีย", 2),
 ("2001 / 2003", "9/11 · สหรัฐฯ บุกอัฟกานิสถานและอิรัก", 3),
 ("2011 / 2014", "อาหรับสปริง · สงครามซีเรีย · ISIS", 3),
 ("2020", "ข้อตกลงอับราฮัม", 3),
 ("2023", "จีนไกล่เกลี่ยซาอุฯ–อิหร่าน · 7 ต.ค. สงครามกาซา", 4),
 ("2024", "อิหร่าน UAE อียิปต์ เข้า BRICS", 4),
 ("มิ.ย. 2025", "สงคราม 12 วัน อิสราเอล–อิหร่าน", 4),
 ("ก.พ. 2026", "สหรัฐฯ–อิสราเอลโจมตีอิหร่าน · ปิดช่องแคบฮอร์มุซ", 4),
]
eras = [("ศาสนาและจักรวรรดิ", "#EEF2FF"), ("อาณานิคมและพรมแดน", "#FFF7E6"), ("น้ำมันและสงครามเย็น", "#FDECEC"), ("หลังสงครามเย็น", "#EAF7F0"), ("ปัจจุบัน", "#FFF9D6")]
eracol = [FOCUS, "#B7791F", RED, GOOD, "#8A6D00"]
step, top = 38, 30
b = []
H = top + len(ev) * step + 20
# era bands
i = 0
while i < len(ev):
    j = i
    while j < len(ev) and ev[j][2] == ev[i][2]: j += 1
    y1, y2 = top + i * step - 6, top + j * step - 10
    b.append(R(8, y1, 804, y2 - y1, eras[ev[i][2]][1], "none", 8, 0))
    b.append(T(24, (y1 + y2) / 2, eras[ev[i][2]][0], 13, eracol[ev[i][2]], 700, "start"))
    i = j
b.append(L(250, top, 250, top + len(ev) * step - 20, LINE, 3, None))
for k, (yr, tx, e) in enumerate(ev):
    y = top + k * step + 12
    b.append(C(250, y, 7, eracol[e], "#fff", 1, 2))
    b.append(T(236, y, yr, 14, INK, 700, "end"))
    b.append(T(266, y, tx, 14, INK, 400, "start"))
svg("q1-timeline.svg", 820, H, "\n".join(b), "เส้นเวลาความขัดแย้งในตะวันออกกลาง")

# ---------------------------------------------------------------- q1-causes
b = []
cx, cy = 410, 250
b.append(C(cx, cy, 92, INK)); b.append(T(cx, cy, "สงครามใน\nตะวันออกกลาง", 18, "#fff", 700))
items = [("A", "ทรัพยากรพลังงาน", ""), ("B", "เส้นทางยุทธศาสตร์", ""),
         ("C", "ดินแดน รัฐชาติ\nมรดกอาณานิคม", ""), ("D", "ศาสนาและอัตลักษณ์", ""),
         ("E", "แข่งอำนาจในภูมิภาค", ""), ("F", "มหาอำนาจแทรกแซง\nสงครามตัวแทน", ""),
         ("G", "การเมืองภายใน\nระบอบการปกครอง", "")]
import math
for i, (k, t, s) in enumerate(items):
    ang = -math.pi / 2 + i * 2 * math.pi / 7
    x, y = cx + 300 * math.cos(ang), cy + 190 * math.sin(ang)
    ex, ey = cx + 96 * math.cos(ang), cy + 96 * math.sin(ang)
    bx, by = cx + 230 * math.cos(ang), cy + 150 * math.sin(ang)
    b.append(L(ex, ey, bx, by, LINE, 2, None))
    b.append(R(x - 105, y - 38, 210, 76, SOFT, FOCUS, 12))
    b.append(C(x - 86, y - 20, 13, FOCUS)); b.append(T(x - 86, y - 20, k, 13, "#fff", 700))
    b.append(T(x + 8, y - 6, t, 14, INK, 700)); b.append(T(x, y + 26, s, 11.5, GR, 400))
svg("q1-causes.svg", 820, 500, "\n".join(b), "7 คำอธิบายมูลเหตุสงครามตะวันออกกลาง")

# ---------------------------------------------------------------- q2-framework
b = []
b.append(R(20, 90, 200, 170, "#EAF1FF", FOCUS, 14, 2)); b.append(T(120, 112, "เจ้าอำนาจ (Hegemon)", 15, FOCUS, 700)); b.append(T(120, 134, "สหรัฐอเมริกา", 15, INK, 700))
b.append(R(40, 158, 160, 38, "#fff", FOCUS, 8)); b.append(T(120, 177, "รัฐบาล (Government)", 13.5))
b.append(R(40, 206, 160, 38, "#fff", FOCUS, 8)); b.append(T(120, 225, "บริษัท (Firms)", 13.5))
b.append(R(300, 70, 240, 210, SOFT, INK, 14, 2)); b.append(T(420, 92, "ประเทศเป้าหมาย (Target)", 15, INK, 700)); b.append(T(420, 112, "ส่วนอื่นของโลก เช่น อาเซียน ไทย", 12.5, GR))
b.append(R(315, 140, 82, 60, "#fff", INK, 10)); b.append(T(356, 170, "ประเทศ A", 14, INK, 600))
b.append(R(443, 140, 82, 60, "#fff", INK, 10)); b.append(T(484, 170, "ประเทศ B", 14, INK, 600))
b.append(f'<line x1="401" y1="170" x2="439" y2="170" stroke="{INK}" stroke-width="2" marker-end="url(#ar)" marker-start="url(#ar)"/>')
b.append(T(420, 236, "Production externality\nใช้ระบบของใครก็กระทบคู่ค้า", 12.5, GR))
b.append(R(620, 110, 180, 120, "#FDECEC", RED, 14, 2)); b.append(T(710, 150, "จีน", 17, RED, 700)); b.append(T(710, 180, "Huawei", 15, INK, 600)); b.append(T(710, 204, "ขายเทคโนโลยี 5G", 12.5, GR))
b.append(L(222, 150, 296, 150, FOCUS, 3, "arb")); b.append(T(259, 128, "กดดัน", 13, FOCUS, 700))
b.append(L(618, 170, 544, 170, RED, 3, "arr")); b.append(T(581, 148, "เสนอขาย", 13, RED, 700))
b.append(f'<path d="M420,284 C420,330 120,330 120,264" fill="none" stroke="{WARN}" stroke-width="2.5" stroke-dasharray="7 5" marker-end="url(#ar)"/>')
b.append(T(270, 340, "National security externality · ผลกระทบด้านความมั่นคงย้อนกลับมาที่สหรัฐฯ", 13.5, WARN, 700))
b.append(T(410, 30, "A Framework for Geoeconomics", 16, INK, 700))
svg("q2-framework.svg", 820, 370, "\n".join(b), "กรอบภูมิเศรษฐศาสตร์ กรณี Huawei")

# ---------------------------------------------------------------- q2-eras
b = []
data = [("Geopolitics", "ภูมิรัฐศาสตร์", "ดินแดน · กำลังทหาร", "#EAF1FF", FOCUS), ("Geo-economics", "ภูมิเศรษฐศาสตร์", "การค้า · ห่วงโซ่อุปทาน · คว่ำบาตร", "#EAF7F0", GOOD), ("Geo-technology", "ภูมิเทคโนโลยี", "ชิป · AI · ไซเบอร์", "#FFF9D6", "#8A6D00")]
for i, (en, th, d, f, c) in enumerate(data):
    x = 20 + i * 265
    b.append(f'<path d="M{x},30 L{x+225},30 L{x+255},100 L{x+225},170 L{x},170 L{x+30},100 Z" fill="{f}" stroke="{c}" stroke-width="2"/>')
    b.append(T(x + 130, 72, en, 16, c, 700)); b.append(T(x + 130, 100, th, 15, INK, 700)); b.append(T(x + 130, 130, d, 12.5, GR))
svg("q2-eras.svg", 820, 200, "\n".join(b), "สามยุคของการแข่งอำนาจ")

# ---------------------------------------------------------------- q2-ipe
b = []
cols = [("พาณิชยนิยม", "Mercantilism", ["เศรษฐกิจชาตินิยม", "รัฐ–ความมั่งคั่ง–อำนาจ", "รัฐกำหนดนโยบายเศรษฐกิจ", "การค้า = แพ้ชนะ"], "มองแบบสัจนิยม (Realist)", WARN, "#FFF4EC"),
        ("เสรีนิยมทางเศรษฐกิจ", "Economic Liberalism", ["การค้าเสรี", "Adam Smith (1723–1790)", "David Ricardo (1772–1823)", "การค้า = ทุกฝ่ายได้"], "เน้นตลาดเสรี", FOCUS, "#EAF1FF"),
        ("มาร์กซ์นิยม", "Marxism", ["Marx · Engels · Lenin", "ชนชั้น ทุน การขูดรีด", "แกนกลาง vs รอบนอก", "การค้า = ขูดรีด"], "เน้นการวางแผนจากส่วนกลาง", RED, "#FDECEC")]
for i, (th, en, pts_, foot, c, f) in enumerate(cols):
    x = 20 + i * 265
    b.append(R(x, 20, 250, 300, f, c, 14, 2))
    b.append(T(x + 125, 50, th, 17, c, 700)); b.append(T(x + 125, 76, en, 13.5, GR, 600))
    for j, p in enumerate(pts_):
        b.append(R(x + 16, 98 + j * 44, 218, 36, "#fff", LINE, 8)); b.append(T(x + 125, 116 + j * 44, p, 13.5))
    b.append(T(x + 125, 294, foot, 12.5, GR, 600))
b.append(R(285, 20, 250, 300, "none", FOCUS, 14, 4))
svg("q2-ipe.svg", 820, 340, "\n".join(b), "สามสำนักคิดเศรษฐศาสตร์การเมืองระหว่างประเทศ")

# ---------------------------------------------------------------- q2-spectrum
b = []
b.append('<defs><linearGradient id="g1" x1="0" x2="1"><stop offset="0" stop-color="#C8323C"/><stop offset=".5" stop-color="#C9D3E0"/><stop offset="1" stop-color="#2F6FEB"/></linearGradient></defs>')
b.append(f'<rect x="40" y="110" width="740" height="22" rx="11" fill="url(#g1)"/>')
b.append(T(40, 160, "วางแผนจากส่วนกลาง\n(รัฐคุมสูง)", 13.5, RED, 700, "start")); b.append(T(780, 160, "ตลาดเสรี\n(รัฐคุมต่ำ)", 13.5, FOCUS, 700, "end"))
b.append(T(410, 160, "เศรษฐกิจผสม", 13.5, GR, 700))
cs = ["เกาหลีเหนือ", "คิวบา", "จีน", "รัสเซีย", "แอฟริกาใต้", "กรีซ", "ฝรั่งเศส", "สหราชอาณาจักร", "แคนาดา", "สหรัฐฯ", "ฮ่องกง", "สิงคโปร์"]
for i, c in enumerate(cs):
    x = 60 + i * (700 / (len(cs) - 1))
    hot = c in ("จีน", "สหรัฐฯ")
    up = i % 2 == 0
    y = 74 if up else 54
    b.append(L(x, 108, x, y + 10, INK if hot else GR, 2.5 if hot else 1.2, None))
    b.append(C(x, 121, 6, "#fff", INK, 1, 2))
    b.append(T(x, y, c, 14 if hot else 12.5, INK if hot else GR, 700 if hot else 400))
b.append(T(410, 20, "เรียงจากรัฐคุมสูงไปถึงตลาดเสรี (Comparing mixed economies)", 13, GR, 600))
svg("q2-spectrum.svg", 820, 200, "\n".join(b), "สเปกตรัมระบบเศรษฐกิจ")

# ---------------------------------------------------------------- q2-timeline
b = []
ev = [("พ.ค. 2019", "ขึ้นบัญชี Huawei", 0), ("ต.ค. 2022", "คุมส่งออกชิป AI\nCHIPS Act", 0), ("2023", "Mate 60 Pro\nชิป 7nm SMIC", 1),
      ("พ.ค. 2024", "Big Fund III", 1), ("ม.ค. 2025", "DeepSeek", 1), ("เม.ย./ต.ค. 2025", "คุมส่งออก\nแร่หายาก", 1),
      ("30 ต.ค. 2025", "พักรบปูซาน", 2), ("ม.ค. 2026", "สหรัฐฯ ผ่อน\nชิป H200", 2), ("พ.ย. 2026", "ห้ามเข้าถึงชิป\nผ่านประเทศที่สาม", 0)]
cc = [FOCUS, RED, GOOD]
b.append(L(30, 170, 870, 170, INK, 3, "ar"))
for i, (d, t, s) in enumerate(ev):
    x = 60 + i * 97
    up = i % 2 == 0
    b.append(C(x, 170, 9, cc[s], "#fff", 1, 2))
    y2 = 110 if up else 230
    b.append(L(x, 170 + (-10 if up else 10), x, y2 + (22 if up else -22), cc[s], 1.5, None))
    b.append(R(x - 47, y2 - 30, 94, 60, "#fff", cc[s], 8))
    b.append(T(x, y2 - 12, d, 11.5, cc[s], 700)); b.append(T(x, y2 + 10, t, 11.5, INK, 500, lh=14))
leg = [("สหรัฐฯ ดำเนินการ", FOCUS), ("จีนดำเนินการ/ตอบโต้", RED), ("เจรจา/ผ่อนคลาย", GOOD)]
for i, (t, c) in enumerate(leg):
    b.append(C(60 + i * 200, 300, 7, c)); b.append(T(74 + i * 200, 300, t, 13, INK, 500, "start"))
svg("q2-timeline.svg", 900, 320, "\n".join(b), "เส้นเวลาสงครามเทคโนโลยีสหรัฐฯ–จีน")

# ---------------------------------------------------------------- q2-shift
import random
random.seed(4)
b = []
b.append(T(190, 24, "ก่อน: การค้าเสรีไร้รอยต่อ", 15, INK, 700)); b.append(T(630, 24, "หลัง: แบ่งกลุ่มพันธมิตร", 15, INK, 700))
nodes = [(190 + 120 * math.cos(a), 160 + 95 * math.sin(a)) for a in [i * 2 * math.pi / 9 for i in range(9)]]
for i in range(9):
    for j in range(i + 1, 9):
        b.append(f'<line x1="{nodes[i][0]:.0f}" y1="{nodes[i][1]:.0f}" x2="{nodes[j][0]:.0f}" y2="{nodes[j][1]:.0f}" stroke="{LINE}" stroke-width="1.3"/>')
for i, (x, y) in enumerate(nodes):
    b.append(C(x, y, 11, [FOCUS, RED, GOOD][i % 3], "#fff", 1, 2))
b.append(L(345, 160, 445, 160, INK, 3));
L1 = [(540 + 55 * math.cos(a), 160 + 70 * math.sin(a)) for a in [i * 2 * math.pi / 4 for i in range(4)]]
L2 = [(730 + 55 * math.cos(a), 160 + 70 * math.sin(a)) for a in [i * 2 * math.pi / 4 for i in range(4)]]
for grp, c in ((L1, FOCUS), (L2, RED)):
    for i in range(4):
        for j in range(i + 1, 4):
            b.append(f'<line x1="{grp[i][0]:.0f}" y1="{grp[i][1]:.0f}" x2="{grp[j][0]:.0f}" y2="{grp[j][1]:.0f}" stroke="{c}" stroke-opacity=".45" stroke-width="1.6"/>')
b.append(f'<line x1="595" y1="160" x2="675" y2="160" stroke="{GR}" stroke-width="1.5" stroke-dasharray="5 5"/>')
mid = (635, 250)
for (x, y) in (L1[1], L2[1]):
    b.append(f'<line x1="{x:.0f}" y1="{y:.0f}" x2="{mid[0]}" y2="{mid[1]}" stroke="{GOOD}" stroke-width="1.6"/>')
for (x, y) in L1: b.append(C(x, y, 11, FOCUS, "#fff", 1, 2))
for (x, y) in L2: b.append(C(x, y, 11, RED, "#fff", 1, 2))
b.append(C(*mid, 12, GOOD, "#fff", 1, 2))
b.append(T(540, 260, "ค่ายสหรัฐฯ", 13, FOCUS, 700)); b.append(T(730, 260, "ค่ายจีน", 13, RED, 700)); b.append(T(635, 285, "ประเทศที่คบทั้งสองฝ่าย", 12.5, GOOD, 700))
b.append(T(410, 312, "โลกเปลี่ยนจากการค้าเสรีอย่างไร้รอยต่อ มาสู่การแบ่งกลุ่มพันธมิตรที่ปลอดภัยต่อกัน", 12.5, GR, 500))
svg("q2-shift.svg", 820, 330, "\n".join(b), "จากการค้าเสรีไร้รอยต่อสู่การแบ่งกลุ่มพันธมิตร")

# ---------------------------------------------------------------- q3-levels (staircase)
b = []
lv = [("เขตการค้าเสรี", "ยกเลิกภาษีระหว่างสมาชิก", "AFTA · RCEP · USMCA"), ("สหภาพศุลกากร", "+ ภาษีภายนอกร่วม", "EU Customs Union"),
      ("ตลาดร่วม", "+ ทุน แรงงาน เคลื่อนย้ายเสรี", "ตลาดร่วมยุโรป"), ("สหภาพเศรษฐกิจ", "+ เงินสกุลเดียว นโยบายร่วม", "สหภาพยุโรป"),
      ("สหภาพการเมือง", "+ รัฐบาลร่วม", "ยังไม่มีตัวอย่างสมบูรณ์")]
fills = ["#EAF1FF", "#DCE7FD", "#C9DAFB", "#B4CBF8", "#9EBBF5"]
for i, (t, d, e) in enumerate(lv):
    x, w = 20 + i * 156, 152
    h = 90 + i * 52
    y = 360 - h
    b.append(R(x, y, w, h, fills[i], FOCUS, 8, 1.5))
    b.append(T(x + w / 2, y + 24, f"{i+1}. {t}", 14, INK, 700))
    b.append(T(x + w / 2, y + 50, d, 11.5, INK, 500))
    b.append(T(x + w / 2, y + 74, e, 11.5, GR, 400))
b.append(L(96, 95, 96, 262, WARN, 2.5)); b.append(T(96, 75, "เอเชียส่วนใหญ่อยู่ขั้นนี้", 13, WARN, 700))
b.append(T(410, 386, "ระดับยิ่งสูง ประเทศสมาชิกยิ่งต้องสละอำนาจกำหนดนโยบายให้กลุ่มมากขึ้น", 12.5, GR, 500))
svg("q3-levels.svg", 820, 400, "\n".join(b), "การรวมกลุ่มทางเศรษฐกิจ 5 ระดับ")

# ---------------------------------------------------------------- q3-fta-venn
b = []
b.append(f'<ellipse cx="300" cy="210" rx="250" ry="165" fill="{GOOD}" fill-opacity=".12" stroke="{GOOD}" stroke-width="2"/>')
b.append(f'<ellipse cx="530" cy="210" rx="230" ry="150" fill="{FOCUS}" fill-opacity=".12" stroke="{FOCUS}" stroke-width="2"/>')
b.append(T(170, 60, "RCEP", 18, GOOD, 700)); b.append(T(650, 72, "CPTPP", 18, FOCUS, 700))
def ctry(x, y, n, hot=False):
    return T(x, y, n, 15 if hot else 13, RED if hot else INK, 700 if hot else 400)
for k, (n, h) in enumerate([("จีน ★", 1), ("เกาหลีใต้ ★", 1), ("ไทย", 0), ("อินโดนีเซีย", 0), ("ฟิลิปปินส์", 0), ("กัมพูชา · ลาว", 0), ("เมียนมา", 0)]):
    b.append(ctry(175, 105 + k * 34, n, h))
for k, (n, h) in enumerate([("ญี่ปุ่น ★", 1), ("ออสเตรเลีย · นิวซีแลนด์", 0), ("สิงคโปร์ · เวียดนาม", 0), ("มาเลเซีย · บรูไน", 0)]):
    b.append(ctry(418, 140 + k * 36, n, h))
for k, n in enumerate(["แคนาดา · เม็กซิโก", "ชิลี · เปรู", "สหราชอาณาจักร*"]):
    b.append(ctry(650, 160 + k * 34, n))
b.append(R(600, 360, 210, 70, "#fff", INK, 10)); b.append(T(705, 380, "ไม่อยู่ทั้งสอง", 13, INK, 700)); b.append(T(705, 408, "ไต้หวัน ★ · สหรัฐฯ · อินเดีย", 13.5, RED, 700))
b.append(T(20, 420, "★ = ประเทศในโจทย์ข้อ 3   * เข้าร่วม ธ.ค. 2024 (นอกสไลด์)", 12, GR, 500, "start"))
svg("q3-fta-venn.svg", 820, 440, "\n".join(b), "สมาชิก RCEP และ CPTPP")

# ---------------------------------------------------------------- q3-chain
b = []
st = [("วัสดุ เคมี", "ญี่ปุ่น"), ("เครื่องจักร", "สหรัฐฯ · เนเธอร์แลนด์\nญี่ปุ่น"), ("ออกแบบ", "สหรัฐฯ"), ("ผลิตเวเฟอร์", "ไต้หวัน · เกาหลีใต้\nจีน (ระดับกลาง)"), ("ประกอบ ทดสอบ", "ไต้หวัน · จีน\nมาเลเซีย"), ("ใช้ในสินค้า", "จีน · อาเซียน\n(ไทย: เซิร์ฟเวอร์)")]
for i, (t, c) in enumerate(st):
    x = 10 + i * 143
    b.append(f'<path d="M{x},40 L{x+120},40 L{x+140},80 L{x+120},120 L{x},120 L{x+20},80 Z" fill="{["#FFF4EC","#EEF2FF","#EAF1FF","#FDECEC","#EAF7F0","#FFF9D6"][i]}" stroke="{INK}" stroke-width="1.5"/>')
    b.append(T(x + 72, 70, f"{i+1}", 13, GR, 700)); b.append(T(x + 72, 92, t, 14, INK, 700))
    b.append(T(x + 70, 170, c, 13, INK, 500))
b.append(T(430, 230, "ไม่มีประเทศใดทำได้ครบทุกขั้น · ทุกขั้นพึ่งการค้าข้ามพรมแดน", 13.5, FOCUS, 700))
svg("q3-chain.svg", 870, 250, "\n".join(b), "ห่วงโซ่การผลิตชิป")

# ---------------------------------------------------------------- bar helper
def hbar(name, title, rows, maxv, unit, w=820, note="", hot=()):
    b = []
    y0 = 50
    b.append(T(w / 2, 22, title, 15, INK, 700))
    for i, (lab, v) in enumerate(rows):
        y = y0 + i * 38
        bw = (w - 330) * v / maxv
        c = RED if lab in hot else FOCUS
        b.append(T(190, y + 13, lab, 14, INK, 700 if lab in hot else 400, "end"))
        b.append(R(200, y, max(bw, 2), 26, c, "none", 5, 0))
        b.append(T(206 + bw, y + 13, f"{v:,}{unit}", 13.5, INK, 600, "start"))
    H = y0 + len(rows) * 38 + 30
    if note: b.append(T(w / 2, H - 12, note, 12, GR, 400))
    svg(name, w, H, "\n".join(b), title)

hbar("q3-share.svg", "ส่วนแบ่งรายได้รับจ้างผลิตชิปโลก ไตรมาส 2 ปี 2026 (%)",
     [("TSMC (ไต้หวัน)", 72.5), ("Samsung (เกาหลีใต้)", 5.9), ("SMIC (จีน)", 5.4), ("รายอื่นรวมกัน", 16.2)], 80, "%",
     note="ที่มา: TrendForce (ก.ย. 2026) · รายอื่นรวมกัน = 100 − สามรายแรก", hot=())
hbar("q3-gdp.svg", "ประมาณการ GDP ปี 2041 (พันล้านดอลลาร์ ตามสไลด์ SI 4 หน้า 20)",
     [("จีน", 42498), ("อินเดีย", 27150), ("ญี่ปุ่น", 8709), ("อินโดนีเซีย", 6015), ("เกาหลีใต้", 4974), ("เวียดนาม", 2535), ("บังกลาเทศ", 2253), ("ไทย", 1967), ("อิสราเอล", 1926), ("อิหร่าน", 1877)],
     46000, "", note="สีแดง = ประเทศในโจทย์ข้อ 3 (ไต้หวันไม่อยู่ในตารางของสไลด์)", hot=("จีน", "ญี่ปุ่น", "เกาหลีใต้"))

# ---------------------------------------------------------------- q3-japan
b = []
b.append(T(410, 22, "ส่วนแบ่งยอดขายชิปโลกของบริษัทญี่ปุ่น", 15, INK, 700))
base = 300
def yv(v): return base - v * 4.4
b.append(L(80, base, 760, base, INK, 1.5, None))
for v in (0, 25, 50):
    b.append(L(80, yv(v), 760, yv(v), LINE, 1, None, "4 4")); b.append(T(70, yv(v), f"{v}%", 12, GR, 400, "end"))
for x, yr, v in ((220, "1988", 50), (620, "2019", 10)):
    b.append(R(x - 60, yv(v), 120, base - yv(v), RED, "none", 6, 0))
    b.append(T(x, yv(v) - 14, f"~{v}%", 16, INK, 700)); b.append(T(x, base + 18, yr, 14, INK, 700))
b.append(L(300, 165, 545, 240, WARN, 2.5)); b.append(T(470, 112, "ถูกกดดันด้วยข้อตกลงสหรัฐฯ–ญี่ปุ่น (1986)\nเกาหลีใต้และไต้หวันขึ้นมาแซงในการผลิต", 13, WARN, 700))
b.append(T(410, 345, "ที่มา: METI/Omdia (Taipei Times) · CSIS · ปัจจุบันญี่ปุ่นยังแข็งด้านวัสดุและเครื่องจักร", 12, GR))
svg("q3-japan.svg", 820, 360, "\n".join(b), "ส่วนแบ่งชิปโลกของญี่ปุ่น 1988 และ 2019")
print("ok", sorted(os.listdir(OUT)))
