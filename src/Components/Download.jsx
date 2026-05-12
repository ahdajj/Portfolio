import { useRef } from 'react';
import './DownloadStyle.css';

export default function Download() {
  const checkboxRef = useRef(null);
  const cvUrl = '/Ahmad-Ajjawe.pdf';           // ← Put your CV in public folder
  const cvFileName = 'Ahmad-Ajjawe CV';

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = cvFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openCV = () => {
    window.open(cvUrl, '_blank');
  };

  const handleClick = (e) => {
    const checkbox = checkboxRef.current;
    if (!checkbox) return;

    if (!checkbox.checked) {
      // === FIRST CLICK: Download ===
      checkbox.checked = true;           // Lock the checkbox
      downloadCV();                      // Start download
      // Animation will play automatically thanks to your CSS
    } else {
      // === SECOND CLICK: Open ===
      openCV();
    }
  };

  return (
    <div className="download-container">
      <label 
        className="download-label" 
        onClick={handleClick}
      >
        <input 
          ref={checkboxRef}
          type="checkbox" 
          className="input" 
          defaultChecked={false}
        />
        
        <span className="circle">
          <svg
            className="icon"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M12 19V5m0 14-4-4m4 4 4-4"
            />
          </svg>
          <div className="square"></div>
        </span>

        <p className="download-title">MY CV</p>
        <p className="download-title">Open</p>
      </label>
    </div>
  );
}