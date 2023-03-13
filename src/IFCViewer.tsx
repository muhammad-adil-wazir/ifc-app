import React, { useEffect, useRef } from 'react';
import { IfcViewerAPI } from 'web-ifc-viewer';
export const IFCViewer = () => {
  const viewerRef = useRef() as any;
  useEffect(() => {
    const container = document.getElementById('local-ifc-container')!;
    const viewerAPI = new IfcViewerAPI({ container });
    viewerAPI.addAxes();
    viewerAPI.addGrid();
    viewerAPI.IFC.setWasmPath('./');
    viewerRef.current = viewerAPI;
    viewerRef.current.IFC.loadIfcUrl('./test.ifc', true);
  }, []);
  return (
    <div>
      
      <br/>
      <div  id="local-ifc-container"
      style={{
        position: 'relative',
        height: '80vh',
        width: '80vw',
      }}>
      </div>
    </div>
  );
};