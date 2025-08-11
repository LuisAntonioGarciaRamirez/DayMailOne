// Carga y crea el editor
window.initializeUnlayerEditor = function () {
    unlayer.init({
        id: 'editor',
        displayMode: 'email'
    });
};

// Exportar HTML
window.exportEmailHtml = function () {
    return new Promise((resolve, reject) => {
        unlayer.exportHtml(function (data) {
            resolve(data.html);
        });
    });
};

window.downloadHtmlFile = function (filename, content) {
    const blob = new Blob([content], { type: 'text/html' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
    URL.revokeObjectURL(link.href);
};

