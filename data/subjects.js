/* รายชื่อวิชาในหน้าเลือกวิชา
   เพิ่มวิชาใหม่: คัดลอกหนึ่งบล็อก แล้วสร้างไฟล์ data/<id>.js ตามแบบ data/dti286.js
   status: "ready" = มีเนื้อหาแล้ว · "empty" = ยังรอเนื้อหา
   custom: ใส่ path ถ้าวิชานั้นมีหน้าเว็บเฉพาะของตัวเอง · external: ลิงก์เว็บแยก (เปิดแทนหน้าในเว็บนี้) · features: ลิงก์ย่อยใต้การ์ด (ถ้าไม่ใส่ใช้ 4 ลิงก์มาตรฐาน) */
window.SUBJECTS = [
  {
    id: "tu240",
    code: "TU240",
    name: "เศรษฐกิจภูมิรัฐศาสตร์โลก (World Geopolitical Economy)",
    exam: "ปลายภาค · 24 พ.ย. 2569 · ข้อเขียน 3 ข้อ เลือกทำ 2",
    status: "ready",
    custom: "tu240/index.html",
    predictLabel: "แนวข้อสอบ",
    tabs: { overview: "#overview", study: "#study", practice: "#practice", predict: "#exam" }
  },
  {
    id: "fof",
    code: "FOF",
    name: "Foundations of Finance (พื้นฐานการเงิน)",
    exam: "ยังไม่มีประกาศวันสอบ · เนื้อหา 4 บท",
    status: "ready",
    predictLabel: "คำศัพท์",
    tabs: { overview: "#overview", study: "#study", practice: "#practice", predict: "#vocab" }
  },
  {
    id: "om3207",
    code: "3207",
    name: "Organization and Management (พฤติกรรมองค์การและการจัดการ)",
    exam: "ยังไม่ยืนยันวันสอบปัจจุบัน",
    status: "ready",
    predictLabel: "คำศัพท์",
    tabs: { overview: "#overview", study: "#study", practice: "#practice", predict: "#vocab" }
  },
  {
    id: "dti232",
    code: "DTI232",
    name: "ระเบียบวิธีเชิงลำดับขั้นตอนและการค้นหาอย่างชาญฉลาด",
    exam: "สอบกลางภาคแล้ว · ย้ายไปเว็บ DTI232 เข้าใจอัลกอริทึม",
    status: "ready",
    external: "https://thanatvij.github.io/DTI232-learn/",
    features: [
      { label: "A* ทีละบรรทัด", href: "https://thanatvij.github.io/DTI232-learn/astar.html" },
      { label: "กำหนดการพลวัต", href: "https://thanatvij.github.io/DTI232-learn/dp.html" },
      { label: "เนื้อหาเดิม", href: "https://thanatvij.github.io/DTI232-learn/index.html#p2" },
      { label: "เก็งข้อสอบ", href: "https://thanatvij.github.io/DTI232-learn/index.html#predict" }
    ]
  },
  {
    id: "dti286",
    code: "DTI286",
    name: "โหมดของประสบการณ์มนุษย์ (Modes of Human Experience)",
    exam: "พฤหัสบดี 24 ก.ย. 2569 · 09.00–11.00",
    status: "ready",
    reviewPdf: "dti286-memory-review.pdf"
  },
  {
    id: "pb287",
    code: "PB287",
    name: "การเตรียมความพร้อมและการตอบโต้ภัยพิบัติ (Disaster Preparedness and Response)",
    exam: "พฤหัสบดี 24 ก.ย. 2569 · 13.00–16.00",
    status: "ready",
    reviewPdf: "pb287-memory-review.pdf"
  },
  {
    id: "wdm",
    code: "WDM",
    name: "Warehouse and Distribution Management",
    exam: "ยังไม่มีประกาศวันสอบ",
    status: "ready"
  }
];
