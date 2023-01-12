---
title: Printing in WebView2 apps
description: How to print a web page in a WebView2 app.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
ms.date: 01/12/2023
---
# Print

There are a few different ways to print a web page in WebView2 which give you varying levels of ease of use and control.

## ShowPrintUI

The ShowPrintUI show the WebView2 print preview dialog or OS print dialog for the current top-level document in the WebView2. With this mechanism you easily get a printing experience the user will be familiar with.

<!-- ------------------------------ -->

# [C#](#tab/csharp)

[CoreWebView2.ShowPrintUI() Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.showprintui#microsoft-web-webview2-core-corewebview2-showprintui)
[CoreWebView2.ShowPrintUI(CoreWebView2PrintDialogKind) Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.showprintui#microsoft-web-webview2-core-corewebview2-showprintui(microsoft-web-webview2-core-corewebview2printdialogkind))
[CoreWebView2PrintDialogKind Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2printdialogkind)


<!-- ------------------------------ -->

# [C++](#tab/cpp)

[ICoreWebView2_16::ShowPrintUI(printDialogKind) Method](/microsoft-edge/webview2/reference/win32/icorewebview2_16#showprintui)
[COREWEBVIEW2_PRINT_DIALOG_KIND Enum](/microsoft-edge/webview2/reference/win32/icorewebview2_16#corewebview2_print_dialog_kind)


---

<!-- end of tab-set -->

### Example: ShowPrintUI

This example shows the user a print dialog. If `printDialog` is `CoreWebView2PrintDialogKind.Browser`, opens a browser print preview dialog, `CoreWebView2PrintDialogKind.System` opens a system print dialog.


<!-- ------------------------------ -->

# [C#](#tab/csharp)

```csharp
void ShowPrintUI(object target, ExecutedRoutedEventArgs e)
{
  string printDialog = e.Parameter.ToString();
  if (printDialog == "Browser")
  {
    // Opens the browser print preview dialog.
    webView.CoreWebView2.ShowPrintUI();
  }
  else
  {
    // Opens the system print dialog.
    webView.CoreWebView2.ShowPrintUI(CoreWebView2PrintDialogKind.System);
  }
}
```

**APIs:**

* [CoreWebView2.ShowPrintUI() Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.showprintui#microsoft-web-webview2-core-corewebview2-showprintui)
* [CoreWebView2.ShowPrintUI(CoreWebView2PrintDialogKind) Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.showprintui#microsoft-web-webview2-core-corewebview2-showprintui(microsoft-web-webview2-core-corewebview2printdialogkind))
* [CoreWebView2PrintDialogKind Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2printdialogkind)


<!-- ------------------------------ -->

# [C++](#tab/cpp)

```cpp
bool AppWindow::ShowPrintUI(COREWEBVIEW2_PRINT_DIALOG_KIND printDialogKind)
{
  wil::com_ptr<ICoreWebView2_16> webView2_16;
  CHECK_FAILURE(m_webView->QueryInterface(IID_PPV_ARGS(&webView2_16)));
  CHECK_FAILURE(webView2_16->ShowPrintUI(printDialogKind));
  return true;
}
```

**APIs:**

* [ICoreWebView2_16::ShowPrintUI(printDialogKind) Method](/microsoft-edge/webview2/reference/win32/icorewebview2_16#showprintui)
* [COREWEBVIEW2_PRINT_DIALOG_KIND Enum](/microsoft-edge/webview2/reference/win32/icorewebview2_16#corewebview2_print_dialog_kind)

---

<!-- end of tab-set -->


<!-- ====================================================================== -->
## Print

The Print method silently print the current top-level document in the WebView2 using optional programmatically specified print settings. If you want to build your own print preview dialog or otherwise build your own print experience you can use this method. This API consists of an asynchronous Print method and a PrintSettings object.


<!-- ------------------------------ -->

# [C#](#tab/csharp)

[CoreWebView2.PrintAsync() Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.printasync#microsoft-web-webview2-core-corewebview2-printasync)
[CoreWebView2PrintSettings Class](/dotnet/api/microsoft.web.webview2.core.corewebview2printsettings)


<!-- ------------------------------ -->

# [C++](#tab/cpp)

[ICoreWebView2_16::Print() Method](/microsoft-edge/webview2/reference/win32/icorewebview2_16#print)
[ICoreWebView2PrintSettings2 Interface](microsoft-edge/webview2/reference/win32/icorewebview2printsettings2)
[COREWEBVIEW2_PRINT_STATUS Enum](/microsoft-edge/webview2/reference/win32/icorewebview2_16#corewebview2_print_status)

---

<!-- end of tab-set -->

### Example 1: Print to default printer

This example prints the current web page without a print dialog to a default printer with the default print settings.


<!-- ------------------------------ -->

# [C#](#tab/csharp)

```csharp
async void PrintToDefaultPrinter ()
{
  string title = webView.CoreWebView2.DocumentTitle;
  try
  {
    // Passing null for `PrintSettings` results in default print settings used.
    // Prints current web page with the default page and printer settings.
    CoreWebView2PrintStatus printStatus = await webView.CoreWebView2.PrintAsync(null);

    if (printStatus == CoreWebView2PrintStatus.Succeeded)
    {
      MessageBox.Show(this, "Printing " + title + " document to printer is succeeded", "Print to default printer");
    }
    else if (printStatus == CoreWebView2PrintStatus.PrinterUnavailable)
    {
      MessageBox.Show(this, "Printer is not available, offline or error state", "Print to default printer");
    }
    else
    {
      MessageBox.Show(this, "Printing " + title + " document to printer is failed", "Print to default printer");
    }
  }
  catch (Exception)
  {
    MessageBox.Show(this, "Printing " + title + " document already in progress", "Print to default printer");
  }
}
```

**APIs:**

* [CoreWebView2.PrintAsync() Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.printasync#microsoft-web-webview2-core-corewebview2-printasync)


<!-- ------------------------------ -->

# [C++](#tab/cpp)

```cpp
bool AppWindow::PrintToDefaultPrinter()
{
  wil::com_ptr<ICoreWebView2_16> webView2_16;
  CHECK_FAILURE(m_webView->QueryInterface(IID_PPV_ARGS(&webView2_16)));

  wil::unique_cotaskmem_string title;
  CHECK_FAILURE(m_webView->get_DocumentTitle(&title));

  // Passing nullptr for `ICoreWebView2PrintSettings` results in default print settings used.
  // Prints current web page with the default page and printer settings.
  CHECK_FAILURE(webView2_16->Print(
      nullptr, Callback<ICoreWebView2PrintCompletedHandler>(
          [title = std::move(title), this](HRESULT errorCode, COREWEBVIEW2_PRINT_STATUS printStatus) -> HRESULT
          {
            std::wstring message = L"";
            if (errorCode == S_OK && printStatus == COREWEBVIEW2_PRINT_STATUS_SUCCEEDED)
            {
              message = L"Printing " + std::wstring(title.get()) +
                              L" document to printer is succedded";
            }
            else if (errorCode == S_OK && printStatus == COREWEBVIEW2_PRINT_STATUS_PRINTER_UNAVAILABLE)
            {
              message = L"Printer is not available, offline or error state";
            }
            else if (errorCode == E_ABORT)
            {
              message = L"Printing " + std::wstring(title.get()) +
                                  L" document already in progress";
            }
            else
            {
              message = L"Printing " + std::wstring(title.get()) +
                                  L" document to printer is failed";
            }

            AsyncMessageBox(message, L"Print to default printer");

            return S_OK;
        })
        .Get()));
  return true;
}
```

**APIs:**

* [ICoreWebView2_16::Print() method](/microsoft-edge/webview2/reference/win32/icorewebview2_16#print)
* [COREWEBVIEW2_PRINT_STATUS Enum](/microsoft-edge/webview2/reference/win32/icorewebview2_16#corewebview2_print_status)

---

<!-- end of tab-set -->

### Example 2: Print to printer

This example prints the current web page to a specific printer with the settings.


<!-- ------------------------------ -->

# [C#](#tab/csharp)

```csharp
async void PrintToPrinter()
{
  string printerName = GetPrinterName();
  CoreWebView2PrintSettings printSettings = GetSelectedPrinterPrintSettings(printerName);
  string title = webView.CoreWebView2.DocumentTitle;
  try
  {
    CoreWebView2PrintStatus printStatus = await webView.CoreWebView2.PrintAsync(printSettings);

    if (printStatus == CoreWebView2PrintStatus.Succeeded)
    {
      MessageBox.Show(this, "Printing " + title + " document to printer is succeeded", "Print to printer");
    }
    else if (printStatus == CoreWebView2PrintStatus.PrinterUnavailable)
    {
      MessageBox.Show(this, "Selected printer is not found, not available, offline or error state", "Print to printer");
    }
    else
    {
      MessageBox.Show(this, "Printing " + title + " document to printer is failed", "Print");
    }
  }
  catch(ArgumentException)
  {
    MessageBox.Show(this, "Invalid settings provided for the specified printer", "Print");
  }
  catch (Exception)
  {
    MessageBox.Show(this, "Printing " + title + " document already in progress", "Print");
  }
}

// Function to get printer name by displaying installed printers list to the user and
// return user selected printer.
string GetPrinterName()
{
  // Use GetPrintQueues() of LocalPrintServer from System.Printing to get list of locally installed printers.
  // Display the printer list to the user and get the desired printer to print.
  // Return the user selected printer name.
}

// Function to get print settings for the selected printer.
// You may also choose get the capabilties from the native printer API, display to the user to get
// the print settings for the current web page and for the selected printer.
CoreWebView2PrintSettings GetSelectedPrinterPrintSettings(string printerName)
{
  CoreWebView2PrintSettings printSettings = null;
  printSettings = WebViewEnvironment.CreatePrintSettings();
  printSettings.ShouldPrintBackgrounds = true;
  printSettings.ShouldPrintHeaderAndFooter = true;

  return printSettings;

  // or
  // Get PrintQueue for the selected printer and use GetPrintCapabilities() of PrintQueue from System.Printing
  // to get the capabilities of the selected printer.
  // Display the printer capabilities to the user along with the page settings.
  // Return the user selected settings.
}
```

**APIs:**

* [CoreWebView2.PrintAsync() Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.printasync#microsoft-web-webview2-core-corewebview2-printasync)
* [CoreWebView2PrintSettings Class](/dotnet/api/microsoft.web.webview2.core.corewebview2printsettings)

<!-- ------------------------------ -->

# [C++](#tab/cpp)

```cpp
struct SamplePrintSettings
{
  COREWEBVIEW2_PRINT_ORIENTATION Orientation = COREWEBVIEW2_PRINT_ORIENTATION_PORTRAIT;
  int Copies = 1;
  int PagesPerSide = 1;
  std::wstring Pages = L"";
  COREWEBVIEW2_PRINT_COLLATION Collation = COREWEBVIEW2_PRINT_COLLATION_DEFAULT;
  COREWEBVIEW2_PRINT_COLOR_MODE ColorMode = COREWEBVIEW2_PRINT_COLOR_MODE_DEFAULT;
  COREWEBVIEW2_PRINT_DUPLEX Duplex = COREWEBVIEW2_PRINT_DUPLEX_DEFAULT;
  COREWEBVIEW2_PRINT_MEDIA_SIZE Media = COREWEBVIEW2_PRINT_MEDIA_SIZE_DEFAULT;
  double PaperWidth = 8.5;
  double PaperHeight = 11;
  double ScaleFactor = 1.0;
  bool PrintBackgrounds = false;
  bool HeaderAndFooter = false;
  bool ShouldPrintSelectionOnly = false;
  std::wstring HeaderTitle = L"";
  std::wstring FooterUri = L"";
};

// Function to get printer name by displaying installed printers list to the user and
// return user selected printer.
std::wstring AppWindow::GetPrinterName()
{
  // Use win32 EnumPrinters function to get locally installed printers.
  // Display the printer list to the user and get the user desired printer to print.
  // Return the user selected printer name.
}

// Function to get print settings for the selected printer.
// You may also choose get the capabilties from the native printer API, display to the user to get
// the print settings for the current web page and for the selected printer.
SamplePrintSettings AppWindow::GetSelectedPrinterPrintSettings(std::wstring printerName)
{
  SamplePrintSettings samplePrintSettings;
  samplePrintSettings.PrintBackgrounds = true;
  samplePrintSettings.HeaderAndFooter = true;

  return samplePrintSettings;

  // or
  //
  // Use win32 DeviceCapabilitiesA function to get the capabilities of the selected printer.
  // Display the printer capabilities to the user along with the page settings.
  // Return the user selected settings.
}

bool AppWindow::PrintToPrinter()
{
  std::wstring printerName = GetPrinterName();
  // Host apps custom print settings based on the user selection.
  SamplePrintSettings samplePrintSettings = GetSelectedPrinterPrintSettings(printerName);

  wil::com_ptr<ICoreWebView2_16> webView2_16;
  CHECK_FAILURE(m_webView->QueryInterface(IID_PPV_ARGS(&webView2_16)));

  wil::com_ptr<ICoreWebView2Environment6> webviewEnvironment6;
  CHECK_FAILURE(m_webViewEnvironment->QueryInterface(IID_PPV_ARGS(&webviewEnvironment6)));

  wil::com_ptr<ICoreWebView2PrintSettings> printSettings;
  CHECK_FAILURE(webviewEnvironment6->CreatePrintSettings(&printSettings));

  wil::com_ptr<ICoreWebView2PrintSettings2> printSettings2;
  CHECK_FAILURE(printSettings->QueryInterface(IID_PPV_ARGS(&printSettings2)));

  CHECK_FAILURE(printSettings2->put_Orientation(samplePrintSettings.Orientation));
  CHECK_FAILURE(printSettings2->put_Copies(samplePrintSettings.Copies));
  CHECK_FAILURE(printSettings2->put_PagesPerSheet(samplePrintSettings.PagesPerSide));
  CHECK_FAILURE(printSettings2->put_PageRanges(samplePrintSettings.Pages.c_str()));
  if (samplePrintSettings.Media == COREWEBVIEW2_PRINT_MEDIA_SIZE_CUSTOM)
  {
    CHECK_FAILURE(printSettings2->put_PageWidth(samplePrintSettings.PaperWidth));
    CHECK_FAILURE(printSettings2->put_PageHeight(samplePrintSettings.PaperHeight));
  }
  CHECK_FAILURE(printSettings2->put_ColorMode(samplePrintSettings.ColorMode));
  CHECK_FAILURE(printSettings2->put_Collation(samplePrintSettings.Collation));
  CHECK_FAILURE(printSettings2->put_Duplex(samplePrintSettings.Duplex));
  CHECK_FAILURE(printSettings2->put_ScaleFactor(samplePrintSettings.ScaleFactor));
  CHECK_FAILURE(printSettings2->put_ShouldPrintBackgrounds(samplePrintSettings.PrintBackgrounds));
  CHECK_FAILURE(printSettings2->put_ShouldPrintHeaderAndFooter(samplePrintSettings.HeaderAndFooter));
  CHECK_FAILURE(printSettings2->put_HeaderTitle(samplePrintSettings.HeaderTitle.c_str()));
  CHECK_FAILURE(printSettings2->put_FooterUri(samplePrintSettings.FooterUri.c_str()));
  CHECK_FAILURE(printSettings2->put_PrinterName(printerName.c_str()));

  wil::unique_cotaskmem_string title;
  CHECK_FAILURE(m_webView->get_DocumentTitle(&title));

  CHECK_FAILURE(webView2_16->Print(
      printSettings.get(),
      Callback<ICoreWebView2PrintCompletedHandler>(
          [title = std::move(title), this](HRESULT errorCode, COREWEBVIEW2_PRINT_STATUS printStatus) -> HRESULT
          {
            std::wstring message = L"";
            if (errorCode == S_OK && printStatus == COREWEBVIEW2_PRINT_STATUS_SUCCEEDED)
            {
              message = L"Printing " + std::wstring(title.get()) +
                              L" document to printer is succedded";
            }
            else if (errorCode == S_OK && printStatus == COREWEBVIEW2_PRINT_STATUS_PRINTER_UNAVAILABLE)
            {
              message = L"Selected printer is not found, not available, offline or "
                              L"error state.";
            }
            else if (errorCode == E_INVALIDARG)
            {
              message = L"Invalid settings provided for the specified printer";
            }
            else if (errorCode == E_ABORT)
            {
              message = L"Printing " + std::wstring(title.get()) +
                                  L" document already in progress";
            }
            else
            {
              message = L"Printing " + std::wstring(title.get()) +
                                  L" document to printer is failed";
            }

            AsyncMessageBox(message, L"Print to printer");

            return S_OK;
          })
          .Get()));
  return true;
}
```

**APIs:**

* [ICoreWebView2_16::Print() method](/microsoft-edge/webview2/reference/win32/icorewebview2_16#print)
* [ICoreWebView2PrintSettings interace](microsoft-edge/webview2/reference/win32/icorewebview2printsettings1)
* [ICoreWebView2PrintSettings2 interace](microsoft-edge/webview2/reference/win32/icorewebview2printsettings2)
* [COREWEBVIEW2_PRINT_STATUS Enum](/microsoft-edge/webview2/reference/win32/icorewebview2_16#corewebview2_print_status)

---

<!-- end of tab-set -->


<!-- ====================================================================== -->
## PrintToPdf

Silently print the current top-level document in the WebView2 to a PDF file. To completely control how printing is performed, you can print to a PDF and then build your own code to print the PDF. This API consists of an asynchronous PrintToPdf method and a PrintSettings object. The PrintToPdf method accepts a path that the PDF file should be saved to.

<!-- ------------------------------ -->

# [C#](#tab/csharp)

[CoreWebView2.PrintToPdfAsync(resultFilePath, printSettings) Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.printtopdfasync#microsoft-web-webview2-core-corewebview2-printtopdfasync)
[CoreWebView2PrintSettings Class](/dotnet/api/microsoft.web.webview2.core.corewebview2printsettings)


<!-- ------------------------------ -->

# [C++](#tab/cpp)

[ICoreWebView2_7::PrintToPdf(resultFilePath, printSettings, handler) method](/microsoft-edge/webview2/reference/win32/icorewebview2_7#printtopdf)
[ICoreWebView2PrintSettings interface](microsoft-edge/webview2/reference/win32/icorewebview2printsettings)

---

<!-- end of tab-set -->

### Example: PrintToPdf

This example Prints current page to PDF using the default path and settings.

<!-- ------------------------------ -->

# [C#](#tab/csharp)

```csharp
async void PrintToPdfCmdExecuted(object target, ExecutedRoutedEventArgs e)
{
    if (_isPrintToPdfInProgress)
    {
        MessageBox.Show(this, "Print to PDF in progress", "Print To PDF");
        return;
    }
    CoreWebView2PrintSettings printSettings = null;
    string orientationString = e.Parameter.ToString();
    if (orientationString == "Landscape")
    {
        printSettings = WebViewEnvironment.CreatePrintSettings();
        printSettings.Orientation =
            CoreWebView2PrintOrientation.Landscape;
    }

    Microsoft.Win32.SaveFileDialog saveFileDialog =
        new Microsoft.Win32.SaveFileDialog();
    saveFileDialog.InitialDirectory = "C:\\";
    saveFileDialog.Filter = "Pdf Files|*.pdf";
    Nullable<bool> result = saveFileDialog.ShowDialog();
    if (result == true) {
        _isPrintToPdfInProgress = true;
        bool isSuccessful = await webView.CoreWebView2.PrintToPdfAsync(
            saveFileDialog.FileName, printSettings);
        _isPrintToPdfInProgress = false;
        string message = (isSuccessful) ?
            "Print to PDF succeeded" : "Print to PDF failed";
        MessageBox.Show(this, message, "Print To PDF Completed");
    }
}
```

**APIs:**

* [CoreWebView2.PrintToPdfAsync(resultFilePath, printSettings) Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.printtopdfasync#microsoft-web-webview2-core-corewebview2-printtopdfasync)
* [CoreWebView2PrintSettings Class](/dotnet/api/microsoft.web.webview2.core.corewebview2printsettings)


<!-- ------------------------------ -->

# [C++](#tab/cpp)

```cpp
void FileComponent::PrintToPdf(bool enableLandscape)
{
    WCHAR defaultName[MAX_PATH] = L"WebView2_PrintedPdf.pdf";
    OPENFILENAME openFileName = CreateOpenFileName(defaultName, L"PDF File\0*.pdf\0");
    if (GetSaveFileName(&openFileName))
    {
        wil::com_ptr<ICoreWebView2PrintSettings> printSettings = nullptr;
        if (enableLandscape)
        {
            wil::com_ptr<ICoreWebView2Environment5> webviewEnvironment5;
            CHECK_FAILURE(m_appWindow->GetWebViewEnvironment()->QueryInterface(
                IID_PPV_ARGS(&webviewEnvironment5)));
            if (webviewEnvironment5)
            {
                CHECK_FAILURE(webviewEnvironment5->CreatePrintSettings(&printSettings));
                CHECK_FAILURE(
                    printSettings->put_Orientation(COREWEBVIEW2_PRINT_ORIENTATION_LANDSCAPE));
            }
        }

        wil::com_ptr<ICoreWebView2_7> webview2_7;
        CHECK_FAILURE(m_webView->QueryInterface(IID_PPV_ARGS(&webview2_7)));
        if (webview2_7)
        {
            m_printToPdfInProgress = true;
            CHECK_FAILURE(webview2_7->PrintToPdf(
                openFileName.lpstrFile, printSettings.get(),
                Callback<ICoreWebView2PrintToPdfCompletedHandler>(
                    [this](HRESULT errorCode, BOOL isSuccessful) -> HRESULT {
                        CHECK_FAILURE(errorCode);
                        m_printToPdfInProgress = false;
                        auto showDialog = [isSuccessful] {
                            MessageBox(
                                nullptr,
                                (isSuccessful) ? L"Print to PDF succeeded"
                                               : L"Print to PDF failed",
                                L"Print to PDF Completed", MB_OK);
                        };
                        m_appWindow->RunAsync([showDialog]() { showDialog(); });
                        return S_OK;
                    })
                    .Get()));
        }
    }
}
```

**APIs:**

* [ICoreWebView2_7::PrintToPdf(resultFilePath, printSettings, handler) method](/microsoft-edge/webview2/reference/win32/icorewebview2_7#printtopdf)
* [ICoreWebView2PrintSettings interface](microsoft-edge/webview2/reference/win32/icorewebview2printsettings)

---

<!-- end of tab-set -->


<!-- ====================================================================== -->
## PrintToPdfStream

Silently print the current top-level document in the WebView2 to a PDF stream. To completely control how printing is performed, you can print to a PDF and then build your own code to print the PDF. This API consists of an asynchronous PrintToPdfStream method and a PrintSettings object.


<!-- ------------------------------ -->

# [C#](#tab/csharp)

[CoreWebView2.PrintToPdfStreamAsync(printSettings) Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.printtopdfstreamasync#microsoft-web-webview2-core-corewebview2-printtopdfstreamasync)
[CoreWebView2PrintSettings Class](/dotnet/api/microsoft.web.webview2.core.corewebview2printsettings)


<!-- ------------------------------ -->

# [C++](#tab/cpp)

[ICoreWebView2_16::PrintToPdfStream(printSettings, handler) method](/microsoft-edge/webview2/reference/win32/icorewebview2_16#printtopdfstream)
[ICoreWebView2PrintSettings2 interface](microsoft-edge/webview2/reference/win32/icorewebview2printsettings2)

---

<!-- end of tab-set -->

### Example: PrintToPdfStream

This example prints the PDF data of the current web page to a stream.


<!-- ------------------------------ -->

# [C#](#tab/csharp)

```csharp
async void PrintToPdfStream()
{
  try
  {
    string title = webView.CoreWebView2.DocumentTitle;

    // Passing null for `PrintSettings` results in default print settings used.
    System.IO.Stream stream = await webView.CoreWebView2.PrintToPdfStreamAsync(null);
    DisplayPdfDataInPrintDialog(stream);

    MessageBox.Show(this, "Printing " + title + " document to PDF Stream " + ((stream != null) ? "succedded" : "failed"), "Print To PDF Stream");
  }
  catch(Exception exception)
  {
    MessageBox.Show(this, "Printing to PDF Stream failed: " + exception.Message, "Print to PDF Stream");
  }
}

// Function to display current web page pdf data in a custom print preview dialog.
void DisplayPdfDataInPrintDialog(Stream pdfData)
{
  // You can display the printable pdf data in a custom print preview dialog to the end user.
}
```

**APIs:**

* [CoreWebView2.PrintToPdfStreamAsync(printSettings) Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.printtopdfstreamasync#microsoft-web-webview2-core-corewebview2-printtopdfstreamasync)


<!-- ------------------------------ -->

# [C++](#tab/cpp)

```cpp
static void DisplayPdfDataInPrintDialog(IStream* pdfData)
{
  // You can display the printable pdf data in a custom print preview dialog to the end user.
}

bool AppWindow::PrintToPdfStream()
{
  wil::com_ptr<ICoreWebView2_16> webView2_16;
  CHECK_FAILURE(m_webView->QueryInterface(IID_PPV_ARGS(&webView2_16)));

  wil::unique_cotaskmem_string title;
  CHECK_FAILURE(m_webView->get_DocumentTitle(&title));

  // Passing nullptr for `ICoreWebView2PrintSettings` results in default print settings used.
  CHECK_FAILURE(
      webView2_16->PrintToPdfStream(
          nullptr,
          Callback<ICoreWebView2PrintToPdfStreamCompletedHandler>(
              [title = std::move(title), this](HRESULT errorCode, IStream* pdfData) -> HRESULT
              {
                DisplayPdfDataInPrintDialog(pdfData);
                std::wstring message = L"Printing " + std::wstring(title.get()) +
                                       L" document to PDF Stream " +
                                       ((errorCode == S_OK && pdfData != nullptr) ? L"succedded" : L"failed");

                AsyncMessageBox(message, L"Print to PDF Stream");

                return S_OK;
              })
              .Get()));
  return true;
}
```

**APIs:**

* [ICoreWebView2_16::PrintToPdfStream(printSettings, handler) method](/microsoft-edge/webview2/reference/win32/icorewebview2_16#printtopdfstream)

---

<!-- end of tab-set -->


<!-- ====================================================================== -->
## API Reference overview


<!-- ------------------------------ -->

# [C#](#tab/csharp)

* [CoreWebView2.ShowPrintUI() Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.showprintui#microsoft-web-webview2-core-corewebview2-showprintui)
* [CoreWebView2.ShowPrintUI(CoreWebView2PrintDialogKind) Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.showprintui#microsoft-web-webview2-core-corewebview2-showprintui(microsoft-web-webview2-core-corewebview2printdialogkind))
* [CoreWebView2.PrintAsync() Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.printasync#microsoft-web-webview2-core-corewebview2-printasync)
* [CoreWebView2.PrintToPdfAsync(resultFilePath, printSettings) Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.printtopdfasync#microsoft-web-webview2-core-corewebview2-printtopdfasync)
* [CoreWebView2.PrintToPdfStreamAsync(printSettings) Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.printtopdfstreamasync#microsoft-web-webview2-core-corewebview2-printtopdfstreamasync)
* [CoreWebView2PrintSettings Class](/dotnet/api/microsoft.web.webview2.core.corewebview2printsettings)
* [CoreWebView2PrintDialogKind Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2printdialogkind)
* [CoreWebView2PrintStatus Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2printstatus)

<!-- ------------------------------ -->

# [C++](#tab/cpp)

* [ICoreWebView2_16::ShowPrintUI(printDialogKind) method](/microsoft-edge/webview2/reference/win32/icorewebview2_16#showprintui)
* [ICoreWebView2_16::Print() method](/microsoft-edge/webview2/reference/win32/icorewebview2_16#print)
* [ICoreWebView2_7::PrintToPdf(resultFilePath, printSettings, handler) method](/microsoft-edge/webview2/reference/win32/icorewebview2_7#printtopdf)
* [ICoreWebView2_16::PrintToPdfStream(printSettings, handler) method](/microsoft-edge/webview2/reference/win32/icorewebview2_16#printtopdfstream)
* [ICoreWebView2PrintSettings Class](microsoft-edge/webview2/reference/win32/icorewebview2printsettings)
* [ICoreWebView2PrintSettings2 Class](microsoft-edge/webview2/reference/win32/icorewebview2printsettings2)
* [COREWEBVIEW2_PRINT_DIALOG_KIND Enum](/microsoft-edge/webview2/reference/win32/icorewebview2_16#corewebview2_print_dialog_kind)
* [COREWEBVIEW2_PRINT_STATUS Enum](/microsoft-edge/webview2/reference/win32/icorewebview2_16#corewebview2_print_status)
* [ICoreWebView2PrintCompletedHandler](/microsoft-edge/webview2/reference/win32/icorewebview2printcompletedhandler)
* [ICoreWebView2PrintToPdfCompletedHandler](/microsoft-edge/webview2/reference/win32/icorewebview2printtopdfcompletedhandler)
* [ICoreWebView2PrintToPdfStreamCompletedHandler](/microsoft-edge/webview2/reference/win32/icorewebview2printtopdfstreamcompletedhandler)

---

<!-- end of tab-set -->


<!-- ====================================================================== -->
## See also

* [Get started with WebView2](../get-started/get-started.md)
* [WebView2Samples repo](https://github.com/MicrosoftEdge/WebView2Samples) - a comprehensive example of WebView2 capabilities.
* [WebView2 API reference](/dotnet/api/microsoft.web.webview2.wpf.webview2)
* [See also](../index.md#see-also) in _Introduction to Microsoft Edge WebView2_.
