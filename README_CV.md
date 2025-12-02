# CV Export & Print

This folder contains two formats of your CV:

- `CV.md` — polished Markdown version (editable)
- `CV_printable.html` — simple printable HTML optimized for browser printing

## How to export a PDF

1. Open `CV_printable.html` in your browser (double-click or `code` to open). Use the browser's Print dialog and choose "Save as PDF".

2. Use a headless browser to export from the command line (example using Google Chrome/Brave/Chromium):

PowerShell example:

```powershell
# On Windows, provide full path to chrome/chromium executable if needed
& 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe' --headless --disable-gpu --print-to-pdf="CV.pdf" "file:///$PWD/CV_printable.html"
```

3. Or use `pandoc` to convert Markdown to PDF (requires pandoc and LaTeX on your system):

```powershell
## Install pandoc if needed (chocolatey example):
# choco install pandoc -y
# Then run:
pandoc CV.md -o CV.pdf --pdf-engine=xelatex
```

If you'd like, I can generate the PDF for you and add it to the repository (I can run a headless conversion here if you want me to produce the file). Tell me whether you want the PDF checked in to the repo.
