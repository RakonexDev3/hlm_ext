frappe.ui.form.on("Purchase Invoice", {
    refresh(frm) {
        set_due_date(frm);
    },

    collection_date(frm) {
        set_due_date(frm);
    },

    bill_date(frm) {
        set_due_date(frm);
    }
});

function set_due_date(frm) {
    setTimeout(() => {
        let due_date = frm.doc.collection_date || frm.doc.bill_date;

        if (!due_date) return;

        frm.set_value("due_date", due_date);

        if (frm.doc.payment_schedule) {
            frm.doc.payment_schedule.forEach(row => {
                row.due_date = due_date;
            });
            frm.refresh_field("payment_schedule");
        }
    }, 100);
}