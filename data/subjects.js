/* รายชื่อวิชาในหน้าเลือกวิชา
   เพิ่มวิชาใหม่: คัดลอกหนึ่งบล็อก แล้วสร้างไฟล์ data/<id>.js ตามแบบ data/dti286.js
   status: "ready" = มีเนื้อหาแล้ว · "empty" = ยังรอเนื้อหา
   custom: ใส่ path ถ้าวิชานั้นมีหน้าเว็บเฉพาะของตัวเอง (เช่น DTI232 ที่มีเครื่องมือ interactive) */
window.SUBJECTS = [
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
    exam: "ยังไม่ยืนยันวันสอบปัจจุบัน · ชีทข้อสอบ 110 ข้อ",
    status: "ready",
    predictLabel: "คำศัพท์",
    tabs: { overview: "#overview", study: "#study", practice: "#practice", predict: "#vocab" }
  },
  {
    id: "dti232",
    code: "DTI232",
    name: "ระเบียบวิธีเชิงลำดับขั้นตอนและการค้นหาอย่างชาญฉลาด",
    exam: "สอบแล้ว · เก็บไว้ทบทวน",
    status: "ready",
    custom: "dti232/index.html",
    tabs: { overview: "#home", study: "#p1", practice: "#px", predict: "#predict" }
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
