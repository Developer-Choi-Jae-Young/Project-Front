import { useState } from 'react';

export const File = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (!selectedFile) {
            alert("파일을 먼저 선택해주세요!");
            return;
        }
    
        const formData = new FormData();
        formData.append('file', selectedFile);
    
        try {
            const response = await fetch('https://api.smart-order.shop:8080/upload', {
                method: 'POST',
                body: formData,
            });
    
            if (response.ok) {
                const result = await response.json();
                console.log("업로드 성공:", result);
                alert("파일 업로드가 완료되었습니다!");
            } else {
                console.error("업로드 실패:", response.statusText);
                alert("업로드에 실패했습니다.");
            }
        } catch (error) {
            console.error("네트워크 오류:", error);
            alert("서버와 통신 중 오류가 발생했습니다.");
        }
    };

    return (
        <div>
            <h2>파일 페이지</h2>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>업로드</button>
            {selectedFile && <p style={{ color: 'blue' }}>선택됨: {selectedFile.name}</p>}
        </div>
    )
}