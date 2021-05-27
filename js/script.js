var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["Nombre"] = document.getElementById("Nombre").value;
    formData["Apellido"] = document.getElementById("Apellido").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("nombreApellido").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.Nombre;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.Apellido;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = `<a onClick="onEdit(this)">Editar</a>
                       <a onClick="onDelete(this)">Borrar</a>`;
}

function resetForm() {
    document.getElementById("Nombre").value = "";
    document.getElementById("Apellido").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("Nombre").value = selectedRow.cells[0].innerHTML;
    document.getElementById("Apellido").value = selectedRow.cells[1].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.Nombre;
    selectedRow.cells[1].innerHTML = formData.Apellido;
}

function onDelete(td) {
    row = td.parentElement.parentElement;
    document.getElementById("nombreApellido").deleteRow(row.rowIndex);
    resetForm();
}

function validate() {
    isValid = true;
    if (document.getElementById("Nombre").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}