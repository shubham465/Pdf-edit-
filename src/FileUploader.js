import React, { useState, useRef } from 'react';
import { Box, Button, FormHelperText, Stack, Typography } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUploadOutlined";

function FileUploader({changeBufferArray}) {
    const [error, setError] = useState(false);
    const [file, setFile] = useState();
    const fileInputRef = useRef(null);

    const handleButtonClick = () => {
       fileInputRef.current.click(); 
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (!file) {
            return;
        }

        console.log(file.type)
        const allowedTypes = [
          "application/pdf",
          "application/vnd.ms-powerpoint"
        ];
        if (!allowedTypes.includes(file.type)) {
          setError(true);
       //   return
        }

        // Use FileReader to read the file as an ArrayBuffer
        const reader = new FileReader();

        reader.onload = (loadEvent) => {
            // The result attribute contains the contents of the file as an ArrayBuffer
            const buffer = loadEvent.target.result;
            changeBufferArray(buffer)
        };
        reader.readAsArrayBuffer(file);
        setFile(file)
    };

    return (
        <Box >
        <Typography color="primary" variant="body2" style={{fontWeight: '900', textAlign: 'center', padding: '5x', width: '100%', fontSize: '28px', color: '#2c2c2c', fontStyle: 'normal', fontFamily: 'Arial' }}>
            Re-edit Text in a PDF for a Team <br/> effortlessly
        </Typography>
            <Stack alignItems="center">
                <Stack
                    sx={{
                    border: "2px dashed #757ce8",
                    padding: "5% 25% 5% 25%",
                    marginTop: "40px",
                    }}
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                >
                    <Box>
                    <label htmlFor="choose-file-input">
                        <Stack alignItems="center" style={{backgroundColor: '#fcfcfc', width: '300px', cursor: 'pointer'}}>
                        <img src="https://prodblobcdn.azureedge.net/content/assets/images/pdf.svg?v=20240221075318" alt="Convert PDF to Word in Seconds" />
                        <Typography color="primary" variant="body2">
                            {!!file ? file.name : "Browse your computer for file"}
                        </Typography>
                        {error && (
                            <FormHelperText error={true}>
                            Invalid file type, please select .pdf or .ppt file only
                            </FormHelperText>
                        )}
                        </Stack>
                    </label>
                    </Box>
                    <Box>
                    <Button
                        fullWidth={false}
                        variant="contained"
                        startIcon={<CloudUploadIcon />}
                        onClick={()=> handleButtonClick()}
                    >
                        
                        Upload file
                    </Button>
                    </Box>
                </Stack>
            </Stack>
            <input
                ref={fileInputRef}
                style={{ display: "none", pointerEvents:'none' }}
                id="choose-file-input"
                type="file"
                accept=".pdf,.ppt"
                onChange={handleFileChange}
                />
        </Box>
    );
}

export default FileUploader;
