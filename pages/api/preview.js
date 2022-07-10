export default function previewHandler(req, res) {
  res.setPreviewData({});
  res.redirect(req.query.route);
}
