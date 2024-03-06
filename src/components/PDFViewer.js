import { useEffect, useRef } from "react";

export default function PDFViewer(props) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let PSPDFKit;

    (async function () {
      PSPDFKit = await import("pspdfkit");

      if (PSPDFKit) {
        PSPDFKit.unload(container); // Ensure that there's only one PSPDFKit instance.
      }
      const instance = await PSPDFKit.load({
        container,
        document: props?.bufferArray ,
        baseUrl: `${window.location.protocol}//${window.location.host}/${process.env.PUBLIC_URL}`,
        toolbarItems: [
          ...PSPDFKit.defaultToolbarItems,
          { type: "content-editor" }
        ],
        initialViewState: new PSPDFKit.ViewState({
          pageIndex: 8,
          sidebarMode: PSPDFKit.SidebarMode.THUMBNAILS
        })
      });
    })();

    return () => {
      // Unload PSPDFKit instance when the component is unmounted
      PSPDFKit && PSPDFKit.unload(container);
    };
  }, [ props.bufferArray]);

  return <div ref={containerRef} style={{ width: "100%", height: "100vh" }} />;
}