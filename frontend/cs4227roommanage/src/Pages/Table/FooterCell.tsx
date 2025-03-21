import React from "react";

export const FooterCell = ({ table }) => {
    const meta = table.options.meta;
    const selectedRows = table.getSelectedRowModel().rows;

    return (
        <div className="footer-buttons">
            <button className="add-button" onClick={meta?.addRow}>
                Add New +
            </button>
        </div>
    )
}