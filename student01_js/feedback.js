var run = 0;
console.log(1)
//calling function
function submit() {
    var rate = "";
    var name = "";
    var comment = "";

    rate = document.getElementById("select").value;
    name = document.getElementById("name").value;
    comment = document.getElementById("comment").value;
    showError(name, rate, comment, run);
    console.log(run);
    if (run !== 0) {
        showMessage(rate, name, comment);
        resetForm();
    }
}
//show erroe message
function showError(name, rate, comment) {
    if (rate === "Rate us") {
        alert("please rate us");
        document.getElementById("select").style.backgroundColor = "#ea8685";
        run = 0;
    }
    if (name === "") {
        alert("insert your name");
        document.getElementById("name").style.backgroundColor = "#ea8685";
        run = 0;
    }
    if (comment === "") {
        alert("insert your comment");
        document.getElementById("comment").style.backgroundColor = "#ea8685";
        run = 0;
    }

    if (rate !== "" && name !== "" && rate !== "Rate us" && comment !== "") {
        run = 1;
    }

}
//showing alert
function showMessage(rate, name, comment) {
    alert(name + " , " + "you have rate us as " + rate + " and " + "put a comment as " + comment);
}
//reset the form
function resetForm() {
    document.getElementById("select").style.backgroundColor = "#ffffff";
    document.getElementById("name").style.backgroundColor = "#ffffff";
    document.getElementById("comment").style.backgroundColor = "#ffffff";
    this.form.reset();
}