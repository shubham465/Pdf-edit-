import React, { useState } from 'react';
import PDFViewer from './components/PDFViewer';
import FileUploader from './FileUploader';
import Header from './Header';


function App() {

	const [bufferArray, setBufferArray] = useState(null)

	const changeBufferArray = (arrayObject) => {
		setBufferArray(arrayObject)
	}

	return (
		<div className="App">
			{ !bufferArray ?
			(<>
				<Header/>
				<FileUploader changeBufferArray={changeBufferArray}/>
			</>)
			:
			<PDFViewer bufferArray={bufferArray} />
			}
		</div>
	);
}
export default App