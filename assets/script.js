window.onload = function() {
    document.getElementById("nav-home").addEventListener("click", function() {
        window.location.href = "index.html";
    });
    document.getElementById("nav-about").addEventListener("click", function() {
        window.location.href = "#about";
    });
    document.getElementById("nav-projects").addEventListener("click", function() {
        window.location.href = "#project-holder";
    });
    document.getElementById("nav-contact").addEventListener("click", function() {
        window.location.href = "#contact-holder";
    });
    document.getElementById("nav-e4").addEventListener("click", function() {
        window.location.href = "#e4";
    });

    document.getElementById("attestation").addEventListener("click", function() {
        window.location.href = "https://www.mediafire.com/file/0p9bx7p6v6yuiey/Attestation_de_stage_2022_et_2023.pdf/file";
    });
    document.getElementById("tableau").addEventListener("click", function() {
        window.location.href = "https://www.mediafire.com/file/mzufno3bad3j1q2/tableauSynthese_%25282%2529.ods/file";
    });
}