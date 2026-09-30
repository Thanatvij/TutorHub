/* เนื้อหาเรียบเรียงจากสไลด์ที่ได้รับ; ไม่เผยแพร่ไฟล์ต้นฉบับ */
registerSubject({
  "code": "FOF",
  "name": "Foundations of Finance (พื้นฐานการเงิน)",
  "exam": {
    "when": "ยังไม่มีประกาศวันเวลาสอบในเอกสารที่ได้รับ",
    "where": "ยังไม่ระบุ",
    "duration": "ยังไม่ระบุ",
    "allowed": "ยังไม่ระบุ",
    "rules": "อ้างอิงเอกสาร 4 ไฟล์: BF_CH1, BF_CH2, BF_CH4, BF_CH5 รวม 116 หน้า ไม่พบไฟล์ BF_CH3 แต่ BF_CH2 มีหัวเรื่อง Chapter 3: A Review of Financial Statements จึงใช้เลขบทตามเนื้อหา (1, 3, 4, 5) และยังไม่มีเนื้อหา Chapter 2 ตามเลขในตำรา ไม่พบ syllabus รูปแบบสอบ สัดส่วนคะแนน หรือข้อสอบจริง แบบฝึกหัดทั้งหมดเป็น mock ไม่ใช่ข้อสอบอาจารย์ ไม่เพิ่ม NPV/IRR หรือบทเสริมนอกเอกสาร ตัวอย่างฝึกที่แต่งเพิ่มใช้สูตรในสไลด์ บท 3 แก้คำเรียก Non-current liabilities ที่พิมพ์ผิดและแยกตัวอย่างผู้ถือหุ้นออกจากนิยาม บท 4 ใช้ Quick ratio และ EVA ตามกรอบสไลด์ พร้อมเตือนเรื่องฐานวันและการปัดเศษ บท 5 แก้เลขชี้กำลัง PVA ความคลาดเคลื่อน FVA โจทย์ 40/50 ปี และอัตรา 20% ต่อเดือน/ต่อปีอย่างชัดเจน ตัวอย่างบริษัทเป็นข้อมูลในสไลด์ปี 2011 ไม่ใช่ข้อมูลปัจจุบัน"
  },
  "practiceNote": "ชุดฝึกแต่งใหม่จากสไลด์ มีเลือกตอบ จับคู่แบบเขียน และเขียนตอบ/คำนวณ ทุกข้อเป็น mock — คำนวณด้วยค่าที่ไม่ปัดกลางทาง แล้วปัดคำตอบสุดท้ายตามโจทย์",
  "study": [
    {
      "id": "ch1",
      "topic": "บทที่ 1 · Financial Management and the Firm",
      "title": "การบริหารการเงินและกิจการ",
      "summary": "เป้าหมาย · หลัก 4 ข้อ · Ethics · CFO · รูปแบบธุรกิจ · ธุรกิจข้ามชาติ",
      "quick": "<div class=\"key\">จำแกนหลัก: <b>Shareholder wealth → Cash flow → Time value → Market information → Agency control</b> โดยมีจริยธรรมเป็นฐาน</div><p>เป้าหมายคือมูลค่าหุ้นสามัญเดิม ไม่ใช่กำไรงวดเดียว: เพิ่มรายได้ ลดต้นทุน เลือกเงินทุนและควบคุมตัวแทนเพื่อเติบโตยั่งยืน กำไรไม่ใช่เงินสด; เงินวันนี้ลงทุนต่อได้; ค่าเสียโอกาสคือทางเลือกที่ดีที่สุดที่สละ; ราคาสะท้อนข้อมูลภายใต้ตลาดมีประสิทธิภาพ</p><p><b>Agency</b>: รายงานประจำปีช่วยติดตาม / stock options ผูกแรงจูงใจ / takeover สร้างวินัยจากตลาด <b>CFO</b> วางแผนการเงิน กลยุทธ์และเงินสด; <b>Treasurer</b> ดูเงินสด เครดิต ลงทุน ระดมทุน แผนการเงิน เงินตราต่างประเทศ; <b>Controller</b> ดูภาษี งบ บัญชีต้นทุน ข้อมูล</p><p><b>Sole proprietor</b> คนเดียวรับผิดไม่จำกัด; <b>General partners</b> ทุกคนรับผิดเต็ม; <b>Limited partnership</b> ต้องมี general partner ≥1 คน; <b>Corporation</b> แยกนิติบุคคล จำกัดความรับผิด โอนหุ้นได้ อายุไม่ผูกกับเจ้าของ แต่เปิดเผยข้อมูล ตัดสินใจช้าและกำกับมาก; Hybrid มีชื่อ S-Type/LLC เท่านั้น</p><p>ไปต่างประเทศเพื่อรายได้ ต้นทุน กฎกำกับและการเข้าถึงโลก; ประเมิน <b>Country/Currency/Cultural risk</b> ทุกครั้ง</p><div class=\"formula\"><b>Opportunity cost: 10,000 บาทที่ 5% ต่อปี</b><p>ทางเลือกฝากได้ 10,000 × 5% = 500 บาท; ให้เพื่อนกู้ 0% จึงสละ 500 บาทในหนึ่งปี</p></div>",
      "full": "<div class=\"key\"><b>เป้าหมายการเรียน:</b> อธิบายเป้าหมายกิจการ หลักการเงิน 4 ข้อ จริยธรรมและความไว้วางใจ บทบาทฝ่ายการเงิน รูปแบบธุรกิจ และเหตุผล/ความเสี่ยงของบริษัทข้ามชาติได้</div><h4>1. เป้าหมายของกิจการและการนำไปใช้ · สไลด์ 1-1–1-3</h4><p><b>Maximize shareholders’ wealth</b> คือสร้างมูลค่าให้เจ้าของกิจการ โดยมองราคาหุ้นสามัญที่มีอยู่เป็นตัวชี้วัด เป้าหมายจึงไม่ใช่เพียงทำกำไรทางบัญชีให้สูงในงวดเดียว การตัดสินใจทางการเงินที่เพิ่มมูลค่ากระแสเงินสดในอนาคตควรเพิ่มราคาหุ้น ส่วนการตัดสินใจที่ทำลายมูลค่าย่อมลดราคา ภายใต้ข้อมูลอื่นคงเดิม</p><p>แผนภาพการนำไปใช้เริ่มจาก <b>Ethics in financial management</b> เป็นฐาน: สอนและปลูกฝังจริยธรรมในการเรียนและการทำงาน จากนั้นเพิ่มความสามารถทำกำไรด้วยการเพิ่มรายได้และลดค่าใช้จ่าย บริหารแหล่งเงินทุนอย่างเหมาะสมและหลีกเลี่ยงปัญหาตัวแทน เพื่อสร้างการเติบโตที่ยั่งยืนและความมั่งคั่งผู้ถือหุ้น จริยธรรมและความไว้วางใจทำให้ผู้ให้เงินทุนเชื่อข้อมูลและการกระทำของกิจการ การลดต้นทุนจึงต้องไม่แลกกับการรายงานเท็จหรือผลเสียระยะยาว</p><h4>2. หลักที่ 1: Cash flow is what matters · สไลด์ 1-4–1-5</h4><p><b>Accounting profit</b> ไม่เท่ากับ <b>Cash flow</b> บริษัทอาจมีกำไรแต่ยังไม่ได้รับเงินสด เช่น ขายเชื่อ หรือมีเงินสดเพิ่มแต่ไม่ใช่กำไร เช่น กู้เงิน การประเมินมูลค่าธุรกิจจึงใช้ความสามารถสร้างกระแสเงินสด ไม่ใช้กำไรทางบัญชีแทนโดยอัตโนมัติ</p><p>ตัวอย่างฝึก: ขายเชื่อ 10,000 บาท ต้นทุนสินค้าที่จ่ายเงินแล้ว 6,000 บาท ทำให้กำไรขั้นต้น 4,000 บาท แต่ก่อนลูกค้าจ่าย เงินสดจากสองรายการนี้ยังติดลบ 6,000 บาท ส่วนเงินกู้ 20,000 บาทเพิ่มเงินสดและหนี้สิน ไม่ใช่รายได้จากการขาย</p><h4>3. หลักที่ 2: Money has a time value · สไลด์ 1-6–1-7</h4><p>เมื่อสามารถนำเงินไปสร้างผลตอบแทน เงินหนึ่งหน่วยวันนี้มีค่ามากกว่าเงินจำนวนเดียวกันในอนาคต จึงควรรับเงินเร็วเมื่อเงื่อนไขอื่นเท่ากัน <b>Opportunity cost</b> คือประโยชน์ของทางเลือกที่ดีที่สุดถัดไปที่ต้องสละ ไม่ใช่ผลรวมของทุกทางเลือก</p><p>ตัวอย่างในสไลด์: ให้เพื่อนกู้โดยไม่คิดดอกเบี้ย เทียบกับฝากออมทรัพย์ที่ได้ 5% ต้นทุนค่าเสียโอกาสจึงเป็น 5% ต่อปี ตามสมมติฐานผลตอบแทนที่ระบุ</p><div class=\"formula\"><b>ตัวอย่างขยาย: Opportunity cost เป็นจำนวนเงิน</b><p>สมมติเงินต้น 10,000 บาท ระยะเวลา 1 ปี และทางเลือกฝากให้ดอกเบี้ย 5%</p><p>ดอกเบี้ยที่สละ = 10,000 × 0.05 = 500 บาท</p><p>ให้กู้ 0% ได้ดอกเบี้ย 0 บาท จึงเสียโอกาสรับดอกเบี้ย 500 บาท โดยยังไม่รวมความเสี่ยงผิดนัด</p></div><h4>4. หลักที่ 3: Market prices are generally right · สไลด์ 1-8</h4><p>ในกรอบ <b>Efficient market</b> ราคาสินทรัพย์ที่ซื้อขาย เช่น หุ้นและหุ้นกู้ สะท้อนข้อมูลที่มีอยู่ ณ เวลานั้น จึงใช้ราคาหุ้นเป็นสัญญาณมูลค่ากิจการ การเปลี่ยนราคาสัมพันธ์กับการเปลี่ยนความคาดหวังกระแสเงินสดในอนาคต การตัดสินใจที่ดีมีแนวโน้มเพิ่มราคา หลักนี้เป็นกรอบของตลาดที่มีประสิทธิภาพ ไม่ใช่คำรับรองว่าราคาจะไม่มีวันผิดพลาดหรือทุกข่าวทำให้ราคาขึ้น</p><h4>5. หลักที่ 4: Conflicts of interest cause agency problems · สไลด์ 1-9</h4><p>เมื่อเจ้าของและผู้บริหารเป็นคนละกลุ่ม ผู้บริหารอาจเลือกสิ่งที่เป็นประโยชน์ต่อตนเองแทนผู้ถือหุ้น เรียกว่า <b>Agency problem</b> เช่น ใช้ทรัพยากรเพื่อสิทธิประโยชน์ตนเองโดยไม่สร้างมูลค่า สไลด์แยกการติดตามแบบมีข้อมูลและคำถามออกจากการมองผ่าน ๆ</p><div class=\"scroll\"><table class=\"t\"><thead><tr><th>กลไก</th><th>ตัวอย่างในสไลด์</th><th>เหตุผล</th></tr></thead><tbody><tr><td>Monitoring</td><td>Annual reports</td><td>ติดตามผลและตั้งคำถามจากรายงานประจำปี</td></tr><tr><td>Compensation schemes</td><td>Stock options</td><td>เชื่อมผลตอบแทนผู้บริหารกับมูลค่าหุ้น แต่ยังต้องมีการกำกับ</td></tr><tr><td>Market mechanisms</td><td>Takeovers</td><td>ภัยจากการเข้าซื้อกิจการสร้างแรงกดดันต่อผู้บริหารที่ทำงานไม่ดี</td></tr></tbody></table></div><h4>6. บทบาทผู้จัดการการเงินและสายงาน · สไลด์ 1-10</h4><p>ผู้ถือหุ้น (<b>Stockholders</b>) เลือก <b>Board of Directors</b> ซึ่งกำกับ <b>Chief Executive Officer (CEO)</b> ภายใต้ CEO มีฝ่าย Marketing, Finance และ Production and Operations ตำแหน่งผู้นำการเงินคือ Vice President–Finance หรือ <b>Chief Financial Officer (CFO)</b> ดูแลการวางแผนทางการเงิน การวางกลยุทธ์ และควบคุมกระแสเงินสด</p><div class=\"scroll\"><table class=\"t\"><thead><tr><th>ฝ่ายภายใต้ CFO</th><th>หน้าที่ครบตามแผนภาพ</th></tr></thead><tbody><tr><td>Treasurer</td><td>Cash management; Credit management; Capital expenditures; Raising capital; Financial planning; Management of foreign currencies — เงินสด เครดิต รายจ่ายลงทุน ระดมทุน แผนการเงิน และเงินตราต่างประเทศ</td></tr><tr><td>Controller</td><td>Taxes; Financial statements; Cost accounting; Data processing — ภาษี งบการเงิน บัญชีต้นทุน และประมวลผลข้อมูล</td></tr></tbody></table></div><p>มุมมองผู้ถือหุ้นที่ต้องการความมั่งคั่งกับพนักงานที่ต้องการค่าตอบแทนมีผลต่อกำไรและค่าใช้จ่าย ผู้บริหารต้องจัดสมดุลโดยคำนึงถึงมูลค่าระยะยาวและจริยธรรม</p><h4>7. รูปแบบธุรกิจ · สไลด์ 1-11–1-15</h4><div class=\"scroll\"><table class=\"t\"><thead><tr><th>รูปแบบ</th><th>เจ้าของ/ความรับผิด/อายุ</th></tr></thead><tbody><tr><td>Sole proprietorship</td><td>บุคคลเดียวเป็นเจ้าของสินทรัพย์และกำไร รับผิดไม่จำกัด กิจการสิ้นสุดเมื่อเจ้าของเสียชีวิตหรือเลือกเลิก</td></tr><tr><td>General partnership</td><td>ตั้งแต่ 2 คนเป็นเจ้าของร่วม หุ้นส่วนทั่วไปทุกคนรับผิดเต็มจำนวนต่อหนี้ของห้าง</td></tr><tr><td>Limited partnership</td><td>มีหุ้นส่วนจำกัดความรับผิดเท่าทุนที่ลงทุนได้ แต่ต้องมีหุ้นส่วนทั่วไปอย่างน้อยหนึ่งคนที่รับผิดไม่จำกัด</td></tr><tr><td>Corporation</td><td>นิติบุคคลแยกจากเจ้าของ ฟ้องและถูกฟ้อง ซื้อ ขาย และถือครองทรัพย์สินได้ ผู้ถือหุ้นเลือกกรรมการและจำกัดความรับผิดตามเงินลงทุน โอนความเป็นเจ้าของโดยขายหุ้น อายุไม่สิ้นสุดตามเจ้าของ</td></tr><tr><td>Hybrid: S-Type / LLC</td><td>มีชื่อในแผนภาพรูปแบบธุรกิจ แต่ไฟล์ไม่ได้แจกแจงเงื่อนไข จึงไม่เติมกฎหมายหรือภาษีเฉพาะประเทศเกินสไลด์</td></tr></tbody></table></div><p>ข้อดีของ <b>Corporation</b>: จำกัดความรับผิด โอนเจ้าของง่าย ระดมทุนง่ายกว่า และอายุไม่จำกัด ข้อเสีย: ต้องเปิดเผยข้อมูลจึงเก็บเป็นความลับได้น้อย กระบวนการตัดสินใจอาจช้า และอยู่ภายใต้การกำกับมาก รูปแบบเหล่านี้ใช้ตามบริบทตำรา ไม่ใช่รายละเอียดกฎหมายไทย</p><h4>8. บริษัทออกสู่ต่างประเทศเพราะอะไร · สไลด์ 1-16–1-17</h4><p>เหตุผลครบ 4 กลุ่ม: เพิ่มรายได้; ลดต้นทุนที่ดิน แรงงาน เงินทุน วัตถุดิบ และภาษี; เข้าสู่พื้นที่ที่มาตรฐานกำกับต่ำกว่า เช่น สิ่งแวดล้อมและแรงงาน; และเพิ่ม <b>Global exposure</b> หรือการเข้าถึงตลาดโลก เหตุผลเรื่องมาตรฐานกำกับเป็นสิ่งที่สไลด์อธิบาย ไม่ใช่ข้อเสนอให้ละเลยจริยธรรม</p><div class=\"scroll\"><table class=\"t\"><thead><tr><th>ความเสี่ยง</th><th>สิ่งที่ต้องพิจารณา</th></tr></thead><tbody><tr><td>Country risk</td><td>กฎรัฐเปลี่ยน รัฐบาลไม่มั่นคง หรือเศรษฐกิจประเทศปลายทางเปลี่ยน</td></tr><tr><td>Currency risk</td><td>อัตราแลกเปลี่ยนผันผวนทำให้มูลค่าเงินรับ/จ่ายเปลี่ยน</td></tr><tr><td>Cultural risk</td><td>ภาษา ประเพณี และมาตรฐานจริยธรรมต่างกัน</td></tr></tbody></table></div>"
    },
    {
      "id": "ch3",
      "topic": "บทที่ 3 · A Review of Financial Statements (ไฟล์ CH2)",
      "title": "อ่านงบการเงินและคำนวณกำไร",
      "summary": "Income statement · Common size · Balance sheet · Debit/Credit · บัญชีทุกหมวด · NWC",
      "quick": "<div class=\"key\"><b>Income Statement</b> = ผลงานตลอดงวด; <b>Balance Sheet</b> = ฐานะ ณ วันหนึ่ง; <b>Cash Flow</b> = รับ/ใช้เงินสด; <b>Retained Earnings</b> = กำไรคงไว้</div><p>ยอดขาย − COGS = Gross profit; − Operating expenses = EBIT; − Interest = EBT; − Tax = Net income. Common-sized แบ่งทุกรายการด้วยยอดขาย ×100; EPS = NI/หุ้น; DPS = ปันผล/หุ้น</p><div class=\"formula\"><b>ตัวอย่างกำไรและงบฐานะ</b><p>67,997 − 44,693 = 23,304; 23,304 − 17,501 = 5,803; 5,803 − 530 − 1,935 = 3,338</p><p>A = L + E: 40,125 = 21,236 + 18,889; NWC = 13,479 − 10,122 = 3,357</p></div><p>RE ปลายงวด = ต้นงวด + กำไร − ปันผล; เงินสดสุทธิ = CFO + CFI + CFF. <b>Debit</b> เพิ่ม Assets/Expenses; <b>Credit</b> เพิ่ม Liabilities/Equity/Revenue</p><p>CA: เงินสด ลูกหนี้ ลงทุน/ให้กู้สั้น สินค้า จ่ายล่วงหน้า; NCA: ลงทุน/ให้กู้ยาว PP&amp;E สิทธิบัตร ลิขสิทธิ์ goodwill; CL: OD เจ้าหนี้ รับล่วงหน้า ค้างจ่าย หนี้ยาวส่วนครบปี; NCL: หนี้เกินปี; Equity: ทุน ส่วนเกินหุ้น กำไรสะสมจัดสรร/ไม่จัดสรร</p><div class=\"rule\">NWC สูงเพราะสินค้าค้างอาจไม่ดี; Book value ไม่ใช่ Market value; preferred/common ไม่ได้จำแนกด้วยผู้ก่อตั้ง/ประชาชน; ไฟล์ CH2 นี้เป็น Chapter 3 ตามสไลด์</div>",
      "full": "<div class=\"key\"><b>ชื่อไฟล์กับชื่อบทไม่ตรงกัน:</b> BF_CH2_P เป็น Chapter 3 ในเนื้อหา เป้าหมายคือคำนวณกำไรและอ่านฐานะการเงินได้ เลขอ้างอิงด้านล่างเป็นเลขสไลด์ 3-1–3-23</div><h4>1. Income Statement · สไลด์ 3-1–3-6</h4><p><b>Income Statement / Profit and Loss Statement</b> วัดผลดำเนินงานตลอดช่วงเวลา (From…To…) บรรทัดสุดท้ายคือกำไรหรือขาดทุนในงวด ต่างจากงบฐานะการเงินที่เป็นภาพ ณ วันใดวันหนึ่ง ธุรกิจซื้อขายมีรายได้จากขายสินค้า ส่วนธุรกิจบริการมีค่าบริการ</p><p><b>Revenue (Sales)</b> คือรายได้จากสินค้า/บริการ; <b>COGS</b> คือต้นทุนผลิตหรือจัดหาสินค้า/บริการที่ขาย; <b>Operating expenses</b> รวมการตลาด การกระจายสินค้า บริหารทั่วไป และค่าเสื่อมราคา; <b>Financing costs</b> คือดอกเบี้ยจ่ายให้เจ้าหนี้; <b>Tax expenses</b> คือภาษีต่อรัฐ</p><div class=\"formula\"><b>ลำดับกำไรตาม Figure 3-1 — ตัวอย่าง Home Depot หน่วยล้านดอลลาร์</b><p>1) Gross profit = Sales − COGS = 67,997 − 44,693 = 23,304</p><p>2) Operating expenses = 15,885 + 1,616 = 17,501</p><p>3) Operating income / EBIT = Gross profit − Operating expenses = 23,304 − 17,501 = 5,803</p><p>4) Earnings before taxes (EBT) = EBIT − Interest = 5,803 − 530 = 5,273</p><p>5) Net income = EBT − Income taxes = 5,273 − 1,935 = 3,338</p><p>ตรวจอีกทาง: Profit = Revenue − Expenses ทั้งหมด = 67,997 − (44,693 + 17,501 + 530 + 1,935) = 3,338</p></div><p>Gross profit ยังไม่หักค่าใช้จ่ายดำเนินงาน; EBIT สะท้อนการดำเนินงานก่อนผลจากการกู้และภาษี; Net income เป็นผลหลังดำเนินงานและจัดหาเงินทุน เหลือให้ผู้ถือหุ้นสามัญในตัวอย่างนี้ ห้ามใช้ Sales แทน Profit</p><h4>2. Common-sized Income Statement · สไลด์ 3-7–3-8</h4><p>ปรับทุกรายการเป็นร้อยละของยอดขาย เพื่อเทียบแนวโน้มข้ามปีและบริษัทในอุตสาหกรรมเดียวกันโดยลดผลจากขนาดกิจการ ตารางต่อไปเรียบเรียงข้อมูลตัวอย่างปีสิ้นสุด 30 มกราคม 2011 หน่วยล้านดอลลาร์ ยกเว้นรายการต่อหุ้น และสัดส่วนปัดหนึ่งตำแหน่ง</p><div class=\"scroll\"><table class=\"t\"><thead><tr><th>รายการ</th><th>จำนวน</th><th>ต่อยอดขาย</th></tr></thead><tbody><tr><td>Sales</td><td>67,997</td><td>100.0%</td></tr><tr><td>COGS</td><td>44,693</td><td>65.7%</td></tr><tr><td>Gross profit</td><td>23,304</td><td>34.3%</td></tr><tr><td>Marketing, general and administrative</td><td>15,885</td><td>23.4%</td></tr><tr><td>Depreciation</td><td>1,616</td><td>2.4%</td></tr><tr><td>Total operating expenses</td><td>17,501</td><td>25.7%</td></tr><tr><td>Operating income / EBIT</td><td>5,803</td><td>8.5%</td></tr><tr><td>Interest expense</td><td>530</td><td>0.8%</td></tr><tr><td>Earnings before taxes</td><td>5,273</td><td>7.8%</td></tr><tr><td>Income taxes</td><td>1,935</td><td>2.8%</td></tr><tr><td>Net income</td><td>3,338</td><td>4.9%</td></tr></tbody></table></div><div class=\"formula\"><b>Common-sized % = Item ÷ Sales × 100</b><p>ตัวอย่าง COGS: 44,693 ÷ 67,997 × 100 = 65.73% ≈ 65.7%</p><p>Gross profit margin: 23,304 ÷ 67,997 × 100 = 34.27% ≈ 34.3%</p><p>Operating margin: 5,803 ÷ 67,997 × 100 = 8.53% ≈ 8.5%</p><p>Net profit margin: 3,338 ÷ 67,997 × 100 = 4.91% ≈ 4.9%</p><p>รายได้ 100 ดอลลาร์จึงเหลือกำไรสุทธิประมาณ 4.9 ดอลลาร์ ไม่ใช่มีเงินสดเข้าจำนวนนี้แน่นอน</p></div><div class=\"formula\"><b>รายการต่อหุ้นที่อยู่ใน Table 3.1</b><p>หุ้นสามัญคงค้าง 1,623 ล้านหุ้น; เงินปันผลรวม 1,569 ล้านดอลลาร์</p><p>EPS = Net income ÷ Shares = 3,338 ÷ 1,623 = 2.0567 ≈ $2.06 ต่อหุ้น</p><p>DPS = Total dividends ÷ Shares = 1,569 ÷ 1,623 = 0.9667 ≈ $0.97 ต่อหุ้น</p><p>ใช้หน่วยล้านทั้งเศษและส่วนเพื่อตัดหน่วยให้เหลือดอลลาร์ต่อหุ้น</p></div><h4>3. Balance Sheet และสมการบัญชี · สไลด์ 3-9–3-12</h4><p><b>Balance Sheet / Statement of Financial Position</b> แสดงฐานะ ณ วันที่ระบุ (As of…) ประกอบด้วยทรัพยากรที่กิจการมี <b>Assets</b> และแหล่งเงินทุนจากเจ้าหนี้ <b>Liabilities</b> กับเจ้าของ <b>Equity</b> สไลด์ใช้ฐานราคาทุนเพื่อชี้ว่า <b>Book value</b> อาจต่างจาก <b>Market value</b> จึงห้ามถือยอดบัญชีเป็นราคาตลาดโดยอัตโนมัติ</p><div class=\"formula\"><b>Assets = Liabilities + Equity; Equity = Assets − Liabilities</b><p>ตัวอย่างสินทรัพย์ 40,125 หนี้สิน 21,236 ล้านดอลลาร์</p><p>ส่วนเจ้าของ = 40,125 − 21,236 = 18,889 ล้านดอลลาร์</p><p>ตรวจสมดุล: 21,236 + 18,889 = 40,125</p></div><p>Figure 3-2 จัดสินทรัพย์เป็น current กับ long-term และแหล่งทุนเป็น short-term debt, long-term liabilities, stockholders’ equity สินทรัพย์ถาวรใช้ยอดสุทธิ ส่วนเจ้าของประกอบด้วย preferred stock, common stock (par value และ paid-in capital) และ retained earnings</p><div class=\"scroll\"><table class=\"t\"><thead><tr><th>หมวด</th><th>Normal balance (ด้านเพิ่ม)</th><th>ตัวอย่าง</th></tr></thead><tbody><tr><td>Assets</td><td>Debit</td><td>เงินสด ลูกหนี้</td></tr><tr><td>Liabilities</td><td>Credit</td><td>เจ้าหนี้ เงินกู้</td></tr><tr><td>Equity</td><td>Credit</td><td>ทุนและกำไรสะสม</td></tr><tr><td>Revenue</td><td>Credit</td><td>รายได้ขาย</td></tr><tr><td>Expense</td><td>Debit</td><td>ค่าเช่า ค่าเสื่อม</td></tr></tbody></table></div><p>Debit/Credit คือด้านของบัญชี ไม่ได้แปลว่าเพิ่ม/ลดเหมือนกันทุกหมวด ตารางระบุด้านยอดปกติที่ทำให้แต่ละหมวดเพิ่ม</p><h4>4. งบเชื่อมโยงกันอย่างไร · สไลด์ 3-13–3-14</h4><p>ลำดับในสไลด์: งบกำไรขาดทุน → งบกำไรสะสม/การเปลี่ยนแปลงส่วนเจ้าของ → งบฐานะการเงิน → งบกระแสเงินสดและหมายเหตุ งบแรกอธิบายผลการดำเนินงาน งบกำไรสะสมอธิบายการเปลี่ยนทุน งบฐานะการเงินบอกทรัพยากรกับแหล่งทุน งบกระแสเงินสดบอกแหล่งได้มาและใช้เงิน ส่วนหมายเหตุช่วยให้เข้าใจตัวเลขและนโยบาย</p><div class=\"formula\"><b>Ending retained earnings = Beginning RE + Net income − Dividends</b><p>ตัวอย่างฝึก: RE ต้นงวด 100 + กำไร 30 − ปันผล 12 = RE ปลายงวด 118</p><p>นำ 118 ไปเป็นส่วนหนึ่งของ Equity ในงบฐานะการเงิน ไม่ใช่ถือว่าเป็นเงินสด 118 โดยอัตโนมัติ</p></div><div class=\"formula\"><b>Net cash flow = CFO + CFI + CFF</b><p>CFO คือเงินสดจากดำเนินงาน; CFI จากลงทุน; CFF จากจัดหาเงินทุน โดยรับเป็นบวก จ่ายเป็นลบ</p><p>ตัวอย่างฝึก: 80 + (−100) + 40 = กระแสเงินสดสุทธิ +20</p><p>ถ้าเงินสดต้นงวด 10 และไม่มีรายการอื่น เงินสดปลายงวด = 10 + 20 = 30</p></div><h4>5. รายการบัญชีและหมวดครบตามตาราง · สไลด์ 3-15–3-17</h4><div class=\"scroll\"><table class=\"t\"><thead><tr><th>Account</th><th>ความหมาย</th><th>หมวด</th></tr></thead><tbody><tr><td>Cash & Cash equivalents</td><td>เงินสดและรายการเทียบเท่าเงินสด</td><td>Current assets</td></tr><tr><td>Trade accounts receivable</td><td>ลูกหนี้จากการขายเชื่อ</td><td>Current assets</td></tr><tr><td>Short-term investments</td><td>เงินลงทุนระยะสั้น</td><td>Current assets</td></tr><tr><td>Short-term loans</td><td>เงินให้กู้ระยะสั้น ไม่ใช่เงินกู้ที่บริษัทเป็นหนี้</td><td>Current assets</td></tr><tr><td>Inventories</td><td>วัตถุดิบ งานระหว่างทำ และสินค้าสำเร็จรูป</td><td>Current assets</td></tr><tr><td>Other current assets</td><td>สินทรัพย์หมุนเวียนอื่น เช่น ค่าใช้จ่ายจ่ายล่วงหน้า</td><td>Current assets</td></tr><tr><td>Long-term investments</td><td>เงินลงทุนระยะยาว</td><td>Non-current assets</td></tr><tr><td>Long-term loans</td><td>เงินให้กู้ระยะยาว</td><td>Non-current assets</td></tr><tr><td>Property, Plant & Equipment</td><td>ที่ดิน อาคาร เครื่องจักรและอุปกรณ์</td><td>Non-current assets</td></tr><tr><td>Intangible assets</td><td>สินทรัพย์ไม่มีตัวตน เช่น สิทธิบัตร ลิขสิทธิ์ ค่าความนิยม</td><td>Non-current assets</td></tr><tr><td>Other non-current assets</td><td>สินทรัพย์ไม่หมุนเวียนอื่น</td><td>Non-current assets</td></tr><tr><td>Bank overdrafts</td><td>เงินเบิกเกินบัญชี</td><td>Current liabilities</td></tr><tr><td>Trade accounts payable</td><td>เจ้าหนี้การค้าจากการซื้อเชื่อ</td><td>Current liabilities</td></tr><tr><td>Unearned revenues</td><td>เงินรับล่วงหน้าที่ยังไม่เป็นรายได้</td><td>Current liabilities</td></tr><tr><td>Accrued expenses</td><td>ค่าใช้จ่ายเกิดแล้วแต่ยังไม่จ่าย</td><td>Current liabilities</td></tr><tr><td>Current portion of long-term debts</td><td>ส่วนของหนี้ระยะยาวที่จะถึงกำหนดใน 12 เดือน</td><td>Current liabilities</td></tr><tr><td>Short-term notes payable</td><td>ตั๋วเงิน/เงินกู้ครบกำหนดภายใน 12 เดือน</td><td>Current liabilities</td></tr><tr><td>Other current liabilities</td><td>หนี้สินหมุนเวียนอื่น</td><td>Current liabilities</td></tr><tr><td>Long-term debts</td><td>เงินกู้ที่ครบกำหนดเกินหนึ่งปี</td><td>Non-current liabilities</td></tr><tr><td>Notes payable</td><td>ตั๋วสัญญาใช้เงิน ต้องดูวันครบกำหนดเพื่อจัดระยะสั้นหรือยาว</td><td>Liabilities</td></tr><tr><td>Other non-current liabilities</td><td>หนี้สินไม่หมุนเวียนอื่น รวมตัวอย่าง mortgage ในแผนภาพ</td><td>Non-current liabilities</td></tr><tr><td>Registered capital</td><td>ทุนจดทะเบียน</td><td>Equity</td></tr><tr><td>Paid-in capital</td><td>ทุนที่ชำระแล้ว</td><td>Equity</td></tr><tr><td>In-excess of par value</td><td>ส่วนเกินมูลค่าหุ้น</td><td>Equity</td></tr><tr><td>Unappropriated retained earnings</td><td>กำไรสะสมยังไม่จัดสรร</td><td>Equity</td></tr><tr><td>Appropriated retained earnings</td><td>กำไรสะสมที่จัดสรรเพื่อวัตถุประสงค์ที่ระบุ</td><td>Equity</td></tr><tr><td>Revenue</td><td>รายได้จากการขายสินค้าหรือบริการ</td><td>Revenue</td></tr><tr><td>Interest revenue</td><td>รายได้ดอกเบี้ยรับ</td><td>Revenue</td></tr><tr><td>Rental expense</td><td>ค่าเช่า</td><td>Expense</td></tr><tr><td>Depreciation expense</td><td>ค่าเสื่อมราคา</td><td>Expense</td></tr></tbody></table></div><div class=\"rule\">แก้คำพิมพ์ผิดในสไลด์ 3-16: หัวข้อหนี้สินไม่หมุนเวียนต้องเป็น <b>Non-current liabilities</b> ไม่ใช่ Non-current assets ตั๋วสัญญาใช้เงินต้องจำแนกตามวันครบกำหนด ไม่ใช่ชื่อบัญชีอย่างเดียว</div><h4>6. Assets, Liabilities, Equity · สไลด์ 3-18–3-22</h4><p><b>Current assets</b> ค่อนข้างคล่องตัวหรือคาดเปลี่ยนเป็นเงินสดใน 12 เดือน เช่น เงินสด ลูกหนี้จากลูกค้าซื้อเชื่อ สินค้าคงเหลือ (วัตถุดิบ งานระหว่างทำ สินค้าสำเร็จรูป) และค่าใช้จ่ายจ่ายล่วงหน้า เช่น ประกันที่จ่ายก่อนใช้บริการ</p><p><b>Fixed assets</b> ใช้เกินหนึ่งปี เช่น เครื่องจักร อุปกรณ์ อาคาร ที่ดิน ส่วน <b>Other non-current assets</b> ได้แก่ลงทุนระยะยาวและสินทรัพย์ไม่มีตัวตน เช่น patents, copyrights, goodwill</p><p><b>Debt</b> คือภาระต้องชำระตามกำหนด สไลด์แบ่งภายใน 12 เดือนกับเกินหนึ่งปี เจ้าหนี้การค้าเกิดจากผู้ขายให้เครดิต; accrued expenses เป็นค่าใช้จ่ายเกิดแล้วแต่ยังไม่จ่าย; short-term notes เป็นเงินกู้ครบกำหนดภายในปี; long-term debt เป็นกู้จากธนาคารหรือแหล่งอื่นเกินปี</p><p><b>Equity</b> เป็นสิทธิส่วนที่เหลือของเจ้าของ มีหุ้นบุริมสิทธิและหุ้นสามัญ สไลด์ยกตัวอย่าง founders กับ publics ประกอบ แต่ไม่ใช่นิยามว่า preferred stock ต้องเป็นของผู้ก่อตั้งหรือ common stock ต้องเป็นของประชาชนเท่านั้น <b>Retained earnings</b> คือกำไรสะสมตลอดอายุกิจการหลังหักปันผล ไม่ใช่บัญชีเงินสด</p><h4>7. Net Working Capital · สไลด์ 3-23</h4><div class=\"formula\"><b>NWC = Current assets − Current liabilities</b><p>Home Depot: CA 13,479 − CL 10,122 = 3,357 ล้านดอลลาร์</p><p>เป็นส่วนเกินสินทรัพย์หมุนเวียนเหนือหนี้หมุนเวียน ช่วยมองกันชนการชำระหนี้ระยะสั้น</p></div><p>สไลด์เสนอให้ NWC เป็นบวก และโดยทั่วไปส่วนเกินมากขึ้นช่วยความสามารถชำระหนี้ แต่เพิ่มแล้วไม่ดีเสมอ: สินค้าขายไม่ออกทำให้ inventory และ CA สูงขึ้น จึงต้องดูความเร็วเปลี่ยนเป็นเงินสดด้วย ไม่สรุปว่าจ่ายหนี้ได้แน่นอนจาก NWC เพียงค่าเดียว</p>"
    },
    {
      "id": "ch4",
      "topic": "บทที่ 4 · Financial Statement Analysis",
      "title": "วิเคราะห์งบการเงินและอัตราส่วน",
      "summary": "Liquidity · ORA/OPM/Turnover · Debt/TIE · ROE · P/E/P/B/EVA · Home Depot vs Lowe’s",
      "quick": "<div class=\"key\">เริ่มจาก <b>สูตร → หน่วย → ฐานข้อมูล → เทียบอดีต/คู่แข่ง → ตีความพร้อมข้อจำกัด</b> ไม่ตัดสินจากค่าตัวเดียว</div><div class=\"scroll\"><table class=\"t\"><thead><tr><th>กลุ่ม</th><th>สูตรที่ต้องจำ</th></tr></thead><tbody><tr><td>Liquidity</td><td>CA/CL; (Cash+AR)/CL; ACP=AR/(Credit sales/365); AR turnover=Credit sales/AR; Inventory days=Inventory/(COGS/365); Inventory turnover=COGS/Inventory</td></tr><tr><td>Operating</td><td>ORA=EBIT/Assets; OPM=EBIT/Sales; TAT=Sales/Assets; FAT=Sales/Net FA; ORA=OPM×TAT</td></tr><tr><td>Financing & owners</td><td>Debt=Debt/Assets; TIE=EBIT/Interest; ROE=NI/Common equity</td></tr><tr><td>Market value</td><td>P/E=Price/EPS; P/B=Price/BVPS; EVA=(ORA−Cost of capital)×Assets ตามสไลด์</td></tr></tbody></table></div><div class=\"formula\"><b>ตัวอย่างหลัก</b><p>Current = 13,479/10,122 = 1.33; Quick = (545+1,085)/10,122 = 0.16</p><p>ACP = 1,085/(20,399/365) = 19.41 วัน; Inventory days = 10,625/(44,693/365) = 86.77 วัน</p><p>ORA = 5,803/40,125 = 14.46%; ROE = 3,338/18,889 = 17.67%</p><p>EVA = (14.5%−10%)×40.125 = 1.805625 พันล้านดอลลาร์ เมื่อใช้ ORA ที่ปัด</p></div><p>ภายในใช้แก้จุดอ่อน ประเมินพนักงาน เทียบฝ่ายและพยากรณ์; ภายนอกใช้โดยผู้ให้กู้ ผู้จัดอันดับ ผู้ลงทุนและคู่ค้า Home Depot ไม่ได้ดีกว่า Lowe’s ทุกด้าน เช่น ACP ยาวกว่า ข้อจำกัด: peers ยาก ค่าเฉลี่ยประมาณ ไม่ใช่เป้าเสมอ บัญชีต่าง สูง/ต่ำไม่ตัดสินทันที และฤดูกาล</p><div class=\"rule\">Quick ตามไฟล์นี้ไม่ใช่ CA−Inventory ทั้งก้อน; TIE ไม่วัดเงินสดและเงินต้น; เกณฑ์ business days ต้องปรับฐานก่อนเทียบ 365; P/B สูงกว่า 1 ไม่รับประกันกำไร และอย่าปัดค่ากลางก่อนคำนวณ ORA/EVA</div>",
      "full": "<div class=\"key\"><b>เป้าหมาย:</b> ใช้อัตราส่วนวิเคราะห์ผลดำเนินงาน สภาพคล่อง เงินทุน ผลตอบแทนเจ้าของและการประเมินของตลาด พร้อมรู้ข้อจำกัด ตัวเลข Home Depot / Lowe’s เป็นกรณีในสไลด์ ไม่ใช่ข้อมูลบริษัทปัจจุบัน</div><h4>1. เหตุผลและผู้ใช้การวิเคราะห์ · สไลด์ 4-1–4-5</h4><p>อัตราส่วนเดี่ยวไม่มีบริบทเพียงพอ ต้องเทียบปีที่ผ่านมาและบริษัท/ผู้นำอุตสาหกรรมเดียวกัน ภายในกิจการใช้หาข้อบกพร่องและแก้ไข ประเมินพนักงานและค่าตอบแทนจูงใจ เปรียบเทียบหน่วยธุรกิจ และทำประมาณการระดับบริษัท/ฝ่าย ภายนอกใช้โดยผู้ให้กู้เพื่อตัดสินใจปล่อยสินเชื่อ บริษัทจัดอันดับเพื่อประเมินเครดิต ผู้ลงทุนหุ้นและหุ้นกู้เพื่อตัดสินใจลงทุน และผู้ขายหลักเพื่อให้เครดิต/กำหนดเงื่อนไข</p><h4>2. ภาพรวมและชุดข้อมูล · สไลด์ 4-6–4-12</h4><p>ห้ากลุ่มคือ <b>Liquidity</b> (current, quick, days/turnover ของลูกหนี้และสินค้า), <b>Operating profitability</b> (ORA, OPM, TAT, FAT), <b>Financing decisions</b> (debt, TIE), <b>ROE</b>, และ <b>Shareholders’ value</b> (P/E, P/B, EVA) สภาพคล่องดูได้ทั้งสินทรัพย์เทียบหนี้หมุนเวียนและความเร็วเปลี่ยนลูกหนี้/สินค้าเป็นเงินสด Liquid asset ต้องเปลี่ยนเป็นเงินสดได้รวดเร็วเป็นปกติที่ราคาตลาดขณะนั้น</p><p>งบกำไรขาดทุน Table 4-1 เป็นชุดเดียวกับบททบทวนงบการเงิน: หน่วยล้านดอลลาร์ ยกเว้นข้อมูลต่อหุ้น</p><div class=\"scroll\"><table class=\"t\"><thead><tr><th>รายการ</th><th>จำนวน</th><th>ร้อยละยอดขาย</th></tr></thead><tbody><tr><td>Sales</td><td>67,997</td><td>100.0%</td></tr><tr><td>COGS</td><td>44,693</td><td>65.7%</td></tr><tr><td>Gross profit</td><td>23,304</td><td>34.3%</td></tr><tr><td>Marketing, general and administrative</td><td>15,885</td><td>23.4%</td></tr><tr><td>Depreciation</td><td>1,616</td><td>2.4%</td></tr><tr><td>Total operating expenses</td><td>17,501</td><td>25.7%</td></tr><tr><td>Operating income / EBIT</td><td>5,803</td><td>8.5%</td></tr><tr><td>Interest expense</td><td>530</td><td>0.8%</td></tr><tr><td>Earnings before taxes</td><td>5,273</td><td>7.8%</td></tr><tr><td>Income taxes</td><td>1,935</td><td>2.8%</td></tr><tr><td>Net income</td><td>3,338</td><td>4.9%</td></tr></tbody></table></div><p>หุ้น 1,623 ล้านหุ้น; EPS 2.06; ปันผลรวม 1,569; DPS 0.97; ขายสด 47,598 จึงขายเชื่อ 20,399 ล้านดอลลาร์ ตารางฐานะการเงิน Table 4-2 มีรายละเอียดดังนี้</p><div class=\"scroll\"><table class=\"t\"><thead><tr><th>รายการ ณ 30 มกราคม 2011</th><th>ล้านดอลลาร์</th></tr></thead><tbody><tr><td>Cash</td><td>545</td></tr><tr><td>Accounts receivable</td><td>1,085</td></tr><tr><td>Inventory</td><td>10,625</td></tr><tr><td>Other current assets</td><td>1,224</td></tr><tr><td>Total current assets</td><td>13,479</td></tr><tr><td>Gross fixed assets</td><td>38,471</td></tr><tr><td>Accumulated depreciation</td><td>(13,411)</td></tr><tr><td>Net fixed assets</td><td>25,060</td></tr><tr><td>Other assets</td><td>1,586</td></tr><tr><td>Total assets</td><td>40,125</td></tr><tr><td>Accounts payable</td><td>9,080</td></tr><tr><td>Short-term notes payable</td><td>1,042</td></tr><tr><td>Total current liabilities</td><td>10,122</td></tr><tr><td>Long-term debt</td><td>11,114</td></tr><tr><td>Total liabilities</td><td>21,236</td></tr><tr><td>Common stock: par value</td><td>86</td></tr><tr><td>Paid-in capital</td><td>7,001</td></tr><tr><td>Total common stock sold</td><td>7,087</td></tr><tr><td>Treasury stock</td><td>(3,193)</td></tr><tr><td>Total common stock after treasury stock</td><td>3,894</td></tr><tr><td>Retained earnings</td><td>14,995</td></tr><tr><td>Total common equity</td><td>18,889</td></tr><tr><td>Total liabilities and equity</td><td>40,125</td></tr></tbody></table></div><p>Treasury stock คือหุ้นซื้อคืนที่หักออกจากส่วนทุนในชุดข้อมูลนี้: 7,087 − 3,193 = 3,894 และ 3,894 + 14,995 = 18,889; สินทรัพย์รวม 13,479 + 25,060 + 1,586 = 40,125</p><h4>3. สูตรทุกอัตราส่วนพร้อมแทนค่า · สไลด์ 4-13–4-34</h4><p>ให้ X หรือ “เท่า” เป็นหน่วยอัตราส่วนที่ไม่ใช่เปอร์เซ็นต์ ใช้ 365 วันตามสไลด์ และใช้ยอดงบดุลที่ให้มาโดยไม่สมมติยอดเฉลี่ยต้นงวดเอง</p><h4>Current ratio</h4><div class=\"formula\"><b>CA / CL</b><p>ระบุ CA = 13,479; CL = 10,122 ล้านดอลลาร์</p><p>13,479 ÷ 10,122 = 1.3317 ≈ 1.33 เท่า</p></div><p>มีสินทรัพย์หมุนเวียน 1.33 ต่อหนี้หมุนเวียน 1 หน่วย แต่สินทรัพย์ทั้งหมดไม่ใช่เงินสด</p><h4>Acid-test / Quick ratio</h4><div class=\"formula\"><b>(Cash + Accounts receivable) / CL</b><p>รวมสินทรัพย์เร็วตามสูตรสไลด์ = 545 + 1,085 = 1,630</p><p>1,630 ÷ 10,122 = 0.1610 ≈ 0.16 เท่า</p></div><p>ตัด inventory และ other current assets ที่ไม่ใช่สินทรัพย์เร็วออก สูตรนี้จึงไม่ใช่ (CA − Inventory)/CL สำหรับข้อมูลชุดนี้</p><h4>Days in receivables / ACP</h4><div class=\"formula\"><b>AR / (Annual credit sales / 365)</b><p>ยอดขายเชื่อ = Sales − Cash sales = 67,997 − 47,598 = 20,399</p><p>ยอดขายเชื่อต่อวัน = 20,399 ÷ 365 = 55.8877 ล้านดอลลาร์</p><p>ACP = 1,085 ÷ 55.8877 = 19.41394 ≈ 19.41 วัน</p></div><p>ระยะเก็บเงินเฉลี่ย ใช้ยอดขายเชื่อ ไม่ใช่ยอดขายรวมเมื่อทราบส่วนขายสด</p><h4>Accounts receivable turnover</h4><div class=\"formula\"><b>Annual credit sales / AR</b><p>Annual credit sales = 20,399; AR = 1,085</p><p>20,399 ÷ 1,085 = 18.801 ≈ 18.80 รอบต่อปี</p><p>ตรวจกลับ ACP = 365 ÷ 18.801 = 19.41 วัน</p></div><p>วัดการหมุนเวียนลูกหนี้ เป็นส่วนหนึ่งของการจัดการสินทรัพย์ด้วย</p><h4>Days in inventory</h4><div class=\"formula\"><b>Inventory / (COGS / 365)</b><p>ต้นทุนขายต่อวัน = 44,693 ÷ 365 = 122.4466</p><p>10,625 ÷ 122.4466 = 86.77254 ≈ 86.77 วัน</p></div><p>ระยะถือสินค้าก่อนขาย ใช้ COGS ให้ฐานต้นทุนสอดคล้องกับ inventory</p><h4>Inventory turnover</h4><div class=\"formula\"><b>COGS / Inventory</b><p>44,693 ÷ 10,625 = 4.2064 ≈ 4.21 รอบต่อปี</p><p>ตรวจกลับ 365 ÷ 4.2064 = 86.77 วัน</p></div><p>สินค้าหมุนกี่รอบต่อปี ไม่ใช้ยอดขายซึ่งรวมส่วนกำไร</p><h4>Operating return on assets (ORA)</h4><div class=\"formula\"><b>Operating profit / Total assets</b><p>5,803 ÷ 40,125 = 0.144623</p><p>แปลงเป็นเปอร์เซ็นต์: 0.144623 × 100 = 14.4623% ≈ 14.5%</p></div><p>สินทรัพย์ 1 ดอลลาร์สร้างกำไรดำเนินงานราว 14.5 เซนต์ ห้ามแทนตัวเศษด้วย net income</p><h4>Operating profit margin (OPM)</h4><div class=\"formula\"><b>Operating profit / Sales</b><p>5,803 ÷ 67,997 = 0.085342</p><p>0.085342 × 100 = 8.5342% ≈ 8.5%</p></div><p>สะท้อนการควบคุมต้นทุนขายและค่าใช้จ่ายดำเนินงานต่อรายได้</p><h4>Total asset turnover (TAT)</h4><div class=\"formula\"><b>Sales / Total assets</b><p>67,997 ÷ 40,125 = 1.69463 ≈ 1.69 เท่า</p></div><p>สินทรัพย์ทุก 1 ดอลลาร์สร้างยอดขาย 1.69 ดอลลาร์</p><h4>Fixed asset turnover (FAT)</h4><div class=\"formula\"><b>Sales / Net fixed assets</b><p>สินทรัพย์ถาวรสุทธิ = 38,471 − 13,411 = 25,060</p><p>67,997 ÷ 25,060 = 2.71337 ≈ 2.71 เท่า</p></div><p>ใช้สินทรัพย์ถาวรหลังหักค่าเสื่อมสะสม ไม่ใช้ราคาทุนขั้นต้น</p><h4>Debt ratio</h4><div class=\"formula\"><b>Total debt / Total assets</b><p>หนี้รวม = 10,122 + 11,114 = 21,236</p><p>21,236 ÷ 40,125 × 100 = 52.9246% ≈ 53%</p><p>สัดส่วนทุน = 100% − 52.9246% = 47.0754% ≈ 47%</p></div><p>สินทรัพย์ราว 53% มาจากหนี้ สูงกว่า Lowe’s ไม่แปลว่าล้มละลายแน่นอน</p><h4>Times interest earned (TIE)</h4><div class=\"formula\"><b>Operating profit / Interest expense</b><p>5,803 ÷ 530 = 10.9491 ≈ 10.9 เท่า</p></div><p>กำไรดำเนินงานเกือบ 11 เท่าของดอกเบี้ย แต่จ่ายหนี้ด้วยเงินสดและยังต้องคืนเงินต้น จึงเป็นเพียงตัวชี้คร่าว ๆ</p><h4>Return on equity (ROE)</h4><div class=\"formula\"><b>Net income / Total common equity</b><p>3,338 ÷ 18,889 = 0.176717</p><p>คูณ 100 = 17.6717% ≈ 17.7%</p></div><p>กำไรสุทธิต่อส่วนเจ้าของ; สูงได้ทั้งจากผลดำเนินงานดีและการใช้หนี้ในสภาพธุรกิจเอื้ออำนวย</p><h4>Price/earnings (P/E)</h4><div class=\"formula\"><b>Market price per share / EPS</b><p>ใช้ราคาหุ้น $36.77 และ EPS ที่ปัดในสไลด์ $2.06</p><p>36.77 ÷ 2.06 = 17.8495 ≈ 17.85 เท่า</p></div><p>ตลาดยอมจ่ายเท่าไรต่อกำไร 1 ดอลลาร์ เป็นความคาดหวัง ไม่ใช่หลักประกันผลตอบแทน</p><h4>Price/book (P/B)</h4><div class=\"formula\"><b>Market price per share / Book equity per share</b><p>Book value per share = 18,889 ÷ 1,623 = 11.6383 ≈ $11.64</p><p>36.77 ÷ 11.64 = 3.1589 ≈ 3.16 เท่า</p></div><p>ราคาตลาดต่อมูลค่าบัญชีหุ้น มากกว่า 1 คือราคาตลาดสูงกว่ามูลค่าบัญชี ไม่ใช่กำไรแน่นอนของผู้ซื้อทุกคน</p><h4>4. การแปลผลสภาพคล่องในทางปฏิบัติ · สไลด์ 4-16, 4-18–4-19</h4><p>สไลด์เทียบ ACP 19.41 กับเกณฑ์เครดิต 20 วัน และ inventory 86.77 กับเกณฑ์ 90 วัน: ต่ำกว่าเกณฑ์สนับสนุนว่าเก็บเงิน/ระบายสินค้าได้เร็วกว่าเป้า สูงกว่าเกณฑ์ควรหาสาเหตุที่ทีมเก็บหนี้หรือการขาย อย่างไรก็ดีต้องตรวจเงื่อนไขลูกค้า สินค้าขาด และฤดูกาลก่อนสรุปว่าพนักงานทำงานไม่ดี</p><div class=\"rule\">ต้นฉบับเรียกเกณฑ์ 20/90 ว่า business days แต่สูตรใช้ 365 วันปฏิทิน การเทียบจริงต้องทำฐานวันให้ตรงกันก่อน ที่นี่เก็บการเปรียบเทียบเพื่ออธิบายแนวคิดของสไลด์ ไม่ใช้เป็นข้อพิสูจน์ผลงานบุคคล</div><h4>5. แยก ORA เพื่อหาเหตุผล · สไลด์ 4-21, 4-25–4-26</h4><div class=\"formula\"><b>ORA = OPM × TAT = (Operating profit / Sales) × (Sales / Assets)</b><p>แทนค่า = (5,803 ÷ 67,997) × (67,997 ÷ 40,125)</p><p>Sales ตัดกัน เหลือ 5,803 ÷ 40,125 = 14.4623% ≈ 14.5%</p><p>หากใช้ค่าที่ปัด 8.5% × 1.69 จะได้ 14.365% ซึ่งต่างเล็กน้อย จึงควรเก็บค่าจริงจนจบ</p></div><p>Figure 4-3 แยกผลตอบแทนเป็นการจัดการต้นทุน (margin) กับการใช้สินทรัพย์สร้างยอดขาย (turnover) การวิเคราะห์ turnover ลึกลงไปดู AR turnover 18.80 เทียบ 22.81; inventory turnover 4.21 เทียบ 3.81; FAT 2.71 เทียบ 2.21 จึงไม่ใช่ว่า Home Depot ดีกว่าในทุกด้าน แม้ ORA สูงกว่า</p><h4>6. Economic Value Added · สไลด์ 4-35–4-37</h4><p><b>EVA</b> วัดกำไรเชิงเศรษฐกิจ โดยคิดต้นทุนของส่วนเจ้าของด้วย ไม่ใช่แค่ดอกเบี้ยหนี้ มูลค่าผู้ถือหุ้นเพิ่มเมื่อผลตอบแทนเงินทุนเกินผลตอบแทนที่ผู้ลงทุนต้องการ ใช้แบบจำลองในสไลด์นี้ตามนิยาม ORA และ assets ที่กำหนด</p><div class=\"formula\"><b>EVA (ตามสไลด์) = (ORA − Cost of capital) × Total assets</b><p>กำหนด ORA ที่ปัดแล้ว 14.5%; ต้นทุนเงินทุนสมมติ 10%; assets = $40.125 billion</p><p>ส่วนต่าง = 0.145 − 0.10 = 0.045</p><p>EVA = 0.045 × 40.125 = $1.805625 billion ≈ $1.806 billion</p><p>ถ้าไม่ปัด ORA ก่อน: 5.803 − 0.10 × 40.125 = $1.7905 billion; ความต่างเกิดจากการใช้ ORA ที่ปัด ไม่ใช่เปลี่ยนสูตร</p></div><div class=\"rule\">ตัวเลขนี้ใช้กรอบ EVA แบบย่อของสไลด์ ไม่เพิ่มสมมติฐานภาษีหรือเปลี่ยนฐานเงินทุนเอง และไม่ถือเป็นกำไรทางบัญชี</div><h4>7. สรุปเปรียบเทียบครบทุกช่อง · สไลด์ 4-19, 4-25, 4-30, 4-32, 4-37, 4-40</h4><div class=\"scroll\"><table class=\"t\"><thead><tr><th>อัตราส่วน</th><th>Home Depot</th><th>Lowe’s</th></tr></thead><tbody><tr><td>Current ratio</td><td>1.33</td><td>1.40</td></tr><tr><td>Acid-test / Quick ratio</td><td>0.16</td><td>0.12</td></tr><tr><td>Days in receivables / ACP</td><td>19.41 วัน</td><td>16 วัน</td></tr><tr><td>Accounts receivable turnover</td><td>18.80</td><td>22.81</td></tr><tr><td>Days in inventory</td><td>86.77 วัน</td><td>95.80 วัน</td></tr><tr><td>Inventory turnover</td><td>4.21</td><td>3.81</td></tr><tr><td>Operating return on assets (ORA)</td><td>14.5%</td><td>10.6%</td></tr><tr><td>Operating profit margin (OPM)</td><td>8.5%</td><td>7.3%</td></tr><tr><td>Total asset turnover (TAT)</td><td>1.69</td><td>1.45</td></tr><tr><td>Fixed asset turnover (FAT)</td><td>2.71</td><td>2.21</td></tr><tr><td>Debt ratio</td><td>53%</td><td>46%</td></tr><tr><td>Times interest earned (TIE)</td><td>10.9</td><td>9.0</td></tr><tr><td>Return on equity (ROE)</td><td>17.7%</td><td>11.1%</td></tr><tr><td>Price/earnings (P/E)</td><td>17.85</td><td>16.90</td></tr><tr><td>Price/book (P/B)</td><td>3.16</td><td>1.95</td></tr></tbody></table></div><p>Home Depot: current ratio ต่ำกว่าแต่ quick สูงกว่า; เก็บหนี้ช้ากว่าแต่ระบายสินค้าเร็วกว่า; margin และการใช้สินทรัพย์รวม/ถาวรสูงกว่า; ใช้หนี้มากกว่าแต่กำไรครอบดอกเบี้ยมากกว่า; ROE สูงกว่า; P/E และ P/B สูงกว่า สองตัวท้ายสื่อความเห็นตลาดต่อผลงานอดีตและโอกาสอนาคต รวมความเสี่ยง ไม่ได้บอกว่าหุ้นถูกหรือแพงโดยลำพัง</p><h4>8. ข้อจำกัดครบ 6 ประเด็น · สไลด์ 4-38–4-39</h4><p>1) ระบุอุตสาหกรรมหรือ comparable peers ยาก โดยเฉพาะกิจการหลายประเภท 2) ค่าเฉลี่ยอุตสาหกรรมที่เผยแพร่เป็นเพียงค่าประมาณ 3) ค่าเฉลี่ยอาจไม่ใช่เป้าหมายที่ดี 4) แนวปฏิบัติบัญชีต่างกัน 5) สูง/ต่ำไม่ให้ข้อสรุปอัตโนมัติ และ 6) ฤดูกาลทำให้ยอด ณ วันรายงานเอนเอียง จึงต้องอ่านหลายอัตราส่วนร่วมกัน ตรวจนิยามและช่วงเวลา แล้วเชื่อมกับกระแสเงินสดจริง</p>"
    },
    {
      "id": "ch5",
      "topic": "บทที่ 5 · Discounted Cash Flow Analytics",
      "title": "มูลค่าเงินตามเวลาและกระแสเงินสดคิดลด",
      "summary": "Simple/Compound · PV/FV · Annuity/Due · Amortization · EAR · Perpetuity",
      "quick": "<div class=\"key\"><b>เขียน timeline ก่อน:</b> เงินก้อนหรือหลายงวด? ต้นงวดหรือปลายงวด? อัตราต่องวดและจำนวนงวดตรงกันหรือยัง?</div><div class=\"scroll\"><table class=\"t\"><thead><tr><th>กรณี</th><th>สูตร</th></tr></thead><tbody><tr><td>Simple interest</td><td>I=PV×r×n; FV=PV+I</td></tr><tr><td>เงินก้อน</td><td>FV=PV(1+r)ⁿ; PV=FV/(1+r)ⁿ</td></tr><tr><td>Ordinary annuity</td><td>FVA=PMT[(1+r)ⁿ−1]/r; PVA=PMT[1−(1+r)⁻ⁿ]/r</td></tr><tr><td>Annuity due</td><td>คูณ ordinary value ด้วย (1+r)</td></tr><tr><td>เงินกู้</td><td>PMT=PV×r/[1−(1+r)⁻ⁿ]</td></tr><tr><td>งวดไม่ใช่ปี</td><td>r=QR/m; N=years×m; EAR=(1+QR/m)ᵐ−1</td></tr><tr><td>Perpetuity</td><td>PV=PP/r เริ่มรับปลายงวดถัดไป</td></tr></tbody></table></div><div class=\"formula\"><b>ตัวอย่างจำหลัก</b><p>1,000 ที่ 6% 3 ปี: simple = 1,180; compound = 1,191.02</p><p>500 ปลายปี 5 งวด 6%: FV=2,818.55; PV=2,106.18</p><p>500 ต้นปี 5 งวด 6%: FV=2,987.66; PV=2,232.55</p><p>กู้ 6,000 ที่ 12% 4 ปี: PMT=1,975.41; งวดแรกดอกเบี้ย 720 ที่เหลือคืนต้น</p><p>15% ต่อปีทบเดือน: EAR=16.08%; perpetuity 2,000/12%=16,666.67</p></div><p>FV เพิ่มเมื่อ PV, r, n เพิ่มในกรณี r&gt;0; PV เงินก้อนอนาคตลดเมื่อ r หรือเวลารอเพิ่ม เงินงวดสุดท้าย ordinary ไม่ทบดอกเบี้ย ณ วันวัด FV แต่ due ทบเพิ่ม 1 งวด</p><div class=\"rule\">จุดแก้ต้นฉบับ: PVA ต้องยกกำลัง −n; factor FVA 5 ปี 6% คือ 5.63709; โจทย์ 50 ปีแยกจากเฉลย 40 ปี; 20% ต่อปีทบเดือนจึงได้ EAR 21.94%; 20% ต่อเดือนจริงได้ 791.61%; ใช้ค่าคำนวณเต็มแล้วปัดท้าย</div>",
      "full": "<div class=\"key\"><b>เป้าหมาย:</b> ทบต้นและคิดลดเงินก้อน เงินงวดปลายงวด/ต้นงวด เงินกู้ผ่อนเท่ากัน ดอกเบี้ยหลายงวดต่อปี และเงินงวดตลอดไป โดยทำให้เวลาและอัตราเป็นหน่วยเดียวกันก่อน</div><h4>1. Simple กับ Compound interest · สไลด์ 5-1–5-5</h4><p><b>Simple interest</b> คิดจากเงินต้นเดิมเท่านั้น ส่วน <b>Compound interest</b> นำดอกเบี้ยที่ได้มารวมเป็นฐานคำนวณงวดถัดไป จึงเกิดดอกเบี้ยบนดอกเบี้ย ตัวอย่างต้นฉบับเงิน $1,000 ที่ 6% ต่อปี 3 ปี</p><div class=\"formula\"><b>Simple interest: I = PV × r × n; FV = PV + I</b><p>ดอกเบี้ยแต่ละปี = 1,000 × 0.06 = $60 เหมือนกันทั้ง 3 ปี</p><p>ดอกเบี้ยรวม = 60 × 3 = $180; เงินปลายปี 3 = 1,000 + 180 = $1,180</p></div><div class=\"formula\"><b>Compound interest: Interest in year t = Opening balance × r</b><p>ปี 1: 1,000 × 6% = 60; ปิดปี 1 = 1,060</p><p>ปี 2: 1,060 × 6% = 63.60; ปิดปี 2 = 1,123.60</p><p>ปี 3: 1,123.60 × 6% = 67.416; ปิดปี 3 = 1,191.016 ≈ $1,191.02</p><p>ดอกเบี้ยรวม 191.016 ≈ $191.02 สูงกว่า simple interest $11.016</p></div><h4>2. Future value ของเงินก้อน · สไลด์ 5-6–5-9</h4><p><b>PV</b> คือเงินวันนี้หรือต้นงวดแรก <b>FVₙ</b> คือเงินเมื่อสิ้นงวด n <b>r</b> คืออัตราต่องวด และ <b>n</b> คือจำนวนงวด ถ้าทบปีละครั้ง r เป็นต่อปีและ n เป็นปี ใช้อัตราทศนิยม เช่น 6% = 0.06</p><div class=\"formula\"><b>FVₙ = PV(1+r)ⁿ</b><p>ตัวอย่างในสไลด์: วันนี้ $100 เป็นเวลา 2 ปี อัตรา 6%</p><p>ตัวทบต้น = 1.06² = 1.1236</p><p>FV₂ = 100 × 1.1236 = $112.36; ไทม์ไลน์ t=0 ลง 100 → ปี1 106 → ปี2 112.36</p></div><p>เมื่อ r เป็นบวก การเพิ่มเงินต้น เพิ่มอัตรา หรือเพิ่มระยะทบต้นเพิ่ม FV โดยเปลี่ยนทีละตัวเพื่อเห็นผล ตัวอย่างต่อเนื่องทั้งหมดของสไลด์:</p><div class=\"formula\"><b>Changing r, n and PV</b><p>ก) เงิน $500, 2 ปี ที่ 2%: 500×1.02² = 500×1.0404 = $520.20</p><p>เปลี่ยนเป็น 6%: 500×1.06² = 500×1.1236 = $561.80</p><p>ข) คง 6% แต่เป็น 10 ปี: 500×1.06¹⁰ = 500×1.79084770 = $895.42</p><p>ค) คง 6% และ 10 ปี แต่เงินต้น $1,500: 1,500×1.79084770 = $2,686.27</p></div><div class=\"rule\">สไลด์ใช้ตัวคูณที่ปัด 1.79085 จึงได้ 895.43 และ 2,686.28 ต่างจากการคำนวณเต็มหนึ่งเซนต์ เว็บนี้คำนวณเต็มและปัดตอนจบ ไม่ใช่เปลี่ยนโจทย์</div><h4>3. Present value ของเงินก้อน · สไลด์ 5-10–5-12</h4><p><b>Present value</b> คือค่าในวันนี้ของเงินที่จะรับหรือจ่ายในอนาคต เป็นการคิดย้อนจาก FV เมื่ออัตราคิดลดเป็นบวก PV ของเงินก้อนเดิมจะลดลงถ้ารอนานขึ้นหรืออัตราสูงขึ้น เพราะต้องให้ผลตอบแทนมากขึ้นกว่าจะถึงยอดอนาคต</p><div class=\"formula\"><b>PV = FVₙ/(1+r)ⁿ = FVₙ × Discount factor</b><p>รับ $500 อีก 10 ปี อัตรา 6%; Discount factor = 1/1.06¹⁰ = 0.558394777</p><p>PV = 500 × 0.558394777 = $279.1974 ≈ $279.20</p><p>ตรวจกลับ: 279.1974 × 1.06¹⁰ ≈ 500; จุดวันนี้คือ t=0 จุดรับเงินคือ t=10</p></div><h4>4. Ordinary annuity และ Future value · สไลด์ 5-13–5-17</h4><p><b>Annuity</b> คือเงินจำนวนเท่ากันทุกงวดเป็นจำนวนงวดแน่นอน <b>Ordinary annuity</b> รับ/จ่ายปลายงวด เงินงวดแรกที่ t=1 และสุดท้ายที่ t=n; <b>PMT</b> คือเงินแต่ละงวด ตาราง 5-1 ฝาก $500 ปลายปี 1–5 ที่ 6% เงินงวดสุดท้ายไม่ได้ทบดอกเบี้ยก่อนวัด FV ปลายปี 5</p><div class=\"formula\"><b>FV ordinary annuity = PMT × [(1+r)ⁿ−1]/r</b><p>PMT = 500; n = 5; r = 0.06</p><p>ตัวคูณ = (1.06⁵−1)/0.06 = 5.63709296</p><p>FV = 500 × 5.63709296 = $2,818.54648 ≈ $2,818.55</p></div><div class=\"scroll\"><table class=\"t\"><thead><tr><th>ฝากปลายปี</th><th>ทบถึงปี 5 กี่ปี</th><th>มูลค่าปลายปี 5 (คำนวณเต็มก่อนปัด)</th></tr></thead><tbody><tr><td>1</td><td>4</td><td>500 × 1.06^4 = $631.24</td></tr><tr><td>2</td><td>3</td><td>500 × 1.06^3 = $595.51</td></tr><tr><td>3</td><td>2</td><td>500 × 1.06^2 = $561.80</td></tr><tr><td>4</td><td>1</td><td>500 × 1.06^1 = $530.00</td></tr><tr><td>5</td><td>0</td><td>500 × 1.06^0 = $500.00</td></tr></tbody></table></div><p>ผลรวมจากค่าที่ยังไม่ปัด = 2,818.55 ตารางภาพต้นฉบับใช้ค่าปัดหยาบและแสดง 2,818.50 ส่วนสไลด์ตัวอย่างพิมพ์ factor 2.06 ซึ่งไม่ให้ผลตามคำตอบ ต้องใช้ factor 5.63709296</p><div class=\"formula\"><b>ตัวอย่างที่ 10% ตามสไลด์ 5-16</b><p>ฝาก $500 ปลายปีทุกปี 5 ปี: factor = (1.10⁵−1)/0.10 = 6.1051</p><p>FV = 500 × 6.1051 = $3,052.55</p></div><div class=\"formula\"><b>ตัวอย่าง PMT และจำนวนปีในสไลด์ 5-17</b><p>โจทย์บรรทัดแรกระบุ $5,000 นาน 50 ปี ที่ 7%: factor = (1.07⁵⁰−1)/0.07; FV = $2,032,644.65; เงินฝากรวม = 5,000×50 = $250,000</p><p>แต่บรรทัดเงินฝากรวมของสไลด์ใช้ 40 ปี: FV = 5,000×[(1.07⁴⁰−1)/0.07] = $998,175.56; เงินฝากรวม = $200,000</p><p>ข้อถัดไป $6,000 นาน 40 ปี ที่ 7%: FV = 6,000×[(1.07⁴⁰−1)/0.07] = $1,197,810.67; เงินฝากรวม = $240,000</p></div><div class=\"rule\">50 ปีและ 40 ปีเป็นคนละเงื่อนไข ห้ามใช้ 50 ในโจทย์แต่เฉลย 40 โดยไม่บอก ที่นี่แสดงทั้งสองกรณีเพื่อแก้ความไม่สอดคล้องในต้นฉบับ</div><h4>5. Present value of annuity · สไลด์ 5-18–5-20</h4><p>บำนาญ ภาระประกัน และดอกเบี้ยพันธบัตรเป็นตัวอย่างเงินงวดในสไลด์ ภายใต้จำนวนเงินเท่ากันและช่วงเวลาสม่ำเสมอ การเปรียบเทียบต้องคิดทุกงวดกลับวันเดียวกัน เงินก้อนที่รับปีไกลกว่ามี PV น้อยกว่า</p><div class=\"formula\"><b>PV ordinary annuity = PMT × [1−(1+r)⁻ⁿ]/r</b><p>รับ $500 ปลายปี 1–5 ที่ 6%: factor = [1−1.06⁻⁵]/0.06 = 4.212363786</p><p>PV = 500 × 4.212363786 = $2,106.181893 ≈ $2,106.18</p></div><div class=\"scroll\"><table class=\"t\"><thead><tr><th>ปีที่รับ</th><th>คิดลดกลับวันนี้</th></tr></thead><tbody><tr><td>1</td><td>500 / 1.06^1 = $471.70</td></tr><tr><td>2</td><td>500 / 1.06^2 = $445.00</td></tr><tr><td>3</td><td>500 / 1.06^3 = $419.81</td></tr><tr><td>4</td><td>500 / 1.06^4 = $396.05</td></tr><tr><td>5</td><td>500 / 1.06^5 = $373.63</td></tr></tbody></table></div><div class=\"rule\">Table 5-2 ปัดรายงวดแบบหยาบจึงรวม $2,106.00; ใช้ค่าจริงได้ $2,106.18 และเลขชี้กำลังทั่วไปในสไลด์ 5-20 ที่พิมพ์ −1 ต้องเป็น <b>−n</b> ถ้ามี n งวด สูตร −1 ใช้ได้แค่งวดเดียว</div><h4>6. Annuity due · สไลด์ 5-21–5-22 และ Table 5-7</h4><p>เงินงวดต้นงวดเลื่อนแต่ละรายการเร็วขึ้นหนึ่งงวดจาก ordinary: 5 งวดที่ t=0,1,2,3,4 วัด FV ที่ t=5 ทุกเงินจึงทบเพิ่มหนึ่งงวด และ PV ก็สูงขึ้นด้วยปัจจัย 1+r</p><div class=\"formula\"><b>FVAD = FVA × (1+r)</b><p>ฝาก $500 ต้นปี 5 ครั้ง ที่ 6%; FVA แบบปลายปีคำนวณเต็ม = 2,818.54648</p><p>FVAD = 2,818.54648 × 1.06 = $2,987.659269 ≈ $2,987.66</p></div><div class=\"formula\"><b>PVAD = PVA × (1+r)</b><p>เงิน $500 ต้นปี 5 ครั้ง ที่ 6%; PVA = 2,106.181893</p><p>PVAD = 2,106.181893 × 1.06 = $2,232.552806 ≈ $2,232.55</p><p>ตรวจเงินงวดแรก: $500 ที่ t=0 ไม่ต้องคิดลด อีก 4 งวดคิดลด 1–4 ปี</p></div><div class=\"rule\">ตัวเลข ordinary $2,818.80 ในสไลด์ 5-22 ไม่ตรงสูตรและตัวอย่างก่อนหน้า ค่าที่คำนวณได้คือ $2,818.55 และ due $2,987.66 เมื่อปัดท้าย</div><h4>7. Amortized loans · สไลด์ 5-23–5-25</h4><p><b>Amortized loan</b> คือเงินกู้ที่ชำระเป็นงวดเท่ากันเพื่อลดยอดหนี้ เช่น สินเชื่อบ้าน การลดเงินต้นผ่านเงินงวดเรียก amortizing ต้องแยกส่วนดอกเบี้ยกับส่วนคืนต้น แม้ PMT เท่ากัน ดอกเบี้ยลดเมื่อยอดหนี้ลด</p><div class=\"formula\"><b>PMT = PV × r / [1−(1+r)⁻ⁿ]</b><p>ซื้อเครื่องจักรด้วยเงินกู้ $6,000 อัตรา 12% ผ่อนปลายปี 4 ปี</p><p>PV annuity factor = [1−1.12⁻⁴]/0.12 = 3.037349347</p><p>PMT = 6,000 / 3.037349347 = $1,975.406618 ≈ $1,975.41</p></div><div class=\"formula\"><b>แยกดอกเบี้ยและคืนต้น — ตัวอย่างขยายจากเงินกู้เดิม</b><p>ปี 1 ดอกเบี้ย = 6,000×12% = 720; คืนต้น = 1,975.406618−720 = 1,255.406618; หนี้ปลายปี = 4,744.593382</p><p>ปี 2 ดอกเบี้ย = 4,744.593382×12% = 569.351206; คืนต้น = 1,406.055412; หนี้ปลายปี = 3,338.537970</p><p>ปี 3 ดอกเบี้ย ≈ 400.624556; คืนต้น ≈ 1,574.782061; หนี้ปลายปี ≈ 1,763.755909</p><p>ปี 4 ดอกเบี้ย ≈ 211.650709; คืนต้น ≈ 1,763.755909; หนี้ปลายปี = 0 เมื่อใช้ค่าที่ไม่ปัด</p><p>สูตรแต่ละงวด: Interest = Opening loan × r; Principal repaid = PMT−Interest; Closing loan = Opening loan−Principal repaid</p></div><p>ตารางผ่อนเป็นการขยายวิธีทำจากโจทย์เดิม ไม่ใช่เงื่อนไขสินเชื่อจริง หากเก็บเงินเป็นเซนต์ทุกงวดอาจต้องปรับงวดสุดท้ายเล็กน้อย</p><h4>8. เปรียบเทียบดอกเบี้ยและงวดที่ไม่ใช่รายปี · สไลด์ 5-26–5-29</h4><p>Quoted rate หรืออัตราที่ประกาศ กับ <b>Effective annual rate (EAR)</b> / <b>Annual percentage yield (APY)</b> ต่างกันเมื่อทบมากกว่าปีละครั้ง ห้ามเทียบอัตราหน้าป้ายอย่างเดียว เช่น 5% รายปีและ 5% ที่ทบทุกไตรมาสไม่เท่ากัน ให้ m เป็นจำนวนครั้งทบต่อปี</p><div class=\"formula\"><b>EAR = (1 + Quoted annual rate/m)ᵐ − 1</b><p>5% ปีละครั้ง: EAR = 1.05−1 = 5%</p><p>5% ทบไตรมาส: EAR = (1+0.05/4)⁴−1 = 5.094534% ≈ 5.09%</p><p>15% ต่อปี ทบรายเดือน: (1+0.15/12)¹²−1 = 16.07545% ≈ 16.08%</p><p>20% ต่อปี ทบรายเดือน: (1+0.20/12)¹²−1 = 21.9391% ≈ 21.94%</p><p>ถ้า 20% ต่อเดือนจริง: (1.20)¹²−1 = 791.6100% ≈ 791.61% ต่อปี</p></div><div class=\"rule\">สไลด์ 5-28 เขียน “20% per month” แต่ผล 21.94% ใช้กับ 20% ต่อปีทบรายเดือนเท่านั้น เว็บแยกสองสมมติฐาน ไม่ใช้ผล 21.94% กับดอกเบี้ย 20% ต่อเดือน</div><div class=\"formula\"><b>r per period = Quoted annual rate/m; N = years × m</b><p>ตัวอย่างต้นฉบับ 10% ต่อปี ทบไตรมาส 10 ปี: r = 0.10/4 = 0.025 = 2.5% ต่อไตรมาส</p><p>N = 10×4 = 40 ไตรมาส ใช้ 0.025 และ 40 คู่กัน ไม่ใช้ 10% กับ 40</p></div><div class=\"formula\"><b>FV = PV(1+annual rate/m)^(years×m); PV = FV/(1+annual rate/m)^(years×m)</b><p>ขยายตัวอย่างข้างต้นด้วย PV สมมติ $1,000: FV = 1,000×1.025⁴⁰ = $2,685.063838 ≈ $2,685.06</p><p>ถ้าต้องการ $1,000 ที่ปลายปี 10: PV = 1,000/1.025⁴⁰ = $372.430624 ≈ $372.43</p></div><h4>9. Perpetuity · สไลด์ 5-30–5-31</h4><p><b>Perpetuity</b> คือเงินเท่ากันทุกงวดไม่มีสิ้นสุด สูตรมาตรฐานในบทนี้ถือว่างวดแรกอยู่ปลายงวดถัดไป จำนวนเงินคงที่และ r เป็นบวก สัญลักษณ์ PP คือเงินงวดตลอดไป ส่วน r ต้องตรงกับความถี่รับเงิน</p><div class=\"formula\"><b>PV perpetuity = PP / r</b><p>รับ $2,000 ทุกปลายปีตลอดไป คิดลด 12%</p><p>แทนค่า PV = 2,000/0.12 = $16,666.6667 ≈ $16,666.67</p><p>ตรวจความหมาย: เงินต้นมูลค่านี้ ×12% = $2,000 ต่อปีภายใต้สมมติฐานคงที่</p></div><h4>10. ตารางเลือกสูตร · Table 5-7 (สไลด์ 5-32)</h4><div class=\"scroll\"><table class=\"t\"><thead><tr><th>สิ่งที่หา</th><th>สูตร</th></tr></thead><tbody><tr><td>FV เงินก้อน</td><td>PV(1+r)ⁿ</td></tr><tr><td>PV เงินก้อน</td><td>FV/(1+r)ⁿ</td></tr><tr><td>FV ordinary annuity</td><td>PMT[(1+r)ⁿ−1]/r</td></tr><tr><td>PV ordinary annuity</td><td>PMT[1−(1+r)⁻ⁿ]/r</td></tr><tr><td>FV annuity due</td><td>FV ordinary ×(1+r)</td></tr><tr><td>PV annuity due</td><td>PV ordinary ×(1+r)</td></tr><tr><td>EAR</td><td>(1+QR/m)ᵐ−1</td></tr><tr><td>FV nonannual</td><td>PV(1+QR/m)^(m×years)</td></tr><tr><td>PV perpetuity</td><td>PP/r</td></tr></tbody></table></div><p>ก่อนกดเครื่องคิดเลข: วาดเส้นเวลา แยกเงินก้อน/งวด เลือกต้นหรือปลายงวด ตั้ง r กับ n/N ให้หน่วยตรง ระบุจุดที่วัดมูลค่า แล้วแทนค่า กรณีใช้เครื่องคิดเลขการเงินให้ตรวจ END/BGN และเครื่องหมายเงินรับ/จ่าย ถ้า r=0 ให้รวมเงินตรง ๆ (annuity = PMT×n) ไม่หารศูนย์</p>"
    }
  ],
  "practice": [
    {
      "id": "p001",
      "topic": "บทที่ 1 · Financial Management and the Firm",
      "type": "mcq",
      "source": "mock",
      "q": "เป้าหมายหลักของการบริหารการเงินในสไลด์คืออะไร",
      "choices": [
        "เพิ่มความมั่งคั่งผู้ถือหุ้นผ่านมูลค่าหุ้นสามัญเดิม",
        "ทำยอดขายสูงที่สุดโดยไม่สนต้นทุน",
        "เพิ่มกำไรงวดนี้แม้เสียมูลค่าระยะยาว",
        "เพิ่มจำนวนพนักงานให้มากที่สุด"
      ],
      "answer": 0,
      "explain": "บท 1 เป้าหมายคือ shareholder wealth ซึ่งคำนึงถึงมูลค่าธุรกิจ ยอดขายไม่หักต้นทุนจึงไม่พอ กำไรงวดเดียวอาจแลกกับอนาคต และจำนวนพนักงานไม่ใช่ตัววัดความมั่งคั่งโดยตรง"
    },
    {
      "id": "p002",
      "topic": "บทที่ 1 · Financial Management and the Firm",
      "type": "mcq",
      "source": "mock",
      "q": "ขายเชื่อ 10,000 บาทและจ่ายต้นทุน 6,000 บาทแล้ว แต่ยังไม่ได้รับเงินลูกค้า ข้อใดถูก",
      "choices": [
        "เงินกู้ใหม่หากได้รับต้องนับเป็นรายได้ขาย",
        "กำไรขั้นต้น 4,000 แต่กระแสเงินสดจากสองรายการยังเป็น −6,000",
        "กำไรและเงินสดเข้าเท่ากับ 4,000",
        "เงินสดเข้า 10,000 ทันที"
      ],
      "answer": 1,
      "explain": "กำไรขั้นต้น=10,000−6,000=4,000 แต่ยอดขายเชื่อยังไม่เป็นเงินรับ ส่วนต้นทุนจ่ายไปแล้ว 6,000 จึง CF=−6,000 ตัวเลือกเงินสด 4,000/10,000 สับสนกำไรกับเงินรับ และเงินกู้เป็นหนี้ ไม่ใช่รายได้ขาย"
    },
    {
      "id": "p003",
      "topic": "บทที่ 1 · Financial Management and the Firm",
      "type": "mcq",
      "source": "mock",
      "q": "ให้เพื่อนยืม 20,000 บาทหนึ่งปีแบบ 0% แทนฝากที่ 5% ค่าเสียโอกาสดอกเบี้ยเท่าไร",
      "choices": [
        "20,000 บาท",
        "21,000 บาท",
        "1,000 บาท",
        "0 บาท"
      ],
      "answer": 2,
      "explain": "Opportunity cost=20,000×0.05×1=1,000 บาท 0 คือดอกเบี้ยที่ได้รับจากเพื่อน ไม่ใช่ที่สละ; 20,000 คือเงินต้น; 21,000 คือเงินต้นรวมดอกเบี้ยของทางเลือกฝาก"
    },
    {
      "id": "p004",
      "topic": "บทที่ 1 · Financial Management and the Firm",
      "type": "mcq",
      "source": "mock",
      "q": "เหตุใดเงินวันนี้จึงมีค่ามากกว่าเงินจำนวนเท่ากันในอนาคตเมื่ออัตราผลตอบแทนเป็นบวก",
      "choices": [
        "เงินอนาคตมีมูลค่าเป็นศูนย์เสมอ",
        "กำไรบัญชีเท่ากับเงินสดเสมอ",
        "จำนวนปีไม่มีผลต่อมูลค่าเงิน",
        "เงินวันนี้สามารถนำไปสร้างผลตอบแทนระหว่างรอได้"
      ],
      "answer": 3,
      "explain": "บท 1 หลัก time value อาศัยผลตอบแทนที่หาได้ระหว่างเวลา เงินอนาคตยังมี PV ไม่ใช่ศูนย์ กำไรไม่เท่ากับ cash flow และจำนวนปีมีผลต่อการทบต้น/คิดลด"
    },
    {
      "id": "p005",
      "topic": "บทที่ 1 · Financial Management and the Firm",
      "type": "mcq",
      "source": "mock",
      "q": "ในกรอบ efficient market ราคาหุ้นเปลี่ยนเมื่อข้อมูลใหม่เปลี่ยนอะไร",
      "choices": [
        "ความคาดหวังต่อกระแสเงินสดในอนาคต",
        "เฉพาะจำนวนผู้จัดการโดยไม่เกี่ยวผลดำเนินงาน",
        "เฉพาะราคาทุนสินทรัพย์ในอดีต",
        "ราคาหุ้นจะไม่เปลี่ยนเลยเมื่อมีข้อมูลใหม่"
      ],
      "answer": 0,
      "explain": "หลัก 3 เชื่อมข้อมูลกับมูลค่ากระแสเงินสดคาดหวัง จำนวนผู้จัดการและราคาทุนเพียงอย่างเดียวไม่ใช่กลไกทั้งหมด ส่วนคำว่าราคาคงที่ขัดกับการสะท้อนข้อมูลใหม่"
    },
    {
      "id": "p006",
      "topic": "บทที่ 1 · Financial Management and the Firm",
      "type": "mcq",
      "source": "mock",
      "q": "กรณีใดเป็น agency problem ชัดที่สุด",
      "choices": [
        "เจ้าของติดตามรายงานประจำปี",
        "ผู้บริหารใช้เงินบริษัทซื้อความสะดวกส่วนตัวโดยไม่เพิ่มมูลค่าให้เจ้าของ",
        "ผู้บริหารเปิดเผยผลดำเนินงานให้กรรมการตรวจ",
        "บริษัทใช้เงินซื้อเครื่องจักรที่สร้างมูลค่าเพิ่ม"
      ],
      "answer": 1,
      "explain": "Agency problem คือประโยชน์ผู้บริหารขัดเจ้าของ การรายงานและติดตามเป็นกลไกลดปัญหา ส่วนลงทุนที่เพิ่มมูลค่าเป็นการทำตามเป้าหมาย ไม่ใช่ปัญหาตัวแทนโดยตัวมันเอง"
    },
    {
      "id": "p007",
      "topic": "บทที่ 1 · Financial Management and the Firm",
      "type": "mcq",
      "source": "mock",
      "q": "งานใดเป็นหน้าที่ของ Controller ตามผัง",
      "choices": [
        "จัดหาเงินทุน",
        "ดูแลเครดิตลูกค้า",
        "จัดทำงบการเงินและบัญชีต้นทุน",
        "บริหารเงินตราต่างประเทศ"
      ],
      "answer": 2,
      "explain": "Controller ดูภาษี งบ บัญชีต้นทุนและข้อมูล; งานเงินตราต่างประเทศ ระดมทุน และเครดิต อยู่ใน Treasurer ตามสไลด์ 1-10"
    },
    {
      "id": "p008",
      "topic": "บทที่ 1 · Financial Management and the Firm",
      "type": "mcq",
      "source": "mock",
      "q": "เงื่อนไขสำคัญของ limited partnership ตามบทเรียนคืออะไร",
      "choices": [
        "หุ้นส่วนทุกคนจำกัดความรับผิดเสมอ",
        "ต้องมีเจ้าของเพียงคนเดียว",
        "หนี้ทั้งหมดเป็นของรัฐ",
        "ต้องมี general partner ที่รับผิดไม่จำกัดอย่างน้อยหนึ่งคน"
      ],
      "answer": 3,
      "explain": "Limited partner จำกัดตามทุนได้ แต่ต้องมี general partner ≥1 คน คำว่าทุกคนจำกัดจึงผิด เจ้าของคนเดียวคือ sole proprietor และรัฐไม่รับหนี้แทนโดยนิยาม"
    },
    {
      "id": "p009",
      "topic": "บทที่ 1 · Financial Management and the Firm",
      "type": "mcq",
      "source": "mock",
      "q": "ข้อใดเป็นข้อเสียของ corporation ตามสไลด์",
      "choices": [
        "การเปิดเผยข้อมูลมาก การตัดสินใจอาจช้า และการกำกับมาก",
        "เจ้าของโอนหุ้นไม่ได้",
        "บริษัทสิ้นสุดทันทีเมื่อผู้ถือหุ้นคนหนึ่งตาย",
        "ผู้ถือหุ้นรับผิดไม่จำกัดเสมอ"
      ],
      "answer": 0,
      "explain": "บท 1 ระบุการเปิดเผย/ความช้า/กฎกำกับเป็น trade-offs ส่วนโอนหุ้นได้ อายุไม่ผูกเจ้าของ และจำกัดความรับผิดเป็นคุณสมบัติบริษัท ตัวเลือกอื่นกลับด้าน"
    },
    {
      "id": "p010",
      "topic": "บทที่ 1 · Financial Management and the Firm",
      "type": "mcq",
      "source": "mock",
      "q": "รับรายได้เป็นสกุลเงินต่างประเทศแล้วแปลงกลับได้เงินน้อยลงเพราะค่าเงิน เปรียบกับกรณีภาษาไม่ตรงกัน จัดเป็นอะไรตามลำดับ",
      "choices": [
        "Agency problem และ Accounting profit",
        "Currency risk และ Cultural risk",
        "Country risk ทั้งคู่",
        "Cultural risk และ Currency risk"
      ],
      "answer": 1,
      "explain": "Currency risk มาจากอัตราแลกเปลี่ยน ส่วนภาษาเป็น cultural risk; country เน้นกฎ/รัฐบาล/เศรษฐกิจประเทศ; ตัวเลือกกลับลำดับผิด และ agency/profit ไม่ใช่คู่ประเภทความเสี่ยงนี้"
    },
    {
      "id": "p011",
      "topic": "บทที่ 1 · Financial Management and the Firm",
      "type": "written",
      "source": "mock",
      "q": "จับคู่ — คอลัมน์ซ้าย: 1) Monitoring; 2) Compensation scheme; 3) Market mechanism | คอลัมน์ขวา: ก) การเข้าซื้อกิจการ; ข) รายงานประจำปี; ค) Stock options",
      "answer": "<p><b>1–ข</b>: รายงานช่วยตรวจติดตาม</p><p><b>2–ค</b>: สิทธิหุ้นเชื่อมแรงจูงใจกับมูลค่า</p><p><b>3–ก</b>: takeover เป็นแรงกดดันจากตลาด</p>",
      "exerciseKind": "matching"
    },
    {
      "id": "p012",
      "topic": "บทที่ 1 · Financial Management and the Firm",
      "type": "written",
      "source": "mock",
      "q": "จับคู่ — คอลัมน์ซ้าย: 1) CFO; 2) Treasurer; 3) Controller | คอลัมน์ขวา: ก) ภาษี งบและบัญชีต้นทุน; ข) กำกับแผนการเงิน กลยุทธ์และเงินสด; ค) เครดิต เงินทุนและเงินตราต่างประเทศ",
      "answer": "<p><b>1–ข</b>: CFO ดูภาพรวมทางการเงิน</p><p><b>2–ค</b>: Treasurer ดูการจัดหาและบริหารเงิน</p><p><b>3–ก</b>: Controller ดูข้อมูลบัญชีและภาษี</p>",
      "exerciseKind": "matching"
    },
    {
      "id": "p013",
      "topic": "บทที่ 1 · Financial Management and the Firm",
      "type": "written",
      "source": "mock",
      "q": "จับคู่ — คอลัมน์ซ้าย: 1) Sole proprietorship; 2) Corporation; 3) Limited partnership | คอลัมน์ขวา: ก) นิติบุคคลแยกเจ้าของ โอนหุ้นได้; ข) คนเดียวรับผิดไม่จำกัด; ค) มีหุ้นส่วนทั่วไปอย่างน้อยหนึ่งคน",
      "answer": "<p><b>1–ข</b>: เจ้าของคนเดียวรับทรัพย์และกำไรพร้อมความรับผิด</p><p><b>2–ก</b>: อายุบริษัทไม่ผูกเจ้าของ</p><p><b>3–ค</b>: ยังต้องมีผู้รับผิดไม่จำกัดแม้มี limited partners</p>",
      "exerciseKind": "matching"
    },
    {
      "id": "p014",
      "topic": "บทที่ 1 · Financial Management and the Firm",
      "type": "written",
      "source": "mock",
      "q": "ผู้บริหารเสนอให้ลดค่าใช้จ่ายตรวจคุณภาพเพื่อให้กำไรงวดนี้สูงขึ้น โดยมีความเสี่ยงเสียลูกค้าในอนาคต วิเคราะห์ตามเป้าหมายกิจการและจริยธรรม",
      "answer": "<p>ไม่ควรตัดสินจากกำไรงวดนี้อย่างเดียว ต้องประเมินเงินสดที่ประหยัดเทียบกับกระแสเงินสดในอนาคตที่อาจเสียจากลูกค้าและความไว้วางใจ เป้าหมายคือความมั่งคั่งผู้ถือหุ้นระยะยาว ไม่ใช่ตัวเลขกำไรชั่วคราว</p><p>ควรเปิดเผยข้อสมมติและผลกระทบให้ผู้กำกับดูแล เปรียบเทียบทางเลือกเพิ่มประสิทธิภาพที่ยังรักษาคุณภาพ และตรวจว่าค่าตอบแทนผู้บริหารกำลังกระตุ้นการตัดสินใจเพื่อโบนัสระยะสั้นหรือไม่ ซึ่งเป็นประเด็น agency บนฐาน ethics</p>",
      "exerciseKind": "analysis"
    },
    {
      "id": "p015",
      "topic": "บทที่ 1 · Financial Management and the Firm",
      "type": "written",
      "source": "mock",
      "q": "บริษัทกำลังย้ายฐานผลิตต่างประเทศ จงอธิบายเหตุผลที่อาจทำให้ย้ายและความเสี่ยงครบสามประเภท",
      "answer": "<p>เหตุผลอาจเป็นรายได้จากตลาดใหม่ ลดค่าที่ดิน แรงงาน ทุน วัตถุดิบ ภาษี เพิ่มการเข้าถึงโลก และความต่างของมาตรฐานกำกับที่สไลด์กล่าวถึง แต่ต้องรักษาจริยธรรม</p><p>Country risk: กฎเปลี่ยนหรือรัฐบาลไม่มั่นคง; Currency risk: เงินจ่ายต้นทุนกับรายรับต่างสกุลทำให้มูลค่าเปลี่ยน; Cultural risk: ภาษา ประเพณีและจริยธรรมต่างกัน ควรประเมินทั้งสามร่วมกับผลต่อกระแสเงินสด ไม่ถือว่าต้นทุนแรงงานต่ำเพียงอย่างเดียวทำให้การย้ายสร้างมูลค่า</p>",
      "exerciseKind": "analysis"
    },
    {
      "id": "p016",
      "topic": "บทที่ 1 · Financial Management and the Firm",
      "type": "written",
      "source": "mock",
      "q": "อธิบายหลักการเงินทั้ง 4 ข้อด้วยกรณีบริษัทขายเชื่อและให้โบนัสผู้บริหารตามกำไรงวดเดียว",
      "answer": "<p>1) Cash flow: ขายเชื่อเพิ่มกำไรแต่ยังไม่มีเงินรับ จึงต้องวางแผนสภาพคล่อง 2) Time value: เงินที่รับช้ามีค่าเสียโอกาส ควรพิจารณาเงื่อนไขเครดิต 3) Market prices: ข้อมูลยอดขายต้องพิจารณาความสามารถเก็บเงินจริง เพราะตลาดประเมินเงินสดอนาคต 4) Agency: โบนัสจากกำไรงวดเดียวอาจกระตุ้นขายให้ลูกค้าเสี่ยงเพื่อเร่งยอด ควรติดตามคุณภาพลูกหนี้ เปิดเผยรายงาน และจัดแรงจูงใจให้สอดคล้องมูลค่าระยะยาว</p>",
      "exerciseKind": "analysis"
    },
    {
      "id": "p017",
      "topic": "บทที่ 3 · A Review of Financial Statements (ไฟล์ CH2)",
      "type": "mcq",
      "source": "mock",
      "q": "งบใดแสดงฐานะ ณ วันหนึ่งแทนที่จะเป็นผลตลอดช่วงเวลา",
      "choices": [
        "Balance sheet",
        "Income statement",
        "Statement of cash flows",
        "งบกำไรสะสมที่เชื่อมต้นงวดกับปลายงวด"
      ],
      "answer": 0,
      "explain": "Balance sheet เป็น snapshot แบบ As of; Income statement วัดผลตลอดงวด; cash flows วัดรับจ่ายในงวด; งบกำไรสะสมอธิบายการเปลี่ยนระหว่างวันต้นและปลาย จึงไม่ใช่ภาพฐานะรายการทั้งหมด ณ วันเดียว"
    },
    {
      "id": "p018",
      "topic": "บทที่ 3 · A Review of Financial Statements (ไฟล์ CH2)",
      "type": "mcq",
      "source": "mock",
      "q": "ขาย 1,000 ต้นทุนขาย 600 ค่าใช้จ่ายดำเนินงาน 200 ดอกเบี้ย 50 ภาษี 30 กำไรสุทธิเท่าไร",
      "choices": [
        "150",
        "120",
        "400",
        "200"
      ],
      "answer": 1,
      "explain": "Gross profit=1,000−600=400; EBIT=400−200=200; EBT=200−50=150; NI=150−30=120 ดังนั้น 400/200/150 เป็นคนละชั้นกำไร ยังหักไม่ครบ"
    },
    {
      "id": "p019",
      "topic": "บทที่ 3 · A Review of Financial Statements (ไฟล์ CH2)",
      "type": "mcq",
      "source": "mock",
      "q": "จากยอดขาย 1,000 และต้นทุนขาย 600 ค่า COGS ใน common-sized income statement เท่าไร",
      "choices": [
        "166.67%",
        "600%",
        "60%",
        "40%"
      ],
      "answer": 2,
      "explain": "COGS/Sales×100=600/1,000×100=60%; 40% เป็น gross margin; 166.67% คือกลับเศษส่วน; 600% เกิดใช้ฐานผิด"
    },
    {
      "id": "p020",
      "topic": "บทที่ 3 · A Review of Financial Statements (ไฟล์ CH2)",
      "type": "mcq",
      "source": "mock",
      "q": "สินทรัพย์ 900 หนี้สิน 550 ส่วนเจ้าของเท่าไร",
      "choices": [
        "1,450",
        "550",
        "900",
        "350"
      ],
      "answer": 3,
      "explain": "A=L+E ดังนั้น E=900−550=350; 1,450 เป็นบวกผิดทาง; 550 คือหนี้; 900 คือสินทรัพย์ ไม่ใช่ทุน"
    },
    {
      "id": "p021",
      "topic": "บทที่ 3 · A Review of Financial Statements (ไฟล์ CH2)",
      "type": "mcq",
      "source": "mock",
      "q": "ข้อใดอยู่หมวดสินทรัพย์หมุนเวียน",
      "choices": [
        "ค่าเบี้ยประกันที่จ่ายล่วงหน้าและยังไม่หมดประโยชน์ในปี",
        "ค่าใช้จ่ายค้างจ่าย",
        "รายได้รับล่วงหน้า",
        "ส่วนของเงินกู้ยาวที่จะครบกำหนดในปี"
      ],
      "answer": 0,
      "explain": "Prepaid expense ยังเป็นสิทธิรับบริการจึงเป็น asset; accrued expense, unearned revenue และ current portion of long-term debt เป็น liabilities ไม่ใช่สินทรัพย์"
    },
    {
      "id": "p022",
      "topic": "บทที่ 3 · A Review of Financial Statements (ไฟล์ CH2)",
      "type": "mcq",
      "source": "mock",
      "q": "หมวดใดมียอดปกติด้าน Debit ทั้งคู่",
      "choices": [
        "Liabilities และ Revenue",
        "Assets และ Expenses",
        "Liabilities และ Equity",
        "Revenue และ Equity"
      ],
      "answer": 1,
      "explain": "ตาราง normal balance ให้ Assets/Expenses เป็น Debit; Liabilities, Equity, Revenue เป็น Credit ดังนั้นอีกสามคู่ล้วนอยู่ด้าน Credit"
    },
    {
      "id": "p023",
      "topic": "บทที่ 3 · A Review of Financial Statements (ไฟล์ CH2)",
      "type": "mcq",
      "source": "mock",
      "q": "กำไรสะสมต้นงวด 80 กำไรสุทธิ 25 ปันผล 10 กำไรสะสมปลายงวดเท่าไร",
      "choices": [
        "55",
        "25",
        "95",
        "115"
      ],
      "answer": 2,
      "explain": "Ending RE=80+25−10=95; 115 บวกปันผลผิด; 55 หักกำไรแทนเพิ่ม; 25 เป็นเฉพาะกำไรงวด ไม่รวมยอดสะสม"
    },
    {
      "id": "p024",
      "topic": "บทที่ 3 · A Review of Financial Statements (ไฟล์ CH2)",
      "type": "mcq",
      "source": "mock",
      "q": "CA 200, CL 150 ต่อมาสินค้าขายไม่ออกเพิ่ม 40 โดย CL คงเดิม ข้อใดเหมาะสม",
      "choices": [
        "NWC ลดจาก 50 เป็น 10",
        "NWC เพิ่มจึงได้เงินสดเพิ่มทันที 40",
        "NWC เท่ากับหนี้สินรวมเสมอ",
        "NWC เพิ่มจาก 50 เป็น 90 แต่ยังสรุปว่าสภาพคล่องดีขึ้นไม่ได้"
      ],
      "answer": 3,
      "explain": "เดิม 200−150=50 ใหม่ 240−150=90 แต่สินค้ายังไม่เป็นเงินสด; 10 ลบผิดทิศ; เงินสดไม่ได้เพิ่มเพราะสินค้าค้าง; NWC เป็นผลต่าง CA−CL ไม่ใช่หนี้รวม"
    },
    {
      "id": "p025",
      "topic": "บทที่ 3 · A Review of Financial Statements (ไฟล์ CH2)",
      "type": "mcq",
      "source": "mock",
      "q": "กำไรสุทธิ 3,338 ล้านดอลลาร์ หุ้น 1,623 ล้านหุ้น EPS ใกล้เท่าไร",
      "choices": [
        "$2.06 ต่อหุ้น",
        "$0.49 ต่อหุ้น",
        "$3,338 ต่อหุ้น",
        "$1.62 ต่อหุ้น"
      ],
      "answer": 0,
      "explain": "EPS=3,338/1,623=2.0567≈2.06 หน่วยล้านตัดกัน; 0.49 กลับเศษส่วน; 3,338 ไม่หารหุ้น; 1.62 ไม่ใช่ผลจากสูตรนี้"
    },
    {
      "id": "p026",
      "topic": "บทที่ 3 · A Review of Financial Statements (ไฟล์ CH2)",
      "type": "mcq",
      "source": "mock",
      "q": "ข้อใดถูกเกี่ยวกับ retained earnings และ book value",
      "choices": [
        "หุ้นบุริมสิทธิต้องถือโดยผู้ก่อตั้งเท่านั้น",
        "กำไรสะสมไม่จำเป็นต้องเป็นเงินสด และมูลค่าบัญชีอาจต่างราคาตลาด",
        "กำไรสะสมคือยอดเงินฝากธนาคารเสมอ",
        "ราคาตลาดต้องเท่าราคาทุนบัญชี"
      ],
      "answer": 1,
      "explain": "กำไรสะสมอาจถูกนำไปลงทุนจึงไม่ใช่เงินสดคงเหลือ และราคาตลาดสะท้อนปัจจัยนอกบัญชี อีกสามข้อเป็นการเหมารวมผิด รวมถึงตัวอย่างผู้ถือหุ้นในสไลด์ที่ไม่ใช่นิยามประเภทหุ้น"
    },
    {
      "id": "p027",
      "topic": "บทที่ 3 · A Review of Financial Statements (ไฟล์ CH2)",
      "type": "written",
      "source": "mock",
      "q": "จับคู่ — คอลัมน์ซ้าย: 1) Income statement; 2) Balance sheet; 3) Cash flow statement | คอลัมน์ขวา: ก) รับและใช้เงินสด; ข) ผลการดำเนินงานในช่วงเวลา; ค) สินทรัพย์ หนี้และทุน ณ วันหนึ่ง",
      "answer": "<p><b>1–ข</b>: รายได้ลบค่าใช้จ่ายได้กำไรของงวด</p><p><b>2–ค</b>: แสดงฐานะและแหล่งทุน</p><p><b>3–ก</b>: แบ่งดำเนินงาน ลงทุนและจัดหาเงินทุน</p>",
      "exerciseKind": "matching"
    },
    {
      "id": "p028",
      "topic": "บทที่ 3 · A Review of Financial Statements (ไฟล์ CH2)",
      "type": "written",
      "source": "mock",
      "q": "จับคู่ — คอลัมน์ซ้าย: 1) Accounts receivable; 2) Accounts payable; 3) Unearned revenue | คอลัมน์ขวา: ก) เงินรับก่อนให้บริการครบ; ข) สิทธิรับเงินจากลูกค้าซื้อเชื่อ; ค) หนี้ต่อผู้ขายสินค้าที่ซื้อเชื่อ",
      "answer": "<p><b>1–ข</b>: ลูกหนี้เป็นสินทรัพย์</p><p><b>2–ค</b>: เจ้าหนี้เป็นหนี้สิน</p><p><b>3–ก</b>: ยังมีภาระให้บริการจึงเป็นหนี้สิน</p>",
      "exerciseKind": "matching"
    },
    {
      "id": "p029",
      "topic": "บทที่ 3 · A Review of Financial Statements (ไฟล์ CH2)",
      "type": "written",
      "source": "mock",
      "q": "จับคู่ — คอลัมน์ซ้าย: 1) Gross profit; 2) EBIT; 3) Net income | คอลัมน์ขวา: ก) หลังหักดอกเบี้ยและภาษี; ข) Sales−COGS; ค) Gross profit−Operating expenses",
      "answer": "<p><b>1–ข</b>: กำไรขั้นต้นยังไม่หักค่าใช้จ่ายดำเนินงาน</p><p><b>2–ค</b>: กำไรจากงานก่อนเงินทุนและภาษี</p><p><b>3–ก</b>: กำไรสุทธิหลังหักครบ</p>",
      "exerciseKind": "matching"
    },
    {
      "id": "p030",
      "topic": "บทที่ 3 · A Review of Financial Statements (ไฟล์ CH2)",
      "type": "written",
      "source": "mock",
      "q": "ขาย 2,000 ต้นทุนขาย 1,200 ค่าใช้จ่ายดำเนินงาน 500 ดอกเบี้ย 60 ภาษี 48 จัดงบกำไรขาดทุนและ common size ของกำไรแต่ละชั้น",
      "answer": "<p>Gross profit=2,000−1,200=800 หรือ 40% ของยอดขาย; EBIT=800−500=300 หรือ 15%; EBT=300−60=240 หรือ 12%; NI=240−48=192 หรือ 9.6%</p><p>ทุกเปอร์เซ็นต์หารด้วย Sales 2,000 ไม่ใช่หารกำไรชั้นก่อนหน้า Operating expenses 25%, Interest 3%, Tax 2.4% เมื่อรวมต้นทุนและค่าใช้จ่าย 90.4% กับ NI 9.6% ได้ 100%</p>",
      "exerciseKind": "analysis"
    },
    {
      "id": "p031",
      "topic": "บทที่ 3 · A Review of Financial Statements (ไฟล์ CH2)",
      "type": "written",
      "source": "mock",
      "q": "เงินสดต้นงวด 20 CFO +80 CFI −100 CFF +40 และ RE ต้นงวด 100 NI 30 ปันผล 12 จงหายอดปลายงวดและอธิบายเหตุที่ไม่เท่ากัน",
      "answer": "<p>เงินสดสุทธิ=80−100+40=20 จึงเงินสดปลายงวด=20+20=40 ส่วน RE ปลายงวด=100+30−12=118</p><p>40 กับ 118 วัดคนละสิ่ง กระแสเงินสดรวมกิจกรรมลงทุนและจัดหาเงินทุน ขณะที่ RE สะสมกำไรหลังปันผล เงินกำไรอาจนำไปซื้อสินทรัพย์หรือใช้ชำระภาระ จึงไม่จำเป็นต้องคงเป็นเงินสด</p>",
      "exerciseKind": "analysis"
    },
    {
      "id": "p032",
      "topic": "บทที่ 3 · A Review of Financial Statements (ไฟล์ CH2)",
      "type": "written",
      "source": "mock",
      "q": "จำแนกเครื่องจักร 300 ลูกหนี้ 80 เงินสด 20 เจ้าหนี้ 60 หนี้ระยะยาว 100 โดยหนี้ยาว 20 จะครบปีนี้ หา Equity และ NWC",
      "answer": "<p>Assets=300+80+20=400; Liabilities=60+100=160; Equity=400−160=240 หนี้ระยะยาวรวม 100 แยก 20 เป็น current portion และ 80 เป็น non-current โดยไม่เพิ่มหนี้ซ้ำ</p><p>CA=80+20=100; CL=60+20=80; NWC=100−80=20 เครื่องจักรเป็นสินทรัพย์ถาวรไม่รวม CA และ NWC เป็นบวกยังต้องดูว่าลูกหนี้เก็บได้เมื่อใด</p>",
      "exerciseKind": "analysis"
    },
    {
      "id": "p033",
      "topic": "บทที่ 4 · Financial Statement Analysis",
      "type": "mcq",
      "source": "mock",
      "q": "CA 300, เงินสด 40, AR 60, Inventory 150, other CA 50 และ CL 200 Quick ratio ตามสูตรสไลด์เท่าไร",
      "choices": [
        "0.50 เท่า",
        "0.75 เท่า",
        "1.50 เท่า",
        "2.00 เท่า"
      ],
      "answer": 0,
      "explain": "Quick=(40+60)/200=0.50; 0.75 คือ (CA−Inventory)/CL ซึ่งยังรวม other CA ที่ไม่อยู่ในสูตรนี้; 1.50 เป็น current ratio; 2.00 คือกลับเศษส่วนของ quick"
    },
    {
      "id": "p034",
      "topic": "บทที่ 4 · Financial Statement Analysis",
      "type": "mcq",
      "source": "mock",
      "q": "ยอดขายรวม 1,000 ขายสด 270 ลูกหนี้ 100 ใช้ปี 365 วัน ACP เท่าไร",
      "choices": [
        "365 วัน",
        "50 วัน",
        "36.5 วัน",
        "7.3 วัน"
      ],
      "answer": 1,
      "explain": "ยอดขายเชื่อ=1,000−270=730; ต่อวัน=730/365=2; ACP=100/2=50 วัน 36.5 ใช้ยอดขายรวม; 7.3 เป็น AR turnover รอบต่อปี; 365 คือฐานวัน ไม่ใช่ผล"
    },
    {
      "id": "p035",
      "topic": "บทที่ 4 · Financial Statement Analysis",
      "type": "mcq",
      "source": "mock",
      "q": "COGS 730 Inventory 100 ใช้ปี 365 วัน Days in inventory เท่าไร",
      "choices": [
        "100 วัน",
        "365 วัน",
        "50 วัน",
        "7.3 วัน"
      ],
      "answer": 2,
      "explain": "Daily COGS=730/365=2; Days=100/2=50; 7.3 เป็น turnover=730/100; 100 เป็นมูลค่าสินค้า ไม่ใช่วัน; 365 เป็นตัวแปลงรายปี"
    },
    {
      "id": "p036",
      "topic": "บทที่ 4 · Financial Statement Analysis",
      "type": "mcq",
      "source": "mock",
      "q": "EBIT 120, NI 72, Assets 800, Equity 400 ORA และ ROE ตามลำดับคืออะไร",
      "choices": [
        "9% และ 18%",
        "15% และ 30%",
        "18% และ 15%",
        "15% และ 18%"
      ],
      "answer": 3,
      "explain": "ORA=120/800=15%; ROE=72/400=18%; 9% เอา NI มาใช้กับ ORA; 30% เอา EBIT มาใช้กับ ROE; คู่สุดท้ายกลับลำดับผิด"
    },
    {
      "id": "p037",
      "topic": "บทที่ 4 · Financial Statement Analysis",
      "type": "mcq",
      "source": "mock",
      "q": "OPM 8% และ TAT 1.5 เท่า ให้ ORA เท่าไร",
      "choices": [
        "12%",
        "9.5%",
        "5.33%",
        "150%"
      ],
      "answer": 0,
      "explain": "ORA=OPM×TAT=0.08×1.5=0.12=12%; 9.5 มาจากการบวกหน่วยไม่ตรง; 5.33 เป็นการหาร; 150% เป็น turnover ที่แปลงผิดบริบท"
    },
    {
      "id": "p038",
      "topic": "บทที่ 4 · Financial Statement Analysis",
      "type": "mcq",
      "source": "mock",
      "q": "ยอดขาย 900 สินทรัพย์ถาวรขั้นต้น 500 ค่าเสื่อมสะสม 200 FAT เท่าไร",
      "choices": [
        "0.33 เท่า",
        "3 เท่า",
        "1.8 เท่า",
        "4.5 เท่า"
      ],
      "answer": 1,
      "explain": "Net FA=500−200=300; FAT=900/300=3; 1.8 ใช้ gross FA; 4.5 ใช้ค่าเสื่อมแทนสินทรัพย์; 0.33 กลับเศษส่วน"
    },
    {
      "id": "p039",
      "topic": "บทที่ 4 · Financial Statement Analysis",
      "type": "mcq",
      "source": "mock",
      "q": "Total debt 450 Assets 1,000 Debt ratio และสัดส่วนทุนคืออะไร",
      "choices": [
        "2.22 เท่า และ 45%",
        "45% และ 45%",
        "45% และ 55%",
        "55% และ 45%"
      ],
      "answer": 2,
      "explain": "Debt/Assets=450/1,000=45%; Equity=550 จึง 55%; คู่แรกกลับลำดับในตัวลวง; 2.22 เป็น Assets/Debt; สัดส่วนหนี้และทุนต้องรวม 100% ไม่ใช่ 90%"
    },
    {
      "id": "p040",
      "topic": "บทที่ 4 · Financial Statement Analysis",
      "type": "mcq",
      "source": "mock",
      "q": "EBIT 300 ดอกเบี้ย 30 ได้ TIE 10 เท่า ข้อสรุปใดถูก",
      "choices": [
        "จ่ายหนี้ทั้งหมดได้แน่นอน",
        "ดอกเบี้ยเท่ากับเงินต้น",
        "เงินสดจากดำเนินงานต้องเท่ากับ 300",
        "กำไรครอบดอกเบี้ย 10 เท่า แต่ต้องตรวจเงินสดและภาระเงินต้นด้วย"
      ],
      "answer": 3,
      "explain": "TIE=300/30=10 วัดกำไรต่อดอกเบี้ย ไม่รับประกัน cash availability ไม่รวม principal และ EBIT ไม่เท่ากระแสเงินสดเสมอ ตัวลวงสามข้อจึงเกินสิ่งที่อัตราส่วนบอก"
    },
    {
      "id": "p041",
      "topic": "บทที่ 4 · Financial Statement Analysis",
      "type": "mcq",
      "source": "mock",
      "q": "ราคาหุ้น 40 EPS 2 และ BVPS 10 ค่า P/E และ P/B คืออะไร",
      "choices": [
        "20 เท่า และ 4 เท่า",
        "4 เท่า และ 20 เท่า",
        "0.05 เท่า และ 0.25 เท่า",
        "80 เท่า และ 400 เท่า"
      ],
      "answer": 0,
      "explain": "P/E=40/2=20; P/B=40/10=4; ตัวลวงสลับชื่อ กลับเศษส่วน และคูณแทนหารตามลำดับ"
    },
    {
      "id": "p042",
      "topic": "บทที่ 4 · Financial Statement Analysis",
      "type": "mcq",
      "source": "mock",
      "q": "ใช้กรอบ EVA ในสไลด์ ORA 12% ต้นทุนทุน 10% Assets 5,000 EVA เท่าไร",
      "choices": [
        "−100",
        "100",
        "600",
        "500"
      ],
      "answer": 1,
      "explain": "EVA=(0.12−0.10)×5,000=100; 600 คือผลตอบแทนก่อนหักต้นทุนทุน; 500 คือต้นทุนทุน; −100 สลับส่วนต่างผิดทาง"
    },
    {
      "id": "p043",
      "topic": "บทที่ 4 · Financial Statement Analysis",
      "type": "mcq",
      "source": "mock",
      "q": "อะไรเป็นข้อจำกัดของการเทียบอัตราส่วนข้ามบริษัท",
      "choices": [
        "อัตราส่วนสูงแปลว่าดีเสมอ",
        "ทุกบริษัทมีคู่เทียบเหมือนกันพอดี",
        "วิธีบัญชีและฤดูกาลอาจต่างกันจนเทียบตรง ๆ ไม่ได้",
        "ค่าเฉลี่ยอุตสาหกรรมเป็นเป้าหมายดีที่สุดเสมอ"
      ],
      "answer": 2,
      "explain": "สไลด์ระบุบัญชีและฤดูกาล รวมถึงหา peers ยาก ค่าเฉลี่ยเป็นประมาณและอาจไม่ใช่เป้าที่ดี สูง/ต่ำไม่ตัดสินอัตโนมัติ อีกสามตัวเลือกเป็นข้อสมมติที่ข้อจำกัดเตือนให้หลีกเลี่ยง"
    },
    {
      "id": "p044",
      "topic": "บทที่ 4 · Financial Statement Analysis",
      "type": "mcq",
      "source": "mock",
      "q": "ACP คำนวณจาก 365 วันได้ 19.41 วัน แต่เกณฑ์เครดิตระบุ 20 business days ควรทำอย่างไร",
      "choices": [
        "ถือว่าสองฐานวันเหมือนกันเสมอ",
        "สรุปว่าทีมเก็บหนี้ผิดแน่นอน",
        "หาร ACP ด้วยราคาหุ้น",
        "ปรับฐานวันให้สอดคล้องก่อนสรุปว่าผ่านเกณฑ์"
      ],
      "answer": 3,
      "explain": "สูตรให้วันตามฐาน 365 ส่วน business days เป็นวันทำการ จึงต้องปรับฐานก่อนเทียบ การถือว่าเท่ากันหรือสรุปผลงานบุคคลทันทีไม่มีหลักฐาน ราคาหุ้นไม่ใช่ตัวแปลงวัน"
    },
    {
      "id": "p045",
      "topic": "บทที่ 4 · Financial Statement Analysis",
      "type": "written",
      "source": "mock",
      "q": "จับคู่ — คอลัมน์ซ้าย: 1) Liquidity; 2) Operating profitability; 3) Financing decisions | คอลัมน์ขวา: ก) Debt ratio และ TIE; ข) Current และ Quick; ค) ORA และ OPM",
      "answer": "<p><b>1–ข</b>: เน้นความสามารถชำระระยะสั้น</p><p><b>2–ค</b>: เน้นกำไรจากงานต่อฐานสินทรัพย์/ยอดขาย</p><p><b>3–ก</b>: เน้นใช้หนี้และครอบดอกเบี้ย</p>",
      "exerciseKind": "matching"
    },
    {
      "id": "p046",
      "topic": "บทที่ 4 · Financial Statement Analysis",
      "type": "written",
      "source": "mock",
      "q": "จับคู่ — คอลัมน์ซ้าย: 1) AR turnover; 2) Inventory turnover; 3) FAT | คอลัมน์ขวา: ก) Sales/Net FA; ข) Credit sales/AR; ค) COGS/Inventory",
      "answer": "<p><b>1–ข</b>: ลูกหนี้ต้องเทียบยอดขายเชื่อ</p><p><b>2–ค</b>: ใช้ฐานต้นทุนให้ตรงสินค้าคงเหลือ</p><p><b>3–ก</b>: ยอดขายต่อสินทรัพย์ถาวรสุทธิ</p>",
      "exerciseKind": "matching"
    },
    {
      "id": "p047",
      "topic": "บทที่ 4 · Financial Statement Analysis",
      "type": "written",
      "source": "mock",
      "q": "จับคู่ — คอลัมน์ซ้าย: 1) P/E; 2) P/B; 3) EVA | คอลัมน์ขวา: ก) ส่วนต่างผลตอบแทนกับต้นทุนทุนคูณสินทรัพย์ตามสไลด์; ข) Price/EPS; ค) Price/BVPS",
      "answer": "<p><b>1–ข</b>: ราคาต่อกำไรหนึ่งหน่วย</p><p><b>2–ค</b>: ราคาต่อมูลค่าบัญชีหนึ่งหน่วย</p><p><b>3–ก</b>: กำไรเชิงเศรษฐกิจคิดต้นทุนทุน</p>",
      "exerciseKind": "matching"
    },
    {
      "id": "p048",
      "topic": "บทที่ 4 · Financial Statement Analysis",
      "type": "written",
      "source": "mock",
      "q": "ใช้ Home Depot: Cash 545, AR 1,085, CA 13,479, CL 10,122 คำนวณ Current/Quick/NWC แล้ววิเคราะห์ร่วมกัน",
      "answer": "<p>Current=13,479/10,122=1.33 เท่า; Quick=(545+1,085)/10,122=0.16 เท่า; NWC=13,479−10,122=3,357 ล้านดอลลาร์</p><p>Current&gt;1 และ NWC&gt;0 แสดงส่วนเกินหมุนเวียน แต่ Quick ต่ำชี้ว่าเงินสดและลูกหนี้มีขนาดเล็กเมื่อเทียบหนี้ปีนี้ ต้องพึ่งการขายสินค้าหรือกระแสเงินสดตามรอบธุรกิจ จึงต้องดูคุณภาพสินค้า วันชำระหนี้และกระแสเงินสด ไม่สรุปว่าจ่ายไม่ได้แน่นอนหรือปลอดภัยแน่นอน</p>",
      "exerciseKind": "analysis"
    },
    {
      "id": "p049",
      "topic": "บทที่ 4 · Financial Statement Analysis",
      "type": "written",
      "source": "mock",
      "q": "Sales 2,000 EBIT 200 Assets 1,000 และ NI 120 Equity 400 คำนวณ OPM TAT ORA ROE และอธิบายต่างกันอย่างไร",
      "answer": "<p>OPM=200/2,000=10%; TAT=2,000/1,000=2 เท่า; ORA=200/1,000=20% และตรวจ 10%×2=20%; ROE=120/400=30%</p><p>OPM วัดกำไรดำเนินงานต่อยอดขาย TAT วัดยอดขายต่อสินทรัพย์ จึงร่วมกันอธิบาย ORA ส่วน ROE ใช้กำไรหลังดอกเบี้ย/ภาษีและฐานทุนเจ้าของที่เล็กกว่าสินทรัพย์ การที่ ROE สูงกว่า ORA จึงไม่แปลว่ามีความผิดพลาด แต่ต้องตรวจภาระหนี้และความเสี่ยงร่วมด้วย</p>",
      "exerciseKind": "analysis"
    },
    {
      "id": "p050",
      "topic": "บทที่ 4 · Financial Statement Analysis",
      "type": "written",
      "source": "mock",
      "q": "อธิบายเหตุใด Home Depot มี ORA สูงกว่า Lowe’s แต่ไม่ได้ดีกว่าทุกอัตราส่วน โดยใช้ตัวเลขในบท",
      "answer": "<p>ORA 14.5% เทียบ 10.6% เชื่อม OPM 8.5% เทียบ 7.3% และ TAT 1.69 เทียบ 1.45 แสดงการทำกำไรและใช้สินทรัพย์รวมดีกว่าในข้อมูลชุดนี้</p><p>แต่ ACP 19.41 วันเทียบ 16 วันแสดงเก็บลูกหนี้ช้ากว่า Current 1.33 ต่ำกว่า 1.40 และ Debt 53% สูงกว่า 46% จึงต้องพิจารณาแต่ละมิติ ไม่ให้คะแนนดี/เลวจาก ORA ตัวเดียว อัตราส่วนเป็นข้อมูลในอดีตของสไลด์ ไม่ใช่คำแนะนำซื้อหุ้น</p>",
      "exerciseKind": "analysis"
    },
    {
      "id": "p051",
      "topic": "บทที่ 4 · Financial Statement Analysis",
      "type": "written",
      "source": "mock",
      "q": "คำนวณ EVA ของ Home Depot โดย ORA ปัด 14.5% Assets 40.125 พันล้านดอลลาร์ Cost of capital 10% แล้วเทียบวิธีใช้ EBIT 5.803 พันล้านโดยไม่ปัด ORA",
      "answer": "<p>ใช้ตัวปัด: (0.145−0.10)×40.125=1.805625 พันล้านดอลลาร์ ≈1.806; ใช้ข้อมูลเต็ม: (5.803/40.125−0.10)×40.125=5.803−4.0125=1.7905 พันล้านดอลลาร์</p><p>ส่วนต่าง 0.015125 พันล้านเกิดจากการปัด ORA เป็น 14.5% ก่อน ไม่ใช่ใช้ต้นทุนทุนคนละตัว ทั้งสองใช้สูตรย่อในสไลด์ หากโจทย์กำหนด 14.5% ให้ระบุว่าคิดจากค่าที่ปัดนั้น ไม่อ้างว่าเป็นกำไรสุทธิทางบัญชี</p>",
      "exerciseKind": "analysis"
    },
    {
      "id": "p052",
      "topic": "บทที่ 4 · Financial Statement Analysis",
      "type": "written",
      "source": "mock",
      "q": "เขียนขั้นตอนวิเคราะห์ ratio อย่างมีเหตุผลและข้อจำกัดครบ 6 ข้อ",
      "answer": "<p>เริ่มระบุสูตรและหน่วย ใช้ข้อมูลช่วงเดียวกัน คำนวณไม่ปัดกลางทาง เทียบอดีตและ peers ที่เหมาะสม แล้วเชื่อมหลายอัตราส่วนกับกระแสเงินสด ตรวจว่าค่าเปลี่ยนจากการดำเนินงานจริงหรือฐานบัญชี</p><p>ข้อจำกัด: 1 หาอุตสาหกรรม/peers ยาก 2 ค่าเฉลี่ยเผยแพร่เป็นประมาณ 3 ค่าเฉลี่ยไม่จำเป็นต้องเป็นเป้าที่ดี 4 บัญชีต่างกัน 5 สูง/ต่ำไม่ให้ข้อสรุปอัตโนมัติ 6 ฤดูกาลบิดเบือนยอดงบ ณ วันหนึ่ง ข้อสรุปจึงต้องระบุฐานและความไม่แน่นอน</p>",
      "exerciseKind": "analysis"
    },
    {
      "id": "p053",
      "topic": "บทที่ 5 · Discounted Cash Flow Analytics",
      "type": "mcq",
      "source": "mock",
      "q": "เงิน 1,000 ที่ simple interest 6% ต่อปี 3 ปี มีดอกเบี้ยรวมเท่าไร",
      "choices": [
        "180",
        "191.02",
        "1,180",
        "60"
      ],
      "answer": 0,
      "explain": "I=1,000×0.06×3=180; 191.02 เป็น compound interest; 1,180 เป็นเงินต้นรวมดอกเบี้ย simple; 60 คือดอกเบี้ยปีเดียว"
    },
    {
      "id": "p054",
      "topic": "บทที่ 5 · Discounted Cash Flow Analytics",
      "type": "mcq",
      "source": "mock",
      "q": "เงิน 1,000 ทบต้นรายปี 6% 3 ปี FV เท่าไร",
      "choices": [
        "1,060.00",
        "1,191.02",
        "1,180.00",
        "191.02"
      ],
      "answer": 1,
      "explain": "FV=1,000×1.06³=1,191.016≈1,191.02; 1,180 ใช้ simple; 191.02 เป็นเฉพาะดอกเบี้ย; 1,060 เป็นปลายปีแรก"
    },
    {
      "id": "p055",
      "topic": "บทที่ 5 · Discounted Cash Flow Analytics",
      "type": "mcq",
      "source": "mock",
      "q": "PV ของ 500 ที่จะรับอีก 10 ปี อัตรา 6% เท่าไรโดยประมาณ",
      "choices": [
        "500.00",
        "470.00",
        "279.20",
        "895.42"
      ],
      "answer": 2,
      "explain": "PV=500/1.06¹⁰=279.1974≈279.20; 895.42 เป็นทบไปอนาคต; 500 ไม่คิดลด; 470 คือหัก 6% แบบตรงจากงวดเดียว ไม่ตรงสูตรและเวลา"
    },
    {
      "id": "p056",
      "topic": "บทที่ 5 · Discounted Cash Flow Analytics",
      "type": "mcq",
      "source": "mock",
      "q": "ฝาก 500 ปลายปี 5 ครั้ง 6% ค่า FV ใกล้เท่าไร",
      "choices": [
        "2,987.66",
        "2,500.00",
        "2,106.18",
        "2,818.55"
      ],
      "answer": 3,
      "explain": "FVA=500×[(1.06⁵−1)/.06]=2,818.55; 2,987.66 เป็น due; 2,500 รวมเงินต้นไม่คิดดอกเบี้ย; 2,106.18 เป็น PV ordinary"
    },
    {
      "id": "p057",
      "topic": "บทที่ 5 · Discounted Cash Flow Analytics",
      "type": "mcq",
      "source": "mock",
      "q": "เงิน 500 ต้นปี 5 ครั้ง ที่ 6% วัด FV ปลายปี 5 เท่าไร",
      "choices": [
        "2,987.66",
        "2,818.55",
        "2,232.55",
        "2,106.18"
      ],
      "answer": 0,
      "explain": "FVAD=500×[(1.06⁵−1)/.06]×1.06=2,987.66; 2,818.55 เป็นปลายงวด; 2,232.55 เป็น PV due; 2,106.18 เป็น PV ordinary"
    },
    {
      "id": "p058",
      "topic": "บทที่ 5 · Discounted Cash Flow Analytics",
      "type": "mcq",
      "source": "mock",
      "q": "สูตร PV ordinary annuity สำหรับ n งวดคือข้อใด",
      "choices": [
        "PMT/r สำหรับทุก n",
        "PMT[1−(1+r)^(−n)]/r",
        "PMT[1−(1+r)^(−1)]/r สำหรับทุก n",
        "PMT[(1+r)^n−1]/r"
      ],
      "answer": 1,
      "explain": "สูตรแรกคิดลดครบ n งวด; เลข −1 ใช้ได้แค่เงินหนึ่งงวด; สูตรกำลังบวกเป็น FVA; PMT/r เป็น perpetuity ไม่ใช่เงินงวดจำกัด"
    },
    {
      "id": "p059",
      "topic": "บทที่ 5 · Discounted Cash Flow Analytics",
      "type": "mcq",
      "source": "mock",
      "q": "กู้ 6,000 อัตรา 12% ผ่อนปลายปี 4 ปี งวดละเท่าไร",
      "choices": [
        "720.00",
        "2,687.62",
        "1,975.41",
        "1,500.00"
      ],
      "answer": 2,
      "explain": "PMT=6,000×.12/[1−1.12^(−4)]=1,975.4066≈1,975.41; 1,500 หารเงินต้นไม่คิดดอกเบี้ย; 720 คือดอกเบี้ยปีแรก; 2,687.62 ไม่ได้จากการแก้สมการ PV เงินงวดของโจทย์นี้"
    },
    {
      "id": "p060",
      "topic": "บทที่ 5 · Discounted Cash Flow Analytics",
      "type": "mcq",
      "source": "mock",
      "q": "15% ต่อปี ทบรายเดือน EAR ใกล้เท่าไร",
      "choices": [
        "15.00%",
        "1.25%",
        "180.00%",
        "16.08%"
      ],
      "answer": 3,
      "explain": "EAR=(1+.15/12)^12−1=.1607545=16.08%; 15% เป็น quoted; 1.25% เป็นอัตราต่อเดือน; 180% นำอัตรารายปีคูณ 12 ซ้ำผิด"
    },
    {
      "id": "p061",
      "topic": "บทที่ 5 · Discounted Cash Flow Analytics",
      "type": "mcq",
      "source": "mock",
      "q": "10% ต่อปี ทบไตรมาส 10 ปี ต้องใช้ r และ N ใด",
      "choices": [
        "2.5% และ 40 งวด",
        "10% และ 40 งวด",
        "2.5% และ 10 งวด",
        "40% และ 10 งวด"
      ],
      "answer": 0,
      "explain": "r=.10/4=.025; N=10×4=40; คู่ 10%/40 ไม่แปลงอัตรา; 2.5%/10 ไม่แปลงเวลา; 40% คูณแทนหาร จึงไม่สอดคล้องหน่วย"
    },
    {
      "id": "p062",
      "topic": "บทที่ 5 · Discounted Cash Flow Analytics",
      "type": "mcq",
      "source": "mock",
      "q": "รับ 2,000 ปลายปีทุกปีตลอดไป คิดลด 12% PV เท่าไร",
      "choices": [
        "24,000.00",
        "16,666.67",
        "240.00",
        "2,240.00"
      ],
      "answer": 1,
      "explain": "PV=2,000/.12=16,666.67; 240 คือคูณอัตรา; 2,240 เป็นเงินหนึ่งงวดทบปีเดียว; 24,000 เอา 12 ที่เป็นตัวเลขเปอร์เซ็นต์ไปคูณ ไม่ใช่สูตร perpetuity"
    },
    {
      "id": "p063",
      "topic": "บทที่ 5 · Discounted Cash Flow Analytics",
      "type": "mcq",
      "source": "mock",
      "q": "ข้อความใดสอดคล้องกับ EAR 21.94% โดยประมาณ",
      "choices": [
        "อัตรา 20% ต่อปี ทบปีละครั้ง",
        "อัตรา 20% ต่อปี แบบไม่ทบและคิดหนึ่งปี",
        "อัตรา 20% ต่อปี ทบต้นทุกเดือน",
        "อัตรา 20% ต่อเดือน ทบครบ 12 เดือน"
      ],
      "answer": 2,
      "explain": "(1+.20/12)^12−1≈21.94%; ถ้า 20% ต่อเดือนจริง (1.2)^12−1≈791.61%; อีกสองกรณีได้ 20% ไม่มีผลทบระหว่างปี จึงต้องแก้หน่วยในสไลด์ให้ตรง"
    },
    {
      "id": "p064",
      "topic": "บทที่ 5 · Discounted Cash Flow Analytics",
      "type": "mcq",
      "source": "mock",
      "q": "ฝาก 5,000 ปลายปี 50 ปี ที่ 7% เงินต้นที่ฝากรวมคือเท่าไร",
      "choices": [
        "200,000",
        "998,175.56",
        "2,032,644.65",
        "250,000"
      ],
      "answer": 3,
      "explain": "เงินต้นรวม=5,000×50=250,000; 200,000 ใช้ 40 ปี; 998,175.56 เป็น FV 40 ปี; 2,032,644.65 เป็น FV 50 ปีรวมดอกเบี้ย ไม่ใช่เงินต้นฝากรวม"
    },
    {
      "id": "p065",
      "topic": "บทที่ 5 · Discounted Cash Flow Analytics",
      "type": "written",
      "source": "mock",
      "q": "จับคู่ — คอลัมน์ซ้าย: 1) เงินก้อนวันนี้ไปอนาคต; 2) เงินก้อนอนาคตกลับวันนี้; 3) เงินเท่ากันตลอดไป | คอลัมน์ขวา: ก) PV=PP/r; ข) FV=PV(1+r)^n; ค) PV=FV/(1+r)^n",
      "answer": "<p><b>1–ข</b>: ทบต้นไปวันอนาคต</p><p><b>2–ค</b>: คิดลดกลับวันอ้างอิง</p><p><b>3–ก</b>: perpetuity คงที่ปลายงวด</p>",
      "exerciseKind": "matching"
    },
    {
      "id": "p066",
      "topic": "บทที่ 5 · Discounted Cash Flow Analytics",
      "type": "written",
      "source": "mock",
      "q": "จับคู่ — คอลัมน์ซ้าย: 1) Ordinary annuity; 2) Annuity due; 3) Amortized loan | คอลัมน์ขวา: ก) ผ่อนเท่ากันเพื่อลดยอดเงินกู้; ข) งวดแรกที่ t=1; ค) งวดแรกที่ t=0",
      "answer": "<p><b>1–ข</b>: จ่ายปลายงวด</p><p><b>2–ค</b>: จ่ายต้นงวดจึงมีมูลค่าสูงกว่าเมื่อ r บวก</p><p><b>3–ก</b>: PMT ประกอบด้วยดอกเบี้ยและคืนต้น</p>",
      "exerciseKind": "matching"
    },
    {
      "id": "p067",
      "topic": "บทที่ 5 · Discounted Cash Flow Analytics",
      "type": "written",
      "source": "mock",
      "q": "จับคู่ — คอลัมน์ซ้าย: 1) Quoted annual rate; 2) Periodic rate; 3) EAR | คอลัมน์ขวา: ก) อัตราต่องวดหลังหารจำนวนครั้งทบต่อปี; ข) อัตรารายปีที่ประกาศ; ค) ผลตอบแทนต่อปีรวมผลทบต้น",
      "answer": "<p><b>1–ข</b>: ต้องอ่านพร้อมความถี่ทบ</p><p><b>2–ก</b>: เช่น 12%/12=1% ต่อเดือน</p><p><b>3–ค</b>: ใช้เทียบความถี่ทบที่ต่างกัน</p>",
      "exerciseKind": "matching"
    },
    {
      "id": "p068",
      "topic": "บทที่ 5 · Discounted Cash Flow Analytics",
      "type": "written",
      "source": "mock",
      "q": "ฝาก 500 ปลายปี 5 ครั้งที่ 6% จงคำนวณ FV สองวิธี และอธิบายว่าทำไมงวดสุดท้ายไม่ทบดอกเบี้ย",
      "answer": "<p>วิธีรวมรายงวด: 500×1.06⁴ + 500×1.06³ + 500×1.06² + 500×1.06 + 500 = 2,818.54648 จึงปัดเป็น 2,818.55</p><p>วิธีสูตร: 500×[(1.06⁵−1)/0.06]=2,818.54648 เช่นกัน เงินงวดแรกอยู่ t=1 จึงทบ 4 ปีถึง t=5 ส่วนงวดสุดท้ายจ่าย t=5 ตรงวันวัดจึงทบ 0 ปี การทบทุกงวดเพิ่มหนึ่งปีจะกลายเป็น annuity due</p>",
      "exerciseKind": "analysis"
    },
    {
      "id": "p069",
      "topic": "บทที่ 5 · Discounted Cash Flow Analytics",
      "type": "written",
      "source": "mock",
      "q": "รับ 500 ปลายปี 1–5 ที่ 6% หา PV แล้วเปลี่ยนเป็นต้นปี 5 ครั้งและอธิบายความต่าง",
      "answer": "<p>PVA=500×[1−1.06^(−5)]/.06=2,106.181893≈2,106.18; เปลี่ยนต้นปีเป็น t=0–4 จึง PVAD=PVA×1.06=2,232.552806≈2,232.55</p><p>เพิ่มประมาณ 126.37 เพราะได้เงินเร็วขึ้นหนึ่งงวดทุกก้อน งวดแรกต้นปีไม่คิดลด ต่างจากปลายปีที่คิดลดหนึ่งปี ต้องใช้เลขชี้กำลัง −5 ใน ordinary factor ไม่ใช่ −1</p>",
      "exerciseKind": "analysis"
    },
    {
      "id": "p070",
      "topic": "บทที่ 5 · Discounted Cash Flow Analytics",
      "type": "written",
      "source": "mock",
      "q": "เงินกู้ 6,000 ที่ 12% ผ่อนปลายปี 4 ปี คำนวณ PMT และแยกเงินต้น/ดอกเบี้ยสองงวดแรก",
      "answer": "<p>PMT=6,000×.12/[1−1.12^(−4)]=1,975.406618 ประมาณ 1,975.41</p><p>งวด 1: ดอกเบี้ย 6,000×.12=720; คืนต้น 1,255.406618; คงหนี้ 4,744.593382 งวด 2: ดอกเบี้ย 4,744.593382×.12=569.351206; คืนต้น 1,406.055412; คงหนี้ 3,338.537970</p><p>ยอดจ่ายเท่ากันแต่สัดส่วนดอกเบี้ยลดลงเมื่อฐานหนี้ลด ควรเก็บทศนิยมเต็มในการคำนวณต่อ และหากชำระจริงปัดเซนต์ทุกงวดให้ปรับงวดสุดท้าย</p>",
      "exerciseKind": "analysis"
    },
    {
      "id": "p071",
      "topic": "บทที่ 5 · Discounted Cash Flow Analytics",
      "type": "written",
      "source": "mock",
      "q": "เงิน 1,000 ลงทุน 10 ปี ที่ quoted 10% ต่อปีทบไตรมาส หา FV และ EAR พร้อมระบุหน่วย",
      "answer": "<p>m=4, r=.10/4=.025 ต่อไตรมาส, N=10×4=40 ไตรมาส FV=1,000×1.025^40=2,685.063838≈2,685.06</p><p>EAR=(1.025)^4−1=.103812890625=10.381289%≈10.38% ต่อปี ไม่ใช้ 10% เป็นอัตรารายไตรมาส และไม่ใช้ N=10 คู่กับ r=2.5% เพราะหน่วยไม่ตรง</p>",
      "exerciseKind": "analysis"
    },
    {
      "id": "p072",
      "topic": "บทที่ 5 · Discounted Cash Flow Analytics",
      "type": "written",
      "source": "mock",
      "q": "สไลด์หนึ่งระบุฝาก 5,000 ต่อปี 50 ปีที่ 7% แต่เขียน contribution 200,000 และข้อถัดไปเป็น 6,000 ต่อปี 40 ปี จงคลี่คลายโดยคำนวณทุกกรณี",
      "answer": "<p>ถ้า 50 ปีจริง: contribution=5,000×50=250,000; FV=5,000×[(1.07^50−1)/.07]=2,032,644.65</p><p>ถ้า 40 ปีตาม contribution ที่พิมพ์: contribution=200,000; FV=5,000×[(1.07^40−1)/.07]=998,175.56 ส่วน 6,000×40 contribution=240,000 และ FV=1,197,810.67</p><p>ต้องระบุสมมติฐานและใช้ n ให้ตรง ไม่เลือกเฉลย 40 ปีไปอธิบายโจทย์ 50 ปีแบบเงียบ ๆ ทั้งหมดสมมติฝากปลายปี</p>",
      "exerciseKind": "analysis"
    }
  ],
  "terms": [
    {
      "topic": "บทที่ 1 · Financial Management and the Firm",
      "items": [
        {
          "term": "Shareholder wealth",
          "def": "ความมั่งคั่งผู้ถือหุ้นที่สัมพันธ์กับมูลค่าหุ้น ไม่ใช่แค่กำไรระยะสั้น",
          "important": true
        },
        {
          "term": "Common stock",
          "def": "หุ้นสามัญที่แสดงส่วนความเป็นเจ้าของ",
          "important": true
        },
        {
          "term": "Accounting profit",
          "def": "รายได้หักค่าใช้จ่ายทางบัญชี อาจยังไม่รับหรือจ่ายเงินสด",
          "important": true
        },
        {
          "term": "Cash flow",
          "def": "กระแสเงินสดรับและจ่ายจริง",
          "important": true
        },
        {
          "term": "Time value of money",
          "def": "มูลค่าเงินแตกต่างตามเวลาที่ได้รับหรือจ่าย",
          "important": true
        },
        {
          "term": "Opportunity cost",
          "def": "ประโยชน์ของทางเลือกที่ดีที่สุดถัดไปที่ต้องสละ",
          "important": true
        },
        {
          "term": "Efficient market",
          "def": "กรอบตลาดที่ราคาสะท้อนข้อมูลที่มีอยู่",
          "important": true
        },
        {
          "term": "Agency problem",
          "def": "ความขัดแย้งเมื่อผู้บริหารเลือกประโยชน์ตนแทนเจ้าของ",
          "important": true
        },
        {
          "term": "Monitoring",
          "def": "ติดตามและตรวจสอบผลการทำงานอย่างมีข้อมูล",
          "important": true
        },
        {
          "term": "Annual report",
          "def": "รายงานประจำปีที่ใช้ติดตามกิจการ",
          "important": true
        },
        {
          "term": "Stock option",
          "def": "สิทธิซื้อหุ้นตามเงื่อนไข ใช้ผูกแรงจูงใจกับมูลค่าหุ้น",
          "important": true
        },
        {
          "term": "Takeover",
          "def": "การเข้าควบคุมกิจการ เป็นกลไกวินัยจากตลาด",
          "important": true
        },
        {
          "term": "Ethics and trust",
          "def": "จริยธรรมและความไว้วางใจที่รองรับการตัดสินใจและข้อมูลการเงิน",
          "important": true
        },
        {
          "term": "Sustainable growth",
          "def": "การเติบโตที่รักษาความสามารถดำเนินงานระยะยาว",
          "important": true
        },
        {
          "term": "Board of Directors",
          "def": "คณะกรรมการที่ผู้ถือหุ้นเลือกเพื่อกำกับบริษัท",
          "important": true
        },
        {
          "term": "CEO",
          "def": "ผู้บริหารสูงสุดที่อยู่ภายใต้การกำกับของกรรมการ",
          "important": true
        },
        {
          "term": "CFO",
          "def": "ผู้บริหารการเงิน รับผิดชอบแผนการเงิน กลยุทธ์และกระแสเงินสด",
          "important": true
        },
        {
          "term": "Treasurer",
          "def": "ฝ่ายดูแลเงินสด เครดิต ลงทุน เงินทุนและเงินตราต่างประเทศ",
          "important": true
        },
        {
          "term": "Controller",
          "def": "ฝ่ายภาษี งบการเงิน บัญชีต้นทุนและประมวลผลข้อมูล",
          "important": true
        },
        {
          "term": "Capital expenditures",
          "def": "รายจ่ายลงทุนในสินทรัพย์เพื่อใช้ดำเนินงาน",
          "important": true
        },
        {
          "term": "Sole proprietorship",
          "def": "กิจการเจ้าของคนเดียว รับผิดไม่จำกัด",
          "important": true
        },
        {
          "term": "General partnership",
          "def": "ห้างหุ้นส่วนที่หุ้นส่วนทั่วไปทุกคนรับผิดเต็มต่อหนี้",
          "important": true
        },
        {
          "term": "Limited partnership",
          "def": "มีหุ้นส่วนจำกัดความรับผิดและหุ้นส่วนทั่วไปอย่างน้อยหนึ่งคน",
          "important": true
        },
        {
          "term": "Unlimited liability",
          "def": "ความรับผิดไม่จำกัดเฉพาะเงินลงทุน",
          "important": true
        },
        {
          "term": "Limited liability",
          "def": "ความรับผิดจำกัดตามเงินลงทุนในกรอบที่สไลด์อธิบาย",
          "important": true
        },
        {
          "term": "Corporation",
          "def": "นิติบุคคลแยกจากเจ้าของ อายุไม่ผูกกับผู้ถือหุ้นรายใด",
          "important": true
        },
        {
          "term": "Hybrid (S-Type / LLC)",
          "def": "ชื่อรูปแบบผสมที่ปรากฏในแผนภาพ สไลด์ไม่ได้แจกแจงเงื่อนไข",
          "important": true
        },
        {
          "term": "Multinational corporation",
          "def": "บริษัทที่ดำเนินกิจการข้ามประเทศ",
          "important": true
        },
        {
          "term": "Country risk",
          "def": "ความเสี่ยงจากรัฐ กฎระเบียบและเศรษฐกิจของประเทศ",
          "important": true
        },
        {
          "term": "Currency risk",
          "def": "ความเสี่ยงจากการเปลี่ยนอัตราแลกเปลี่ยน",
          "important": true
        },
        {
          "term": "Cultural risk",
          "def": "ความเสี่ยงจากภาษา ประเพณี และมาตรฐานจริยธรรมที่ต่างกัน",
          "important": true
        }
      ]
    },
    {
      "topic": "บทที่ 3 · A Review of Financial Statements (ไฟล์ CH2)",
      "items": [
        {
          "term": "Income statement / Profit and loss statement",
          "def": "งบวัดรายได้ ค่าใช้จ่ายและกำไรตลอดช่วงเวลา",
          "important": true
        },
        {
          "term": "Balance sheet / Statement of financial position",
          "def": "งบแสดงสินทรัพย์ หนี้สินและทุน ณ วันหนึ่ง",
          "important": true
        },
        {
          "term": "Statement of retained earnings",
          "def": "งบเชื่อมกำไรสะสมต้นงวด กำไร ปันผล และยอดปลายงวด",
          "important": true
        },
        {
          "term": "Statement of cash flows",
          "def": "งบแหล่งรับและใช้เงินสดจากดำเนินงาน ลงทุนและจัดหาเงินทุน",
          "important": true
        },
        {
          "term": "Notes to financial statements",
          "def": "หมายเหตุช่วยอธิบายรายการและนโยบายบัญชี",
          "important": true
        },
        {
          "term": "COGS (Cost of goods sold)",
          "def": "ต้นทุนสินค้า/บริการที่ขายแล้ว",
          "important": true
        },
        {
          "term": "Gross profit",
          "def": "ยอดขายหักต้นทุนขาย ก่อนค่าใช้จ่ายดำเนินงาน",
          "important": true
        },
        {
          "term": "Operating expenses",
          "def": "ค่าใช้จ่ายการตลาด กระจายสินค้า บริหารและค่าเสื่อม",
          "important": true
        },
        {
          "term": "EBIT / Operating income",
          "def": "กำไรจากดำเนินงานก่อนดอกเบี้ยและภาษี",
          "important": true
        },
        {
          "term": "Financing costs / Interest expense",
          "def": "ดอกเบี้ยจ่ายจากการใช้เงินเจ้าหนี้",
          "important": true
        },
        {
          "term": "EBT",
          "def": "กำไรก่อนภาษีหลังหักดอกเบี้ย",
          "important": true
        },
        {
          "term": "Tax expenses",
          "def": "ภาษีที่เป็นค่าใช้จ่ายของกิจการ",
          "important": true
        },
        {
          "term": "Net income",
          "def": "กำไรสุทธิหลังค่าใช้จ่าย ดอกเบี้ยและภาษี",
          "important": true
        },
        {
          "term": "Common-sized income statement",
          "def": "งบที่แสดงทุกรายการเป็นร้อยละของยอดขาย",
          "important": true
        },
        {
          "term": "EPS",
          "def": "กำไรสุทธิต่อหุ้นสามัญในตัวอย่างที่ไม่มีหุ้นบุริมสิทธิ",
          "important": true
        },
        {
          "term": "DPS",
          "def": "เงินปันผลต่อหุ้น",
          "important": true
        },
        {
          "term": "Book value",
          "def": "มูลค่าตามบัญชี ไม่จำเป็นต้องเท่าราคาตลาด",
          "important": true
        },
        {
          "term": "Market value",
          "def": "มูลค่าที่ตลาดกำหนด",
          "important": true
        },
        {
          "term": "Assets",
          "def": "ทรัพยากรที่กิจการถือครอง",
          "important": true
        },
        {
          "term": "Liabilities",
          "def": "ภาระผูกพันที่ต้องชำระ",
          "important": true
        },
        {
          "term": "Shareholders’ equity",
          "def": "ส่วนเจ้าของ เท่ากับสินทรัพย์ลบหนี้สิน",
          "important": true
        },
        {
          "term": "Current assets",
          "def": "สินทรัพย์ที่สไลด์คาดว่าเปลี่ยนเป็นเงินสดใน 12 เดือน",
          "important": true
        },
        {
          "term": "Non-current assets",
          "def": "สินทรัพย์ระยะยาว รวมสินทรัพย์ถาวรและสินทรัพย์อื่น",
          "important": true
        },
        {
          "term": "Current liabilities",
          "def": "หนี้สินที่สไลด์จัดว่าครบกำหนดภายใน 12 เดือน",
          "important": true
        },
        {
          "term": "Non-current liabilities",
          "def": "หนี้สินครบกำหนดเกินหนึ่งปี",
          "important": true
        },
        {
          "term": "Debit",
          "def": "ด้านซ้ายของบัญชี เป็นยอดปกติของสินทรัพย์และค่าใช้จ่าย",
          "important": true
        },
        {
          "term": "Credit",
          "def": "ด้านขวาของบัญชี เป็นยอดปกติของหนี้สิน ทุนและรายได้",
          "important": true
        },
        {
          "term": "NWC (Net working capital)",
          "def": "สินทรัพย์หมุนเวียนลบหนี้สินหมุนเวียน",
          "important": true
        },
        {
          "term": "Retained earnings",
          "def": "กำไรสะสมหลังหักปันผล ไม่ใช่เงินสดโดยตรง",
          "important": true
        },
        {
          "term": "Preferred stock",
          "def": "หุ้นบุริมสิทธิ เป็นส่วนหนึ่งของทุนตามแผนภาพ",
          "important": true
        },
        {
          "term": "Par value",
          "def": "มูลค่าที่ตราไว้ของหุ้น",
          "important": true
        },
        {
          "term": "Prepaid expenses",
          "def": "ค่าใช้จ่ายจ่ายล่วงหน้าที่ยังเป็นสินทรัพย์",
          "important": true
        },
        {
          "term": "Raw materials / Work in process / Finished goods",
          "def": "วัตถุดิบ งานระหว่างทำ สินค้าสำเร็จรูป ซึ่งเป็นประเภทสินค้าคงเหลือ",
          "important": true
        },
        {
          "term": "Patents / Copyrights / Goodwill",
          "def": "สิทธิบัตร ลิขสิทธิ์และค่าความนิยม ตัวอย่างสินทรัพย์ไม่มีตัวตน",
          "important": true
        },
        {
          "term": "Mortgage",
          "def": "เงินกู้มีอสังหาริมทรัพย์เป็นหลักประกันที่ปรากฏในแผนภาพหนี้ระยะยาว",
          "important": true
        },
        {
          "term": "CFO / CFI / CFF (cash flows)",
          "def": "เงินสดจากดำเนินงาน ลงทุนและจัดหาเงินทุน; CFO ในบริบทนี้ไม่ใช่ตำแหน่งผู้บริหาร",
          "important": true
        },
        {
          "term": "Cash & Cash equivalents",
          "def": "เงินสดและรายการเทียบเท่าเงินสด — Current assets",
          "important": true
        },
        {
          "term": "Trade accounts receivable",
          "def": "ลูกหนี้จากการขายเชื่อ — Current assets",
          "important": true
        },
        {
          "term": "Short-term investments",
          "def": "เงินลงทุนระยะสั้น — Current assets",
          "important": true
        },
        {
          "term": "Short-term loans",
          "def": "เงินให้กู้ระยะสั้น ไม่ใช่เงินกู้ที่บริษัทเป็นหนี้ — Current assets",
          "important": true
        },
        {
          "term": "Inventories",
          "def": "วัตถุดิบ งานระหว่างทำ และสินค้าสำเร็จรูป — Current assets",
          "important": true
        },
        {
          "term": "Other current assets",
          "def": "สินทรัพย์หมุนเวียนอื่น เช่น ค่าใช้จ่ายจ่ายล่วงหน้า — Current assets",
          "important": true
        },
        {
          "term": "Long-term investments",
          "def": "เงินลงทุนระยะยาว — Non-current assets",
          "important": true
        },
        {
          "term": "Long-term loans",
          "def": "เงินให้กู้ระยะยาว — Non-current assets",
          "important": true
        },
        {
          "term": "Property, Plant & Equipment",
          "def": "ที่ดิน อาคาร เครื่องจักรและอุปกรณ์ — Non-current assets",
          "important": true
        },
        {
          "term": "Intangible assets",
          "def": "สินทรัพย์ไม่มีตัวตน เช่น สิทธิบัตร ลิขสิทธิ์ ค่าความนิยม — Non-current assets",
          "important": true
        },
        {
          "term": "Other non-current assets",
          "def": "สินทรัพย์ไม่หมุนเวียนอื่น — Non-current assets",
          "important": true
        },
        {
          "term": "Bank overdrafts",
          "def": "เงินเบิกเกินบัญชี — Current liabilities",
          "important": true
        },
        {
          "term": "Trade accounts payable",
          "def": "เจ้าหนี้การค้าจากการซื้อเชื่อ — Current liabilities",
          "important": true
        },
        {
          "term": "Unearned revenues",
          "def": "เงินรับล่วงหน้าที่ยังไม่เป็นรายได้ — Current liabilities",
          "important": true
        },
        {
          "term": "Accrued expenses",
          "def": "ค่าใช้จ่ายเกิดแล้วแต่ยังไม่จ่าย — Current liabilities",
          "important": true
        },
        {
          "term": "Current portion of long-term debts",
          "def": "ส่วนของหนี้ระยะยาวที่จะถึงกำหนดใน 12 เดือน — Current liabilities",
          "important": true
        },
        {
          "term": "Short-term notes payable",
          "def": "ตั๋วเงิน/เงินกู้ครบกำหนดภายใน 12 เดือน — Current liabilities",
          "important": true
        },
        {
          "term": "Other current liabilities",
          "def": "หนี้สินหมุนเวียนอื่น — Current liabilities",
          "important": true
        },
        {
          "term": "Long-term debts",
          "def": "เงินกู้ที่ครบกำหนดเกินหนึ่งปี — Non-current liabilities",
          "important": true
        },
        {
          "term": "Notes payable",
          "def": "ตั๋วสัญญาใช้เงิน ต้องดูวันครบกำหนดเพื่อจัดระยะสั้นหรือยาว — Liabilities",
          "important": true
        },
        {
          "term": "Other non-current liabilities",
          "def": "หนี้สินไม่หมุนเวียนอื่น รวมตัวอย่าง mortgage ในแผนภาพ — Non-current liabilities",
          "important": true
        },
        {
          "term": "Registered capital",
          "def": "ทุนจดทะเบียน — Equity",
          "important": true
        },
        {
          "term": "Paid-in capital",
          "def": "ทุนที่ชำระแล้ว — Equity",
          "important": true
        },
        {
          "term": "In-excess of par value",
          "def": "ส่วนเกินมูลค่าหุ้น — Equity",
          "important": true
        },
        {
          "term": "Unappropriated retained earnings",
          "def": "กำไรสะสมยังไม่จัดสรร — Equity",
          "important": true
        },
        {
          "term": "Appropriated retained earnings",
          "def": "กำไรสะสมที่จัดสรรเพื่อวัตถุประสงค์ที่ระบุ — Equity",
          "important": true
        },
        {
          "term": "Revenue",
          "def": "รายได้จากการขายสินค้าหรือบริการ — Revenue",
          "important": true
        },
        {
          "term": "Interest revenue",
          "def": "รายได้ดอกเบี้ยรับ — Revenue",
          "important": true
        },
        {
          "term": "Rental expense",
          "def": "ค่าเช่า — Expense",
          "important": true
        },
        {
          "term": "Depreciation expense",
          "def": "ค่าเสื่อมราคา — Expense",
          "important": true
        }
      ]
    },
    {
      "topic": "บทที่ 4 · Financial Statement Analysis",
      "items": [
        {
          "term": "Current ratio",
          "def": "CA / CL — มีสินทรัพย์หมุนเวียน 1.33 ต่อหนี้หมุนเวียน 1 หน่วย แต่สินทรัพย์ทั้งหมดไม่ใช่เงินสด",
          "important": true
        },
        {
          "term": "Acid-test / Quick ratio",
          "def": "(Cash + Accounts receivable) / CL — ตัด inventory และ other current assets ที่ไม่ใช่สินทรัพย์เร็วออก สูตรนี้จึงไม่ใช่ (CA − Inventory)/CL สำหรับข้อมูลชุดนี้",
          "important": true
        },
        {
          "term": "Days in receivables / ACP",
          "def": "AR / (Annual credit sales / 365) — ระยะเก็บเงินเฉลี่ย ใช้ยอดขายเชื่อ ไม่ใช่ยอดขายรวมเมื่อทราบส่วนขายสด",
          "important": true
        },
        {
          "term": "Accounts receivable turnover",
          "def": "Annual credit sales / AR — วัดการหมุนเวียนลูกหนี้ เป็นส่วนหนึ่งของการจัดการสินทรัพย์ด้วย",
          "important": true
        },
        {
          "term": "Days in inventory",
          "def": "Inventory / (COGS / 365) — ระยะถือสินค้าก่อนขาย ใช้ COGS ให้ฐานต้นทุนสอดคล้องกับ inventory",
          "important": true
        },
        {
          "term": "Inventory turnover",
          "def": "COGS / Inventory — สินค้าหมุนกี่รอบต่อปี ไม่ใช้ยอดขายซึ่งรวมส่วนกำไร",
          "important": true
        },
        {
          "term": "Operating return on assets (ORA)",
          "def": "Operating profit / Total assets — สินทรัพย์ 1 ดอลลาร์สร้างกำไรดำเนินงานราว 14.5 เซนต์ ห้ามแทนตัวเศษด้วย net income",
          "important": true
        },
        {
          "term": "Operating profit margin (OPM)",
          "def": "Operating profit / Sales — สะท้อนการควบคุมต้นทุนขายและค่าใช้จ่ายดำเนินงานต่อรายได้",
          "important": true
        },
        {
          "term": "Total asset turnover (TAT)",
          "def": "Sales / Total assets — สินทรัพย์ทุก 1 ดอลลาร์สร้างยอดขาย 1.69 ดอลลาร์",
          "important": true
        },
        {
          "term": "Fixed asset turnover (FAT)",
          "def": "Sales / Net fixed assets — ใช้สินทรัพย์ถาวรหลังหักค่าเสื่อมสะสม ไม่ใช้ราคาทุนขั้นต้น",
          "important": true
        },
        {
          "term": "Debt ratio",
          "def": "Total debt / Total assets — สินทรัพย์ราว 53% มาจากหนี้ สูงกว่า Lowe’s ไม่แปลว่าล้มละลายแน่นอน",
          "important": true
        },
        {
          "term": "Times interest earned (TIE)",
          "def": "Operating profit / Interest expense — กำไรดำเนินงานเกือบ 11 เท่าของดอกเบี้ย แต่จ่ายหนี้ด้วยเงินสดและยังต้องคืนเงินต้น จึงเป็นเพียงตัวชี้คร่าว ๆ",
          "important": true
        },
        {
          "term": "Return on equity (ROE)",
          "def": "Net income / Total common equity — กำไรสุทธิต่อส่วนเจ้าของ; สูงได้ทั้งจากผลดำเนินงานดีและการใช้หนี้ในสภาพธุรกิจเอื้ออำนวย",
          "important": true
        },
        {
          "term": "Price/earnings (P/E)",
          "def": "Market price per share / EPS — ตลาดยอมจ่ายเท่าไรต่อกำไร 1 ดอลลาร์ เป็นความคาดหวัง ไม่ใช่หลักประกันผลตอบแทน",
          "important": true
        },
        {
          "term": "Price/book (P/B)",
          "def": "Market price per share / Book equity per share — ราคาตลาดต่อมูลค่าบัญชีหุ้น มากกว่า 1 คือราคาตลาดสูงกว่ามูลค่าบัญชี ไม่ใช่กำไรแน่นอนของผู้ซื้อทุกคน",
          "important": true
        },
        {
          "term": "Liquidity",
          "def": "ความสามารถจ่ายภาระทันเวลาและเปลี่ยนสินทรัพย์เป็นเงินสด",
          "important": true
        },
        {
          "term": "Liquid asset",
          "def": "สินทรัพย์ที่ขายเป็นเงินสดได้รวดเร็วตามราคาตลาดปัจจุบัน",
          "important": true
        },
        {
          "term": "Annual credit sales",
          "def": "ยอดขายเชื่อทั้งปี ไม่รวมขายสด",
          "important": true
        },
        {
          "term": "Daily credit sales",
          "def": "ยอดขายเชื่อทั้งปีหาร 365 ตามสไลด์",
          "important": true
        },
        {
          "term": "Net fixed assets",
          "def": "สินทรัพย์ถาวรขั้นต้นหักค่าเสื่อมสะสม",
          "important": true
        },
        {
          "term": "Accumulated depreciation",
          "def": "ค่าเสื่อมราคาสะสมที่หักจากราคาทุนสินทรัพย์",
          "important": true
        },
        {
          "term": "Treasury stock",
          "def": "หุ้นซื้อคืนที่หักจากส่วนทุนในตัวอย่าง",
          "important": true
        },
        {
          "term": "Credit terms",
          "def": "เงื่อนไขเครดิต เช่น จำนวนวันชำระเงิน",
          "important": true
        },
        {
          "term": "Comparable peers",
          "def": "กิจการที่มีลักษณะเหมาะสมสำหรับเปรียบเทียบ",
          "important": true
        },
        {
          "term": "Financial projections",
          "def": "ประมาณการการเงินระดับกิจการหรือฝ่าย",
          "important": true
        },
        {
          "term": "Credit-rating agency",
          "def": "ผู้ประเมินความน่าเชื่อถือของผู้กู้",
          "important": true
        },
        {
          "term": "Economic value added (EVA)",
          "def": "ตามไฟล์: (ORA−Cost of capital)×Total assets วัดกำไรหลังคิดต้นทุนเงินทุน",
          "important": true
        },
        {
          "term": "Cost of capital",
          "def": "ผลตอบแทนที่แหล่งเงินทุนต้องการ รวมทั้งหนี้และทุน",
          "important": true
        },
        {
          "term": "Economic profit",
          "def": "กำไรที่คำนึงถึงต้นทุนเงินทุนรวม ไม่ใช่กำไรบัญชีอย่างเดียว",
          "important": true
        },
        {
          "term": "Book value per share",
          "def": "ส่วนทุนสามัญตามบัญชีหารจำนวนหุ้น",
          "important": true
        },
        {
          "term": "Seasonality",
          "def": "ฤดูกาลที่อาจทำให้ยอดงบ ณ วันเดียวไม่เป็นตัวแทนทั้งปี",
          "important": true
        },
        {
          "term": "Financial leverage",
          "def": "การใช้หนี้ที่อาจเพิ่ม ROE ในภาวะเอื้ออำนวยและเพิ่มความเสี่ยง",
          "important": true
        }
      ]
    },
    {
      "topic": "บทที่ 5 · Discounted Cash Flow Analytics",
      "items": [
        {
          "term": "Principal",
          "def": "เงินต้นก่อนดอกเบี้ย",
          "important": true
        },
        {
          "term": "Simple interest",
          "def": "ดอกเบี้ยที่คิดจากเงินต้นเดิมเท่านั้น",
          "important": true
        },
        {
          "term": "Compound interest",
          "def": "ดอกเบี้ยที่ทบบนเงินต้นรวมดอกเบี้ยสะสม",
          "important": true
        },
        {
          "term": "Compounding",
          "def": "นำมูลค่าเงินไปข้างหน้าด้วยผลตอบแทนต่องวด",
          "important": true
        },
        {
          "term": "Discounting",
          "def": "แปลงเงินอนาคตกลับเป็นมูลค่าวันนี้",
          "important": true
        },
        {
          "term": "Present value (PV)",
          "def": "มูลค่าเงิน ณ วันนี้หรือวันอ้างอิง",
          "important": true
        },
        {
          "term": "Future value (FV)",
          "def": "มูลค่าเงิน ณ จุดเวลาอนาคตที่กำหนด",
          "important": true
        },
        {
          "term": "Discount rate (r)",
          "def": "อัตราคิดลดต่องวด ต้องตรงหน่วยเวลากับ n",
          "important": true
        },
        {
          "term": "Number of periods (n / N)",
          "def": "จำนวนงวดทั้งหมด ไม่จำเป็นต้องเป็นปี",
          "important": true
        },
        {
          "term": "Timeline",
          "def": "เส้นเวลาระบุวันรับจ่ายและวันวัดมูลค่า",
          "important": true
        },
        {
          "term": "Discount factor",
          "def": "ตัวคูณ 1/(1+r)ⁿ สำหรับแปลง FV เป็น PV",
          "important": true
        },
        {
          "term": "Annuity",
          "def": "เงินจำนวนเท่ากันทุกงวดตามจำนวนงวดแน่นอน",
          "important": true
        },
        {
          "term": "Ordinary annuity",
          "def": "รับหรือจ่ายปลายงวด เริ่ม t=1",
          "important": true
        },
        {
          "term": "Annuity due",
          "def": "รับหรือจ่ายต้นงวด เริ่ม t=0",
          "important": true
        },
        {
          "term": "Payment (PMT)",
          "def": "จำนวนเงินเท่ากันแต่ละงวด",
          "important": true
        },
        {
          "term": "Future value annuity factor",
          "def": "[(1+r)ⁿ−1]/r ตัวคูณหามูลค่าอนาคตเงินงวด",
          "important": true
        },
        {
          "term": "Present value annuity factor",
          "def": "[1−(1+r)⁻ⁿ]/r ตัวคูณคิดลดเงินงวด",
          "important": true
        },
        {
          "term": "Amortized loan",
          "def": "เงินกู้ที่ลดหนี้ผ่านเงินผ่อนเป็นงวดเท่ากัน",
          "important": true
        },
        {
          "term": "Amortization",
          "def": "กระบวนการทยอยคืนเงินต้นผ่านการผ่อน",
          "important": true
        },
        {
          "term": "Quoted rate (QR)",
          "def": "อัตราที่ประกาศ ต้องอ่านว่าต่อปีหรือต่องวด",
          "important": true
        },
        {
          "term": "Effective annual rate (EAR) / APY",
          "def": "อัตราต่อปีจริงหลังรวมผลทบต้นระหว่างปี",
          "important": true
        },
        {
          "term": "Nonannual compounding",
          "def": "ทบต้นหลายงวดต่อปี เช่น เดือนหรือไตรมาส",
          "important": true
        },
        {
          "term": "Compounding frequency (m)",
          "def": "จำนวนครั้งทบต้นต่อปี เช่น 12 หรือ 4",
          "important": true
        },
        {
          "term": "Perpetuity",
          "def": "เงินงวดคงที่ต่อเนื่องไม่มีสิ้นสุด",
          "important": true
        },
        {
          "term": "Perpetuity payment (PP)",
          "def": "เงินคงที่ที่ได้รับแต่ละงวดตลอดไป",
          "important": true
        },
        {
          "term": "END / BGN",
          "def": "โหมดปลายงวดหรือต้นงวดของการคำนวณเงินงวด",
          "important": true
        }
      ]
    }
  ]
});
