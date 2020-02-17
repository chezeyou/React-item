const toDownload = (blobData, fileName, fileType) => {
    if (!!window.ActiveXObject || 'ActiveXObject' in window) {
        window.navigator.msSaveOrOpenBlob(blobData, `${fileName}.${fileType}`);
    } else {
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = window.URL.createObjectURL(blobData);
        a.download = `${fileName}.${fileType}`;
        document.body.appendChild(a);
        a.click();
        a.remove();
    }
}

export const DownloadFile = (data, filename, filetype) => {
    if (!data) {
        return;
    }
    let blobData;
    const fileName = filename || 'download';
    const fileType = filetype || 'xls';
    const MIMEType = {
        '*': 'application/octet-stream',
        json: 'application/json',
        pdf: 'application/pdf',
        txt: 'text/plain',
        doc: 'application/msword',
        docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        xls: 'application/vnd.ms-excel',
        xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        crt: 'application/x-x509-ca-cert',
    };

    if (data.type === MIMEType.json) {
        const reader = new FileReader();
        reader.readAsText(data, 'utf-8');
        reader.onload = () => {
            blobData = new Blob([JSON.stringify(JSON.parse(reader.result).data)], { type: `${MIMEType[fileType]};charset=utf-8` });
            toDownload(blobData, fileName, fileType)
        }
    } else {
        blobData = new Blob([data], { type: `${MIMEType[fileType]};charset=utf-8` });
        toDownload(blobData, fileName, fileType)
    }
};
