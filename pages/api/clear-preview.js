export default function previewHandler(req, res) {
  res.clearPreviewData();
  res.end("Preview mode is over");
}
