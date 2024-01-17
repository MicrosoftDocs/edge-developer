---
title: Printing from WebView2 apps
description: How to print a webpage to a printer, PDF file, or PDF stream in a WebView2 app.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 02/17/2023
---
# Printing from WebView2 apps

There are several different ways to print a webpage in WebView2, which give you various levels of ease of implementation and customizing.

| Method | Description |
|---|---|
| `ShowPrintUI` | Opens the WebView2 **Print Preview** dialog or the operating system's **Print** dialog. Easy to implement, minimal support for customizing. |
| `Print` | Silently prints the current top-level document in the WebView2 using optional programmatically specified print settings to a printer. You can use this to build your own Print Preview dialog or print experience. |
| `PrintToPdf` | Silently prints the current top-level document in the WebView2 to a PDF file. You can use this to build your own code to print the PDF file. |
| `PrintToPdfStream` | Silently prints the current top-level document in the WebView2 to a PDF stream. You can use this to build your own code to print the PDF. |


## The ShowPrintUI method to open a Print dialog

The `ShowPrintUI` method opens the WebView2 **Print Preview** dialog or the operating system's **Print** dialog, for the current top-level document in the WebView2 control. By using this approach, you can easily provide a familiar printing experience for users.

<!-- ------------------------------ -->

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2.ShowPrintUI Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.showprintui#microsoft-web-webview2-core-corewebview2-showprintui)
* [CoreWebView2.ShowPrintUI(printDialogKind) Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.showprintui#microsoft-web-webview2-core-corewebview2-showprintui(microsoft-web-webview2-core-corewebview2printdialogkind))
* [CoreWebView2PrintDialogKind Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2printdialogkind)

<!-- ------------------------------ -->

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2.ShowPrintUI Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#showprintui)
* [CoreWebView2PrintDialogKind Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2printdialogkind)


<!-- ------------------------------ -->

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2_16::ShowPrintUI method](/microsoft-edge/webview2/reference/win32/icorewebview2_16#showprintui)
* [COREWEBVIEW2_PRINT_DIALOG_KIND enum](/microsoft-edge/webview2/reference/win32/icorewebview2_16#corewebview2_print_dialog_kind)


---

<!-- end of tab-set -->

#### Example: The ShowPrintUI method to open a Print dialog

This example shows the user a **Print** dialog.
* If `printDialog` is `CoreWebView2PrintDialogKind.Browser`, opens the browser's Print Preview dialog.
* If `printDialog` is `CoreWebView2PrintDialogKind.System`, opens a system Print dialog.


<!-- ------------------------------ -->

##### [.NET/C#](#tab/dotnetcsharp)

```csharp
void ShowPrintUI(object target, ExecutedRoutedEventArgs e)
{
  string printDialog = e.Parameter.ToString();
  if (printDialog == "Browser")
  {
    // Opens the browser's Print Preview dialog.
    webView.CoreWebView2.ShowPrintUI();
  }
  else
  {
    // Opens a system's Print dialog.
    webView.CoreWebView2.ShowPrintUI(CoreWebView2PrintDialogKind.System);
  }
}
```


<!-- ------------------------------ -->

##### [WinRT/C#](#tab/winrtcsharp)

```csharp
void ShowPrintUI(CoreWebView2PrintDialogKind printDialogKind)
{
  WebView2.CoreWebView2.ShowPrintUI(printDialogKind);
}
```


<!-- ------------------------------ -->

##### [Win32/C++](#tab/win32cpp)

```cpp
bool AppWindow::ShowPrintUI(COREWEBVIEW2_PRINT_DIALOG_KIND printDialogKind)
{
  wil::com_ptr<ICoreWebView2_16> webView2_16;
  CHECK_FAILURE(m_webView->QueryInterface(IID_PPV_ARGS(&webView2_16)));
  CHECK_FAILURE(webView2_16->ShowPrintUI(printDialogKind));
  return true;
}
```

---

<!-- end of tab-set -->


<!-- ====================================================================== -->
## The Print method to customize printing

The `Print` method silently prints the current top-level document in the WebView2 control by using optional, programmatically specified print settings. If you want to build your own Print Preview dialog, or build your own print experience, you can use this method. This API consists of an asynchronous `Print` method and a `PrintSettings` object.


<!-- ------------------------------ -->

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2.PrintAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.printasync#microsoft-web-webview2-core-corewebview2-printasync)
* [CoreWebView2Environment.CreatePrintSettings Method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createprintsettings)
* [CoreWebView2PrintSettings Class](/dotnet/api/microsoft.web.webview2.core.corewebview2printsettings)
* [CoreWebView2PrintStatus Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2printstatus)

<!-- ------------------------------ -->

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2.PrintAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#PrintAsync)
* [CoreWebView2Environment.CreatePrintSettings Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment#createprintsettings)
* [CoreWebView2PrintSettings Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2printsettings)
* [CoreWebView2PrintStatus Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2printstatus)


<!-- ------------------------------ -->

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2_16::Print method](/microsoft-edge/webview2/reference/win32/icorewebview2_16#print)
* [ICoreWebView2Environment6::CreatePrintSettings method](/microsoft-edge/webview2/reference/win32/icorewebview2environment6#createprintsettings)
* [ICoreWebView2PrintSettings interface](/microsoft-edge/webview2/reference/win32/icorewebview2printsettings)
* [ICoreWebView2PrintSettings2 interface](/microsoft-edge/webview2/reference/win32/icorewebview2printsettings2)
* [COREWEBVIEW2_PRINT_STATUS enum](/microsoft-edge/webview2/reference/win32/icorewebview2_16#corewebview2_print_status)

---

<!-- end of tab-set -->

#### Example 1: The Print method without a dialog, using default print settings

This example prints the current webpage to the default printer, using the default print settings, without opening a **Print** dialog.


<!-- ------------------------------ -->

##### [.NET/C#](#tab/dotnetcsharp)

```csharp
async void PrintToDefaultPrinter ()
{
  string title = webView.CoreWebView2.DocumentTitle;
  try
  {
    // Prints the current webpage, using the default printer and page settings.
    // Passing null for PrintSettings causes the default print settings to be used.
    CoreWebView2PrintStatus printStatus = await webView.CoreWebView2.PrintAsync(null);

    if (printStatus == CoreWebView2PrintStatus.Succeeded)
    {
      MessageBox.Show(this, "Printing " + title + " document to printer succeeded", "Print to default printer");
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


<!-- ------------------------------ -->

##### [WinRT/C#](#tab/winrtcsharp)

```csharp
async void PrintToDefaultPrinter(object sender, RoutedEventArgs e)
{
  string title = WebView2.CoreWebView2.DocumentTitle;
  MessageDialog dialog = new MessageDialog("", "Print");

  try
  {
    // Prints the current webpage by using the default printer and page settings.
    // Passing null for PrintSettings causes the default print settings to be used.
    CoreWebView2PrintStatus printStatus = await WebView2.CoreWebView2.PrintAsync(null);

    if (printStatus == CoreWebView2PrintStatus.Succeeded)
    {
      dialog = new MessageDialog("Printing " + title +
                                 " document to printer succeeded", "Print");
    }
    else if (printStatus == CoreWebView2PrintStatus.PrinterUnavailable)
    {
      dialog = new MessageDialog("Printer is not available, offline or error state", "Print");
    }
    else
    {
      dialog = new MessageDialog("Printing " + title +
                                    " document to printer is failed", "Print");
    }
  }
  catch (Exception)
  {
    dialog = new MessageDialog("Printing " + title +
                                      " document already in progress", "Print");
  }
  await dialog.ShowAsync();
}
```

<!-- ------------------------------ -->

##### [Win32/C++](#tab/win32cpp)

```cpp
bool AppWindow::PrintToDefaultPrinter()
{
  wil::com_ptr<ICoreWebView2_16> webView2_16;
  CHECK_FAILURE(m_webView->QueryInterface(IID_PPV_ARGS(&webView2_16)));

  wil::unique_cotaskmem_string title;
  CHECK_FAILURE(m_webView->get_DocumentTitle(&title));

  // Prints the current webpage, using the default printer and page settings.
  // Passing nullptr for ICoreWebView2PrintSettings causes the default print settings to be used.
  CHECK_FAILURE(webView2_16->Print(
      nullptr, Callback<ICoreWebView2PrintCompletedHandler>(
          [title = std::move(title), this](HRESULT errorCode,
                                   COREWEBVIEW2_PRINT_STATUS printStatus) -> HRESULT
          {
            std::wstring message = L"";
            if (errorCode == S_OK && printStatus == COREWEBVIEW2_PRINT_STATUS_SUCCEEDED)
            {
              message = L"Printing " + std::wstring(title.get()) +
                              L" document to printer succeeded";
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

---

<!-- end of tab-set -->

#### Example 2: The Print method to print to a specified printer, using custom print settings

This example prints the current webpage to a specific printer, using the specified settings.


<!-- ------------------------------ -->

##### [.NET/C#](#tab/dotnetcsharp)

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
      MessageBox.Show(this, "Printing " + title + " document to printer succeeded", "Print to printer");
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

// Gets the printer name by displaying the list of installed printers to the user and
// returns the name of the user's selected printer.
string GetPrinterName()
{
  // Use GetPrintQueues() of LocalPrintServer from System.Printing to get the list of locally installed printers.
  // Display the list of printers to the user and get the desired printer to use.
  // Return the name of the selected printer.
}

// Gets the print settings for the selected printer.
// You can also get the capabilities from the native printer API, and display them 
// to the user to get the print settings for the current webpage and for the selected printer.
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


<!-- ------------------------------ -->

##### [WinRT/C#](#tab/winrtcsharp)

```csharp
async void PrintToPrinter(object sender, RoutedEventArgs e)
{
  string printerName = GetPrinterName();
  CoreWebView2PrintSettings printSettings = GetSelectedPrinterPrintSettings(printerName);
  string title = WebView2.CoreWebView2.DocumentTitle;
  MessageDialog dialog = new MessageDialog("", "Print");

  try
  {
    CoreWebView2PrintStatus printStatus =
                          await WebView2.CoreWebView2.PrintAsync(printSettings);

    if (printStatus == CoreWebView2PrintStatus.Succeeded)
    {
      dialog = new MessageDialog("Printing " + title +
                        " document to printer succeeded", "Print to printer");
    }
    else if (printStatus == CoreWebView2PrintStatus.PrinterUnavailable)
    {
      dialog = new MessageDialog("Selected printer is not found, not available, " +
                                  "offline or error state", "Print to printer");
    }
    else
    {
      dialog = new MessageDialog("Printing " + title +
                                     " document to printer is failed", "Print");
    }
  }
  catch (ArgumentException)
  {
    dialog = new MessageDialog("Invalid settings provided for the specified printer", "Print");
  }
  catch (Exception)
  {
     dialog = new MessageDialog("Printing " + title + " document already in progress", "Print");
  }
  await dialog.ShowAsync();
}

// Gets the printer name by displaying the list of installed printers to the user, 
// and returns the user-selected printer.
string GetPrinterName()
{
  // Use DeviceInformation.FindAllAsync to get the list of local printers with AQS as:
  // System.Devices.HardwareIds:~~"PRINTENUM\LocalPrintQueue"
  // Display the list of printers to the user, and get the desired printer to use.
  // Return the name of the user's selected printer.
}

// Gets print settings for the selected printer.
// You can also get the capabilities from the printer APIs, and display them to the 
// user to get the print settings for the current webpage and for the selected printer.
CoreWebView2PrintSettings GetSelectedPrinterPrintSettings(string printerName)
{
  CoreWebView2PrintSettings printSettings = null;
  printSettings = WebView2.CoreWebView2.Environment.CreatePrintSettings();
  printSettings.ShouldPrintBackgrounds = true;
  printSettings.ShouldPrintHeaderAndFooter = true;

  return printSettings;

  // or
  // Get the print ticket and use PrintTicketCapabilities from
  // Windows.Graphics.Printing.PrintTicket to get the capabilities of the selected printer.
  // Display the printer capabilities to the user, along with the page settings.
  // Return the user-selected settings.
}
```


<!-- ------------------------------ -->

##### [Win32/C++](#tab/win32cpp)

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

// Gets the printer name by displaying the list of installed printers to the user, 
// and returns the user-selected printer.
std::wstring AppWindow::GetPrinterName()
{
  // Use the Win32 EnumPrinters function to get the list of locally installed printers.
  // Display the list of printers to the user and get the user-selected printer to use.
  // Return the user-selected printer name.
}

// Gets the print settings for the selected printer.
// You can also get the capabilities from the native printer API, and display them 
// to the user to get the print settings for the current webpage and for the 
// selected printer.
SamplePrintSettings AppWindow::GetSelectedPrinterPrintSettings(std::wstring printerName)
{
  SamplePrintSettings samplePrintSettings;
  samplePrintSettings.PrintBackgrounds = true;
  samplePrintSettings.HeaderAndFooter = true;

  return samplePrintSettings;

  // Or
  // Use the Win32 DeviceCapabilitiesA function to get the capabilities of the selected printer.
  // Display the printer capabilities to the user, along with the page settings.
  // Return the user-selected settings.
}

bool AppWindow::PrintToPrinter()
{
  std::wstring printerName = GetPrinterName();
  // The host app's custom print settings, based on the user selection.
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
          [title = std::move(title), this](HRESULT errorCode,
                                   COREWEBVIEW2_PRINT_STATUS printStatus) -> HRESULT
          {
            std::wstring message = L"";
            if (errorCode == S_OK && printStatus == COREWEBVIEW2_PRINT_STATUS_SUCCEEDED)
            {
              message = L"Printing " + std::wstring(title.get()) +
                              L" document to printer succeeded";
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

---

<!-- end of tab-set -->


<!-- ====================================================================== -->
## The PrintToPdf method to print to a PDF file, using custom print settings

Silently prints the current top-level document in the WebView2 control to a PDF file. To completely control how printing is performed, you can print to a PDF and then build your own code to print the PDF.

This API consists of an asynchronous `PrintToPdf` method and a `PrintSettings` object. The `PrintToPdf` method accepts a path that the PDF file will be saved to.

<!-- ------------------------------ -->

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2.PrintToPdfAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.printtopdfasync#microsoft-web-webview2-core-corewebview2-printtopdfasync)
* [CoreWebView2Environment.CreatePrintSettings Method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createprintsettings)
* [CoreWebView2PrintSettings Class](/dotnet/api/microsoft.web.webview2.core.corewebview2printsettings)

<!-- ------------------------------ -->

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2.PrintToPdfAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#PrintToPdfAsync)
* [CoreWebView2Environment.CreatePrintSettings Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment#createprintsettings)
* [CoreWebView2PrintSettings Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2printsettings)

<!-- ------------------------------ -->


##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2_7::PrintToPdf method](/microsoft-edge/webview2/reference/win32/icorewebview2_7#printtopdf)
* [ICoreWebView2Environment6::CreatePrintSettings method](/microsoft-edge/webview2/reference/win32/icorewebview2environment6#createprintsettings)
* [ICoreWebView2PrintSettings interface](/microsoft-edge/webview2/reference/win32/icorewebview2printsettings)

---

<!-- end of tab-set -->

#### Example: The PrintToPdf method to print to a PDF file, using custom print settings

This example prints the current webpage to a PDF file, using the default path and settings.

<!-- ------------------------------ -->

##### [.NET/C#](#tab/dotnetcsharp)

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
    saveFileDialog.Filter = "PDF Files|*.pdf";
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


<!-- ------------------------------ -->

##### [WinRT/C#](#tab/winrtcsharp)

```csharp
async void PrintToPdf(bool enableLandscape)
{
  MessageDialog dialog = new MessageDialog("", "Print To PDF");
  if (_isPrintToPdfInProgress)
  {
    dialog = new MessageDialog("Print to PDF in progress", "Print To PDF");
    return;
  }
  CoreWebView2PrintSettings printSettings = null;
  if (enableLandscape)
  {
    printSettings = WebView2.CoreWebView2.Environment.CreatePrintSettings();
    printSettings.Orientation = CoreWebView2PrintOrientation.Landscape;
  }

  var savePicker = new Windows.Storage.Pickers.FileSavePicker();
  savePicker.FileTypeChoices.Add("PDF Files", new List<string>() { ".pdf" });
  savePicker.SuggestedFileName = "WebView2_PrintedPdf";

  StorageFile file = await savePicker.PickSaveFileAsync();
  if (file != null)
  {
    _isPrintToPdfInProgress = true;
    bool isSuccessful = await WebView2.CoreWebView2.PrintToPdfAsync(file.Path, printSettings);
    _isPrintToPdfInProgress = false;
    string message = (isSuccessful) ? "Print to PDF succeeded" : "Print to PDF failed";
    dialog = new MessageDialog(message, "Print To PDF");
  }

  await dialog.ShowAsync();
}
```


<!-- ------------------------------ -->

##### [Win32/C++](#tab/win32cpp)

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

---

<!-- end of tab-set -->


<!-- ====================================================================== -->
## The PrintToPdfStream method to print to a PDF stream, using custom print settings

Silently prints the current top-level document in the WebView2 control to a PDF stream. To completely control how printing is performed, you can print to a PDF and then build your own code to print the PDF. This API consists of an asynchronous `PrintToPdfStream` method and a `PrintSettings` object.


<!-- ------------------------------ -->

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2.PrintToPdfStreamAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.printtopdfstreamasync#microsoft-web-webview2-core-corewebview2-printtopdfstreamasync)
* [CoreWebView2Environment.CreatePrintSettings Method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createprintsettings)
* [CoreWebView2PrintSettings Class](/dotnet/api/microsoft.web.webview2.core.corewebview2printsettings)

<!-- ------------------------------ -->

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2.PrintToPdfStreamAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#PrintToPdfStreamAsync)
* [CoreWebView2Environment.CreatePrintSettings Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment#createprintsettings)
* [CoreWebView2PrintSettings Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2printsettings)


<!-- ------------------------------ -->

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2_16::PrintToPdfStream method](/microsoft-edge/webview2/reference/win32/icorewebview2_16#printtopdfstream)
* [ICoreWebView2Environment6::CreatePrintSettings method](/microsoft-edge/webview2/reference/win32/icorewebview2environment6#createprintsettings)
* [ICoreWebView2PrintSettings2 interface](/microsoft-edge/webview2/reference/win32/icorewebview2printsettings2)

---

<!-- end of tab-set -->

#### Example: The PrintToPdfStream method to print to a PDF stream, using custom print settings

This example prints the PDF data of the current webpage to a stream.


<!-- ------------------------------ -->

##### [.NET/C#](#tab/dotnetcsharp)

```csharp
async void PrintToPdfStream()
{
  try
  {
    string title = webView.CoreWebView2.DocumentTitle;

    // Passing null for PrintSettings causes the default print settings to be used.
    System.IO.Stream stream = await webView.CoreWebView2.PrintToPdfStreamAsync(null);
    DisplayPdfDataInPrintDialog(stream);

    MessageBox.Show(this, "Printing " + title + " document to PDF Stream " +
                ((stream != null) ? "succeeded" : "failed"), "Print To PDF Stream");
  }
  catch(Exception exception)
  {
    MessageBox.Show(this, "Printing to PDF Stream failed: " + exception.Message, "Print to PDF Stream");
  }
}

// Function to display current webpage PDF data in a custom Print Preview dialog.
void DisplayPdfDataInPrintDialog(Stream pdfData)
{
  // You can display the printable PDF data to the user in a custom Print Preview dialog.
}
```


<!-- ------------------------------ -->

##### [WinRT/C#](#tab/winrtcsharp)

```csharp
async void PrintToPdfStream(object sender, RoutedEventArgs e)
{
  MessageDialog dialog = new MessageDialog("", "Print to PDF Stream");
  try
  {
    string title = WebView2.CoreWebView2.DocumentTitle;

    // Passing null for PrintSettings causes the default print settings to be used.
    Windows.Storage.Streams.IRandomAccessStream stream =
                        await WebView2.CoreWebView2.PrintToPdfStreamAsync(null);
    DisplayPdfDataInPrintDialog(stream);
    dialog = new MessageDialog("Printing" + title + " document to PDF Stream "
                           + ((stream != null) ? "succeeded" : "failed"), "Print To PDF Stream");
  }
  catch (Exception exception)
  {
    dialog = new MessageDialog("Printing to PDF Stream failed: " + exception.Message,
              "Print to PDF Stream");
  }
  await dialog.ShowAsync();
}

// Function to display the current page PDF data in a custom Print Preview dialog.
void DisplayPdfDataInPrintDialog(Windows.Storage.Streams.IRandomAccessStream pdfData)
{
  // You can display the printable PDF data to the user in a custom Print Preview dialog.
}
```


<!-- ------------------------------ -->


##### [Win32/C++](#tab/win32cpp)

```cpp
static void DisplayPdfDataInPrintDialog(IStream* pdfData)
{
  // You can display the printable PDF data to the user in a custom Print Preview dialog.
}

bool AppWindow::PrintToPdfStream()
{
  wil::com_ptr<ICoreWebView2_16> webView2_16;
  CHECK_FAILURE(m_webView->QueryInterface(IID_PPV_ARGS(&webView2_16)));

  wil::unique_cotaskmem_string title;
  CHECK_FAILURE(m_webView->get_DocumentTitle(&title));

  // Passing nullptr for ICoreWebView2PrintSettings causes the default print settings to be used.
  CHECK_FAILURE(
      webView2_16->PrintToPdfStream(
          nullptr,
          Callback<ICoreWebView2PrintToPdfStreamCompletedHandler>(
              [title = std::move(title), this](HRESULT errorCode, IStream* pdfData) -> HRESULT
              {
                DisplayPdfDataInPrintDialog(pdfData);
                std::wstring message = L"Printing " + std::wstring(title.get()) +
                                       L" document to PDF Stream " +
                                       ((errorCode == S_OK && pdfData != nullptr) ? L"succeeded" : L"failed");

                AsyncMessageBox(message, L"Print to PDF Stream");

                return S_OK;
              })
              .Get()));
  return true;
}
```

---

<!-- end of tab-set -->


<!-- ====================================================================== -->
## See also

* [Printing](../concepts/overview-features-apis.md#printing) in _Overview of WebView2 features and APIs_.
* [Get started with WebView2](../get-started/get-started.md)
* [WebView2Samples repo](https://github.com/MicrosoftEdge/WebView2Samples) - a comprehensive example of WebView2 capabilities.
* [WebView2 API reference](/dotnet/api/microsoft.web.webview2.wpf.webview2)
* [Introduction to Microsoft Edge WebView2](../index.md)
